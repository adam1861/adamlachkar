# Portfolio Studio

The hidden admin interface lives at `/admin/`. It edits `data/content.json`, then publishes changes through protected API routes.

## Environment Variables

Set these on your deployment provider:

- `ADMIN_USERNAME`: your admin username.
- `ADMIN_PASSWORD_HASH`: generated with `npm run hash-password`.
- `ADMIN_SESSION_SECRET`: a random string with at least 32 characters.
- `GITHUB_TOKEN`: a fine-grained GitHub token with contents read/write access to this repo.
- `GITHUB_REPO`: repo in `owner/name` format.
- `GITHUB_BRANCH`: usually `main`.

For local-only testing, you can use `ADMIN_PASSWORD` instead of `ADMIN_PASSWORD_HASH`, but production should use the hash.

## Security Notes

- The admin page has `noindex, nofollow`, but the real protection is the backend login.
- Session cookies are `HttpOnly`, `SameSite=Lax`, and `Secure` outside local development.
- Mutating API routes reject requests with a mismatched `Origin` header.
- GitHub tokens are only read by server-side API routes. They are never sent to browser JavaScript.
- Uploads are limited to PDF and common image formats, with a 4.5MB decoded size limit.

## Publishing Flow

When `GITHUB_TOKEN` and `GITHUB_REPO` are configured, saving in the studio commits `data/content.json` or uploaded assets to GitHub. If the site is deployed from GitHub, that commit should trigger a normal redeploy.
