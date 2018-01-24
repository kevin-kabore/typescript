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
