import {IMassaProvider} from "./types";

const make = (): Promise<IMassaProvider> => {
    return new Promise((resolve, reject) => {
        window.addEventListener(
            'e8wallet#initialized',
            async () => {
                if (globalThis.window && !!(globalThis.window as any)?.e8massa) {
                    resolve((globalThis.window as any)?.e8massa as IMassaProvider)
                }

                reject(new Error('Can`t get injection energy8 massa provider'))
            }
        )
    })
}

export const web3: Promise<IMassaProvider> = make();