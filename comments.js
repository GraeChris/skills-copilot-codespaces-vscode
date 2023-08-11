// Create web server
// 1. Create a web server
// 2. Create a route for root
// 3. Create a route for comments
// 4. Create a route for comments/new
// 5. Create a route for comments/:id
// 6. Create a route for comments/:id/edit
// 7. Create a route for comments/:id/delete

const express = require('express');
const router = express.Router();

// 2. Create a route for root
router.get('/', (req, res) => {
  res.send('Root route');
});

// 3. Create a route for comments
router.get('/comments', (req, res) => {
  res.send('Comments route');
});

// 4. Create a route for comments/new
router.get('/comments/new', (req, res) => {
  res.send('New comments route');
});

// 5. Create a route for comments/:id
router.get('/comments/:id', (req, res) => {
  res.send('Show comments route');
});

// 6. Create a route for comments/:id/edit
router.get('/comments/:id/edit', (req, res) => {
  res.send('Edit comments route');
});

// 7. Create a route for comments/:id/delete
router.get('/comments/:id/delete', (req, res) => {
  res.send('Delete comments route');
});

module.exports = router;
