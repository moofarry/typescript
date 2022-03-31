define(["require", "exports", "../generics/generics"], function (require, exports, generics_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // const name: string = 'Jhon Freddy';
    // console.log(GenericFunctionArrow(23123).toFixed(2));
    // console.log(GenericFunctionArrow(name).toUpperCase());
    // console.log(GenericFunctionArrow(new Date()).getDate());
    const deadPool = {
        name: 'Dead pool',
        realName: 'Wade Winston Wilson',
        dangerLevel: 130
    };
    console.log((0, generics_1.GenericFunctionArrow)(deadPool));
});
