//by default it use a GET method 
//it get a promise
//Not work in Node js

fetch('url').then((req,res)=>{
    console.log(res);
}).then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error.message);
})


//example 
const url = "YOUR_URL";
fetch('url',{
    method :'POST',
    body : JSON.stringify(url)
},{
    header:{
        'Content-Type':'application/json'
    }
}
).then((res)=>{
    console.log(res)
}).then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error.message);
})