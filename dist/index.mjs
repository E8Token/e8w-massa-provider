// src/index.ts
function main() {
  if (globalThis.window && globalThis.window["e8massa"]) {
    return globalThis.window["e8massa"];
  }
  throw new Error("Can`t get injection energy8 massa provider");
}
var web3 = main();
export {
  web3
};
//# sourceMappingURL=index.mjs.map