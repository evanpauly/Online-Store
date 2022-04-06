const Category = require('./Category');
const Product = require('./Product');
const User = require('./User');

User.hasMany(Product, {
    foreignKey: 'user_id'
});

Product.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'SET NULL'
});

Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

module.exports = {Category, Product, User};