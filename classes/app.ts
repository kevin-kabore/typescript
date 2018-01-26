class Person {
  public name: string; // public by default in javaScript
  private type: string; // typescript key word to make private only available from within THIS object
  protected age: number = 23; // available in children of this class

  constructor(name: string, public username: string) {
    this.name = name;
  }

  printAge() {
    console.log(this.age);
  }

  setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}
// can reduce code by placing public and type in constructor so no need to assign
class Person1 {
  constructor(public name: string, public username: string) {
    // same as declaring then assigning constructor's arguments to properties
  }
}

const person = new Person('Kevin', 'kevintheUser'); // makes username available because of constructor set up
console.log(person);
person.printAge();
person.setType('Amazing');
// person.type or person.age not accessible
