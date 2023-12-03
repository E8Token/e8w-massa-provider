import {IAccount, ITransactionDetails} from "./index";

export interface IMassaWalletInterface {
    account: IAccount
    connect(): Promise<boolean>
    connected: boolean
    unlocked: boolean
}

export interface IMassaContractInterface {
    execSmartContract(
        contractAddress: string,
        functionName: string,
        parameter: Uint8Array,
        amount: bigint,
        fee: bigint,
        maxGas: bigint,
    ): Promise<ITransactionDetails>
}

export interface IMassaProvider {
    wallet: IMassaWalletInterface
    contract: IMassaContractInterface
}