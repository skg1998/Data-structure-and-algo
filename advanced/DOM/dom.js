//DOM is tree of object
//every object is a DOM node

                //       Document
                //          |
                //          |
                //    documentElement       //HTML node 
                //    |             |
                //    Head        Body      //child node

console.log(document);
console.dir(document);
console.log(document.documentElement);
//document.documentElement.style.backGroundColor ="color-name"   

//to execcess childNodes
document.documentElement.childNodes
// there is a three node in HTML documents head ,text (new line or enter),body
document.documentElement.childNodes[0]  //give you access of head nodes
document.documentElement.childNodes[1]  // text
document.documentElement.childNodes[2]   //body


document.documentElement.childNodes[0].childNodes  //give access to child of head


//dom-selector
document.getElementById("you-id");
document.getElementsByClassName("class-naME");
document.querySelector('select first of given dom');
document.querySelectorAll("select-all")








