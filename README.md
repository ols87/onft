# OmnichainNonFungibleToken721 (ONFT721)

This ONFT contract allows minting of `nftId`s on separate chains. To ensure two chains can not mint the same `nfId` each contract on each chain is only allowed to mint`nftIds` in certain ranges.
Check `constants/onftArgs.json` for the specific test configuration used in this demo.

## UniversalONFT.sol

> WARNING: **You must perform the setTrustedRemote() (step 2).**

1. Deploy two contracts:

```angular2html
 npx hardhat --network mumbai deploy --tags ExampleUniversalONFT721
 npx hardhat --network fuji deploy --tags ExampleUniversalONFT721
```

2. Set the "trusted remotes", so each contract can send & receive messages from one another, and `only` one another.

```angular2html
npx hardhat --network mumbai setTrustedRemote --target-network fuji --contract ExampleUniversalONFT721
npx hardhat --network fuji setTrustedRemote --target-network mumbai --contract ExampleUniversalONFT721
```

3. Set the min gas required on the destination

```angular2html
npx hardhat --network mumbai setMinDstGas --target-network fuji --contract ExampleUniversalONFT721 --packet-type 1 --min-gas 100000
npx hardhat --network fuji setMinDstGas --target-network mumbai --contract ExampleUniversalONFT721 --packet-type 1 --min-gas 100000
```

4. Mint an NFT on each chain!

```angular2html
npx hardhat --network mumbai onftMint --contract ExampleUniversalONFT721
npx hardhat --network fuji onftMint --contract ExampleUniversalONFT721
```

5. [Optional] Show the token owner(s)

```angular2html
npx hardhat --network mumbai ownerOf --token-id 1 --contract ExampleUniversalONFT721
npx hardhat --network fuji ownerOf --token-id 11 --contract ExampleUniversalONFT721
```

6. Send ONFT across chains

```angular2html
npx hardhat --network mumbai onftSend --target-network fuji --token-id 1 --contract ExampleUniversalONFT721
npx hardhat --network fuji onftSend --target-network mumbai --token-id 11 --contract ExampleUniversalONFT721
```

7. Verify your token no longer exists in your wallet on the source chain & wait for it to reach the destination side.

```angular2html
npx hardhat --network mumbai ownerOf --token-id 1 --contract ExampleUniversalONFT721
npx hardhat --network fuji ownerOf --token-id 1 --contract ExampleUniversalONFT721
```
