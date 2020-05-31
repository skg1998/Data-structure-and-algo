//javascript is looking weired to  some due to its behaviour , to make it similar to other language  a change come in 2015
//called as ES6 


//var
//1. you can reassign
//it is not a blocked scoped
//3. allow hoisting
//4. global variable so when we create a variable a global window obect will create
var x=1;
var x=2;

if(true){
    var a = 1;
}
console.log(a)   //it will print a=1 ,doesnot show any error


//hoisting
console.log(h);   //h is hoisting and does not show any error
var h=2; 




//let

//1. you can not reassign
//2. blocked scoped
//3. we can not hoisting a variable with let 
//4. with let only local variable can create so no window object will create
let y=1;
let y=2;  //through an error

if(true){
    let b = 1;
}

console.log(b)   //it will does not  print  , show any error that b is not defined


//Hoisting
console.log(lh);    //show an error that lh is not defined
let lh =1;
