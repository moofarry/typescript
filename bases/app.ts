
// basic function
const addNumber = (a:number, b:number):number =>   a + b; 

const count = (heros:string[]):number =>   heros.length; 

const heros:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
count(heros);


//default parameters
const callBatman = ( call:boolean=true ):void => {
  if( call ){
    console.log("BatmanSignal");
  }
}

callBatman();

// Rest?
const uniteHeroes = ( persons:string[] ) : string =>  ` ${persons.join(' ')}`

// type FUNCTION
const nothingTodo = ( num:number, txt:string, bool:boolean, arr:string[] )=> {}

// Crear el tipo de funcion que acepte la funcion "nothingTodo"
let nothingTodoToo: (num:number, txt:string, bool:boolean, arr:string[]) => void;
nothingTodoToo = nothingTodo