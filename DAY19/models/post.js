const fs = require('fs')

const getAllPosts =()=>{
     let posts = JSON.parse(fs.readFileSync('./models/posts.json'));
    return posts
};

const createPost = (post) => {
    const posts = getAllPosts()
    posts.push(post);
    fs.writeFileSync('./models/posts.json', JSON.stringify(posts));
    return posts
};

module.exports = {getAllPosts ,createPost}