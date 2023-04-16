const fs = require('fs');
const path = require('path');
const Product = require('./product');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);
// console.log(p)




module.exports=class Cart{

static addProduct(id,price){
console.log(id,price,"in cart.js")


fs.readFile(p,(err,fileContent)=>{
    let cart={product:[],totalPrice:0};


    // if producr exist
if(!err){
 cart=JSON.parse(fileContent)   
// console.log(cart,"location-cart.js",)

// const cart_item=cart.product.find((productid)=>{
//    return productid==id
// })
// if(cart_item){
    
// }






// console.log(cart_item)
}

cart.product.push(id);
cart.totalPrice=cart.totalPrice+ +price
const cartJson=JSON.stringify(cart)

fs.writeFile(p,cartJson,(err)=>{
    console.log(err,p)
})
})



}

}