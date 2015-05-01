Catalogo.Views.ListItemView = Backbone.View.extend({
	events:{
		"click > article.item" : "navigate",
	},
	className:"",
	initialize : function(){
		var self = this;

		window.app.routers.on('route:root', function(){
			self.render();
		});

		this.template = swig.compile($("#item_tpl").html());
	},
	navigate : function(){
		console.log('navigate',this.model.toJSON() );

		Backbone.history.navigate('catalogo/' + this.model.get('_id'), {trigger: true});
	},
	render: function() {
		var self = this;
		var locals ={
			post : this.model.toJSON()
		};

		this.$el.html( this.template(locals) );
		return this;
	}
});
