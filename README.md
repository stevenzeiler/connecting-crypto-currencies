# Connecting Crypto Currencies with Node.js

*Interact with Bitcoin, Ripple, and Dogecoin*

> **Status: finished and dormant since October 2014.** A fork-along Node.js course written 2014-10-22 to 2014-10-24, in Steven's 2014 Ripple gateway era. Lessons 7 and 8 are empty files. The dependencies are from 2014 and the lessons have not been run on a current toolchain, so treat the code as a historical teaching record.

The purpose of this course is to learn to interact with
three crypto-money networks directly with their
open APIs. Follow along by forking this repository.

For each of the three crypto-money you will gain
the following abilities, all using Node.js:

- Generate new payment addresses
- List payments history
- Send payments from an account 
- Monitor for payments to the address
- Record incoming payments to a queue
- Send outgoing payments from a queue

## What is in it

- `lessons/1-...` to `lessons/8-...`: one folder per lesson, with a script per network (`bitcoin.js`, `dogecoin.js`, `ripple.js`) and a README for lessons 1 to 6.
- `clients/`: shared client setup for bitcoind, dogecoind, Ripple REST and plain HTTP.
- `environment.js`: loads configuration with `nconf`.

| Lesson | Topic | State |
|---|---|---|
| 1 | Generate a new address | scripts and README |
| 2 | List account balances | scripts and README |
| 3 | List payments history | scripts and README |
| 4 | Send payments (includes a Ripple trust-lines example) | scripts and README |
| 5 | Monitor incoming payments | scripts and README |
| 6 | Write payments to a queue | queuer and worker scripts and README |
| 7 | Send payments from the queue | empty file (`bitcoin.js`) |
| 8 | Send bitcoin or dogecoin via Ripple | empty file (`index.js`) |

## Install

```sh
npm install
```

You need Node.js and a local Redis for lessons 6 and later. Each lesson also needs a running bitcoind, dogecoind or Ripple REST server that you can reach. The dependencies are pinned to 2014 ranges (`nconf`, `superagent`, `bitcoin`, `ripple-rest-client`, `node-dogecoin`, `blockchain-account-monitor`, `ripple-account-monitor`). Lesson 6 also needs `node-resque`, which is not listed in `package.json`, so install it yourself (`npm install node-resque`).

## Usage

Run a lesson script directly, for example the one the lesson 1 README uses:

```sh
node lessons/1-generate-new-address/bitcoin.js
```

## Configuration

Settings come from `config.json` (loaded by `environment.js` with `nconf`). The scripts read these top-level sections:

- `BITCOIN`: connection settings for the `bitcoin` client (bitcoind RPC)
- `DOGECOIN`: connection settings for the `node-dogecoin` client
- `RIPPLE`: `HOST` and `ACCOUNT` for Ripple REST
- `REDIS`: defaults are in `environment.js` (host, port, database, namespace, password)

There are no environment variables. Never commit real credentials. The `.gitignore` lists `config.json`, but see [docs/STATUS.md](docs/STATUS.md): an empty `config.json` is already tracked.

## How it works

Each lesson talks to a coin's own open interface: bitcoind and dogecoind over JSON-RPC, and Ripple through Ripple REST. Later lessons add the account monitors and a Resque-style queue on Redis so that incoming payments are queued and outgoing payments are sent by a worker.

## Status

See [docs/STATUS.md](docs/STATUS.md). Agents should read [AGENTS.md](AGENTS.md).

## License

ISC, as declared in `package.json`. See [LICENSE](LICENSE).

## Resources

### Bitcoin

- running bitcoind on ubuntu: https://degreesofzero.com/article/installing-bitcoind-on-ubuntu.html
- block explorer: https://blockexplorer.com/q/getblockcount
- using the bitcoind command line interface
- using the bitcoind rpc interface: https://en.bitcoin.it/wiki/Original_Bitcoin_client/API_calls_list
  - ndoe-bitcoin javascript library for interacting with bitcoind: https://github.com/freewil/node-bitcoin
  - generating new receive addresses: https://github.com/freewil/node-bitcoin
  - monitoring for payments made to receive addresses: https://github.com/stevenzeiler/blockchain-account-monitor
  - sending payments from the bitcoind wallet: https://github.com/freewil/node-bitcoin

### Ripple

- running Ripple REST on ubuntu: https://github.com/ripple/ripple-rest/#installing-and-running
- using the Ripple REST interface: http://dev.ripple.com/ripple-rest.html
  - generating new ripple accounts: http://dev.ripple.com/ripple-rest.html#generate-account
  - funding new ripple accounts with XRP: http://dev.ripple.com/ripple-rest.html#submit-payment
  - monitoring for payments made to ripple accounts: https://github.com/stevenzeiler/ripple-account-monitor
  - connecting to a gateway and currency: http://dev.ripple.com/ripple-rest.html#granting-a-trustline
  - sending payments of currencies from a ripple account: http://dev.ripple.com/ripple-rest.html#prepare-payment

### Dogecoin

- running the dogecoind on ubuntu: http://b.agilob.net/such-address-many-dig-on-linux-wow/
- dogechain.info block explorer: https://dogechain.info/chain/Dogecoin
- using the dogecoin rpc interface: 
  - node.js dogecoin client: https://github.com/countable/node-dogecoin

### Resque

- Node.js Resque client implementation by Task Rabbit: https://github.com/taskrabbit/node-resque
- Resque home page: http://resquework.org/
- Redis home page: http://redis.io/

