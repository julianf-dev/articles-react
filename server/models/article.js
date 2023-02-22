var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: {
        type: Date, 
        default: Date.now
    },
    image: String
});

module.exports = mongoose.model('Article', ArticleSchema);
// article --> guarda documentos de este tipo y con estructura dentro de la coleccion