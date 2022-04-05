const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const userRoutes = require('./user-routes');

router.use('/', homeRoutes);
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/users', userRoutes);

module.exports = router;