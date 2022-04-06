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

Product.belongsTo(Category, {
    foreignKey: 'product_id'
});


// Category.belongsToMany(User, {
//     through: Product,
//     foreignKey: 'user_id'
// });


// User.belongsToMany(Category, {
//     through: Product,
//     foreignKey: 'category_id'
// });

module.exports = {Category, Product, User};

