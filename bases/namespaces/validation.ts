
// puedo agrupar muchas funciones
namespace Validations {
  export const validateText = (text:string) : boolean => (text.length>3) ? true : false;
  export const validateDate = (myDate : Date):boolean =>  (isNaN(myDate.valueOf())) ? true : false;
}


console.log(Validations.validateText('Freddy'));
