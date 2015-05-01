var mongoose = require("mongoose"),
    Catalogo = mongoose.model("Catalogo");
exports.findAll = function (req, res) {
    Catalogo.find(function(err, data){
        if(err)res.send(500, err.message);
        res.status(200).jsonp(data);
    });
};

exports.findById = function(req, res){
    var id = req.params.id;
    Catalogo.findById(id,function(err, data){
        if(err) res.status(500).send(err.message);
        res.status(200).jsonp(data);
    });
};

exports.add = function(req, res){
    var catalogo = new Catalogo({
        id: new mongoose.Types.ObjectId,
        title : req.body.title,
        year : req.body.year,
        poster : req.body.poster,
        seasons : req.body.seasons,
        genre : req.body.genre,
        summary : req.body.summary,
    });

    catalogo.save(function(err,data){
        if (err) res.status(500).send(err.message);
        res.status(200).jsonp(data);
    });
};

exports.update = function(req, res){
    var id = req.body._id;

    Catalogo.findById(id,function(err, data){

        data.title = req.body.title;
        data.year = req.body.year;
        data.poster = req.body.poster;
        data.seasons = req.body.seasons;
        data.genre = req.body.genre;
        data.summary = req.body.summary;

        data.save(function(err){
            if(err) res.status(500).send(err.message);
            res.status(200).jsonp(data);
        });
    });
};

exports.delete = function(req, res){
    var fid = req.params.id;
    Catalogo.find({ id: fid }).remove( function(err){
        if(err) res.status(500).send(err.message);
        res.status(200).jsonp({"msj":"ok"});
    });
};