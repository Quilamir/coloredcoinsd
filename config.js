var config = {
    testnet: true,
    google_api_key: "AIzaSyBJfxobLSO_IM9tI1ATWpOelVInNuH1kBM",
    machineurl: "http://api.coloredcoins.org",
    useS3: true,
    bitcoind: {
          host: 'testnet.api.colu.co',
          port: 80,
          user: 'admin',
          pass: '9lpcjZpv221j47zF',
          path: '/rpc',
          timeout: 30000
    },
    blockexplorer: {
      url: "http://testnet.elasticbeanstalk.com"
    },
    torrentServer: {
      url:"http://dev.metadata.coloredcoins.org"
    },
    analytics: {
     accountId: ""
    },
    minfee: 1000,
    writemultisig: true,
    mindustvalue: 600,
    mindustvaluemultisig: 700,
    feePerKb: 1000,
    checkFinanaceValidty: true
}


function module_exists( name ) {
  try { return require.resolve( name ) }
  catch( e ) { return false }
}

if(module_exists('./config-local'))
  module.exports = require('./config-local')
else {
  config.blockexplorer.url = process.env.BLOCKEXPLORER_URL || config.blockexplorer.url
  config.machineurl = process.env.MACHINEURL || config.machineurl
  config.bitcoind.host = process.env.BITCOIND_HOST || config.bitcoind.host
  config.bitcoind.port = process.env.BITCOIND_PORT || config.bitcoind.port
  config.bitcoind.user = process.env.BITCOIND_USER || config.bitcoind.user
  config.bitcoind.pass = process.env.BITCOIND_PASS || config.bitcoind.pass
  config.bitcoind.path = process.env.BITCOIND_PATH || config.bitcoind.path
  config.torrentServer.url = process.env.TORRENT_SERVER_URL || config.torrentServer.url
  config.analytics.accountId = process.env.ANALYTICS_ACCOUNTID || config.analytics.accountId
  config.testnet =  process.env.TESTNET || config.testnet
  config.torrentServer.token =  process.env.TORRENT_SERVER_TOKEN || config.torrentServer.token
  config.minfee = parseInt(process.env.MINFEE || '' + config.minfee) 
  config.mindustvalue = parseInt(process.env.MINDUSTVALUE || '' + config.mindustvalue)
  config.mindustvaluemultisig = parseInt(process.env.MINDUSTVALUEMULTISIG || '' + config.mindustvaluemultisig)
  config.feePerKb = parseInt(process.env.FEEPERKB || '' + config.feePerKb)

  module.exports = config;
}
