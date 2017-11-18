var Promise = require('bluebird');

async function estimateGas(web3, data) {
  var eg = Promise.promisify(web3.eth.estimateGas);
  return await eg({ data : data });
}

async function getGasLimit(web3) {
  console.log("Here");
  var gb = Promise.promisify(web3.eth.getBlock);
  var block = await gb("latest");
  return block.gasLimit;
}
module.exports = {
  estimateGas : estimateGas,
  getGasLimit: getGasLimit
}
