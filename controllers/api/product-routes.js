const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
router.get('/', (req, res) => {
<<<<<<< HEAD
  // find all categories
=======
>>>>>>> main
Product.findAll({
    include: [
    {
        model: Category,
        attributes: [ 'id', 'category_name' ]
    }]
})
    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
    });
});

// find one Product by its `id` value
router.get('/:id', (req, res) => {
<<<<<<< HEAD
  // find one category by its `id` value
=======
>>>>>>> main
Product.findOne({
    where: { id: req.params.id },
    include: [
        {
            model: Category,
            attributes: [ 'id', 'category_name' ]
        }]
})
.then(dbProductData => {
    if (!dbProductData) {
    res.status(404).json({ message: 'No Product found with this ID.' });
    return;
    }
    res.json(dbProductData)
})
.catch(err => {
    console.log(err);
    res.status(500).json(err);
});
});

// create a new Product
router.post('/', (req, res) => {
Product.create(req.body)
.then(dbProductData => res.json(dbProductData))
.catch(err => {
    console.log(err);
    res.status(500).json(err)
});
});

// update a Product by its `id` value
router.put('/:id', (req, res) => {
<<<<<<< HEAD
  // update a category by its `id` value
=======
>>>>>>> main
Product.update(req.body, {
    where: {id: req.params.id}
})
.then(dbProductData => {
    if(!dbProductData) {
    res.status(404).json({ message: 'No Product found with this ID.'});
    return;
    }
    res.json(dbProductData);
})
.catch(err => {
    console.log(err);
    res.status(500).json(err);
});
});

// delete a Product by its `id` value
router.delete('/:id', (req, res) => {
<<<<<<< HEAD
  // delete a category by its `id` value
=======
>>>>>>> main
Product.destroy({
    where: {
    id: req.params.id
    }
})
.then(dbProductData => {
    if(!dbProductData) {
    res.status(404).json({ message: 'No Product found with this ID.' });
    return;
    }
    res.json(dbProductData);
})
.catch(err => {
    console.log(err);
    res.status(500).json(err);
});
});

module.exports = router;