const seedProducts = require('./product.seeds');
const seedCategories = require('./category-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n---- DATABASE SYNCED ---- \n');
    seedCategories();
    console.log('\n---- CATEGORIES ADDED --- \n');
    seedProducts();
    console.log('\n---- PRODUCTS ADDED --- \n');

    // process.exit(0);
};

seedAll();