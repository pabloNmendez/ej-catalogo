var express = require("express"),
    swig = require('swig'),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    methodOverride = require("method-override");

var env = "production";
env="dev";
mongoose.connect("mongodb://localhost/catalogo-db", function(err,res){
    if(err) throw err;
    console.log("Connected to Database");
});

var app = express();

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', './app/views');

app.use(express.static('./public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

var models = require("./app/models/catalogo")(app,mongoose),
    CatlCtrl = require("./app/controllers/catalogo");

var router = express.Router();

var home = function (req, res) {
    res.render('index',{
        env   : env
    });
};

router.get("/", home);
router.get("/catalogo/:id", home);

app.use(router);

var catalogo  = express.Router();

catalogo.route("/catalogo")
    .get(CatlCtrl.findAll)
    .post(CatlCtrl.add)
    .delete(CatlCtrl.delete);

catalogo.route("/catalogo/:id")
    .get(CatlCtrl.findById)
    .put(CatlCtrl.update)
    .delete(CatlCtrl.delete);

app.use("/api",catalogo);

app.listen(3000,function(){
    console.log("Runnig server on http://localhost:3000");
});