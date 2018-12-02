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
  Animal.call(this);
  this.name = name;
  this.color = color;
  this.breed = breed;
}


let myDog = new Dog("Scott", "Black", "Labrador");
let secondDog = new Dog("Violette", "Ash", "Poodle");

console.log(myDog.age);
console.log(secondDog.age);
console.log(myDog.hasOwnProperty("age")); // false because the age property is on the prototype and not the object instance.

//Changing a function's prototype

Dog.prototype = {age: 15}; // this prototype is a new instance of the dog object, so it has a different age. So there a re two dog ages in memory. It points to a different object instance.
console.log(myDog.age);
console.log(Dog.prototype.age);
//Creating a prototypal inheritance chain
  
Dog.prototype.age = 13;


console.log(Object.getOwnPropertyDescriptor(myDog, "name"));
Object.defineProperty(myDog, "color", { writable: false });

myDog.color = "Blue";

console.log(myDog.color); // this gives an error as I prevented property rewrite on line 43

function Animal () {
}

Animal.prototype.speak = function () {
    return "Growl";
};



function Cat (name, species) {
  Animal.call(this);
  this.name = name;
  this.species = species;
}

Cat.prototype = Object.create(Animal.prototype);

let jenkins = new Cat('Jenkins', 'Persian');

console.log(jenkins);
console.log(jenkins.speak()); // inherits the speak function from the Animal prototype





// Whe we try to get a property from an object, JS will first check the object itself in the 'this' properites
// If nothing is found there, it checks the prototype and returns that if it exists.
// the instnace properties overide the protype properties, so if JS finds a value on the instance, it will stop checking.


// console.log(myDog._proto_);
// let findFacts = Dog.prototype === myDog._proto_ ? true : console.log("false");


let continents = {
  name: { country: "Japan", tree: "Blossoms" },
  tree: { country: "SouthAfrica", tree: "Roobois" }
};

Object.freeze(continents.name);
continents.name.country = "Korea"; // this won't work as Objects.freeze will stop the edit of the object name and its attributes
console.log(continents.name.country);

//for ... in

for (let propertyName in continents) {
  let myValues = `propertyName ${continents[propertyName]}`;
  console.log(myValues);
}

// prototypal inheritance

let myArr = ["green", "brown", "yellow"];

Object.defineProperty(Array.prototype, "last", {
  get: function() {
    return this[this.length - 1]; // this is what returns the last item
  }
});

let last = myArr.last; // this gets me "yellow"
console.log(last);

let protoFunc = function() {};
console.log(protoFunc.prototype);

let hunter = { name: "Marley" };
console.log(hunter._proto_);




