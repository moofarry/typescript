"use strict";
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuples
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Luto', 5, true];
    // Arreglos
    var allies = ['Mujer Maravilla', 'Aqua-man', 'San', 'Flash'];
    //Enumeraciones
    var Power;
    (function (Power) {
        Power[Power["fuerzaAquaman"] = 0] = "fuerzaAquaman";
        Power[Power["fuerzaBatman"] = 1] = "fuerzaBatman";
        Power[Power["fuerzaFlash"] = 5] = "fuerzaFlash";
        Power[Power["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(Power || (Power = {}));
    var fuerzaFlash = Power.fuerzaAquaman;
    var fuerzaSuperman = Power.fuerzaBatman;
    var fuerzaBatman = Power.fuerzaFlash;
    var fuerzaAcuaman = Power.fuerzaSuperman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=app2.js.map