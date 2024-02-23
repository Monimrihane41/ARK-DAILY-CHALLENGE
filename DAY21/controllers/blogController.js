const fs = require('fs');
const path = require('path');

exports.getBlogs = (req, res) => {
    const blogs = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/blogs.json')));
    const userBlogs = blogs.filter(blog => blog.userId === req.user.userId);
    res.json(userBlogs);
};

exports.addBlog = (req, res) => {
    const blogs = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/blogs.json')));
    const blog = { id: blogs.length + 1, title: req.body.title, content: req.body.content, userId: req.user.userId };
    blogs.push(blog);
    fs.writeFileSync(path.join(__dirname, '../data/blogs.json'), JSON.stringify(blogs));
    res.status(201).send();
};

exports.updateBlog = (req, res) => {
    const blogs = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/blogs.json')));
    const blog = blogs.find(blog => blog.id === parseInt(req.params.id) && blog.userId === req.user.userId);
    if (blog == null) return res.sendStatus(404);
    blog.title = req.body.title;
    blog.content = req.body.content;
    fs.writeFileSync(path.join(__dirname, '../data/blogs.json'), JSON.stringify(blogs));
    res.json(blog);
};

exports.deleteBlog = (req, res) => {
    const blogs = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/blogs.json')));
    const blogIndex = blogs.findIndex(blog => blog.id === parseInt(req.params.id) && blog.userId === req.user.userId);
    if (blogIndex == -1) return res.sendStatus(404);
    blogs.splice(blogIndex, 1);
    fs.writeFileSync(path.join(__dirname, '../data/blogs.json'), JSON.stringify(blogs));
    res.status(204).send();
};