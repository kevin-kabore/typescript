// Create a generic Map (an Object like an Array, but instead with Key-Value Pairs).
// The key will always be a string.
class MyMap<T> {
  private map: { [key: string]: T } = {}; // map of type obj with key: string and value: T

  setItem(key: string, value: T) {
    this.map[`${key}`] = value;
  }
  getItem(key: string) {
    return this.map.hasOwnProperty(key) ? this.map[key] : null;
  }
  clear() {
    for (let key in this.map) {
      delete this.map[key];
    }
  }
  printMap() {
    for (let key in this.map) {
      console.log(key, this.map[key]);
    }
  }
}
// Let's keep it simple and only add the following methods to the Map:

// setItem( string, item: T) // should create a new key-value pair
// getItem(key: string) // should retrieve the value of the provided key
// clear() // should remove all key-value pairs
// printMap() // should output key-value pairs

// The map should be usable like shown below:

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
console.log(numberMap.getItem('apples'));
console.log(numberMap.getItem('bananas'));
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', 'Max');
stringMap.setItem('age', '27');
console.log(stringMap.getItem('name'));
console.log(stringMap.getItem('age'));
stringMap.printMap();
stringMap.clear();
