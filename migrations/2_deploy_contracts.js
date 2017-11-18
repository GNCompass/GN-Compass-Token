var ConvertLib = artifacts.require("./ConvertLib.sol");
var SmartToken = artifacts.require("./SmartToken.sol");
var SmartTokenBuild = require('./../build/contracts/SmartToken.json');
var utils = require('./../deployment_utils');


module.exports = async function(deployer) {

  var gas = await utils.estimateGas(web3, SmartTokenBuild.bytecode);
  var gasLimit = await utils.getGasLimit(web3);
  console.log("gas and gas limit", gas, gasLimit);

  var gasEstimate = Math.min(gas, gasLimit);
  var name = "GN Compass";
  var symbol = "GNCT";
  var decimal = 18;
  var totalSupply = 1000000000 //1 billion

  var args = [name, symbol, decimal, totalSupply];

  console.log("args", args);
  args.push({ gas: gasEstimate })
  args = [SmartToken].concat(args);
  deployer.deploy.apply(deployer, args);
};
