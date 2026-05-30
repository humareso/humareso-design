/**
 * Centralized avatar helpers.
 *
 * Humareso Auth owns the resolved avatar URL for every user. Platforms
 * consume it from /api/settings/profile (Auth) or the `picture` claim on
 * their access token. The pattern is the same everywhere:
 *
 *   1. Pull avatarUrl + avatarSource from Auth (or read JWT `picture`)
 *   2. If url is non-empty, render <img src={url} />
 *   3. Otherwise render a circular tile with initials
 *
 * This module supplies the pure logic so every platform agrees on
 * initials derivation, contrast color, and JWT extraction. React
 * components live in the consuming app (e.g. admin's <Avatar />) so this
 * library stays framework-agnostic.
 */

export interface AvatarSubject {
  avatarUrl?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
}

/** Two-letter (or one-letter) initials from name, falling back to email. */
export function computeInitials(subject: AvatarSubject): string {
  const first = (subject.firstName || '').trim();
  const last = (subject.lastName || '').trim();
  if (first || last) {
    return `${first[0] || ''}${last[0] || ''}`.toUpperCase() || '?';
  }
  const email = (subject.email || '').trim();
  if (email) {
    return email[0]!.toUpperCase();
  }
  return '?';
}

/** Decoded picture claim shape. */
export interface AvatarJwtClaims {
  picture?: string;
  picture_source?: 'sso' | 'upload' | 'gravatar';
}

/**
 * Pull picture / picture_source out of a JWT payload. Accepts the decoded
 * object; callers do JWT parsing themselves so we don't pull in jose here.
 */
export function avatarFromJwt(claims: AvatarJwtClaims): {
  avatarUrl: string | null;
  avatarSource: 'sso' | 'upload' | 'gravatar' | null;
} {
  if (claims.picture) {
    return {
      avatarUrl: claims.picture,
      avatarSource: claims.picture_source ?? null,
    };
  }
  return { avatarUrl: null, avatarSource: null };
}

/**
 * Stable HSL background color for the initials tile. Seeded from email so a
 * given user always lands on the same color across the fleet — useful when
 * the avatarUrl is missing and we want visual continuity between admin,
 * engage, and leave.
 */
export function initialsBackgroundColor(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 55%, 45%)`;
}
