import { HardhatRuntimeEnvironment } from "hardhat/types"
import CHAIN_ID from "../constants/chainIds.json"

export async function onftSend(taskArgs: any, hre: HardhatRuntimeEnvironment) {
  const [owner] = await hre.ethers.getSigners()
  const tokenId = taskArgs.tokenId
  // get remote chain id
  const remoteChainId = CHAIN_ID[taskArgs.targetNetwork as Chain]

  // get local contract
  const contract = await hre.deployments.get(taskArgs.contract)
  const contractInstance = await hre.ethers.getContractAt(contract.abi, contract.address)

  // quote fee with default adapterParams
  const adapterParams = hre.ethers.utils.solidityPack(["uint16", "uint256"], [1, 200000]) // default adapterParams example

  const fees = await contractInstance.estimateSendFee(remoteChainId, owner.address, tokenId, false, adapterParams)
  const nativeFee = fees[0]
  console.log(`native fees (wei): ${nativeFee}`)

  const tx = await contractInstance.sendFrom(
    owner.address, // 'from' address to send tokens
    remoteChainId, // remote LayerZero chainId
    owner.address, // 'to' address to send tokens
    tokenId, // tokenId to send
    owner.address, // refund address (if too much message fee is sent, it gets refunded)
    hre.ethers.constants.AddressZero, // address(0x0) if not paying in ZRO (LayerZero Token)
    adapterParams, // flexible bytes array to indicate messaging adapter services
    { value: nativeFee.mul(5).div(4) }
  )
  console.log(`✅ [${hre.network.name}] sendFrom tx: ${tx.hash}`)
  await tx.wait()
}
