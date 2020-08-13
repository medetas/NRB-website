// Input Validation

// $(document).ready(function () {
// 	$('.submit_btn').click(function (event) {
// 		event.preventDefault();

// 		let name = $('#name').val()
// 		let phone = $('#phone').val()
// 		let email = $('#email').val()
// 		let comment = $('#comment').val()
		

// 	})
// })

$(function() {

	// Navigation

	let header = $('#header'),
		introH = $('#intro').innerHeight(),
		scrollOffset = $(window).scrollTop(),
		windowH = $(window).innerHeight();

		// if (windowH < introH) {
		// 	introH = windowH;
		// }

		checkScroll(scrollOffset);

		$(window).on('scroll', function() {
			scrollOffset = $(this).scrollTop();
			checkScroll(scrollOffset);
			console.log(scrollOffset,introH, $(window).innerHeight());

		// $('html, body').animate({
		// 	scrollTop: scrollOffset
		// }, 500);

		});


		function checkScroll(scrollOffset) {
			if (scrollOffset >= introH) {
				header.addClass('header-fixed')
			} else {
				header.removeClass('header-fixed')
			}
		}


	// Navigation

	$('[data-scroll]').on('click', function(event) {
		event.preventDefault();

		let $this = $(this), 
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;
			console.log(blockOffset)

		$('html, body').animate({
			scrollTop: blockOffset
		}, 500);
	});


	$('#header_toggle').on('click', function(event) {
		event.preventDefault();

		$(this).toggleClass('active');
		$('#toggle_list').toggleClass('active');
		// $('#header_toggle_item').toggleClass('active');

	})

	// Accordion

	$('[collapse]').on('click', function(event) {
		event.preventDefault();

		let $this = $(this), 
			blockId = $this.data('collapse');

		$this.toggleClass('active');
		

	});

});