"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocity", "Time travel"],
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super velocity"],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutanPower(id) {
            return this.name;
        }
    }
})();
(() => {
    const customer = {
        name: "John",
        age: 23,
        address: {
            id: 213,
            zip: "K312 232",
            city: "Toronto",
        },
        getFullAddress(id) { return `customer with id ${id} live in ${this.address.city}`; }
    };
    console.log(customer.getFullAddress(22));
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => 10;
    let formatCrypto;
    formatCrypto = () => 123;
})();
//# sourceMappingURL=main.js.map