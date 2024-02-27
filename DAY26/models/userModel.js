const mongoose = require('mongoose');


// 1- Définition du schéma

const userSchema = new mongoose.Schema({
    name: { type: String, trim: true },
    email: { type: String, trim: true },
    age: { type: Number },
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);



// 3- Exportation du modèle
module.exports = {
    User
};