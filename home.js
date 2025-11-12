const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to Glo N Flo. Period Care is Self-Care!');
});

module.exports = router;
