const router = require('express').Router();

const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const userRoutes = require('./user-routes');
// const homeRoutes = require('../home-routes');


router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/users', userRoutes);
// router.use('/', homeRoutes);

module.exports = router;