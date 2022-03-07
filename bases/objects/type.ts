(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };
  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocity", "Time travel"],
  };

  let superman: Hero = {
    name: "Clark Kent",
    age: 60,
    powers: ["Super velocity"],
    getName(){
      return this.name;
    }
  };

  console.log(flash.getName!());
})();
