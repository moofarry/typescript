(() => {
  class Avenger {
    // private name: string;
    // private team: string;
    // public realName?: string;
    static avgAge: number = 35;
    static getAvgAge(){
      return this.name;
    }

    //short
    constructor(
      private name: string,
      private team: string,
      public realName?: string,
    ) {}


  public bio (){
    return `${this.name} (${this.team}!!)`
  }

  }


  // const antman: Avenger = new Avenger("antman", "capitan");
  // console.log(antman);
  // console.log(Avenger.getAvgAge());

})();
