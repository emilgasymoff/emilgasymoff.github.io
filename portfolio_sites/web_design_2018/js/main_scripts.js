// Preloader
$(window).on('load',function(){
	$('.preloader_area').fadeOut();
})

// SectionsSlowScroll
$('.menu-item__link--header').click(function(){
       $('html, body').animate({scrollTop:$('#header').position().top}, 500);
});

$('.menu-item__link--services').click(function(){
       $('html, body').animate({scrollTop:$('#services').position().top}, 500);
});

$('.menu-item__link--portfolio').click(function(){
       $('html, body').animate({scrollTop:$('#portfolio').position().top}, 500);
});

$('.menu-item__link--blog').click(function(){
       $('html, body').animate({scrollTop:$('#blog').position().top}, 500);
});