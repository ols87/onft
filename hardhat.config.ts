import { HardhatUserConfig } from "hardhat/config"
import "@nomiclabs/hardhat-ethers"
import "@nomicfoundation/hardhat-toolbox"
import "hardhat-contract-sizer"
import "hardhat-deploy"
import "./tasks"

require("dotenv").config()

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  // solidity: "0.8.4",
  contractSizer: {
    alphaSort: false,
    runOnCompile: true,
    disambiguatePaths: false,
  },
  //networks
  networks: {
    ethereum: {
      url: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      chainId: 1,
      accounts: [process.env.KEY as string],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    bsc: {
      url: "https://bsc-dataseed1.binance.org",
      chainId: 56,
      accounts: [process.env.KEY as string],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    avalanche: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      chainId: 43114,
      accounts: [process.env.KEY as string],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    polygon: {
      url: "https://rpc-mainnet.maticvigil.com",
      chainId: 137,
      accounts: [process.env.KEY as string],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    arbitrum: {
      url: `https://arb1.arbitrum.io/rpc`,
      chainId: 42161,
      accounts: [process.env.KEY as string],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    optimism: {
      url: `https://mainnet.optimism.io`,
      chainId: 10,
      accounts: [process.env.KEY as string],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    fantom: {
      url: `https://rpcapi.fantom.network`,
      chainId: 250,
      accounts: [process.env.KEY as string],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    metis: {
      url: `https://andromeda.metis.io/?owner=1088`,
      chainId: 1088,
      accounts: [process.env.KEY as string],
      gas: 2100000,
      gasPrice: 8000000000,
    },

    goerli: {
      url: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161", // public infura endpoint
      chainId: 5,
      accounts: [process.env.KEY as string],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    "bsc-testnet": {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97,
      accounts: [process.env.KEY as string],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    fuji: {
      url: `https://api.avax-test.network/ext/bc/C/rpc`,
      chainId: 43113,
      accounts: [process.env.KEY as string],
      gas: 2100000,
      gasPrice: 25000000000,
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com/",
      chainId: 80001,
      accounts: [process.env.KEY as string],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    "arbitrum-goerli": {
      url: `https://goerli-rollup.arbitrum.io/rpc/`,
      chainId: 421613,
      accounts: [process.env.KEY as string],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    "optimism-goerli": {
      url: `https://goerli.optimism.io/`,
      chainId: 420,
      accounts: [process.env.KEY as string],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    "fantom-testnet": {
      url: `https://rpc.ankr.com/fantom_testnet`,
      chainId: 4002,
      accounts: [process.env.KEY as string],
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },
}

export default config
