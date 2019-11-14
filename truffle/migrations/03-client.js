const GanacheChainlinkClient = artifacts.require("GanacheChainlinkClient");
let LinkToken = artifacts.require('LinkToken');

module.exports = function(deployer) {
  deployer.deploy(GanacheChainlinkClient, LinkToken.address);
};
