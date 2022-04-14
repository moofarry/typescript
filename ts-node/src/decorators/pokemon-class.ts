function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false) => {
  if (print) {
    return printToConsole;
  }
  return () => {};
};

const blockPrototype = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

function validPokemonID() {
  return function name(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = (id: number) => {
      if (id < 1 || id > 200) {
        return console.error("the id between 1 and 200");
      } else {
        return originalMethod(id);
      }
    };
    // descriptor.value= () => console.log("Hello world");
  };
}

@blockPrototype
@printToConsoleConditional(true)
// executed before creating the class
export class Pokemon {
  public publicApi: string = "https://pokeapi.co";
  constructor(public name: string) {}

  @validPokemonID()
  savePokemonToDb(id: number) {
    console.log(`Pokemon into db ${id}`);
  }
}
