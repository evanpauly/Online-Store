const router = require('express').Router();

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