//creating a variable from properties of object

const profile = {
    name:'sahil',
    age:'21',
    email:'sahil@gmail.com',
    address:{
      country:'india',
      city:'delhi'
    }
  }
  //simple 
  //const name = profile.name;
  //const age = profile.age;


  //object destructing
  const {name,age ,address:{city}} = profile;
  console.log(name,age,city);

  //renaming is not allowed
  //const {name,age:yearsOld} = profile;