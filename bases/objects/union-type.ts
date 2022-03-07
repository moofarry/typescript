(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  let myCustomVariable : (string | number | Hero) = 'Fernando'
  console.log(typeof myCustomVariable);  // string

  myCustomVariable = 20
  console.log(typeof myCustomVariable);  // number

  myCustomVariable = {
    name: 'Bruce',
    age:34,
    powers: ['Fli']
  }
  console.log(typeof myCustomVariable);  // object
  
  

})();
