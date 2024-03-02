const mongoose = require('mongoose');

//definition de schema 
const productSchema = new mongoose.Schema({
    name : {
        type :String,
        required : true
    },
    price: {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : false
    },
    inStock:{
        type : Boolean,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    isDeleted : {
        type : Boolean,
        default : false
    }
});

// definition du model
const Product = mongoose.model('Product', productSchema);

//exporting the model

module.exports = { Product };