#! /bin/bash

docker run -p 6688:6688 -it -v $(pwd)/chainlink:/chainlink --env-file $(pwd)/chainlink/chainlink-dev.env\
 --env-file $(pwd)/truffle/build/addrs.env -e ETH_URL=ws://$(ip -4 addr show docker0 | grep -Po 'inet \K[\d.]+'):7545\
 --name chainlink-dev -d smartcontract/chainlink local n -p /chainlink/chainlink.pwd -a /chainlink/api.pwd
