"use strict";
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
//# sourceMappingURL=objects.js.map