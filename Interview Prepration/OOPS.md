# OOPS

> in this section we are going to learn about this keyword, new keyword, Prototype, ES6 class, java, Inheritance, Object.create(), Private and Public, 4 principles of OOPs

- Clear to UnderStand
- Easy to extend
- Easy to maintain
- Memory Efficient
- Dry

### Factory Funtion

```
function creatElf(name, weapon){
    name,
    weapon,
    attack(){
        return 'attack with ' + weapon;
    }
}

const peter = creatElf('Peter', 'Stones')
peter.attack();

const sam = creatElf('Sam', 'fire')
peter.attack();
```

### Object.create()

```
function elfFunctions(){
    return 'attack with ' + this.weapon;
}

function creatElf(name, weapon){
    let newElf = Object.create(elfFunctions)
    newElf.name = name,
    newElf.weapon = weapon
    return newElf;
}

const peter = creatElf('Peter', 'Stones')
peter.attack();

const sam = creatElf('Sam', 'fire')
peter.attack();
```

### Contructor

> new keyword: new keyword automatically returns the object to us

```
function CreatElf(name, weapon){
    this.name = name;
    this.weapon = weapon;
}

const peter = new CreatElf('Peter', 'Stones')
const sam = new CreatElf('Sam', 'fire')

const Elf = new Function('name', 'weapon', `
    this.name = name;
    this.weapon = weapon;
`)

Elf.prototype.attack = function(){
    return 'attack with ' + this.weapon;
}

const sera = new Elf('sarah', 'fireworks');
```

### ES6 Class

> New Feature added in ES6

```
class Elf(name, weapon){
    constructor(name, weapon){
        this.name = name;
        this.weapon = weapon;
    }

    attack(){
        return `${this.name} attack with ${this.weapon}`
    }
}

const peter = new Elf('Peter', 'Stones')
console.log(pete instanceof Elf)  // true
const sam = new Elf('Sam', 'fire')

```

### this

```
//new Binding
function Person(){
    this.name = name;
    this.age = age;
}
const person1 = new Person('test', 34)


//implicit binding
const person = {
    name : 'test',
    age: 42,
    hi(){
        console.log('hi' , this. name)
    }
}


//explicit binding
const person = {
    name : 'test',
    age: 42,
    hi(){
        console.log('hi' , this.setTimeOut)
    }.bind(window)
}


//Arrow function
const person4 = {
    name: 'person',
    age: 40,
    hi: function(){
        var inner = () => {
            console.log(this.name);
        }
        return inner();
    }
}
person4.hi();
```
