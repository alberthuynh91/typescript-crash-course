"use strict";
// Basic types
let id = 5;
let company = 'This is a string';
let isPublished = true;
let x = 'Hello';
let age;
age = 30;
let ids = [1, 2, 3, 4, 5]; // array that only contains numbers. would not be able to push on a value of type string ex: 'hi'
let arr = [1, 'albert', {}];
// Tuple - to specify the types that are allowed in the array. make note that tuples retain the order [1, false, 'dude'] would throw and error
let person = [1, 'dude', false];
// Tuple array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
];
// Unions - if you want a variable to hold more than one type
let pid = 4; // pid can be a string or number
// Enum (enumerated type) - allow us to defined a set of named constants either numeric or string
// sets the numeric values 0, 1, 2, 3. If you change up to = 1, it changes the rest to 2, 3, 4
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Down); // this returns value of 1
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left); // returns string of 'Left'
// Objects
const user = {
    id: 1,
    name: 'John',
};
const user1 = {
    id: 5,
    name: 'Bert',
};
// Type Assertion - explicitly telling the complier that we want to treat an entity as a different type
let cid = 1;
let customerId = cid; // using <> to tell that want to use a number
// let customerId = cid as number - this is another way to writing the above
// customerId = false // throws error because it should be a number
// Functions
// we gave the parameters and return value type number
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
// console.log(addNum(1, 'two')) // this throws an error because the 2nd parameter was defined as a number not a string
// no return value here so we need to use void return type
function log(message) {
    console.log(message);
}
// In this case where we describe objects we should use interface over a type but its kinda a preferance
const user5 = {
    id: 1,
    name: 'John'
};
const p1 = 1;
const add = (x, y) => {
    return x + y;
};
// this would error because we defined string as the return value but MathFunc interface has a return type of number
// const add: MathFunc = (x: number, y: number): string => {
//     return x + y
// }
// 2nd example of using MathFunc interface
const sub = (x, y) => {
    return x - y;
};
// Classes - available in JS via es6
// classes are used to create objects so we can create multiple Person objects using this class
class Person {
    // a method which are just functions within the class
    // will run whenever an object is instantiated from that class
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
        console.log(123); // this is ran when bert is instantiated
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const bert = new Person(1, 'bert', 31);
const mike = new Person(2, 'mike', 36);
console.log(bert, mike); // outputs two person objects
// Private or protected
// class Person {
//     private id: number // only should be accessed within the class
// }
// bert.id // would give us an error because its private
// class Person {
//     protected id: number // only should be accessed within the class or a class thats extended from this class
// }
console.log(mike.register()); // method in the class
// Extending a class (subclass)
class Employee extends Person {
    constructor(id, name, age, position) {
        super(id, name, age); // same as using this.id = id, this.name = name, this.age = age
        this.position = position; // this needs to happen because we are extending the class
    }
}
const emp = new Employee(3, 'shawn', 22, 'engineer');
console.log(emp.register()); // we can use this because it was in the Person class that was extended
// Generics - used to build reusable components
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'john', 'suzie']);
numArray.push('hello'); // no error here because it takes in an array or anything and returns a value or anything
// <T> is using generics here. Helps us define better reusable components with the placeholder T
function getArrayBetter(items) {
    return new Array().concat(items);
}
let betterNumArray = getArrayBetter([1, 2, 3, 4]);
let betterStrArray = getArrayBetter(['brad', 'john', 'suzie']);
