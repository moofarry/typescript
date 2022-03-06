"use strict";
(function () {
    var addNumber = function (a, b) { return a + b; };
    var greet = function (name) { return " Hola ".concat(name); };
    var saveTheWorld = function () { return " The Wold its ok!"; };
    var myFunction;
    //* myFunction = 10;
    //* console.log(myFunction);
    //? myFunction = addNumber
    //? console.log(myFunction(1,2))
    // myFunction = greet 
    // console.log(myFunction('John'))
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
