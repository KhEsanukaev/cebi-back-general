const mongoose = require('mongoose')

const doorhandleSchema = mongoose.Schema({
    image: [String],
    name: String,
    description: String,
    price: Number, 
    categoryId:  {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Categories'
    },
})

const Doorhandles = mongoose.model("Doorhandles", doorhandleSchema)

module.exports = Doorhandles