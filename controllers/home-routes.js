const router = require('express').Router();
const sequelize = require('../config/connection');
const { Product, User, Category } = require('../models');






// get all products for homepage
router.get('/', (req, res) => {
  console.log('======================');
  Product.findAll({
    attributes: [
      'id',
      'product_name',
      'price',
      'stock',
      'image'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbProductData => {
      const products = dbProductData.map(product => product.get({ plain: true }));

      res.render('homepage', {
        products,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// // get single post
// router.get('/post/:id', (req, res) => {
//   Post.findOne({
//     where: {
//       id: req.params.id
//     },
//     attributes: [
//       'id',
//       'post_url',
//       'title',
//       'created_at',
//       [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
//     ],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//         include: {
//           model: User,
//           attributes: ['username']
//         }
//       },
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       if (!dbPostData) {
//         res.status(404).json({ message: 'No post found with this id' });
//         return;
//       }

//       const post = dbPostData.get({ plain: true });

//       res.render('single-post', {
//         post,
//         loggedIn: req.session.loggedIn
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });











router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  
  res.render('login');
});

router.get('/products', (req, res) => {
  console.log('Products are here!');
  res.render('product-list');
});

module.exports = router;