function greeting(message='sahil',name='gupta'){
    return `${message} ${name} !`;
}

console.log(greeting('Good Morning','Sahil'));
console.log(greeting('Good Morning'));
console.log(greeting(undefined,'Sahil'));