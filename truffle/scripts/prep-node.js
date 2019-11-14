const getAddr = require('../../chainlink/get-addr');

const Oracle = artifacts.require('Oracle');

module.exports = async callback => {
  const oracle = await Oracle.deployed();
  const accountAddr = await getAddr();
  console.log(`Setting fulfill permission to true for ${accountAddr}...`);
  const tx = await oracle.setFulfillmentPermission(accountAddr, true);
  console.log(`Fulfillment succeeded! Transaction ID: ${tx.tx}.`);

  const accounts = await web3.eth.getAccounts();
  console.log(`Sending 1 ETH from ${accounts[0]} to ${accountAddr}.`);
  const result = await web3.eth.sendTransaction({from: accounts[0], to: accountAddr, value: '1000000000000000000'});
  console.log(`Transfer succeeded! Transaction ID: ${result.transactionHash}.`);

  callback();
}
