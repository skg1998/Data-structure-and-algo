console.log("Hello Dynamic Programing");
//Memoization 
// js object, key will be arg to fn , value will be return

const fib = (n, memo={})=>{
    if(n in memo) return memo[n];
    if(n<=2) return 1
    memo[n] =  fib(n-1,memo) + fib(n-2,memo)
    return memo[n]
}

console.log(fib(5000))