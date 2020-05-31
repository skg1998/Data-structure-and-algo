//spead operator take a item of array and put comma betweeen them

const number = [1,4,6,87,3,9];
console.log(Math.max(number));
console.log(Math.max(...number));


//merge
const arr1= [1,2,4,6];
const arr2 = [8,9,6,10];
console.log(...arr1,...arr2);

//object spreading

const profile = {
    name:'sahil',
    age:'21',
    email:'sahil@gmail.com',
    address:{
      country:'india',
      city:'delhi'
    }
  }

const sahilcopy={
  ...profile
};

console.log(profile);
console.log(sahilcopy);