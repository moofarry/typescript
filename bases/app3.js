"use strict";
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
//# sourceMappingURL=app3.js.map