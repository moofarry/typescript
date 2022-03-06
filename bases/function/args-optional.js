"use strict";
(function () {
    var fullName = function (firstName, lastName) { return "".concat(firstName, " ").concat(lastName || 'No lastName'); };
    var name = fullName('Bruce');
    console.log({ name: name });
})();
