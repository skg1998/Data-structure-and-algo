

//use only as the last parameter
function sort(...number){
    console.log(number);
    return number.sort();
  }
  
  console.log(sort(56,14,67,84,3,1,7,0));
  console.log(sort(14,78,45,10,67));
  
  //in array destructing
  const days =[
      'mon',
      'tues',
      'wed',
      'thrus',
      'fri',
      'sat'
  ];
  
  const [...day]=days;
  console.log(...day);
  
  
  //object-destructing
  const profile = {
      name:'sahil',
      age:'21',
      email:'sahil@gmail.com',
      address:{
        country:'india',
        city:'delhi'
      }
    }
  
  const {...obj} = profile;
  console.log(obj);
  