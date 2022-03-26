"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => (text.length > 3) ? true : false;
    Validations.validateDate = (myDate) => (isNaN(myDate.valueOf())) ? true : false;
})(Validations || (Validations = {}));
console.log(Validations.validateText('Freddy'));
//# sourceMappingURL=main.js.map