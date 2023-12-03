import { Buffer } from 'buffer';

interface IMassaWalletInterface {
    account: IAccount;
    connect(): Promise<boolean>;
    connected: boolean;
    unlocked: boolean;
}
interface IMassaContractInterface {
    execSmartContract(contractAddress: string, functionName: string, parameter: Uint8Array, amount: bigint, fee: bigint, maxGas: bigint): Promise<ITransactionDetails>;
}
interface IMassaProvider {
    wallet: IMassaWalletInterface;
    contract: IMassaContractInterface;
}

/**
 * Response from an AccountBalance command.
 */
interface IAccountBalanceResponse {
    /** Final confirmed balance of the account */
    finalBalance: string;
    /** Pending balance of the account */
    candidateBalance: string;
}

/**
 * Output produced by the sign() method.
 */
interface IAccountSignOutput {
    /** Public key of the account */
    publicKey: string;
    /** Base58 encoded representation of the signed data */
    base58Encoded: string;
}

interface IAccount {
    address(): string;
    balance(): Promise<IAccountBalanceResponse>;
    sign(data: Buffer | Uint8Array | string): Promise<IAccountSignOutput>;
    buyRolls(amount: bigint, fee: bigint): Promise<ITransactionDetails>;
    sellRolls(amount: bigint, fee: bigint): Promise<ITransactionDetails>;
    sendTransaction(amount: bigint, recipientAddress: string, fee: bigint): Promise<ITransactionDetails>;
}

interface ITransactionDetails {
    operationId: string;
}

declare const web3: IMassaProvider;

export { web3 };
