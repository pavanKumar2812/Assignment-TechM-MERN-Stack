/* console.log("hello")

// Block scope
// Function Scope
// Gobal Scope

let name = "Pavan"
console.log(name)

{
    let name = "Kumar"
    console.log(name)
}

function sayMyName() {
    let name = "Walter White"
    console.log(name)
}
sayMyName() */

// Closure - When we return a function from another function 
// we are effectively returning a combination of a function defination along with the function scope
// that would let the function defination have an asociated persistent memory which could hold on to live 
// data between execution. The combination of the function and its scope chain is what is called a closure in JS

/* function outer() {
    let count = 0
    function inner() {
        count++
        console.log(count)
    }
    inner()
}
outer()
outer() */

/* function outer(){
    let count = 0
    function inner() {
        count++
        console.log(count)
    }
    return inner
}
const fn = outer()
fn()
fn() */

// Function Currying - Currying is a process in functional programming in which 
// we transform a function with multiple arguments into a sequence of nesting functions
// that take one argument at a time
// sum(a,b,c) becomes sum((a)(b)(c))


/*  function sum(a,b,c) {
    return console.log(`sum: ${a+b+c}`)
}
// sum(2,2,2) 

function curry(fn) {
    return function(a) {
        return function(b) {
            return function(c) {
                    return console.log(`sum: ${a+b+c}`)
                    // return `sum: ${a+b+c}`
            }
        }
    }
}

const curriedSum = curry(sum)
curriedSum(2)(3)(1) */

/* const add2 = curriedSum(2)
const add3 = add2(3)
const add1 = add3(1)
console.log(add1) */


// this keyword
// Order of precedence
// -> New Binding
// -> Explicit binding
// -> Implicit binding
// -> Default binding

/* function sayMyName(name) {
    console.log(name)
}

sayMyName("Walter White")
sayMyName("Thor") */

/* const person = { 
    name: "Pavan Kumar",
    sayMyName: function() {
        console.log(`My name is ${this.name} Implicit binding`)
    }
}

person.sayMyName()


globalThis.name = 'Joe' // -> Default binding
function sayMyName() {
    console.log(`My name is ${this.name} by Explicit binding`)
}
sayMyName()
sayMyName.call(person)

function Person(name) {
    this.name = name
}

const p1 = new Person('Pavan by New Binding')
const p2 = new Person('Prashanth by New Binding')

console.log(p1.name, p2.name)
 */


// Prototype

/* function Employe(fname,lname) {
    this.firstname = fname,
    this.lastname = lname
}

const Employe1 = new Employe("Pavan","Kumar")
const Employe2 = new Employe("Manoj","Kumar") */

/* Employe1.getFullName = function() {
    return `${this.firstname }  ${this.lastname}`
} */

/* Employe.prototype.getFullName = function() {
    return `${this.firstname} ${this.lastname}`
} */
//console.log(Employe1.getFullName())
// we have problem in declare in Employe2 so we use Prototype
//console.log(Employe2.getFullName())

  
// Prototypal inheritance

/* function Person(fname,lname) {
    this.firstName = fname
    this.lastName = lname
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

function SuperHero(fname,lname) {
    Person.call(this,fname,lname)
    this.isSuperHero = true
}
SuperHero.prototype.fightCrime = function() {
    console.log('Fighting Crime')
}
SuperHero.prototype = Object.create(Person.prototype)

const ironman = new  SuperHero('Tony','Stark')
SuperHero.prototype.constructor = SuperHero
console.log(ironman.getFullName()) */

// Class introduced in 2015

/* class Person {
    constructor(fname,lname) {
        this.firstName = fname
        this.lastName = lname
    } 
    sayMyName() {
        return this.firstName+ " " + this.lastName
    }
}

const classP1 = new Person('Bruce','Wayne')
console.log(classP1.sayMyName()) */

// iterables and iterators

const obj = {
    [Symbol.iterator]: function() {
        let step = 0
        const iterator = {
            next: function() {
                step++
                if(step === 1) {
                    return { value: "Hello", done: false }
                } else if (step === 2) {
                    return { value: "World", done: false }
                }
                return { value:undefined,done:true }
            },
        }
    }
}
for(const word of obj) {
    console.log(word)
}


