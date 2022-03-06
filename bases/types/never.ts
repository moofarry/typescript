(() => { 

  const error =  (message :string):(never | number) => {
    if (message==='error') {
      throw new Error('New error');    
    }
    return 1;
  }

  error('error');
  console.log('hello world');
  

 })()