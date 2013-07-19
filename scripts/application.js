
$(document).ready(function() {
	$('.div_BC_Box').hover(function() {
	$('div.div_BC_SwapZ').addClass('div_BC_Swap');
	}, function() {
		$('div.div_BC_SwapZ').removeClass('div_BC_Swap');
	});
})

/*$('.div_BC_Box').on('mouseenter', function(){
		$(this).find('.div_BC_BoxZ').toggleClass('div_BC_Box');
	})*/
