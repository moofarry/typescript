define(["require", "exports", "../generics/get-pokemon"], function (require, exports, get_pokemon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (0, get_pokemon_1.getPokemon)(150)
        .then(pokemon => console.log(pokemon.sprites.front_default))
        .catch(err => console.log(err))
        .finally(() => console.log('Fin de get'));
});
