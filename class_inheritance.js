/*
Title: Assignment Ans Script: Module-03
Description: (7)Javascript class inheritance
Date: 13 Aug 23
*/

class Animal{
constructor(name, sound){
   this.name = name
   this.sound = sound
}
makeSound(){
   return `"${this.sound}"`
}
}

class Dog extends Animal{
   constructor(name, sound){
      super(name,sound)
   }
   makeSound(){
      return `${super.makeSound()}"`
   }
   fetch(){
      return '"Fetching the ball!"'
   }
}

const animal = new Animal("Lion", "Roar");
console.log(animal.makeSound()); // Output: "Roar"

const dog = new Dog("Buddy", "Woof");
console.log(dog.makeSound()); // Output: "Woof"
console.log(dog.fetch()); // Output: "Fetching the ball!"



