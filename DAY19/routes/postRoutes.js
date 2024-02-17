const router = require('express').Router()
const log = require('../middleware/logs')
const {getPost , addPost} = require('../controllers/postController')



router.get("/",getPost).post("/", addPost);

module.exports = router;