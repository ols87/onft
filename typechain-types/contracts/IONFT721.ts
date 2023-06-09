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
  PayableOverrides,
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
} from "../common";

export interface IONFT721Interface extends utils.Interface {
  functions: {
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "estimateSendBatchFee(uint16,bytes,uint256[],bool,bytes)": FunctionFragment;
    "estimateSendFee(uint16,bytes,uint256,bool,bytes)": FunctionFragment;
    "getApproved(uint256)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "safeTransferFrom(address,address,uint256)": FunctionFragment;
    "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
    "sendBatchFrom(address,uint16,bytes,uint256[],address,address,bytes)": FunctionFragment;
    "sendFrom(address,uint16,bytes,uint256,address,address,bytes)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "approve"
      | "balanceOf"
      | "estimateSendBatchFee"
      | "estimateSendFee"
      | "getApproved"
      | "isApprovedForAll"
      | "ownerOf"
      | "safeTransferFrom(address,address,uint256)"
      | "safeTransferFrom(address,address,uint256,bytes)"
      | "sendBatchFrom"
      | "sendFrom"
      | "setApprovalForAll"
      | "supportsInterface"
      | "transferFrom"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "approve",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "estimateSendBatchFee",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<boolean>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "estimateSendFee",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getApproved",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom(address,address,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom(address,address,uint256,bytes)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "sendBatchFrom",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "sendFrom",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "estimateSendBatchFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "estimateSendFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom(address,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom(address,address,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendBatchFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sendFrom", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "ApprovalForAll(address,address,bool)": EventFragment;
    "CreditCleared(bytes32)": EventFragment;
    "CreditStored(bytes32,bytes)": EventFragment;
    "ReceiveFromChain(uint16,bytes,address,uint256[])": EventFragment;
    "SendToChain(uint16,address,bytes,uint256[])": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreditCleared"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreditStored"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReceiveFromChain"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SendToChain"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export interface ApprovalEventObject {
  owner: string;
  approved: string;
  tokenId: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface ApprovalForAllEventObject {
  owner: string;
  operator: string;
  approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  ApprovalForAllEventObject
>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export interface CreditClearedEventObject {
  _hashedPayload: string;
}
export type CreditClearedEvent = TypedEvent<[string], CreditClearedEventObject>;

export type CreditClearedEventFilter = TypedEventFilter<CreditClearedEvent>;

export interface CreditStoredEventObject {
  _hashedPayload: string;
  _payload: string;
}
export type CreditStoredEvent = TypedEvent<
  [string, string],
  CreditStoredEventObject
>;

export type CreditStoredEventFilter = TypedEventFilter<CreditStoredEvent>;

export interface ReceiveFromChainEventObject {
  _srcChainId: number;
  _srcAddress: string;
  _toAddress: string;
  _tokenIds: BigNumber[];
}
export type ReceiveFromChainEvent = TypedEvent<
  [number, string, string, BigNumber[]],
  ReceiveFromChainEventObject
>;

export type ReceiveFromChainEventFilter =
  TypedEventFilter<ReceiveFromChainEvent>;

export interface SendToChainEventObject {
  _dstChainId: number;
  _from: string;
  _toAddress: string;
  _tokenIds: BigNumber[];
}
export type SendToChainEvent = TypedEvent<
  [number, string, string, BigNumber[]],
  SendToChainEventObject
>;

export type SendToChainEventFilter = TypedEventFilter<SendToChainEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  tokenId: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface IONFT721 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IONFT721Interface;

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
    approve(
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    estimateSendBatchFee(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _toAddress: PromiseOrValue<BytesLike>,
      _tokenIds: PromiseOrValue<BigNumberish>[],
      _useZro: PromiseOrValue<boolean>,
      _adapterParams: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { nativeFee: BigNumber; zroFee: BigNumber }
    >;

    estimateSendFee(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _toAddress: PromiseOrValue<BytesLike>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _useZro: PromiseOrValue<boolean>,
      _adapterParams: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { nativeFee: BigNumber; zroFee: BigNumber }
    >;

    getApproved(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { operator: string }>;

    isApprovedForAll(
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    ownerOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { owner: string }>;

    "safeTransferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sendBatchFrom(
      _from: PromiseOrValue<string>,
      _dstChainId: PromiseOrValue<BigNumberish>,
      _toAddress: PromiseOrValue<BytesLike>,
      _tokenIds: PromiseOrValue<BigNumberish>[],
      _refundAddress: PromiseOrValue<string>,
      _zroPaymentAddress: PromiseOrValue<string>,
      _adapterParams: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sendFrom(
      _from: PromiseOrValue<string>,
      _dstChainId: PromiseOrValue<BigNumberish>,
      _toAddress: PromiseOrValue<BytesLike>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _refundAddress: PromiseOrValue<string>,
      _zroPaymentAddress: PromiseOrValue<string>,
      _adapterParams: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      _approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  approve(
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  balanceOf(
    owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  estimateSendBatchFee(
    _dstChainId: PromiseOrValue<BigNumberish>,
    _toAddress: PromiseOrValue<BytesLike>,
    _tokenIds: PromiseOrValue<BigNumberish>[],
    _useZro: PromiseOrValue<boolean>,
    _adapterParams: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { nativeFee: BigNumber; zroFee: BigNumber }
  >;

  estimateSendFee(
    _dstChainId: PromiseOrValue<BigNumberish>,
    _toAddress: PromiseOrValue<BytesLike>,
    _tokenId: PromiseOrValue<BigNumberish>,
    _useZro: PromiseOrValue<boolean>,
    _adapterParams: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { nativeFee: BigNumber; zroFee: BigNumber }
  >;

  getApproved(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  isApprovedForAll(
    owner: PromiseOrValue<string>,
    operator: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  ownerOf(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  "safeTransferFrom(address,address,uint256)"(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256,bytes)"(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sendBatchFrom(
    _from: PromiseOrValue<string>,
    _dstChainId: PromiseOrValue<BigNumberish>,
    _toAddress: PromiseOrValue<BytesLike>,
    _tokenIds: PromiseOrValue<BigNumberish>[],
    _refundAddress: PromiseOrValue<string>,
    _zroPaymentAddress: PromiseOrValue<string>,
    _adapterParams: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sendFrom(
    _from: PromiseOrValue<string>,
    _dstChainId: PromiseOrValue<BigNumberish>,
    _toAddress: PromiseOrValue<BytesLike>,
    _tokenId: PromiseOrValue<BigNumberish>,
    _refundAddress: PromiseOrValue<string>,
    _zroPaymentAddress: PromiseOrValue<string>,
    _adapterParams: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    operator: PromiseOrValue<string>,
    _approved: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferFrom(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    approve(
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    estimateSendBatchFee(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _toAddress: PromiseOrValue<BytesLike>,
      _tokenIds: PromiseOrValue<BigNumberish>[],
      _useZro: PromiseOrValue<boolean>,
      _adapterParams: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { nativeFee: BigNumber; zroFee: BigNumber }
    >;

    estimateSendFee(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _toAddress: PromiseOrValue<BytesLike>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _useZro: PromiseOrValue<boolean>,
      _adapterParams: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { nativeFee: BigNumber; zroFee: BigNumber }
    >;

    getApproved(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    isApprovedForAll(
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    ownerOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    "safeTransferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    sendBatchFrom(
      _from: PromiseOrValue<string>,
      _dstChainId: PromiseOrValue<BigNumberish>,
      _toAddress: PromiseOrValue<BytesLike>,
      _tokenIds: PromiseOrValue<BigNumberish>[],
      _refundAddress: PromiseOrValue<string>,
      _zroPaymentAddress: PromiseOrValue<string>,
      _adapterParams: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    sendFrom(
      _from: PromiseOrValue<string>,
      _dstChainId: PromiseOrValue<BigNumberish>,
      _toAddress: PromiseOrValue<BytesLike>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _refundAddress: PromiseOrValue<string>,
      _zroPaymentAddress: PromiseOrValue<string>,
      _adapterParams: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      _approved: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: PromiseOrValue<string> | null,
      approved?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): ApprovalEventFilter;
    Approval(
      owner?: PromiseOrValue<string> | null,
      approved?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): ApprovalEventFilter;

    "ApprovalForAll(address,address,bool)"(
      owner?: PromiseOrValue<string> | null,
      operator?: PromiseOrValue<string> | null,
      approved?: null
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      owner?: PromiseOrValue<string> | null,
      operator?: PromiseOrValue<string> | null,
      approved?: null
    ): ApprovalForAllEventFilter;

    "CreditCleared(bytes32)"(_hashedPayload?: null): CreditClearedEventFilter;
    CreditCleared(_hashedPayload?: null): CreditClearedEventFilter;

    "CreditStored(bytes32,bytes)"(
      _hashedPayload?: null,
      _payload?: null
    ): CreditStoredEventFilter;
    CreditStored(
      _hashedPayload?: null,
      _payload?: null
    ): CreditStoredEventFilter;

    "ReceiveFromChain(uint16,bytes,address,uint256[])"(
      _srcChainId?: PromiseOrValue<BigNumberish> | null,
      _srcAddress?: PromiseOrValue<BytesLike> | null,
      _toAddress?: PromiseOrValue<string> | null,
      _tokenIds?: null
    ): ReceiveFromChainEventFilter;
    ReceiveFromChain(
      _srcChainId?: PromiseOrValue<BigNumberish> | null,
      _srcAddress?: PromiseOrValue<BytesLike> | null,
      _toAddress?: PromiseOrValue<string> | null,
      _tokenIds?: null
    ): ReceiveFromChainEventFilter;

    "SendToChain(uint16,address,bytes,uint256[])"(
      _dstChainId?: PromiseOrValue<BigNumberish> | null,
      _from?: PromiseOrValue<string> | null,
      _toAddress?: PromiseOrValue<BytesLike> | null,
      _tokenIds?: null
    ): SendToChainEventFilter;
    SendToChain(
      _dstChainId?: PromiseOrValue<BigNumberish> | null,
      _from?: PromiseOrValue<string> | null,
      _toAddress?: PromiseOrValue<BytesLike> | null,
      _tokenIds?: null
    ): SendToChainEventFilter;

    "Transfer(address,address,uint256)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): TransferEventFilter;
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): TransferEventFilter;
  };

  estimateGas: {
    approve(
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    balanceOf(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    estimateSendBatchFee(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _toAddress: PromiseOrValue<BytesLike>,
      _tokenIds: PromiseOrValue<BigNumberish>[],
      _useZro: PromiseOrValue<boolean>,
      _adapterParams: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    estimateSendFee(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _toAddress: PromiseOrValue<BytesLike>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _useZro: PromiseOrValue<boolean>,
      _adapterParams: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getApproved(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApprovedForAll(
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ownerOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sendBatchFrom(
      _from: PromiseOrValue<string>,
      _dstChainId: PromiseOrValue<BigNumberish>,
      _toAddress: PromiseOrValue<BytesLike>,
      _tokenIds: PromiseOrValue<BigNumberish>[],
      _refundAddress: PromiseOrValue<string>,
      _zroPaymentAddress: PromiseOrValue<string>,
      _adapterParams: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sendFrom(
      _from: PromiseOrValue<string>,
      _dstChainId: PromiseOrValue<BigNumberish>,
      _toAddress: PromiseOrValue<BytesLike>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _refundAddress: PromiseOrValue<string>,
      _zroPaymentAddress: PromiseOrValue<string>,
      _adapterParams: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      _approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approve(
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    estimateSendBatchFee(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _toAddress: PromiseOrValue<BytesLike>,
      _tokenIds: PromiseOrValue<BigNumberish>[],
      _useZro: PromiseOrValue<boolean>,
      _adapterParams: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    estimateSendFee(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _toAddress: PromiseOrValue<BytesLike>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _useZro: PromiseOrValue<boolean>,
      _adapterParams: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getApproved(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ownerOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sendBatchFrom(
      _from: PromiseOrValue<string>,
      _dstChainId: PromiseOrValue<BigNumberish>,
      _toAddress: PromiseOrValue<BytesLike>,
      _tokenIds: PromiseOrValue<BigNumberish>[],
      _refundAddress: PromiseOrValue<string>,
      _zroPaymentAddress: PromiseOrValue<string>,
      _adapterParams: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sendFrom(
      _from: PromiseOrValue<string>,
      _dstChainId: PromiseOrValue<BigNumberish>,
      _toAddress: PromiseOrValue<BytesLike>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _refundAddress: PromiseOrValue<string>,
      _zroPaymentAddress: PromiseOrValue<string>,
      _adapterParams: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      _approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
