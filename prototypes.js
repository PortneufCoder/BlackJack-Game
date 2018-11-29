
let cat = { name: "mimi", sheen: "Black", speak: () => "meooow" };
cat.age = 4;

console.log(cat.age);
console.log(cat.speak());
console.log(cat);


// Creating objects using classes
class Dog {
  constructor(name, color, breed) {
    this.name = name;
    this.color = color;
    this.breed = breed;
  }
  }


function Dog (name, color, breed) {
    this.name = name;
    this.color = color;
    this.breed = breed;
}
  let myDog = new Dog('Scott', 'Black', 'Labrador');

console.log(Object.getOwnPropertyDescriptor(myDog, 'name'));
Object.defineProperty(myDog, 'color', {writable: false});

myDog.color = "Blue";

console.log(myDog.color); // this gives an error as I prevented property rewrite on line 29

let continents = { 
    name: {country: 'Japan', tree: 'Blossoms'}, 
    tree: {country: 'SouthAfrica', tree: 'Roobois'} 
};

Object.freeze(continents.name)
continents.name.country = 'Korea'; // this won't work as Objects.freeze will stop the edit of the object name and its attributes
console.log(continents.name.country);

//for ... in 

for ( let propertyName in continents) {
    let myValues = `propertyName ${continents[propertyName]}`;
    console.log(myValues);
}

// prototypal inheritance

let myArr = ["green", "brown", "yellow"];

Object.defineProperty(Array.prototype, 'last', {get: function() {
    return this[this.length-1];
}});

let last = myArr.last; // this gets me "yellow"
console.log(last);