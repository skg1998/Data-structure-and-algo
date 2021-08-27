//configuration file : tsc --init

/** ***************************************************************************** */
//type infernce
/******************************************************************************* */
let id: number = 5;
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
