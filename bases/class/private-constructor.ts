(() => {
  class Apocalypse {
    static instance: Apocalypse;

    constructor(public name: string) {}

    static callApocalypse(): Apocalypse {
      if (!Apocalypse.instance) {
        Apocalypse.instance = new Apocalypse("Im Apocalypse, The only one");
      }
      return Apocalypse.instance;
    }

    changeName(newName: string): void {
      this.name = newName;
    }
  }

  const apocalypse1 = Apocalypse.callApocalypse();
  const apocalypse2 = Apocalypse.callApocalypse();

  // console.log(apocalypse1, apocalypse2);

  apocalypse1.changeName("Xavier");
  // console.log(apocalypse1, apocalypse2);
})();
