(() => {
  let avenger: any = 123;
  let exist;
 

  avenger = "Dr Strange";

  console.log((avenger as string).charAt(0));

  avenger = 50.235232;
  console.log(<number>avenger.toFixed(2));
})();
