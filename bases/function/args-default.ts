(() => { 

  const fullName = (firstName: string, lastName?: string, upper:boolean=false): string => {
    if(upper){
      return `${firstName} ${lastName || 'No lastName' }`.toUpperCase();
    }
    return `${firstName} ${lastName || 'No lastName' }`;
  }

  const name = fullName('Bruce', 'Wayne');

  console.log(name);
  

 })()