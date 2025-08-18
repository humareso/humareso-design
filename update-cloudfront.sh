#!/bin/bash
set -e

echo "🚀 Updating CloudFront distribution for smart routing..."

# Get current config
aws cloudfront get-distribution-config --id E29GXZ12E6YK67 --output json > cf-config.json

# Extract ETag
ETAG=$(jq -r '.ETag' cf-config.json)
echo "📋 Current ETag: $ETAG"

# Create updated config with alias
jq '.DistributionConfig.Aliases.Quantity = 1 | .DistributionConfig.Aliases.Items = ["cdn-hds.humareso.com"]' cf-config.json > cf-config-updated.json

# Update the distribution
echo "🔄 Updating CloudFront distribution..."
aws cloudfront update-distribution \
  --id E29GXZ12E6YK67 \
  --distribution-config file://cf-config-updated.json \
  --if-match "$ETAG"

echo "✅ CloudFront distribution updated successfully!"
echo "🌐 New alias: cdn-hds.humareso.com"
echo "⏳ This will take 5-10 minutes to deploy globally"

# Clean up temporary files
echo "🧹 Cleaning up temporary files..."
rm -f cf-config.json cf-config-updated.json

echo "✨ All done!"
