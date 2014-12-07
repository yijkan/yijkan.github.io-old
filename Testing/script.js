$(document).ready(function() {
	// Message bar updates
	$('.menu_item').mouseleave(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Welcome to Yijin Kang's website! Hover over or click on one of the items above.");
	});

	// Home
	$('#home').mouseenter(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Back to the landing page");
	});

	// Programmer
	$('#prog').mouseenter(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Updates: HackRU Fall 2014 Project: Healing Humanity");
	});

	// Musician
	$('#mus').mouseenter(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Updates: SoundCloud link");
	});

	// Economist
	$('#econ').mouseenter(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Updates: Fed Challenge 2015");
	});

	// CV
	$('#cv').mouseenter(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Updates: PDF now available!");
	});

	// Change menu item colors
	$('.menu_item').click(function() {
		$('.menu_item').css('background-color','#ECCAFC');
		$(this).css('background-color','#D270FF');
	});

	// load home page
	$('#home').click(function() {
		$("#contect").load("home.txt");
	})

	// load prog page
	$("#prog").click(function() {
		$("#content").load("prog.txt");
	})

	// load mus page 
	$("#mus").click(function() {
		$("#content").load("mus.txt");
	})

	// load econ page
	$("#econ").click(function() {
		$("#content").load("econ.txt");
	})

	// load cv page	
	$("#cv").click(function() {
		$("#content").load("cv.txt");
	})
});