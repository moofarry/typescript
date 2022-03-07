"use strict";
var batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
var bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar: function () {
        console.log("Disparando");
    }
};
var villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
var charles = {
    poder: "psiquico",
    estatura: 1.78
};
var apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
var mystique;
mystique = charles;
mystique = apocalipsis;
(function () {
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Luto', 5, true];
    var allies = ['Mujer Maravilla', 'Aqua-man', 'San', 'Flash'];
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
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
var addNumber = function (a, b) { return a + b; };
var count = function (heros) { return heros.length; };
var heros = ["Flash", "Arrow", "Superman", "Linterna Verde"];
count(heros);
var callBatman = function (call) {
    if (call === void 0) { call = true; }
    if (call) {
        console.log("BatmanSignal");
    }
};
callBatman();
var uniteHeroes = function (persons) { return " ".concat(persons.join(' ')); };
var nothingTodo = function (num, txt, bool, arr) { };
var nothingTodoToo;
nothingTodoToo = nothingTodo;
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return "".concat(firstName, " ").concat(lastName || 'No lastName').toUpperCase();
        }
        return "".concat(firstName, " ").concat(lastName || 'No lastName');
    };
    var name = fullName('Bruce', 'Wayne');
    console.log(name);
})();
(function () {
    var fullName = function (firstName, lastName) { return "".concat(firstName, " ").concat(lastName || 'No lastName'); };
    var name = fullName('Bruce');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) { return "".concat(firstName, " ").concat(lastName); };
    var name = fullName('Bruce', 'Wayne');
})();
(function () {
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(restArgs.join(' '));
    };
    var superman = fullName('Clark', 'Josep', 'Kent', 'any', '...');
    console.log({ superman: superman });
})();
(function () {
    var addNumber = function (a, b) { return a + b; };
    var greet = function (name) { return " Hola ".concat(name); };
    var saveTheWorld = function () { return " The Wold its ok!"; };
    var myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(function () {
    var hero = 'Flash';
    function returnName() { return hero; }
    var activateBatmanSignal = function () { return 'BatmanSignal activated'; };
    console.log(typeof activateBatmanSignal);
    var heroName = returnName();
})();
(function () {
    var flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocity", "Time travel"],
    };
    flash = {
        name: "Clark kent",
        powers: ["Super strength"],
        getName: function () {
            return this.name;
        }
    };
    console.log(flash.getName());
})();
(function () {
    var flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocity", "Time travel"],
    };
    var superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super velocity"],
        getName: function () {
            return this.name;
        }
    };
    console.log(flash.getName());
})();
(function () {
    var myCustomVariable = 'Fernando';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 34,
        powers: ['Fli']
    };
    console.log(typeof myCustomVariable);
})();
(function () {
    var avenger = 123;
    var exist;
    avenger = "Dr Strange";
    console.log(avenger.charAt(0));
    avenger = 50.235232;
    console.log(avenger.toFixed(2));
})();
(function () {
    var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var heros = ["iron-man", "thor", "hulk", "spiderman", "antman"];
    heros.forEach(function (v) { return console.log(v); });
})();
(function () {
    var isSuperman = true;
    console.log({ isSuperman: isSuperman });
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["low"] = 0] = "low";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudioLevel = AudioLevel.medium;
    console.log(currentAudioLevel);
    console.log(AudioLevel);
})();
(function () {
    var error = function (message) {
        if (message === 'error') {
            throw new Error('New error');
        }
        return 1;
    };
    error('error');
    console.log('hello world');
})();
(function () {
    var nada = undefined;
    console.log(nada);
})();
(function () {
    var batman = "batman";
    var superman = "superman";
    var flash = "flash";
    console.log(batman, superman, flash);
    console.log("".concat(batman.toUpperCase(), " ").concat(superman.toUpperCase(), " ").concat(flash));
})();
(function () {
    var persons = ["Valentina ", 21, true];
    persons[0] = "Valentina";
    persons[1] = 21;
    persons[2] = true;
})();
(function () {
    function callBatman() {
    }
    var callSuperman = function () {
        console.log("i'm the best");
    };
    var a = callBatman();
    console.log(a);
    callSuperman();
})();
//# sourceMappingURL=main.js.map