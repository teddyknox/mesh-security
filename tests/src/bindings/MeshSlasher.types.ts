/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.17.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

export interface InstantiateMsg {
  owner: string;
}
export type ExecuteMsg = {
  submit_evidence: {
    amount: Decimal;
    validator: string;
  };
};
export type Decimal = string;
export type QueryMsg = {
  config: Record<string, never>;
};
export interface ConfigResponse {
  owner: string;
  slashee: string;
}
