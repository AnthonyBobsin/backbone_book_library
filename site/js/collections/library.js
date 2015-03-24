var app = app || {};

// Book Collection

app.Library = Backbone.Collection.extend({
	model: app.Book,
	url: '/api/books'
});