var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "";
module.exports = {
  networks : {
    development: {
      host: "localhost",
      port: "9545",
      network_id: "*"
    },
    ropsten: {
     provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"),
     network_id: 3
   }
  }
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
};
