import {
  IAccountBalanceResponse,
  IAccountSignOutput,
  ITransactionDetails,
} from "./index";
import {Buffer} from "buffer";

export default interface IAccount {
  address(): string;

  balance(): Promise<IAccountBalanceResponse>;

  sign(data: Buffer | Uint8Array | string): Promise<IAccountSignOutput>;

  buyRolls(amount: bigint, fee: bigint): Promise<ITransactionDetails>;

  sellRolls(amount: bigint, fee: bigint): Promise<ITransactionDetails>;

  sendTransaction(
    amount: bigint,
    recipientAddress: string,
    fee: bigint,
  ): Promise<ITransactionDetails>;
}
