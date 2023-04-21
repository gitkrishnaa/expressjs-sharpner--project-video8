const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);
const newPath = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'delete.json'
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

module.exports = class deleteProduct {

static delete_by_id(id){
    fs.readFile(p,(err,fileContent)=>{
        if(!err){
            
            const product_data=JSON.parse(fileContent)
            const filter_data=product_data.filter((x)=>
                {
            //   console.log(x.id,id)
              return x.id!=id
                }
                
            )
console.log(filter_data)
      //data has been deleted by filtering data,
      //now submitteing data using writefile
      fs.writeFile(p,JSON.stringify(filter_data),(err)=>{
        console.log(err)
        })
    //   fs.writeFile(newPath,JSON.stringify(filter_data),(err)=>{console.log(err)}) 
// console.log(filter_data,"previous-length=",product_data.length,"now length==",filter_data.length,"from- deleteproduct.js in module")
        }
    })
}


}