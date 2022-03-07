"use strict";
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
//# sourceMappingURL=type.js.map