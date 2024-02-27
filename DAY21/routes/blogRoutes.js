const express = require('express');
const blogController = require('../controllers/blogController');
const authenticateToken = require('../middleware/authenticateToken');

const router1 = express.Router();

router1.get('/',authenticateToken, blogController.getBlogs);
router1.post('/',authenticateToken, blogController.addBlog);
router1.put('/:id', authenticateToken, blogController.updateBlog);
router1.delete('/:id', authenticateToken, blogController.deleteBlog);

module.exports = router1; 