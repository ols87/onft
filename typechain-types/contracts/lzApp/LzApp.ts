/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface LzAppInterface extends utils.Interface {
  functions: {
    "DEFAULT_PAYLOAD_SIZE_LIMIT()": FunctionFragment;
    "forceResumeReceive(uint16,bytes)": FunctionFragment;
    "getConfig(uint16,uint16,address,uint256)": FunctionFragment;
    "getTrustedRemoteAddress(uint16)": FunctionFragment;
    "isTrustedRemote(uint16,bytes)": FunctionFragment;
    "lzEndpoint()": FunctionFragment;
    "lzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
    "minDstGasLookup(uint16,uint16)": FunctionFragment;
    "owner()": FunctionFragment;
    "payloadSizeLimitLookup(uint16)": FunctionFragment;
    "precrime()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setConfig(uint16,uint16,uint256,bytes)": FunctionFragment;
    "setMinDstGas(uint16,uint16,uint256)": FunctionFragment;
    "setPayloadSizeLimit(uint16,uint256)": FunctionFragment;
    "setPrecrime(address)": FunctionFragment;
    "setReceiveVersion(uint16)": FunctionFragment;
    "setSendVersion(uint16)": FunctionFragment;
    "setTrustedRemote(uint16,bytes)": FunctionFragment;
    "setTrustedRemoteAddress(uint16,bytes)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "trustedRemoteLookup(uint16)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DEFAULT_PAYLOAD_SIZE_LIMIT"
      | "forceResumeReceive"
      | "getConfig"
      | "getTrustedRemoteAddress"
      | "isTrustedRemote"
      | "lzEndpoint"
      | "lzReceive"
      | "minDstGasLookup"
      | "owner"
      | "payloadSizeLimitLookup"
      | "precrime"
      | "renounceOwnership"
      | "setConfig"
      | "setMinDstGas"
      | "setPayloadSizeLimit"
      | "setPrecrime"
      | "setReceiveVersion"
      | "setSendVersion"
      | "setTrustedRemote"
      | "setTrustedRemoteAddress"
      | "transferOwnership"
      | "trustedRemoteLookup"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DEFAULT_PAYLOAD_SIZE_LIMIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "forceResumeReceive",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getConfig",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getTrustedRemoteAddress",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isTrustedRemote",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "lzEndpoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lzReceive",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "minDstGasLookup",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "payloadSizeLimitLookup",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "precrime", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setConfig",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinDstGas",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setPayloadSizeLimit",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setPrecrime",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setReceiveVersion",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setSendVersion",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setTrustedRemote",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setTrustedRemoteAddress",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "trustedRemoteLookup",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_PAYLOAD_SIZE_LIMIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "forceResumeReceive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTrustedRemoteAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTrustedRemote",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lzEndpoint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lzReceive", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minDstGasLookup",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "payloadSizeLimitLookup",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "precrime", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMinDstGas",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPayloadSizeLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPrecrime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReceiveVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSendVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTrustedRemote",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTrustedRemoteAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "trustedRemoteLookup",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "SetMinDstGas(uint16,uint16,uint256)": EventFragment;
    "SetPrecrime(address)": EventFragment;
    "SetTrustedRemote(uint16,bytes)": EventFragment;
    "SetTrustedRemoteAddress(uint16,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetMinDstGas"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetPrecrime"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetTrustedRemote"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetTrustedRemoteAddress"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SetMinDstGasEventObject {
  _dstChainId: number;
  _type: number;
  _minDstGas: BigNumber;
}
export type SetMinDstGasEvent = TypedEvent<
  [number, number, BigNumber],
  SetMinDstGasEventObject
>;

export type SetMinDstGasEventFilter = TypedEventFilter<SetMinDstGasEvent>;

export interface SetPrecrimeEventObject {
  precrime: string;
}
export type SetPrecrimeEvent = TypedEvent<[string], SetPrecrimeEventObject>;

export type SetPrecrimeEventFilter = TypedEventFilter<SetPrecrimeEvent>;

export interface SetTrustedRemoteEventObject {
  _remoteChainId: number;
  _path: string;
}
export type SetTrustedRemoteEvent = TypedEvent<
  [number, string],
  SetTrustedRemoteEventObject
>;

export type SetTrustedRemoteEventFilter =
  TypedEventFilter<SetTrustedRemoteEvent>;

export interface SetTrustedRemoteAddressEventObject {
  _remoteChainId: number;
  _remoteAddress: string;
}
export type SetTrustedRemoteAddressEvent = TypedEvent<
  [number, string],
  SetTrustedRemoteAddressEventObject
>;

export type SetTrustedRemoteAddressEventFilter =
  TypedEventFilter<SetTrustedRemoteAddressEvent>;

export interface LzApp extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LzAppInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DEFAULT_PAYLOAD_SIZE_LIMIT(overrides?: CallOverrides): Promise<[BigNumber]>;

    forceResumeReceive(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getConfig(
      _version: PromiseOrValue<BigNumberish>,
      _chainId: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      _configType: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getTrustedRemoteAddress(
      _remoteChainId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isTrustedRemote(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    lzEndpoint(overrides?: CallOverrides): Promise<[string]>;

    lzReceive(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      _nonce: PromiseOrValue<BigNumberish>,
      _payload: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    minDstGasLookup(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    payloadSizeLimitLookup(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    precrime(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setConfig(
      _version: PromiseOrValue<BigNumberish>,
      _chainId: PromiseOrValue<BigNumberish>,
      _configType: PromiseOrValue<BigNumberish>,
      _config: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMinDstGas(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _packetType: PromiseOrValue<BigNumberish>,
      _minGas: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPayloadSizeLimit(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _size: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPrecrime(
      _precrime: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setReceiveVersion(
      _version: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSendVersion(
      _version: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTrustedRemote(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _path: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTrustedRemoteAddress(
      _remoteChainId: PromiseOrValue<BigNumberish>,
      _remoteAddress: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    trustedRemoteLookup(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  DEFAULT_PAYLOAD_SIZE_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;

  forceResumeReceive(
    _srcChainId: PromiseOrValue<BigNumberish>,
    _srcAddress: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getConfig(
    _version: PromiseOrValue<BigNumberish>,
    _chainId: PromiseOrValue<BigNumberish>,
    arg2: PromiseOrValue<string>,
    _configType: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getTrustedRemoteAddress(
    _remoteChainId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  isTrustedRemote(
    _srcChainId: PromiseOrValue<BigNumberish>,
    _srcAddress: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  lzEndpoint(overrides?: CallOverrides): Promise<string>;

  lzReceive(
    _srcChainId: PromiseOrValue<BigNumberish>,
    _srcAddress: PromiseOrValue<BytesLike>,
    _nonce: PromiseOrValue<BigNumberish>,
    _payload: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  minDstGasLookup(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  payloadSizeLimitLookup(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  precrime(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setConfig(
    _version: PromiseOrValue<BigNumberish>,
    _chainId: PromiseOrValue<BigNumberish>,
    _configType: PromiseOrValue<BigNumberish>,
    _config: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMinDstGas(
    _dstChainId: PromiseOrValue<BigNumberish>,
    _packetType: PromiseOrValue<BigNumberish>,
    _minGas: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPayloadSizeLimit(
    _dstChainId: PromiseOrValue<BigNumberish>,
    _size: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPrecrime(
    _precrime: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setReceiveVersion(
    _version: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSendVersion(
    _version: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTrustedRemote(
    _srcChainId: PromiseOrValue<BigNumberish>,
    _path: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTrustedRemoteAddress(
    _remoteChainId: PromiseOrValue<BigNumberish>,
    _remoteAddress: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  trustedRemoteLookup(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    DEFAULT_PAYLOAD_SIZE_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;

    forceResumeReceive(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    getConfig(
      _version: PromiseOrValue<BigNumberish>,
      _chainId: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      _configType: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getTrustedRemoteAddress(
      _remoteChainId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    isTrustedRemote(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    lzEndpoint(overrides?: CallOverrides): Promise<string>;

    lzReceive(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      _nonce: PromiseOrValue<BigNumberish>,
      _payload: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    minDstGasLookup(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    payloadSizeLimitLookup(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    precrime(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setConfig(
      _version: PromiseOrValue<BigNumberish>,
      _chainId: PromiseOrValue<BigNumberish>,
      _configType: PromiseOrValue<BigNumberish>,
      _config: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinDstGas(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _packetType: PromiseOrValue<BigNumberish>,
      _minGas: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setPayloadSizeLimit(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _size: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setPrecrime(
      _precrime: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setReceiveVersion(
      _version: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setSendVersion(
      _version: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTrustedRemote(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _path: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTrustedRemoteAddress(
      _remoteChainId: PromiseOrValue<BigNumberish>,
      _remoteAddress: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    trustedRemoteLookup(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "SetMinDstGas(uint16,uint16,uint256)"(
      _dstChainId?: null,
      _type?: null,
      _minDstGas?: null
    ): SetMinDstGasEventFilter;
    SetMinDstGas(
      _dstChainId?: null,
      _type?: null,
      _minDstGas?: null
    ): SetMinDstGasEventFilter;

    "SetPrecrime(address)"(precrime?: null): SetPrecrimeEventFilter;
    SetPrecrime(precrime?: null): SetPrecrimeEventFilter;

    "SetTrustedRemote(uint16,bytes)"(
      _remoteChainId?: null,
      _path?: null
    ): SetTrustedRemoteEventFilter;
    SetTrustedRemote(
      _remoteChainId?: null,
      _path?: null
    ): SetTrustedRemoteEventFilter;

    "SetTrustedRemoteAddress(uint16,bytes)"(
      _remoteChainId?: null,
      _remoteAddress?: null
    ): SetTrustedRemoteAddressEventFilter;
    SetTrustedRemoteAddress(
      _remoteChainId?: null,
      _remoteAddress?: null
    ): SetTrustedRemoteAddressEventFilter;
  };

  estimateGas: {
    DEFAULT_PAYLOAD_SIZE_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;

    forceResumeReceive(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getConfig(
      _version: PromiseOrValue<BigNumberish>,
      _chainId: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      _configType: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTrustedRemoteAddress(
      _remoteChainId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTrustedRemote(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lzEndpoint(overrides?: CallOverrides): Promise<BigNumber>;

    lzReceive(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      _nonce: PromiseOrValue<BigNumberish>,
      _payload: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    minDstGasLookup(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    payloadSizeLimitLookup(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    precrime(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setConfig(
      _version: PromiseOrValue<BigNumberish>,
      _chainId: PromiseOrValue<BigNumberish>,
      _configType: PromiseOrValue<BigNumberish>,
      _config: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMinDstGas(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _packetType: PromiseOrValue<BigNumberish>,
      _minGas: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPayloadSizeLimit(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _size: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPrecrime(
      _precrime: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setReceiveVersion(
      _version: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSendVersion(
      _version: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTrustedRemote(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _path: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTrustedRemoteAddress(
      _remoteChainId: PromiseOrValue<BigNumberish>,
      _remoteAddress: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    trustedRemoteLookup(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_PAYLOAD_SIZE_LIMIT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    forceResumeReceive(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getConfig(
      _version: PromiseOrValue<BigNumberish>,
      _chainId: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      _configType: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTrustedRemoteAddress(
      _remoteChainId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTrustedRemote(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lzEndpoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lzReceive(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      _nonce: PromiseOrValue<BigNumberish>,
      _payload: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    minDstGasLookup(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payloadSizeLimitLookup(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    precrime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setConfig(
      _version: PromiseOrValue<BigNumberish>,
      _chainId: PromiseOrValue<BigNumberish>,
      _configType: PromiseOrValue<BigNumberish>,
      _config: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMinDstGas(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _packetType: PromiseOrValue<BigNumberish>,
      _minGas: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPayloadSizeLimit(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _size: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPrecrime(
      _precrime: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setReceiveVersion(
      _version: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSendVersion(
      _version: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTrustedRemote(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _path: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTrustedRemoteAddress(
      _remoteChainId: PromiseOrValue<BigNumberish>,
      _remoteAddress: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    trustedRemoteLookup(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
