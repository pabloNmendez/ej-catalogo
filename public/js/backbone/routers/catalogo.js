Catalogo.Router = Backbone.Router.extend({
	routes: {
		"" :  "root",
		"catalogo/add" : "addItem",
		"catalogo/:id" : "detail",
		"catalogo/:id/edit" : "editItem",

	},
	initialize : function(){
		var self = this;

	},
	root: function(){

		var self = this;

		window.app.state = "root";
	  	$("#contenido").html('');
		app.collections.catalogo = new Catalogo.Collection();

        app.collections.catalogo.on('add', function(item){
        	var view = new Catalogo.Views.ListItemView ({model:item});
       	 	view.render();
        	view.$el.appendTo("#contenido");
    	});

	    app.collections.catalogo.fetch();

	},
	detail : function(id){

		window.app.state = "detail";
		window.app.serie = id;

		var item = new Catalogo.Model({id: id});
        item.fetch({ success: function(){
            $("#contenido").html(new Catalogo.Views.DetailView({model: item}).render().el);
        }});

	},
	addItem : function(id){

        var item = new Catalogo.Model();
        $("#contenido").html(new Catalogo.Views.EditView({model: item}).render().el);

	},
	editItem : function(id){
		console.log('edititem', id);

		var item = new Catalogo.Model({id: id});
        item.fetch({success: function(){
            $("#contenido").html(new Catalogo.Views.EditView({model: item}).render().el);
        }});

	},
});