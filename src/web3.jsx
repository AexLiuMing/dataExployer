import { configs } from './config'
const { NETWORK_ID, INFURA_APP_ID } = configs
const ethers = require('ethers')
window.ethers = ethers
//todd 修改jsonrpc为localhost:8545 + networkid
const eth = new ethers.providers.JsonRpcProvider("http://192.168.20.107:8545",NETWORK_ID)
export default eth
