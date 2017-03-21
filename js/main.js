console.log('js loaded')
$(document).ready(function(){
	

	$('#c-info').hide();
	$('#m-info').hide();

	$('#c-link').click(function(){
		$('#c-info').toggle();

	})
	
	$('#m-link').click(function(){
		$('#m-info').toggle();
	})
	

	$('.img-caro').slick({
		autoplay : true

	});
	
	$('button.slick-prev.slick-arrow').text('<');
	$('button.slick-next.slick-arrow').text('>');

	$(window).resize(function(){location.reload();});

	// thanks css-tricks
	$(function() {
  		$('a[href*="#"]:not([href="#"])').click(function() {
   	 if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
});

	var quoteCounter = 0;
	var quoteLength = $('blockquote').length;

	setInterval(function () {
 		$('blockquote').eq(quoteCounter).fadeOut(800, function () {
    		if (quoteCounter === quoteLength - 1) {
      			quoteCounter = 0;
    		} else {
      			quoteCounter += 1;
    	}
    	$('blockquote').eq(quoteCounter).fadeIn();
  		});
	}, 7000);


	$('.hamburger').on('click', function(){


		$('.menu').slideToggle();
	});

});