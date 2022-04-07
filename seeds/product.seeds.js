const { Product } = require('../models');
const cloudinary = require('../utils/cloundinary');

const products = [
    {
        product_name: 'Gibson Thunderbird',
        price: 2999.99,
        stock: 5,
        category_id: 1,
        image: 'cloudinary.image("Gibson_Thunderbird_nkqdfe.jpg",)'
    },
    {
        product_name: 'Ibanez Premium',
        price: 1499.99,
        stock: 3,
        category_id: 1,
        image: 'cloudinary.image("Ibanez_Bass_z05lwa.jpg")'
    },
    {
        product_name: 'Stratocaster',
        price: 169.99,
        stock: 6,
        category_id: 2,
        image: 'cloudinary.image("Stratocaster_hccd2q.jpg")'
    },
    {
        product_name: 'Gibson Les Paul',
        price: 1599.00,
        stock: 10,
        category_id: 2,
        image: 'cloudinary.image("Gibson_Les_Paul_czx0u8.jpg")'
    },
    {
        product_name: 'Williams Legato III Digital Piano',
        price: 219.99,
        stock: 5,
        category_id: 3,
        image: 'cloudinary.image("Williams_Legato_Piano_nshkn8.jpg")'
    },
    {
        product_name: 'Yamaha 61-key Piano',
        price: 219.99,
        category_id: 3,
        image: 'cloudinary.image("Yamaha_61-Key_r0kics.jpg")'
    },
    {
        product_name: 'Pearl M80 Snare Drum',
        price: 69.99,
        stock: 40,
        category_id: 4,
        image: 'cloudinary.image("Pearl_Snare_Drum_bdtilu.jpg")'
    },
    {
        product_name: 'Yamaha Stage Custom Birch Snare',
        price: 125.99,
        stock: 18,
        category_id: 4,
        image: 'cloudinary.image("Yamaha_Snare_Drum_l17o5x.jpg")'
    },
];

async function seedProducts() {
   await Product.bulkCreate(products);
};

module.exports = seedProducts, products;