var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Pokemon = void 0;
    function printToConsole(constructor) {
        console.log(constructor);
    }
    const printToConsoleConditional = (print = false) => {
        if (print) {
            return printToConsole;
        }
        return () => { };
    };
    const blockPrototype = function (constructor) {
        Object.seal(constructor);
        Object.seal(constructor.prototype);
    };
    let Pokemon = 
    // executed before creating the class
    //@printToConsole
    class Pokemon {
        constructor(name) {
            this.name = name;
            this.publicApi = "https://pokeapi.co";
        }
        savePokemonToDb(id) {
            console.log(`Pokemon into db ${id}`);
        }
    };
    Pokemon = __decorate([
        blockPrototype,
        printToConsoleConditional(true)
        // executed before creating the class
        //@printToConsole
    ], Pokemon);
    exports.Pokemon = Pokemon;
});
