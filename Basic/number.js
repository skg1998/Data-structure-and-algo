//number Method

console.log(Number.parseInt(3.56));
console.log(Number.parseFloat(4.5666));

console.log(Number.parseFloat(4.56789).toFixed(2).toString());

let x = 1/'absccc';
console.log(Number.NaN);
console.log(NaN);
console.log(x);

if(x === NaN){
  console.log("NaN");
}else{s
  console.log("not a NaN");
}

if(isNaN(x) ){
  console.log(x);
}else{
  console.log("not a NaN");
}

