# OmnichainNonFungibleToken721 (ONFT721)

This ONFT contract allows minting of `nftId`s on separate chains. To ensure two chains can not mint the same `nfId` each contract on each chain is only allowed to mint`nftIds` in certain ranges.
Check `constants/onftArgs.json` for the specific test configuration used in this demo.

## UniversalONFT.sol

> WARNING: **You must perform the setTrustedRemote() (step 2).**

1. Deploy two contracts:

```
  npx hardhat --network fantom-testnet deploy --tags ExampleNFT
  npx hardhat --network fuji deploy --tags ExampleNFT
```

2. Set the "trusted remotes", so each contract can send & receive messages from one another, and `only` one another.

```
npx hardhat --network fantom-testnet setTrustedRemote --target-network fuji --contract ExampleNFT
npx hardhat --network fuji setTrustedRemote --target-network fantom-testnet --contract ExampleNFT
```

3. Set the min gas required on the destination

```
npx hardhat --network fantom-testnet setMinDstGas --target-network fuji --contract ExampleNFT --packet-type 1 --min-gas 100000
npx hardhat --network fuji setMinDstGas --target-network fantom-testnet --contract ExampleNFT --packet-type 1 --min-gas 100000
```

4. Mint an NFT on each chain!

```
npx hardhat --network fantom-testnet onftMint --contract ExampleNFT
npx hardhat --network fuji onftMint --contract ExampleNFT
```

5. [Optional] Show the token owner(s)

```
npx hardhat --network fantom-testnet ownerOf --token-id 51 --contract ExampleNFT
npx hardhat --network fuji ownerOf --token-id 1 --contract ExampleNFT
```

6. Send ONFT across chains

```
npx hardhat --network fantom-testnet onftSend --target-network fuji --token-id 51 --contract ExampleNFT
npx hardhat --network fuji onftSend --target-network fantom-testnet --token-id 1 --contract ExampleNFT
```

7. Verify your token no longer exists in your wallet on the source chain & wait for it to reach the destination side.

```
npx hardhat --network fantom-testnet ownerOf --token-id 1 --contract ExampleNFT
npx hardhat --network fuji ownerOf --token-id 1 --contract ExampleNFT
```
