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
    //factory decorator
    function validPokemonID() {
        return function name(target, propertyKey, descriptor) {
            const originalMethod = descriptor.value;
            descriptor.value = (id) => {
                if (id < 1 || id > 200) {
                    return console.error("the id between 1 and 200");
                }
                else {
                    return originalMethod(id);
                }
            };
            // descriptor.value= () => console.log("Hello world");
        };
    }
    function readOnly(isWritable = true) {
        return function (target, propertyKey) {
            const descriptor = {
                get() {
                    console.log(this);
                    return 'Jhon';
                },
                set(value) {
                    //console.log(this,value);
                    Object.defineProperty(this, propertyKey, {
                        value: value,
                        writable: !isWritable,
                        enumerable: false,
                    });
                }
            };
        };
    }
    let Pokemon = 
    // executed before creating the class
    class Pokemon {
        constructor(name) {
            this.name = name;
            this.publicApi = "https://pokeapi.co";
        }
        savePokemonToDb(id) {
            console.log(`Pokemon into db ${id}`);
        }
    };
    __decorate([
        validPokemonID()
    ], Pokemon.prototype, "savePokemonToDb", null);
    Pokemon = __decorate([
        blockPrototype,
        printToConsoleConditional(true)
        // executed before creating the class
    ], Pokemon);
    exports.Pokemon = Pokemon;
});
