/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global = When in the global scope, the value of this will be the window/console Object.
* 2. Implicit Binding = whenever a function is called by a preceding dot, the object before the dot is this
* 3. New Binding = Whenever a constructor function is used , this refers to the specific instance of the object that is created and returned by the constructor function 
* 4. Explicit binding = Whenever Javascript's call or apply method is used, this is explicitly defined.
*


* write out a code example of each explanation above
*/

// Principle 1
function sayAge(name) {
  "use strict"
  console.log(this);
  return name;
}
sayAge('Monkey D Luffy');
// code example for Window Binding

// Principle 2
const intern = {
  firstName: 'John',
  lastName: 'Miranda',
  greeting: 'Hello',
  sayHello: function (age) {
    return `${this.greeting} my name is ${this.firstName} ${this.lastName} and i am ${age} years old!`;
  }
}
intern.sayHello(23);


// code example for Implicit Binding

// Principle 3
function Intern(name) {
  this.greeting = 'Hello',
    this.name = name,
    this.speak = function () {
      return `${this.greeting} my name is ${name}`;
    }
}
const janine = new Intern('Janine');
const mikko = new Intern('Mikko');
console.log(janine.speak())
console.log(mikko.speak())
// code example for New Binding

// Principle 4
function Intern(name) {
  this.greeting = 'Hello',
    this.name = "mikko",
    this.age = 23;
  this.speak = function () {
    return `${this.greeting} my name is ${this.name} and i'am ${this.age} years old`;
  }
}
const janine = new Intern('Janine');
janine.speak.apply(janine, ...name);
// or janine.speak.apply(janine, name);
// code example for Explicit Binding