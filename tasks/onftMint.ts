import { HardhatRuntimeEnvironment } from "hardhat/types"

export async function onftMint(taskArgs: any, hre: HardhatRuntimeEnvironment) {
  const contract = await hre.deployments.get(taskArgs.contract)
  const contractInstance = await ethers.getContractAt(contract.abi, contract.address)

  try {
    let tx = await (await contractInstance.mint()).wait()
    console.log(`✅ [${hre.network.name}] mint()`)
    console.log(` tx: ${tx.transactionHash}`)
    let onftTokenId = await hre.ethers.provider.getTransactionReceipt(tx.transactionHash)
    console.log(` ONFT nftId: ${parseInt(onftTokenId.logs[0].topics[3])}`)
  } catch (e: any) {
    if (e.error?.message.includes("ONFT: Max limit reached")) {
      console.log("*ONFT: Max limit reached*")
    } else {
      console.log(e)
    }
  }
}

// npx hardhat --network bsc-testnet onftMint --contract ExampleUniversalONFT721
// npx hardhat --network fuji onftMint --contract ExampleUniversalONFT721
