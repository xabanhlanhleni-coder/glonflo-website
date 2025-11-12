const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('About Us: Glo N Flo is a South African wellness brand redefining period care through curated, subscription-based menstrual boxes.');
});

module.exports = router;
