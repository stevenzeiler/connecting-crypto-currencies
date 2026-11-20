# AGENTS.md

Guidance for AI agents working in this repo. Humans: see [README.md](README.md).

## What this is

A finished, dormant 2014 Node.js course on driving bitcoind, dogecoind and Ripple REST. Baseline-tier docs only. Profile: `legacy`.

## Stack

- Node.js and npm, with 2014-era dependencies: `nconf ^0.6.9`, `superagent ^0.20.0`, `bitcoin ^2.2.0`, `ripple-rest-client ^1.10.2`, `node-dogecoin ^0.3.9`, `blockchain-account-monitor ^0.2.0`, `ripple-account-monitor ^2.0.0`. Needs a Node version from that era. Not verified on current Node.
- Redis and `node-resque` for lesson 6. `node-resque` is not declared in `package.json`.
- Live bitcoind, dogecoind or Ripple REST servers. The lessons cannot do anything without them.

## Layout

- `lessons/1-...` to `lessons/8-...`: per-network scripts, READMEs for 1 to 6. Lessons 7 and 8 are empty files.
- `clients/`: shared client modules. `environment.js`: `nconf` setup with defaults.
- `config.json`: local secrets file, git-ignored by intent (an empty one is tracked).
- `docs/STATUS.md`: current state.

## Commands

- Install: `npm install` (untested today; some 2014 packages may be gone or unbuildable)
- Run a lesson: `node lessons/<n>-<name>/<coin>.js`
- Test: none. `npm test` just prints an error and exits 1.

## Rules

- Add or update tests with every change.
- Never commit secrets. Keep RPC credentials in a local, untracked `config.json`.
- Use Conventional Commits.
- Keep `docs/STATUS.md` current.

## What agents may and may not do

- May: improve docs, fix typos in lesson READMEs, add tests, open PRs against `master`.
- May not, without Steven: archive the repo, publish it, rewrite history, change the license, or run lessons that send real payments.
