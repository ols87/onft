import { HardhatRuntimeEnvironment } from "hardhat/types"
import CHAIN_ID from "../constants/chainIds.json"
import { getDeploymentAddresses } from "../utils/readStatic"

interface TaskArgs {
  targetNetwork: string
  localContract: string
  remoteContract: string
  contract: string
}

export async function setTrustedRemote(taskArgs: TaskArgs, hre: HardhatRuntimeEnvironment) {
  let localContract: string, remoteContract: string

  if (taskArgs.contract) {
    localContract = taskArgs.contract
    remoteContract = taskArgs.contract
  } else {
    localContract = taskArgs.localContract
    remoteContract = taskArgs.remoteContract
  }

  // get local contract
  const contract = await hre.deployments.get(localContract)
  const localContractInstance = await hre.ethers.getContractAt(contract.abi, contract.address)

  // get deployed remote contract address
  const remoteAddress = getDeploymentAddresses(taskArgs.targetNetwork)[remoteContract as Chain]

  // get remote chain id
  const remoteChainId = CHAIN_ID[taskArgs.targetNetwork as Chain]

  // concat remote and local address
  let remoteAndLocal = hre.ethers.utils.solidityPack(["address", "address"], [remoteAddress, localContractInstance.address])

  // check if pathway is already set
  const isTrustedRemoteSet = await localContractInstance.isTrustedRemote(remoteChainId, remoteAndLocal)

  if (!isTrustedRemoteSet) {
    try {
      let tx = await (await localContractInstance.setTrustedRemote(remoteChainId, remoteAndLocal)).wait()
      console.log(`✅ [${hre.network.name}] setTrustedRemote(${remoteChainId}, ${remoteAndLocal})`)
      console.log(` tx: ${tx.transactionHash}`)
    } catch (e: any) {
      if (e.error.message.includes("The chainId + address is already trusted")) {
        console.log("*source already set*")
      } else {
        console.log(`❌ [${hre.network.name}] setTrustedRemote(${remoteChainId}, ${remoteAndLocal})`)
      }
    }
  } else {
    console.log("*source already set*")
  }
}
