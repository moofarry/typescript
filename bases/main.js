"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class XMen extends Mutant {
        worldSave() {
            return "Wolrd is save!";
        }
    }
    class Villian extends Mutant {
        destroyWOrld() {
            return "Distroy The world!";
        }
    }
    const wolverine = new XMen("Wolverine", "Logan");
    const magneto = new Villian("Magneto", "Magnus");
    const printName = (character) => console.log(character.realName);
})();
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
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class XMen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        geFullNameXMen() {
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
})();
(() => {
    class Apocalypse {
        constructor(name) {
            this.name = name;
        }
        static callApocalypse() {
            if (!Apocalypse.instance) {
                Apocalypse.instance = new Apocalypse("Im Apocalypse, The only one");
            }
            return Apocalypse.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalypse1 = Apocalypse.callApocalypse();
    const apocalypse2 = Apocalypse.callApocalypse();
    apocalypse1.changeName("Xavier");
})();
//# sourceMappingURL=main.js.map