(() => {
  interface XMen {
    name: string;
    realName: string;
    mutanPower(id: number): string;
  }

  interface Human {
    age: number;
  }
  class Mutant implements XMen, Human {
    constructor(
      public age: number,
      public name: string,
      public realName: string
    ) {}

    mutanPower(id: number): string {
      return this.name;
    }
  }
})();
