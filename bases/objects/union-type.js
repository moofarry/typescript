"use strict";
(function () {
    var myCustomVariable = 'Fernando';
    console.log(typeof myCustomVariable); // string
    myCustomVariable = 20;
    console.log(typeof myCustomVariable); // number
    myCustomVariable = {
        name: 'Bruce',
        age: 34,
        powers: ['Fli']
    };
    console.log(typeof myCustomVariable); // object
})();
//# sourceMappingURL=union-type.js.map