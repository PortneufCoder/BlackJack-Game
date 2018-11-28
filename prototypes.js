'use strict';

let cat = { name: "mimi", sheen: "Black", speak: () => "meooow" };
cat.age = 4;

console.log(cat.age);
console.log(cat.speak());
console.log(cat);


// Creating objects using classes
// class Dog {
//   constructor(name, color, breed) {
//     this.name = name;
//     this.color = color;
//     this.breed = breed;
//   }
//   }


function Dog(name, color, breed) {
    this.name = name;
    this.color = color;
    this.breed = breed;
}
  let myDog = new Dog('Scott', 'Black', 'Labrador');

console.log(Object.getOwnPropertyDescriptor(myDog, 'name'));
Object.defineProperty(myDog, 'color', {writable: false});

myDog.color = "Blue";

console.log(myDog.color); // this gives an error as I prevented property rewrite on line 29