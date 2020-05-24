/*  
   forEach
   filter
   map
   some
   every
   reduce

*/


var days =[
    {day:'monday' ,hour :22},
    {day:'tuesday' ,hour :24},
    {day:'wednesday' ,hour :28},
    {day:'thrusday' ,hour :32},
    {day:'friday' ,hour :42},
  ]
  
  
  //forEach iteration
  days.forEach(function(item){
    console.log(item);
  });
  
  
  //filter iterator 
  var resultDays = days.filter(function(item){
    return true;
  })
  
  console.log(resultDays);
  
  var resultDays = days.filter(function(item){
    return false;   //return empty array
  })
  
  console.log(resultDays);
  
  var resultDays = days.filter(function(item){
    return item.hour >25;  
  })
  
  console.log(resultDays);
  
  //map iterator
  
  var numbers = [1,3,6,8,9];
  var squareOfNumber = numbers.map((number)=>{
     if(number %2 === 0){
       return number*number;
     }else{
       return number
     }
  })
  
  console.log(squareOfNumber);


  /*  
   console 

            [object Object] {
            day: "monday",
            hour: 22
            }
            [object Object] {
            day: "tuesday",
            hour: 24
            }
            [object Object] {
            day: "wednesday",
            hour: 28
            }
            [object Object] {
            day: "thrusday",
            hour: 32
            }
            [object Object] {
            day: "friday",
            hour: 42
            }
            [[object Object] {
            day: "monday",
            hour: 22
            }, [object Object] {
            day: "tuesday",
            hour: 24
            }, [object Object] {
            day: "wednesday",
            hour: 28
            }, [object Object] {
            day: "thrusday",
            hour: 32
            }, [object Object] {
            day: "friday",
            hour: 42
            }]
            []
            [[object Object] {
            day: "wednesday",
            hour: 28
            }, [object Object] {
            day: "thrusday",
            hour: 32
            }, [object Object] {
            day: "friday",
            hour: 42
            }]
            [1, 3, 36, 64, 9]

*/