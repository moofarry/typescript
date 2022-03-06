"use strict";
// basic function
var addNumber = function (a, b) { return a + b; };
var count = function (heros) { return heros.length; };
var heros = ["Flash", "Arrow", "Superman", "Linterna Verde"];
count(heros);
//default parameters
var callBatman = function (call) {
    if (call === void 0) { call = true; }
    if (call) {
        console.log("BatmanSignal");
    }
};
callBatman();
// Rest?
var uniteHeroes = function (persons) { return " ".concat(persons.join(' ')); };
// type FUNCTION
var nothingTodo = function (num, txt, bool, arr) { };
// Crear el tipo de funcion que acepte la funcion "nothingTodo"
var nothingTodoToo;
nothingTodoToo = nothingTodo;
