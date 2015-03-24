var app = app || {};

// Library View
app.LibraryView = Backbone.View.extend({
	el: '#books',

	events: {
		'click #add': 'addBook'
	},

	initialize: function() {
		this.collection = new app.Library();
		this.collection.fetch({reset: true});
		this.render();

		this.listenTo(this.collection, 'add', this.renderBook);
		this.listenTo(this.collection, 'reset', this.render);
	},

	// render library by rendering each book in its collection
	render: function() {
		this.collection.each(function(item) {
			this.renderBook(item);
		}, this);
	},

	// render a book by creating a BookView and appending the
	// element it renders to the library's element
	renderBook: function(item) {
		var bookView = new app.BookView({
			model: item
		});
		this.$el.append(bookView.render().el);
	},

	addBook: function(e) {
		e.preventDefault();

		var formData = {};

		$('#addBook div').children('input').each(function(index, element) {
			if ($(element).val() !== '') {
				if (element.id === 'keywords') {
					formData[element.id] = [];
					_.each($(element).val().split(' '), function(keyword) {
						formData[element.id].push({
							'keyword': keyword
						});
					});
				}
				else if (element.id === 'releaseDate' ) {
					formData[element.id] = $('#releaseDate').datepicker('getDate').getTime();
				}
				else {
					formData[element.id] = $(element).val();
				}
			}
			$(element).val('');
		});
		
		this.collection.create(formData);
	}
});