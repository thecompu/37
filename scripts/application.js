$(document).ready(function() {
	$('.div_BC_Box').hover(function() {
		document.getElementById('Original').style.display = "none";
		document.getElementById('BaseCamp').style.display = "block";
	},
	function() {
		document.getElementById('Original').style.display = "block";
		document.getElementById('BaseCamp').style.display = "none";
	});
	$('.div_HR_Box').hover(function() {
		document.getElementById('Original').style.display = "none";
		document.getElementById('Highrise').style.display = "block";
	},
	function() {
		document.getElementById('Original').style.display = "block";
		document.getElementById('Highrise').style.display = "none";
	});
	$('.div_CF_Box').hover(function() {
		document.getElementById('Original').style.display = "none";
		document.getElementById('Campfire').style.display = "block";
	},
	function() {
		document.getElementById('Original').style.display = "block";
		document.getElementById('Campfire').style.display = "none";
	});
});