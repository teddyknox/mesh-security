/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.17.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { Coin, StdFee } from "@cosmjs/amino";
import { CosmWasmClient, ExecuteResult, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";

import {
  AccountResponse,
  Binary,
  ConfigResponse,
  ConsumerInfo,
  Decimal,
  ExecuteMsg,
  InstantiateMsg,
  ListValidatorsResponse,
  QueryMsg,
  SlasherInfo,
  StakeInfo,
  Uint128,
  ValidatorResponse,
  ValStatus,
} from "./MeshProvider.types";
export interface MeshProviderReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<ConfigResponse>;
  account: ({ address }: { address: string }) => Promise<AccountResponse>;
  validator: ({ address }: { address: string }) => Promise<ValidatorResponse>;
  listValidators: ({ limit, startAfter }: { limit?: number; startAfter?: string }) => Promise<ListValidatorsResponse>;
}
export class MeshProviderQueryClient implements MeshProviderReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.account = this.account.bind(this);
    this.validator = this.validator.bind(this);
    this.listValidators = this.listValidators.bind(this);
  }

  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {},
    });
  };
  account = async ({ address }: { address: string }): Promise<AccountResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      account: {
        address,
      },
    });
  };
  validator = async ({ address }: { address: string }): Promise<ValidatorResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      validator: {
        address,
      },
    });
  };
  listValidators = async ({
    limit,
    startAfter,
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<ListValidatorsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_validators: {
        limit,
        start_after: startAfter,
      },
    });
  };
}
export interface MeshProviderInterface extends MeshProviderReadOnlyInterface {
  contractAddress: string;
  sender: string;
  slash: (
    {
      forceUnbond,
      percentage,
      validator,
    }: {
      forceUnbond: boolean;
      percentage: Decimal;
      validator: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  receiveClaim: (
    {
      amount,
      owner,
      validator,
    }: {
      amount: Uint128;
      owner: string;
      validator: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  unstake: (
    {
      amount,
      validator,
    }: {
      amount: Uint128;
      validator: string;
    },
    fee?: number | StdFee | "auto",
    memo?: string,
    funds?: Coin[]
  ) => Promise<ExecuteResult>;
  unbond: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export class MeshProviderClient extends MeshProviderQueryClient implements MeshProviderInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.slash = this.slash.bind(this);
    this.receiveClaim = this.receiveClaim.bind(this);
    this.unstake = this.unstake.bind(this);
    this.unbond = this.unbond.bind(this);
  }

  slash = async (
    {
      forceUnbond,
      percentage,
      validator,
    }: {
      forceUnbond: boolean;
      percentage: Decimal;
      validator: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        slash: {
          force_unbond: forceUnbond,
          percentage,
          validator,
        },
      },
      fee,
      memo,
      funds
    );
  };
  receiveClaim = async (
    {
      amount,
      owner,
      validator,
    }: {
      amount: Uint128;
      owner: string;
      validator: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        receive_claim: {
          amount,
          owner,
          validator,
        },
      },
      fee,
      memo,
      funds
    );
  };
  unstake = async (
    {
      amount,
      validator,
    }: {
      amount: Uint128;
      validator: string;
    },
    fee: number | StdFee | "auto" = "auto",
    memo?: string,
    funds?: Coin[]
  ): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        unstake: {
          amount,
          validator,
        },
      },
      fee,
      memo,
      funds
    );
  };
  unbond = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(
      this.sender,
      this.contractAddress,
      {
        unbond: {},
      },
      fee,
      memo,
      funds
    );
  };
}
