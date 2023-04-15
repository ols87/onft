import { task } from "hardhat/internal/core/config/config-env"
import { onftMint } from "./onftMint"
import { onftSend } from "./onftSend"
import { ownerOf } from "./ownerOf"
import { setMinDstGas } from "./setMinDstGas"
import { setTrustedRemote } from "./setTrustedRemote"

task("setTrustedRemote", "setTrustedRemote(chainId, sourceAddr) to enable inbound/outbound messages with your other contracts", setTrustedRemote)
  .addParam("targetNetwork", "the target network to set as a trusted remote")
  .addOptionalParam("localContract", "Name of local contract if the names are different")
  .addOptionalParam("remoteContract", "Name of remote contract if the names are different")
  .addParam("contract", "If both contracts are the same name")

//
task("onftMint", "mint() mint ONFT", onftMint).addParam("contract", "Name of contract")

//
task("onftSend", "send an ONFT nftId from one chain to another", onftSend)
  .addParam("tokenId", "the tokenId of ONFT")
  .addParam("targetNetwork", "the chainId to transfer to")
  .addParam("contract", "ONFT contract name")

//
task("ownerOf", "ownerOf(tokenId) to get the owner of a token", ownerOf)
  .addParam("contract", "Name of contract")
  .addParam("tokenId", "the tokenId of ONFT")

//
task("setMinDstGas", "set min gas required on the destination gas", setMinDstGas)
  .addParam("packetType", "message Packet type")
  .addParam("targetNetwork", "the chainId to transfer to")
  .addParam("contract", "contract name")
  .addParam("minGas", "min gas")
