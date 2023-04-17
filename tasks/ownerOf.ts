import { HardhatRuntimeEnvironment } from "hardhat/types"

export async function ownerOf(taskArgs: any, hre: HardhatRuntimeEnvironment) {
  const contract = await hre.deployments.get(taskArgs.contract)
  const contractInstance = await hre.ethers.getContractAt(contract.abi, contract.address)
  let tokenId = taskArgs.tokenId

  try {
    let address = await contractInstance.ownerOf(tokenId)
    console.log(`✅ [${hre.network.name}] ownerOf(${tokenId})`)
    console.log(` Owner address: ${address}`)
  } catch (e: any) {
    if (e?.reason) {
      console.log(e.reason)
    } else {
      console.log(e)
    }
  }
}
