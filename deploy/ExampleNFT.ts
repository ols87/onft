import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"

import LZ_ENDPOINTS from "../constants/layerzeroEndpoints.json"
import ONFT_ARGS from "../constants/onftArgs.json"

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deploy } = hre.deployments
  const [deployer] = await hre.ethers.getSigners()
  const minGasToStore = 150000

  console.log(deployer.address)

  const lzEndpointAddress = (LZ_ENDPOINTS as any)[hre.network.name]
  const onftArgs = (ONFT_ARGS as any)[hre.network.name]
  console.log({ onftArgs })
  console.log(`[${hre.network.name}] LayerZero Endpoint address: ${lzEndpointAddress}`)

  await deploy("ExampleNFT", {
    from: deployer.address,
    args: [minGasToStore, lzEndpointAddress, onftArgs.startMintId, onftArgs.endMintId],
    log: true,
    waitConfirmations: 1,
  })
}

export default func
func.tags = ["ExampleNFT"]
