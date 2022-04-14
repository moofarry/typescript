function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false) => {
  if (print) {
    return printToConsole;
  }
  return () => {};
};

const blockPrototype= function(constructor:Function) {
  Object.seal(constructor)
  Object.seal(constructor.prototype)
  
}

@blockPrototype
@printToConsoleConditional(true)
// executed before creating the class
//@printToConsole
export class Pokemon {
  public publicApi: string = "https://pokeapi.co";
  constructor(public name: string) {}
}
