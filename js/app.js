// hide trap sign
//when user clicks on image, reveal trap sign

$(document).ready(function() {
	$('.warning').hide().show();

//capture click on image
	$('.image').on('click', function() {
		console.log('Clicked that bad boy!');

		$('.warning').toggle('slow');
	})
});