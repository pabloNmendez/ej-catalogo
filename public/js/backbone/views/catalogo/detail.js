Catalogo.Views.DetailView = Backbone.View.extend({

	events:{
		"click #btn-edit" 	: "editar",
		"click #btn-delete" : "borrar",
	},

	className:"",

	initialize : function(){
		var self = this;

		this.model.on('change', function(){
			self.render();
		});

		window.app.routers.on('route:detail', function(){
			self.render();
		});

		this.template = swig.compile($("#detail_tpl").html());
	},

	editar : function(){

		Backbone.history.navigate('catalogo/' + this.model.get('_id')+"/edit", {trigger: true});

	},

	borrar : function(){
		if (confirm('Confrima borrar '+ this.model.get('title'))) {

			this.model.destroy({
				success: function () {

			   		Backbone.history.navigate('/', {trigger: true});

				}
			});
		}
		return false;
	},

	render: function() {
		var self = this;
		var locals ={
			post : this.model.toJSON()
		};

		this.$el.show();
		this.$el.html( this.template(locals) );
		return this;
	},
});
