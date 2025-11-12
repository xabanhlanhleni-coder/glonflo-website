const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Import routes
const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');

// Use routes
app.use('/', homeRoute);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
