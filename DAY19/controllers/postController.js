const {getAllPosts, createPost} = require('../models/post');

const getPost = (req,res)=>{
    posts = getAllPosts() ;
    res.send(posts)
    
   
};

const addPost = (req, res) => {
    const newpost = req.body;
    let post = createPost(newpost)
    res.status(201).send(post);
}


module.exports = {getPost , addPost}