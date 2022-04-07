const { products } = require('../../seeds/product.seeds');
const products = products;

function displayProducts(productsTemplate) {
    let productsTemplate = document.getElementById('#product-template').innerHTML;
    let compileproducts = Handlebars.compile(productsTemplate);
    let finishedlist = compileproducts(products);
  
    let productContainer = document.getElementById('product-container');
    productContainer.innerHTML = finishedlist;
  };

displayProducts();