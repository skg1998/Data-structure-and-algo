//configuration file : tsc --init

/** ***************************************************************************** */
//type infernce
/******************************************************************************* */
let Id: number = 5;
let company: string = 'Barozgaar';
let isPublished: boolean = false;
let income: any = 50000;
let ids: number[] = [1, 2, 3, 4, 5]; //array
let person: [number, string, boolean] = [1, 'topi', true]; // Tuples
let employ: [number, string][] = [
  [1, 'dev'],
  [2, 'topi'],
];

/** ***************************************************************************** */
//Union
/******************************************************************************* */
let pid: string | number = 22;

/** ***************************************************************************** */
//enum
/******************************************************************************* */
enum Direction {
  UP, //value =0
  Down, //value =1
  Left, //value = 2
  Right, // value = 3
}

enum Directions {
  Up = 'UP',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

/** ***************************************************************************** */
// Object
/******************************************************************************* */
//const user: { id: number; name: string } = { id: 1, name: 'user' };  // 1 way

type User = {
  id: number;
  name: string;
};
const user: User = { id: 1, name: 'user' };

/** ***************************************************************************** */
//Type Assertion
/******************************************************************************* */
let cid: any = 1;
let customerId = <number>cid; // way 1
let productId = cid as number; // way 2

//Function

function add(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

//Interface
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number; // ? make it optional
}

const user1: UserInterface = {
  id: 1,
  name: 'test',
};

interface mathFunc {
  (x: number, y: number): number;
}

const sum: mathFunc = (x: number, y: number): number => x + y;
const sub: mathFunc = (x: number, y: number): number => x + y;

//classes

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const test1 = new Person(1, 'test1');
const test2 = new Person(2, 'test2');

//

class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const sew = new Employee(1, 'sew', 'developer');

//Generices

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['brad', 'test', 'tttt']);
