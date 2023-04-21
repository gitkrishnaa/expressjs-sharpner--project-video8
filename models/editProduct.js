const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class editProduct {
  constructor(title, imageUrl, description, price,id) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
    this.id=id;
  }
save(){
console.log(this.id,"save method")
const productId=this.id;
getProductsFromFile(product=>{

const data=fs.readFile(p,(err,fileContent)=>{
    if(!err){
 const data_json=JSON.parse(fileContent)
 const product_index=data_json.findIndex(x=>x.id==productId);
data_json[product_index]=this;
fs.writeFile(p,JSON.stringify(data_json),(err)=>{
console.log(err)
})
 console.log(data_json[product_index],`data saved at index${product_index}`,"edited data saved code-from editproduct.js in module")

    }
    else{
        console.log("somthing error om edit module in save method" ,"err is",err)
    }
    
})




})

}
  static edit_product_by_id(id) {
    console.log(id,"edit model");
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
  static findById(id,cb) {
    getProductsFromFile(products =>{
  const product=products.find(p=>{return p.id==id});
  cb(product)
    });
  }
};
