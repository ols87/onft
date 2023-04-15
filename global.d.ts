type Chain =
  | "ethereum"
  | "bsc"
  | "avalanche"
  | "polygon"
  | "arbitrum"
  | "optimism"
  | "fantom"
  | "goerli"
  | "bsc-testnet"
  | "fuji"
  | "mumbai"
  | "arbitrum-goerli"
  | "optimism-goerli"
  | "fantom-testnet"

type ChainID = {
  [key in Chain]: number
}
