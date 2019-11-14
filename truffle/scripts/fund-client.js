const GanacheChainlinkClient = artifacts.require('GanacheChainlinkClient');
const LinkToken = artifacts.require('LinkToken');

module.exports = async callback => {
  const ganacheClient = await GanacheChainlinkClient.deployed();
  const tokenAddress = await ganacheClient.getChainlinkToken();
  const token = await LinkToken.at(tokenAddress);
  console.log(`Transfering 5 LINK to ${ganacheClient.address}...`);
  const tx = await token.transfer(ganacheClient.address, `5000000000000000000`);
  console.log(`Transfer succeeded! Transaction ID: ${tx.tx}.`);
  callback();
}
