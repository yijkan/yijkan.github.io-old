$(document).ready(function() {
	// Message Bar updates
	$('#home').mouseenter(function() {
		updateMB("Back to the landing page");
	});

	$('#prog').mouseenter(function() {
		updateMB("Updates: Summer '16 work experience");
	});

	$('#mus').mouseenter(function() {
		updateMB("Updates: CMU Orchestra");
	});

	$('#econ').mouseenter(function() {
		updateMB("Updates: Bloomberg FX Essentials Certification")
	});

	// $('#res').mouseenter(function() {
	// 	updateMB("Coming soon!");
	// });

	$('.menu_item').mouseleave(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Welcome to Yijin Kang's website! Hover over or click on one of the items above.");
	});

    // menu item updates
	$('.menu_item').click(function() {
		$('.menu_item').removeClass('clicked');
		$(this).addClass('clicked');
	});

    // content updates
	$('#home').click(function() {
		$('#content').fadeOut(100, function() {
			$('#content').load('pages/home.txt', function(responseText, textStatus, jqXHR) {
				$('#content').fadeIn(200);
			});
		});
	});

	$('#prog').click(function() {
		$('#content').fadeOut(100, function() {
			$('#content').load('pages/prog.txt', function(responseText, textStatus, jqXHR) {
				$('#content').fadeIn(200);
			});
		});
	});

	$('#mus').click(function() {
		$('#content').fadeOut(100, function() {
			$('#content').load('pages/mus.txt', function(responseText, textStatus, jqXHR) {
				$('#content').fadeIn(200);
			});
		});
	});

	$('#econ').click(function() {
		$('#content').fadeOut(100, function() {
			$('#content').load('pages/econ.txt', function(responseText, textStatus, jqXHR) {
				$('#content').fadeIn(200);
			});
		});
	});

	// $('#res').click(function() {
	// 	$('#content').load('pages/res.txt');
	// });

	$(window).scroll(function() {
		sticky_relocate();
	});
    sticky_relocate();
});

function updateMB (m) {
	$('#mess_bar').empty();
	$('#mess_bar').append(m);
}

function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#menu_a').offset().top;
    if (window_top > div_top) {
    	// $('#menu_placeholder').show();
    	$('#menu_placeholder').css('height',document.getElementById('menu_container').offsetHeight);
        $('#menu_container').addClass('stick');
    } else {
    	// $('#menu_placeholder').hide();
    	$('#menu_placeholder').css('height',0);
    	$('#menu_container').removeClass('stick');
	}
}