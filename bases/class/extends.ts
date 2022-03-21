(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log("Named Avenger builder!!");
    }

    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class XMen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      console.log("Named XMen builder!!");
    }
    public geFullNameXMen() {
      console.log(super.getFullName());
    }

    get fullName() {
      return `${this.name} - ${this.realName}`;
    }
    set fullName(name: string) {
      if (name.length < 3) {
        throw new Error("The name must be greater than 3 letters");
      }
      this.name = name;
    }
  }

  const wolverine = new XMen("Wolverine", "Logan", true);
  // console.log(wolverine);
  // wolverine.geFullNameXMen();
  wolverine.fullName = "Val";
  console.log(wolverine.fullName);
})();
