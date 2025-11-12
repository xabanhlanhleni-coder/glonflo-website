const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Contact Us: Reach out via Instagram, TikTok, LinkedIn, or WhatsApp for support and inquiries.');
});

module.exports = router;
