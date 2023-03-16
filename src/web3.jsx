import { configs } from './config'
const { NETWORK_ID, RPC_URL } = configs
const ethers = require('ethers')
window.ethers = ethers
//todd 修改jsonrpc为localhost:8545 + networkid
const eth = new ethers.providers.JsonRpcProvider(RPC_URL,NETWORK_ID)
export default eth
