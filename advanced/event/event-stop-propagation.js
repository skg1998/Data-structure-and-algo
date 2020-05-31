document.querySelector('#Main-div').addEventListener('click',function(event){
    console.log('clicked !');
    console.log(this);
    console.log(event.target);
});

document.querySelector('#parent-div').addEventListener('click',function(event){
    console.log('clicked !');
    console.log(this);
    event.stopPropagation();     //to stop propagetion of event
    console.log(event.target);
});

document.querySelector('#child-div').addEventListener('click',function(event){
    console.log('clicked !');
    console.log(this);
    console.log(event.target);
});