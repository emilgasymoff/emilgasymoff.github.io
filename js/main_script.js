// Preloader
$(window).on('load',function(){
	$('.preloader_area').fadeOut();
})


// SectionsSlowScroll
$('.mainBanner__link').click(function(){
       $('html, body').animate({scrollTop:$('#mainBanner').position().top}, 500);
});

$('.aboutMe__link').click(function(){
       $('html, body').animate({scrollTop:$('#aboutMe').position().top}, 500);
});

$('.usedTechnologies__link').click(function(){
       $('html, body').animate({scrollTop:$('#usedTechnologies').position().top}, 500);
});

$('.workExamples__link').click(function(){
       $('html, body').animate({scrollTop:$('#workExamples').position().top}, 500);
});

$('.contacts__link').click(function(){
       $('html, body').animate({scrollTop:$('#contacts').position().top}, 500);
});