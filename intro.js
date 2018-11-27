let test = 25;

if (test < 4) {
    console.log("You won!")
} else if (test >= 25) {
    test = 30;
    console.log(Date(), test)
    console.log("oops, test changed!")
} else {
    console.log("Restart!")
}

let someFunction = () => {
    a = 6;
    b = 7
  
    return a * b
};

someFunction() 


let newFunction = someFunction() + 4;
console.log(newFunction);

testFunc = (firstNum, secondNum, thirdNum) => {
    let combineNum = ` Here's how it works: ${firstNum / secondNum * thirdNum}`
    return combineNum;
}

let result = testFunc(45, 5, 3);
console.log(result);

funcLoop = () => {
    let africa = [];
    let northAmerica = ['Canada', 'USA', 'Mexico', 'Magdalene Isls', 'Caicos Islands']

    if (northAmerica[2].charAt(0) === "M") {
        africa.push(northAmerica[2]);
        console.log(africa)
        let facts = northAmerica.splice(2, 1);
       
        console.log(facts)
        
    } else {
        console.log('nothing')
    }
}

funcLoop();

// testing array of objects

let testObject = {};
let testArray = new Array;

if (testArray !== undefined) {
    testArray.push('firstWord', 'secondWord')
    console.log(testArray)
    testArray.pop(1)
    console.log(testArray)
} else (
    console.log("wasn't undefined!")
)