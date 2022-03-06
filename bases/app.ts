(() => {

  // Tipos
  const batman:string = 'Bruce';
  const superman:string = 'Clark';

  const existe:boolean = false;

  // Tuples
  const parejaHeroes:[string,string] = [batman,superman];
  const villano:[string,number,boolean] = ['Lex Luto',5,true];

  // Arreglos
  const allies:string[] = ['Mujer Maravilla','Aqua-man','San', 'Flash'];

  //Enumeraciones
  enum Power {
    fuerzaAquaman,
    fuerzaBatman,
    fuerzaFlash=5,
    fuerzaSuperman=100,
  }
  const fuerzaFlash:Power =  Power.fuerzaAquaman
  const fuerzaSuperman:Power =  Power.fuerzaBatman
  const fuerzaBatman:Power = Power.fuerzaFlash
  const fuerzaAcuaman:Power =  Power.fuerzaSuperman

  // Retorno de funciones
  function activar_batiseñal():string{
    return 'activada';
  }

  function pedir_ayuda():void{
    console.log('Auxilio!!!');
  }

  // Aserciones de Tipo
  const poder: any = '100';
  const largoDelPoder:number = (poder as string).length;
  console.log( largoDelPoder );


})()

