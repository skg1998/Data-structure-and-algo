# Functional Programming

>

# Higher Order Function

> Function which takes another function as an argument is called Higher Order Function and another function is know as callback function

```
//callback function
function x(){
    console.log("i am using as a callback function");
}

//Higher order function
function y(x){
    x();
}
```

## More Useable Example

> We are gonig to make a more useable HOF with just like a map function

```
const radius = [2,4,7,5];

const area = (radius) => {
  return Math.PI*radius*radius;
}

const circumference = (radius) => {
  return 2*Math.PI*radius;
}

const daimeter = (radius) => {
  return 2*radius;
}

// implements just like map function or pollyfill
Array.prototype.calculate = function(logic){
  const output = [];
  for(let i=0; i< this.length; i++){
    output.push(logic(this[i]));
  }
  return output;
}

console.log(radius.calculate(area))
```
