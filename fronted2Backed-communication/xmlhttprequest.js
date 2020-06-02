const xhr = new XMLHttpRequest();

//use xhr to send and get data from backend
//Ajax request  (Asynchronous JavaScript And XML)
xhr.onload = function(){
   console.log(xhr.responseText);
}

xhr.open('GET','url');
xhr.send();