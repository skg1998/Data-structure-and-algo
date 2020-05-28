//it is a method of error hanling
/*    
   in this set of code first try block will execute ,
   If there is any error in try block then catch block will catch it and print a message ,
   error.message is predefined in js so it print message whatever is error
   -finallly , finally block will execute after try and catch block 

   execution of code is from try -> catch ->finally

*/

try{
    foo();
    console.log("hi there is no foo ");
  }catch(error){
    console.log(error.message);
  }finally{
    console.log("this is finally executed")
  }
  
  console.log("this is starting of try and catch");


  /*   "foo is not defined"
        "this is finally executed"
        "this is starting of try and catch"
  */



  //second example  through custom error
  function sum(x,y){
    if(typeof x==='number' && typeof y ==='number'){
      return x+y;
    }else{
      throw "x and y should be a number"
    }
  }
  
  try{
    console.log(sum(2,"sahil"));
  }catch(error){
    console.log(error);
  }


  /*   
   console : 
     if there is an error else block throw that error in the form of message 

     in try block when we pass a number and string in function if block check that condition 
     condition become false and if block doesnot execute , and go to else block ,
     else block throw error message which pass to catch block and catch block execute it.
  */



  //you can allso use it throw new Error() but it is a object type so it take a object error.message
  function sum(x,y){
    if(typeof x==='number' && typeof y ==='number'){
      return x+y;
    }else{
      throw new Error( "x and y should be a number")
    }
  }
  
  try{
    console.log(sum(2,"sahil"));
  }catch(error){
    console.log(error.message);
  }