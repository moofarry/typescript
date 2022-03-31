define(["require", "exports", "./generics/get-pokemon"], function (require, exports, get_pokemon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (0, get_pokemon_1.getPokemon)(2)
        .then(result => console.log(result))
        .catch(err => console.log(err))
        .finally(() => console.log('Fin de get'));
});
