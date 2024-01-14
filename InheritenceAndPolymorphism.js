class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet = () => {
    console.log(`this animals name is ${this.name} and its age is ${this.age}`);
  };

  // ABSTRACTION
  // method to be implemented by subclasses
  showCharacteristics = () => {};
}

// INHERITENCE
class Predetor extends Animal {
  constructor(name, age, power, characteristics) {
    super(name, age);
    // ENCAPSULTAION
    // use encapsulation here to make it private (in JS underscore makes it private)
    this._power = power;
    this._characteristics = characteristics;
  }

  // POLYMORPHISM
  greet = () => {
    console.log(
      `this predetors name is ${this.name} and its age is ${this.age}, and it has a power of ${this.power} and a characteristic of ${this.characteristics}`
    );
  };
}

let a1 = new Animal("tiger", 5);
a1.greet();
