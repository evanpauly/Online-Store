const {Category} = require('../models/');

const categories = [
    {
        id: 1,
        category_name: 'Bass',
    },
    {
        id: 2,
        category_name: 'Guitar',
    },
    {
        id: 3,
        category_name: 'Piano',
    },
    {
        id: 4,
        category_name: 'Drums',
    },
];

const seedCategories = () => {
    Category.bulkCreate(categories);
};

module.exports = seedCategories;
