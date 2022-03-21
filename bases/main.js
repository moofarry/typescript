"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getAvgAge() {
            return this.name;
        }
        bio() {
            return `${this.name} (${this.team}!!)`;
        }
    }
    Avenger.avgAge = 35;
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("Named Avenger builder!!");
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class XMen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log("Named XMen builder!!");
        }
        geFullNameXMen() {
            console.log(super.getFullName());
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error("The name must be greater than 3 letters");
            }
            this.name = name;
        }
    }
    const wolverine = new XMen("Wolverine", "Logan", true);
    wolverine.fullName = "Val";
    console.log(wolverine.fullName);
})();
//# sourceMappingURL=main.js.map