const GridTraveler = (m,n, memo={}) =>{
    const key = m+','+n;
    if(key in memo) return memo[key];
    if(m ==1 && n==1) return 1;
    if(m ==0 || n==0) return 0;
    memo[key] = GridTraveler(m-1,n,memo) + GridTraveler(m,n-1,memo);
    return memo[key]
}

console.log(GridTraveler(3,3));