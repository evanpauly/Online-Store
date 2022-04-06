const {Category} = require('../models/');

const categories = [
    {
        category_name: 'Bass',
    },
    {
        category_name: 'Guitar',
    },
    {
        category_name: 'Piano',
    },
    {
        category_name: 'Drums',
    },
];

async function seedCategories() {
   await Category.bulkCreate(categories);
};

module.exports = seedCategories;
