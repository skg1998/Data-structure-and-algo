//Pure function

//Higher Order function

//Closures

//curring
const multiple = (x) => (y) => x * y;
const multipleBy5 = multiple(5);
multipleBy5(4)
multipleBy5(3)

//compose : direction right to lift
const compose = (f, g) => (data) => f(g(data));
const multipleBy3 = (data) => data * 3;
const takePositive = (data) => Math.abs(data);
const multipleBy3takePositive = compose(multipleBy3, takePositive);
multipleBy3takePositive(-50);

//pipes

// arity