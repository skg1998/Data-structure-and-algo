function foo(callback){
    var x=10 , y=20;
    var z=x+y;

    callback();

    function retFn(){
        console.log("retFn called");
    }

    return retFn;
}

function bar(){
     console.log("bar is called");
}

var resultFn = foo(bar);
resultFn();

//ans retFn called -> bar  is called