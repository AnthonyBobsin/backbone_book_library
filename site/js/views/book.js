var app = app || {};

// Book View
app.BookView = Backbone.View.extend({
	tagName: 'div',
	className: 'bookContainer',
	template: _.template($('#bookTemplate').html()),

	events: {
		'click .delete': 'deleteBook'
	},

	render: function() {
		// this.el is what we defined in tagName. use $el to get access to jQuery html() function
		this.$el.html(this.template(this.model.attributes));
		return this;
	},

	deleteBook: function() {
		// Delete model
		this.model.destroy();

		// Delete view
		this.remove();
	}
});