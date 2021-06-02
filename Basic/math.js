var numbers = [ 10,5,89,54,76,200,199];
console.log(Math.random());
console.log(Math.min(null ,10,5,89,54,76,200,199));


console.log(Math.max(null,10,5,89,54,76,200,199));  //Math.max doesnot accept a array
//const number = [1,4,7,9,4];
//console.log(Math.max(number));
//it will give => " NaN"

console.log(Math.min.apply(null,numbers));
console.log(Math.ceil(3.5));
console.log(Math.floor(3.5));
console.log(Math.abs(-4));
console.log(Math.pow(3,5));
console.log(Math.log(3));
console.log(Math.sin(3));
console.log(Math.cos(3));
console.log(Math.tan(3));
console.log(Math.round(3.6));