import {IMassaProvider} from "./types";

function main() {
    if (globalThis.window && (globalThis.window as any)['e8massa']) {
        return (globalThis.window as any)['e8massa'] as IMassaProvider;
    }

    throw new Error('Can`t get injection energy8 massa provider')
}

export const web3 = main();
