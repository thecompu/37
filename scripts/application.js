$(document).ready(function() {
	$('.div_BC_Box').on('mouseenter', function(){
		alert("hover");
		$(this).find('.div_BC_BoxZ');
		alert("BoxZ");
	})
	})