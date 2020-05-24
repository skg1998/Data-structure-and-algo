//on calling new operator  1 step to create a empty object
//step 2 newly created object pass as a call context in  function thats called
//step 3 we dont need to return its default return  ,object is autometically return

function Person(name,age){
    this.name = name;
    this.age = age;
    console.log(this.age+ " "+this.name);
  }
  
  Person.prototype.celebrateBirthday = function(){
    this.age++;
  } 
  
  var sahil = new Person('sahil',21);
  sahil.celebrateBirthday();
  console.log(sahil);

  /*   
  
  console:
            "21 sahil"
            [object Object] {
            age: 22,
            celebrateBirthday: function(){
            this.age++;
            },
            name: "sahil"
            }
  */