import { GenericFunctionArrow } from "../generics/generics";
import { Villain } from "../interfaces";


// const name: string = 'Jhon Freddy';

// console.log(GenericFunctionArrow(23123).toFixed(2));
// console.log(GenericFunctionArrow(name).toUpperCase());
// console.log(GenericFunctionArrow(new Date()).getDate());


const deadPool ={
  name:'Dead pool',
  realName: 'Wade Winston Wilson',
  dangerLevel: 130
}

console.log(GenericFunctionArrow<Villain>(deadPool))


