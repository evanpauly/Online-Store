const { Product } = require('../models');

const products = [
    {
        product_name: 'Gibson Thunderbird',
        price: 2999.99,
        stock: 5,
        category_id: 1,
    },
    {
        product_name: 'Ibanez Premium',
        price: 1499.99,
        stock: 3,
        category_id: 1,
    },
    {
        product_name: 'Stratocaster',
        price: 169.99,
        stock: 6,
        category_id: 2,
    },
    {
        product_name: 'Gibson Les Paul',
        price: 1599.00,
        stock: 10,
        category_id: 2,
    },
    {
        product_name: 'Williams Legato III Digital Piano',
        price: 219.99,
        stock: 5,
        category_id: 3,
    },
    {
        product_name: 'Yamaha 61-key Piano',
        price: 219.99,
        category_id: 3,
    },
    {
        product_name: 'Pearl M80 Snare Drum',
        price: 69.99,
        stock: 40,
        category_id: 4,
    },
    {
        product_name: 'Yamaha Stage Custom Birch Snare',
        price: 125.99,
        stock: 18,
        category_id: 4,
    },
];

async function seedProducts() {
   await Product.bulkCreate(products);
};

module.exports = seedProducts;