/* const person = {
    name: 'Jonathan',
    age: 30
} */

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}.`)
    }
}

// Export person 
module.exports = Person;