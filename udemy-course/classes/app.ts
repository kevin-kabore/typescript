class Person {
  public name: string; // public by default in javaScript
  private type: string; // typescript modifier to make private only available from within THIS object
  protected age: number = 23; // available in children of this class doesn't need to be initialized in constructor

  constructor(name: string, public username: string) {
    this.name = name;
  }
  printAge() {
    console.log(this.age);
    this.setType('Old Guy'); // must use keyword this
  }
  private setType(type: string) {
    this.type = type;
    console.log(type);
  }
}
// can reduce code by placing public and type in constructor so no need to assign
class Person1 {
  constructor(public name: string) {}
}

const person = new Person('Kevin', 'kevintheUser');
console.log(person);
person.printAge();
// person.setType('Amazing dude'); // won't work with private method

// Inheritance
class Kevin extends Person {
  // name = 'Kevin';
  constructor(username: string) {
    super('Kevin', username);
    this.age = 55; // available because protected not private
  }
}
// const kevin = new Kevin('Kirsten', 'kirstenTheUser'); // name will be Kevin since set in class declaration
const kevin = new Kevin('KevinTheUserName');
console.log(kevin);

//GETTERS & SETTERS
console.log('GETTERS & SETTERS');
class Plant {
  private _species: string = 'Default';

  get species(): string {
    // will be called like a property not method
    return this._species;
  }

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = 'Default';
    }
  }
}

let plant = new Plant();
console.log(plant.species); // getter called like a prop not method
// return "Default"
plant.species = 'AB'; // setter called like a prop not method
console.log(plant.species);
// returns default because didn't pass if statement
plant.species = 'Green plant';
console.log(plant.species);
// returns "Green plant"

// STATIC PROPERTIES AND METHODS
// Mostly useful for helper classes like this one
class Helpers {
  static PI: number = 3.14;
  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}
// console.log(2 * Helpers.PI); // will not work without static keyword
console.log(2 * Helpers.PI); // works because of static keyword
console.log(Helpers.calcCircumference(5));

// ABSTRACT CLASSES
// Can't be instatiated, can only be extended
console.log('ABSTRACT CLASSES');
abstract class Project {
  projectName: string = 'Default';
  budget: number = 1000;

  abstract changeName(name: string): void; // does not desribe logic
  // must implement/overwrite method in child class

  calcBudget(): number {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}

// let newProject = new Project(); // cannot instantiate abstract class
let newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super New IT Project');
console.log(newProject);
// ABSTRACT CLASSES - need to be inherited
// provides a blue print as an abstract base class
