(() => { 

  const fullName = (firstName:string, ...restArgs:string[]):string =>  `${firstName} ${restArgs.join(' ')}`

  const superman = fullName('Clark', 'Josep', 'Kent', 'any','...')

  console.log({superman});
  

 })();