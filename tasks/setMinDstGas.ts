import { HardhatRuntimeEnvironment } from "hardhat/types"
import CHAIN_ID from "../constants/chainIds.json"

export async function setMinDstGas(taskArgs: any, hre: HardhatRuntimeEnvironment) {
  const contract = await hre.deployments.get(taskArgs.contract)
  const contractInstance = await hre.ethers.getContractAt(contract.abi, contract.address)
  const dstChainId = (CHAIN_ID as any)[taskArgs.targetNetwork]
  const tx = await contractInstance.setMinDstGas(dstChainId, taskArgs.packetType, taskArgs.minGas)

  console.log(`[${hre.network.name}] setMinDstGas tx hash ${tx.hash}`)
  await tx.wait()
}
