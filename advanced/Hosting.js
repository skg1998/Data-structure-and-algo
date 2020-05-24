//variable hoisting 
/* calling a variable before declaration  and assigning 
 console.log(x);  //dont through a error you can access before initailized  ---throug undefined
 console.log(y);   //through an error Cannot access 'y' before initialization
 let y=1;
 var x=1;
*/

//function hoisting
foo();   //function hoisting will work 
function foo(){
    console.log("foo");
}

//in this case function hoisting will not work 
/*  Error Through that --------bar is not a function 
because it is a variable be assignining a value of function in bar variable and then calling 
*/
bar();
var bar = function(){
    console.log("bar called");
} 
//doubt Session why throughing error