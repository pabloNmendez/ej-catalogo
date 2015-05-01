Catalogo.Collection = Backbone.Collection.extend({
    model: Catalogo.Model,
    url:"/api/catalogo",
    name: "catalogo",
});