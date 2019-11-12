const fs = require('fs');
const path = require('path');

let LinkToken = artifacts.require('LinkToken');
let Oracle = artifacts.require('Oracle');

module.exports = async (deployer) => {
  await deployer.deploy(LinkToken);
  await deployer.deploy(Oracle, LinkToken.address);

  const addrFile = path.join(__dirname, '..', 'build', 'addrs.env');
  try {
    fs.unlinkSync(addrFile);
  } catch {
    // delete if exists; ignore errors
  }

  fs.writeFileSync(addrFile, `LINK_CONTRACT_ADDRESS=${LinkToken.address}\nORACLE_CONTRACT_ADDRESS=${Oracle.address}\n`);
};
