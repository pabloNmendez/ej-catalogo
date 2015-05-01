var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var catalogoSchema = new Schema({
    id   : Schema.Types.ObjectId,
    title : {type: String},
    year : {type: Number},
    poster : {type:String},
    seasons : {type: Number},
    genre : {type: String, enum:
        ["Drama","Fantasy","Sci-Fi","Comedy","Action"]
    },
    summary : {type: String}
});

module.exports = mongoose.model("Catalogo",catalogoSchema);