const fetchandadd = async function(){
    try{
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    const response  = await fetch(url);
    const todo = response.json();
    console.log(todo);
    }catch(error){
        console.log(error.message);
    }
}

fetchandadd();