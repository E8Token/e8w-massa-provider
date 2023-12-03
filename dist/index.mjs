var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.ts
var make = () => {
  return new Promise((resolve, reject) => {
    window.addEventListener(
      "e8wallet#initialized",
      () => __async(void 0, null, function* () {
        var _a, _b;
        if (globalThis.window && !!((_a = globalThis.window) == null ? void 0 : _a.e8massa)) {
          resolve((_b = globalThis.window) == null ? void 0 : _b.e8massa);
        }
        reject(new Error("Can`t get injection energy8 massa provider"));
      })
    );
  });
};
var web3 = make();
export {
  web3
};
//# sourceMappingURL=index.mjs.map