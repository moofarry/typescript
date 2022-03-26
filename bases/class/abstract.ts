(() => {
  //sirve para crear otras clsaes o  especificar que espero un argumento de este tipo
  class Mutant {
    constructor(public name: string, public realName: string) {}
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

  // console.log(wolverine.worldSave());
  // console.log(magneto.destroyWOrld());

  const printName = (character: Mutant) => console.log(character.realName);

  // printName(magneto)
})();
