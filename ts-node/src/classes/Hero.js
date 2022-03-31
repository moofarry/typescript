define(["require", "exports", "../data/powers"], function (require, exports, powers_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Hero = void 0;
    class Hero {
        constructor(name, powerId, age) {
            this.name = name;
            this.powerId = powerId;
            this.age = age;
        }
        get power() {
            var _a, _b;
            return (_b = (_a = powers_1.powers.find(power => power.id === this.powerId)) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : 'not found';
        }
    }
    exports.Hero = Hero;
});
