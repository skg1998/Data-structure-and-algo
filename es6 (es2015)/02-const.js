//during time of declare you must initialize it otherwise it will through an error
const x=1;
console.log(x); // print 1

const y;
y=1;
console.log(y); // through an error => "Missing initializer in const declaration"


//you can not reassign 
const z=1;
z=2;
console.log(z);  //through an error => "error" "TypeError: Assignment to constant variable."


const obj ={
    a :1
}
obj.a++;

console.log(obj);   //does not show an error because object is const but we cange the value of object property