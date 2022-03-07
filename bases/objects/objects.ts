(() => {

  let flash : {name:string,age?:number, powers:string[], getName?: () => string }= {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocity", "Time travel"],
  };

  flash = {
    name: "Clark kent",
    powers: ["Super strength"],
    getName(){
      return this.name;
    }
  };

  console.log( flash.getName!() ) 

})();
