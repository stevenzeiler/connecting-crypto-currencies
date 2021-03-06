const blockchain = require('blockchain-account-monitor');

var config = require(__dirname+'/../../environment.js');
var bitcoin = config.get('BITCOIN');

const monitor = new blockchain.AccountMonitor({
  blockchainClient:  new blockchain.Client({
    host: bitcoin.host,
    port: bitcoin.port,
    user: bitcoin.user,
    pass: bitcoin.pass,
    confirmations: 1,
    type: 'bitcoin',
    https: false
  }),
  onBlock: function(block, next) {
    console.log('FOUND '+block.length+ ' transactions');
    console.log('block', block);

    setTimeout(next, 3000);
  },
  timeout: 1000
});

monitor.lastBlockHash = '';

monitor.start();

console.log('monitor', monitor);
