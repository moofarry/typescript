(() => { 

  const fullName = (firstName: string, lastName?: string): string =>  `${firstName} ${lastName || 'No lastName' }`;

  const name = fullName('Bruce');

  console.log({name});
  

 })()