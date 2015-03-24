var app = app || {};

// Main App
$(document).ready(function() {
	
	$( '#releaseDate' ).datepicker();
    new app.LibraryView();

});