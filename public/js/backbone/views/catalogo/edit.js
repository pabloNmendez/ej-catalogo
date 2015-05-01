Catalogo.Views.EditView = Backbone.View.extend({

	events:{
		"click #btn-save" 	: "guardar",
	},
	className:"",
	initialize : function(){
		var self = this;

		this.template = swig.compile($("#edit_tpl").html());
	},

	guardar : function(e){
		e.preventDefault()

	 	this.model.set({
 			title 	: $('#txt-title').val(),
			year 	: $('#txt-year').val(),
			poster 	: $('#txt-poster').val(),
			seasons : $('#txt-seasons').val(),
			genre 	: $('#slc-genre').val(),
			summary : $('#txt-summary').val(),
        });

        this.model.save(null,{
            success: function (model) {
		 		Backbone.history.navigate('catalogo/' + model.get('_id'), {trigger: true});
        	},
            error: function () {
                console.log('Error', 'An error occurred while trying to delete this item', 'alert-error');
            }
        });
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
