const Product = require('../models/product');
const editProduct = require('../models/editProduct');
const deleteProduct = require('../models/deleteProduct');


exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

exports.editSaveProductData=(req,res,next)=>{
  const obj=req.body
  editProduct.edit_product_by_id(req.body)
 const editedProduct=new editProduct(obj.title,obj.imageUrl,obj.description,obj.price,obj.id)
   editedProduct.save()
   console.log(obj.id)
res.redirect("/admin/products")
}

exports.getProductData=(req,res,next)=>{
  const product_id=req.body.name;
  editProduct.findById(product_id,(data)=>{
    console.log(data,"admin")
  
  res.render('admin/edit-product',{
    productKey:data,
    pageTitle:"edit",
    path:'/admin',
  })
  })
  }

  exports.delete_product=(req,res,next)=>{
    const productId=req.body.productId
    deleteProduct.delete_by_id(req.body.productId)
    console.log("deleted from admin in controller",req.body)
    res.redirect("/admin/products")
  }