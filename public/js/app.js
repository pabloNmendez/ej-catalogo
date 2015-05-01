$(function(){

    console.log('Starting app');

    app.routers = new Catalogo.Router();
    Backbone.history.start({
            root : "/",
            pushState : true,
            silent : false
    });
    $('nav li:first').on('click', function(){
        Backbone.history.navigate('', {trigger: true});
    });

});


/*



$.get("/api/tvshows",function(rs){console.log(rs)});

serie = {
        title : "The Big Bang Theory",
        year : 2007,
        poster : 'http://ia.media-imdb.com/images/M/MV5BMjI1Mzc4MDUwNl5BMl5BanBnXkFtZTgwMDAzOTIxMjE@._V1_SY317_CR20,0,214,317_AL_.jpg',
        seasons : 10,
        genre : 'Comedy',
        summary : 'The Big Bang Theory es una comedia de situación estadounidense estrenada el 24 de septiembre de 2007 por la cadena CBS.Está producida por la Warner Bros y Chuck Lorre.1 Fue ese mismo año cuando la comedia ganó un Teen Choice Awards en la categoría "Mejor serie de comedia" y Jim Parsons un premio por sus logros individuales en la serie.'
    };

$.post("/api/tvshows",serie,function(rs){console.log(rs)});

*/