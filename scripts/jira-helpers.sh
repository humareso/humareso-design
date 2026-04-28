#!/usr/bin/env bash
# Jira REST API helpers for CI/CD automation
#
# Required env vars: JIRA_API_TOKEN, JIRA_EMAIL
# Optional: JIRA_BASE_URL (defaults to https://humareso.atlassian.net)
#
# Usage:
#   source scripts/jira-helpers.sh
#   jira_get_status "HTS-123"
#   jira_transition "HTS-123" "In Progress"
#   jira_comment "HTS-123" "Branch created: feature/HTS-123"

JIRA_BASE_URL="${JIRA_BASE_URL:-https://humareso.atlassian.net}"
_JIRA_AUTH_CACHE=""

_jira_auth() {
  if [ -z "$_JIRA_AUTH_CACHE" ]; then
    _JIRA_AUTH_CACHE="Basic $(printf '%s' "${JIRA_EMAIL}:${JIRA_API_TOKEN}" | base64 | tr -d '\n')"
  fi
  echo "$_JIRA_AUTH_CACHE"
}

jira_get_status() {
  local ticket=$1
  local response
  response=$(curl -sf \
    -H "Authorization: $(_jira_auth)" \
    "${JIRA_BASE_URL}/rest/api/3/issue/${ticket}?fields=status")

  if [ $? -ne 0 ]; then
    echo "❌ Failed to fetch $ticket"
    return 1
  fi

  echo "$response" | jq -r '.fields.status.name'
}

jira_transition() {
  local ticket=$1 target=$2
  local auth
  auth=$(_jira_auth)

  # Get available transitions
  local transitions_json
  transitions_json=$(curl -sf -H "Authorization: $auth" \
    "${JIRA_BASE_URL}/rest/api/3/issue/${ticket}/transitions")

  if [ $? -ne 0 ]; then
    echo "❌ Failed to fetch transitions for $ticket"
    return 1
  fi

  # Find transition ID by exact name match
  local tid
  tid=$(echo "$transitions_json" | jq -r --arg name "$target" \
    '.transitions[] | select(.name == $name) | .id' | head -1)

  if [ -z "$tid" ]; then
    local available
    available=$(echo "$transitions_json" | jq -r '[.transitions[].name] | join(", ")')
    echo "⚠️  No '$target' transition for $ticket. Available: [$available]"
    return 1
  fi

  # Execute transition
  local http_code
  http_code=$(curl -s -o /dev/null -w '%{http_code}' \
    -X POST -H "Authorization: $auth" -H "Content-Type: application/json" \
    "${JIRA_BASE_URL}/rest/api/3/issue/${ticket}/transitions" \
    -d "{\"transition\":{\"id\":\"${tid}\"}}")

  if [ "$http_code" = "204" ]; then
    echo "✅ $ticket → $target"
    return 0
  else
    echo "❌ $ticket → $target failed (HTTP $http_code)"
    return 1
  fi
}

jira_comment() {
  local ticket=$1 text=$2
  local auth
  auth=$(_jira_auth)

  # Build JSON safely with jq to handle special characters
  local payload
  payload=$(jq -n --arg body "$text" '{body: $body}')

  local http_code
  http_code=$(curl -s -o /dev/null -w '%{http_code}' \
    -X POST -H "Authorization: $auth" -H "Content-Type: application/json" \
    "${JIRA_BASE_URL}/rest/api/2/issue/${ticket}/comment" \
    -d "$payload")

  if [ "$http_code" = "201" ]; then
    echo "💬 $ticket: comment added"
  else
    echo "⚠️  $ticket: comment failed (HTTP $http_code)"
  fi
}

# Extract HTS-XXX ticket IDs from stdin
extract_tickets() {
  grep -oE '(HTS)-[0-9]+' | sort -u | tr '\n' ' ' | xargs
}
