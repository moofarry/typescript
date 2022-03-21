(() => {

  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    active: boolean;
    power: number;
  }

  const avengers:Avengers = {
    nick: "Samuel L. Jackson",
    ironman: "Robert Downey Jr.",
    vision: "Paul Bettany",
    active: true,
    power: 150.01565,
  };

  // const { power, vision } = avengers;
  // console.log(power.toFixed(2), vision.toLocaleUpperCase());

  const printAvenger = ({ironman, ...rest}: Avengers) => console.log(ironman, rest);

  printAvenger(avengers);

  const avengersArr: string[]   = ['Cap. America', 'Hulk', 'ironman']
  const [cap,,ironman] = avengersArr;
  console.log({cap,ironman});
  
})();
