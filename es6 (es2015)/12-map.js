//it is dictnary in other language
//new data structure in es6 collection of key value pair

const map = new Map([[1,"sahil"],[2,'kumar'],[3,"gupta"]]);
console.log(map.size);
console.log(map.entries());
console.log(map.keys());
console.log(map.values());

map.set(4,'age');  //add to map
console.log(map.get(4));     //get the value 

map.delete(2);
