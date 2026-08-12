# Frog Planter Web

Static web infrastructure for Frog Planter friend invitation links.

## Public invite format

Use:

`https://invite.frogplanter.com/?invite=TOKEN`

Example:

`https://invite.frogplanter.com/?invite=K7BD92XT`

This query-string format works well with a static GitHub Pages site because every invite
uses the existing root page rather than requiring one generated HTML file per invite token.

## Before production

Replace the placeholders in:

- `.well-known/assetlinks.json`
- `.well-known/apple-app-site-association`

Required values:

### Android
- Unity/Android application ID (package name)
- SHA-256 fingerprint of the production app signing certificate
- If Google Play App Signing is used, use the Play App Signing certificate fingerprint for production.

### iOS
- Apple Developer Team ID
- iOS Bundle ID

Do not put private keys, API secrets, Unity service credentials, or backend secrets in this repository.

## Backend behavior

The token in the URL should be opaque and generated server-side. The website should not
contain the inviter's Unity Player ID.

The Frog Planter client should:
1. Receive the HTTPS link.
2. Extract the `invite` query parameter.
3. Store it as a pending invite.
4. Finish Unity Authentication.
5. Redeem the token through the trusted Frog Planter backend / Cloud Code.
6. Send the friend request only after the server validates the token.
