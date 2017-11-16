var ConvertLib = artifacts.require("./ConvertLib.sol");
var SmartToken = artifacts.require("./SmartToken.sol");


module.exports = function(deployer) {

	//deployer.deploy(SmartToken, 1000000000000, "GN Compass", 18, "GNCT");
	deployer.deploy(SmartToken, "GN Compass", "GNCT", 18 , 1000000000000);
  
};
