const Category = require('./Category');
const Product = require('./Product');
const User = require('./User');

User.hasMany(Product, {
    foreignKey: 'user_id'
});

Product.belongsTo(User, {
    foreignKey: 'product_id'
});

Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'SET NULL'
});

Product.belongsToMany(Category, {
    foreignKey: 'product_id'
});

module.exports = {Category, Product, User};

