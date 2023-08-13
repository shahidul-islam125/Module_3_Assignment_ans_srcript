/*
Title: Assignment Ans Script: Module-03
Description: (8)Javascript ES-6 Super keyword
Date: 13 Aug 23
*/

class Person{
constructor(name, age){
   this.name = name
   this.age = age
}
introduce(){
   return `Hello, my name is ${this.name} and I am ${this.age} years old`
}
}

class Student extends Person{
   constructor(name, age, major){
      super(name,age)
      this.major = major
   }
   introduce(){
    return `${super.introduce()}. I am majoring in ${this.major}.` 
   }  
}

const person1 = new Person("John", 30);

console.log(person1.introduce()); // Output: "Hello, my name is John and I am 30 years old."

const student1 = new Student("Alice", 20, "Computer Science");

console.log(student1.introduce()); // Output: "Hello, my name is Alice and I am 20 years old. I am majoring in Computer Science."




