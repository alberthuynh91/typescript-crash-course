"use strict";

// Basic types
let id = 5;
let company: string = 'This is a string'
let isPublished: boolean = true
let x: any = 'Hello'

let age: number
age = 30

let ids: number[] = [1, 2, 3, 4, 5] // array that only contains numbers. would not be able to push on a value of type string ex: 'hi'
let arr: any = [1, 'albert', {}]


// Tuple - to specify the types that are allowed in the array. make note that tuples retain the order [1, false, 'dude'] would throw and error
let person: [number, string, boolean] = [1, 'dude', false]

// Tuple array
let employee: [number, string][]

employee = [
    [1, 'Brad'],
    [2, 'John'],
]


// Unions - if you want a variable to hold more than one type
let pid: string | number = 4 // pid can be a string or number


// Enum (enumerated type) - allow us to defined a set of named constants either numeric or string
// sets the numeric values 0, 1, 2, 3. If you change up to = 1, it changes the rest to 2, 3, 4
enum Direction1 {
    Up,
    Down,
    Left,
    Right,
}

console.log(Direction1.Down) // this returns value of 1

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

console.log(Direction2.Left) // returns string of 'Left'


// Objects
const user: {
id: number,
name: string,
} = {
    id: 1,
    name: 'John',
}

// Cleaner way to coding above would be
type User = {
    id: number
    name: string
}

const user1: User = {
    id: 5,
    name: 'Bert',
}

// Type Assertion - explicitly telling the complier that we want to treat an entity as a different type
let cid: any = 1
let customerId = <number>cid // using <> to tell that want to use a number
// let customerId = cid as number - this is another way to writing the above

// customerId = false // throws error because it should be a number


// Functions
// we gave the parameters and return value type number
function addNum(x: number, y: number): number {
    return x + y
}

console.log(addNum(1, 2))
// console.log(addNum(1, 'two')) // this throws an error because the 2nd parameter was defined as a number not a string

 // no return value here so we need to use void return type
function log(message: string | number): void {
    console.log(message)
}


// Interfaces - a custom type or a specific structure to an object or a function. 
interface UserInterface {
    id: number
    name: string
}

// In this case where we describe objects we should use interface over a type but its kinda a preferance
const user5: UserInterface = {
    id: 1,
    name: 'John'
}

// A type can be used with primitives and unions
type Point = number | string
const p1: Point = 1

// if you tried to do the above with an interface it would not work. You can use an interface with primitives or unions
// interface Point = number | string

// Usually you should use interface when defining objects



// Option
interface UserInterfaceWithOptionalProperties {
    id: number
    name: string
    age?: number // age is the optional parameter denoted with '?'
}


// Readonly
interface UserInterfaceWithReadOnlyProperty {
    readonly id: number // id is read only and cannot be changed
    name: string
    age?: number
}

// user1.id = 5  // this errors because id is read only as defined above

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => {
    return x + y
}

// this would error because we defined string as the return value but MathFunc interface has a return type of number
// const add: MathFunc = (x: number, y: number): string => {
//     return x + y
// }

// 2nd example of using MathFunc interface
const sub: MathFunc = (x: number, y: number): number => {
    return x - y
}

interface PersonInterface {
    id: number
    name: string
    register(): string // a method that returns a string
}

// Classes - available in JS via es6
// classes are used to create objects so we can create multiple Person objects using this class
class Person implements PersonInterface {
    id: number
    name: string
    age: number

    // a method which are just functions within the class
    // will run whenever an object is instantiated from that class
    constructor(id: number, name: string, age: number) {
        this.id = id
        this.name = name
        this.age = age
        console.log(123) // this is ran when bert is instantiated
    }

    register() {
        return `${this.name} is now registered`
    }
}

const bert = new Person(1, 'bert', 31)
const mike = new Person(2, 'mike', 36)

console.log(bert, mike) // outputs two person objects

// Private or protected
// class Person {
//     private id: number // only should be accessed within the class
// }

// bert.id // would give us an error because its private

// class Person {
//     protected id: number // only should be accessed within the class or a class thats extended from this class
// }

console.log(mike.register()) // method in the class


// Extending a class (subclass)
class Employee extends Person {
    position: string

    constructor(id: number, name: string, age: number, position: string) {
        super(id, name, age) // same as using this.id = id, this.name = name, this.age = age
        this.position = position // this needs to happen because we are extending the class
    }
}

const emp = new Employee(3, 'shawn', 22, 'engineer')

console.log(emp.register()) // we can use this because it was in the Person class that was extended


// Generics - used to build reusable components
function getArray(items: any[]): any[] {
    return new Array().concat(items)
}

let numArray = getArray([1, 2, 3, 4])
let strArray = getArray(['brad', 'john', 'suzie'])

numArray.push('hello') // no error here because it takes in an array or anything and returns a value or anything

// <T> is using generics here. Helps us define better reusable components with the placeholder T
function getArrayBetter<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let betterNumArray = getArrayBetter<number>([1, 2, 3, 4])
let betterStrArray = getArrayBetter<string>(['brad', 'john', 'suzie'])
