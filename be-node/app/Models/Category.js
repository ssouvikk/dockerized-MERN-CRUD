const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: { type: String, },
    slug: { type: String, unique: true },
});

class Category { }

schema.loadClass(Category);

module.exports = model('categories', schema);