# Status

Last reviewed: 2026-11-20 (github-audit pass 02, docs only; nothing was run).

## What works

- The course material reads as complete for lessons 1 to 6: a README per lesson and a script for each network.
- Unknown whether any script still runs. Not tested.

## What's broken or unknown

- Lessons 7 (`bitcoin.js`) and 8 (`index.js`) are empty files.
- `lessons/6-write-payments-to-queue/dogcoin-worker.js` and `lessons/4-send-payments/ripple-trustines.js` have typos in their names. Left alone to keep links stable.
- `clients/ripple.js` and `clients/dogecoin.js` load `config.json` with their own `nconf` call instead of `environment.js`, so the defaults there do not apply to them. The `RIPPLE.host` default is also lower case while `clients/ripple.js` reads `HOST`. **(inference)** `config.json` must set `RIPPLE.HOST` and `RIPPLE.ACCOUNT` or the Ripple client gets `undefined`.
- Lesson 6 requires `node-resque`, which is missing from `package.json`.
- `clients/ripple.js` and `clients/http.js` set `NODE_TLS_REJECT_UNAUTHORIZED = "0"`, which turns off TLS certificate checks. Fine for a throwaway classroom, not for real funds.
- A vim swap file, `clients/.bitcoin.js.swp`, is tracked. `config.json` is tracked although `.gitignore` lists it. It was added empty in the first commit and has never changed, so no credentials are in its history.
- The lesson 1 README contains a sample curl command with a server IP and placeholder `user:pass`. No secrets were seen in this review.
- The 2014 dependencies are very likely outdated and may have known vulnerabilities (not checked).

## What's next

Nothing is planned. Possible: fill in lessons 7 and 8, or archive as a finished course. Archiving is Steven's call.

## Not yet from the standard

- CONTRIBUTING and SECURITY
- `.editorconfig`
- `.github` issue and PR templates
- Dependabot
- `ci.yml` with gitleaks
- Rename default branch `master` to `main`
- CloudEvents catalog
- Product ONE-PAGER

LICENSE: added in this PR because `package.json` already declares ISC.
