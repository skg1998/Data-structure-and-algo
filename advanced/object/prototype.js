//object prototype (inheritance of mulitiple object )

var obj ={
    x:1
  }
  
  var proto = {
    y:2
  }
  
  console.log(obj);
  console.log(obj.x);
  console.log(Object.getPrototypeOf(obj));
  console.log(obj.__proto__);
  
  console.log(Object.setPrototypeOf(obj,proto));
  // console.log(Object.setPrototypeOf(proto,obj));  on using this line  with code 

  /*  this through an error  " TypeError: Cyclic __proto__ value"  */
  
  console.log(obj.y);