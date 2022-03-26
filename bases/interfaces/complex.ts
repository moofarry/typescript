(() => {
  interface Customer {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: number):string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const customer: Customer = {
    name: "John",
    age: 23,
    address: {
      id: 213,
      zip: "K312 232",
      city: "Toronto",
    },
    getFullAddress (id:number) {return `customer with id ${id} live in ${this.address.city}`}
  };

  console.log(customer.getFullAddress(22));

})();
