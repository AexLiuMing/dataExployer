import { configs } from './config'
const { NETWORK_ID, INFURA_APP_ID } = configs
const ethers = require('ethers')
window.ethers = ethers
const eth = new ethers.providers.JsonRpcProvider("http://192.168.20.107:8545",NETWORK_ID)
export default eth
