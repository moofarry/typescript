(() => {
  interface addTwoNumbers {
    (a: number, b: number): number;
  }

  let addNumbersFunction: addTwoNumbers;

  addNumbersFunction = (a: number, b: number) => 10;

  interface funcFormatCryptos {
    (a: number, b: number): void;
  }
  let formatCrypto: funcFormatCryptos;

  formatCrypto = () => 123;
})();
 