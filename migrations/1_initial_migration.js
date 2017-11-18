var Migrations = artifacts.require("./Migrations.sol");
var mb = require('./../build/contracts/Migrations.json')
var utils = require('./../deployment_utils');



module.exports = async function(deployer) {

  var gas = await utils.estimateGas(web3, mb.bytecode);
  gas = gas + 10 * (gas - (gas%100))/100;
  console.log(gas);
  deployer.deploy(Migrations, { gas: gas });

};
