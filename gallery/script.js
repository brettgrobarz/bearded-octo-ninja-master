//  Add your code here
// $("#monkey").on("click", function() {
// 	$(this).toggleClass("active");
// 	$(".monkey").toggle();

// });

// $("#dog").on("click", function() {
// 	$(this).toggleClass("active");
// 	$(".dog").toggle();
// });

// $("#cat").on("click", function() {
// 	$(this).toggleClass("active");
// 	$(".cat").toggle();

// });

$.getJSON( "http://mks-frontend-gallery.herokuapp.com/", function( json ) {
    console.log(json);
});


// $(".filterbutton").on("click", function() {
// 	$(this).toggleClass("active");
// });

$('.filter-button').on('click', function(e) {

	var button = $(this).attr('id');

	if ( $(this).hasClass('active')) {

		hideTheseImages(button);

	} else {

		showTheseImages(button);

	}
});


function hideTheseImages(imageClass) {
  $('.' + imageClass).fadeOut();
  $('#' + imageClass).removeClass('active');
}

function showTheseImages(imageClass) {
  $('.' + imageClass).fadeIn();
  $('#' + imageClass).addClass('active');
}


