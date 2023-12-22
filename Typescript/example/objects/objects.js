"use strict";
(() => {
    //  let flash: { name:string, age:number, powers:string[], getName:() => string } = {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viaja en el tiempo',],
        getName() {
            return this.name;
        }
    };
    let superman = {
        name: 'Clark Kent',
        age: 28,
        powers: ['Super fuerza'],
        getName() {
            return this.name;
        }
    };
    console.log(flash.getName());
    console.log(superman.getName());
})();
