var strproducts = `
[
    {
        "name":"facbook",
        "description":"a maSSAenger site",
        "price":120,
        "raging":{
            "min":3,
            "max":4
        }
    },
    {
        "name":"facbook",
        "description":"a maSSAenger site",
        "price":120,
        "raging":{
            "min":3,
            "max":4
        }
    }
]`;


var products = JSON.parse(strproducts);

var newProduct = {
    name:"google",
    description:"a search engine",
    price :30
};

products.push(newProduct);
console.log(products);

var strproductsSendBack = JSON.stringify(products)
console.log(strproductsSendBack);


