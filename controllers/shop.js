const Product = require('../models/product');
const cart = require('../models/cart');


exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};
exports.getProduct=(req,res,next)=>{
const product_id=req.params.productId;
Product.findById(product_id,(data)=>{
  console.log(data)

res.render('shop/product-detail',{
  productKey:data,
  pageTitle:data.title,
  path:'/products',
})
})
}
exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};


//showing ordisplay data in cart.json in /shop/cart route

exports.getCart = (req, res, next) => {
  cart.fetchAll(products => {
    res.render('shop/cart', {
      prods: products,
      pageTitle: 'All Products',
      path: '/cart'
    });
    console.log(products,"controller/shop.js export.getCart")
  });

 
};


//cart releted code
exports.postCart = (req, res, next) => {
const productId=req.body.item_id_cartejs
Product.findById(productId,(product)=>{
  cart.addProduct(productId,product.price);
})

res.redirect("/products")
}


exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
