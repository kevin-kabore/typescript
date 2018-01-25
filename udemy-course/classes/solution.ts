// Exercise 1 - How was your TypeScript Class?
class Car {
  acceleration: number = 0;
  constructor(name: string) {}
  honk(): void {
    console.log('Toooooooooot!');
  }
  accelerate(speed: number) {
    this.acceleration = this.acceleration + speed;
  }
}

const car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(20);
console.log(car.acceleration);

// Exercise 2 - Inheritance

class BaseObject {
  width: number = 0;
  length: number = 0;
}
class Rectangle extends BaseObject {
  calcSize(): number {
    return this.width * this.length;
  }
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
// rectangle.calcSize = function() {
//   return this.width * this.length;
// };
console.log(rectangle.calcSize());

// Exercise 3 - Getters & Setters (Accessors)
// must set in tsconfig
class Person2 {
  private _firstName: string = ''; //underscore so we need to add getter and setter
  // private enumerable: boolean = true;
  // private configurable: boolean = true;

  get firstName(): string {
    // looks like a property but called like a prop
    return this._firstName;
  }
  set firstName(value: string) {
    if (value.length > 3) {
      this._firstName = value;
    } else {
      this._firstName = '';
    }
  }
}

let person = new Person2();
console.log(person.firstName); // empty log
person.firstName = 'Ma'; // doesn't pass
console.log(person.firstName); // returns empty string
person.firstName = 'Maximilian';
console.log(person.firstName);
