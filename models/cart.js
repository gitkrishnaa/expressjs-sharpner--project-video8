const fs = require('fs');
const path = require('path');
const Product = require('./product');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);
// console.log(p)

const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(fileContent));
      }
    });
  };
  


module.exports=class Cart{

static addProduct(id,price){
// console.log(id,price,"in cart.js")


//note item fetxhing data in controll/shop.js in export.postcart which exported to route/shop.js

fs.readFile(p,(err,fileContent)=>{
    let cart={product:[],totalPrice:0};


    // if producr exist
if(!err){
 cart=JSON.parse(fileContent)   
// console.log(cart,"location-cart.js",)

const existItemIndex=cart.product.findIndex(product=> product.productid===id);

console.log(existItemIndex,"find")
if(existItemIndex>=0){//if item exitst thn just increase the quantity qty
    // console.log(existItemIndex,"if")
cart.product[existItemIndex].qty=cart.product[existItemIndex].qty+1
}
else{//if item not exist in cart or in databse then add the item
   const newitem={productid:id,qty:1};
   cart.product.push(newitem)
}


//some info for future info
console.log("info about page event .................,file-model/cart.js")
console.log("product added in to cart")
console.log(cart.product[existItemIndex],"id is",id)
///////////////////////////////////////////////////



}


cart.totalPrice=cart.totalPrice+ +price
const cartJson=JSON.stringify(cart)

fs.writeFile(p,cartJson,(err)=>{
    // console.log(err,p)
})
})



}

static fetchAll(cb) {
    getProductsFromFile(cb);
  }


}