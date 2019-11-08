let LinkToken = artifacts.require('LinkToken')
let Oracle = artifacts.require('Oracle')

module.exports = async (deployer) => {
  await deployer.deploy(LinkToken);
  await deployer.deploy(Oracle, LinkToken.address);
};
