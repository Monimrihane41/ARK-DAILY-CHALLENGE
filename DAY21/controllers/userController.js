const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');

exports.register = async (req, res) => {
    const users = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json')));
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { id: users.length + 1, username: req.body.username, password: hashedPassword };
    users.push(user);
    fs.writeFileSync(path.join(__dirname, '../data/users.json'), JSON.stringify(users));
    res.status(201).send("User Created Successfully!");
};

exports.login = async (req, res) => {
    const users = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json')));
    const user = users.find(user => user.name === req.body.name);
    if (user == null) return res.status(400).send('Cannot find user');
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.send('Not Allowed');
    const accessToken = jwt.sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET);
    
    res.json({ accessToken: accessToken });
};
