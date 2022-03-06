(() => { 

  const hero : string = 'Flash';

  function returnName():string { return hero; }

  const activateBatmanSignal= ():string => 'BatmanSignal activated';

  console.log(typeof activateBatmanSignal);
  const heroName = returnName();
  

 })()