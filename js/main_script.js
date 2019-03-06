// Preloader
$(window).on('load',function(){
	$('.preloader_area').fadeOut();
})


// SectionsSlowScroll
$('.nav-link--mainBanner').click(function(){
       $('html, body').animate({scrollTop:$('#mainBanner').position().top}, 500);
});

$('.nav-link--aboutMe').click(function(){
       $('html, body').animate({scrollTop:$('#aboutMe').position().top}, 500);
});

$('.nav-link--usedTechnologies').click(function(){
       $('html, body').animate({scrollTop:$('#usedTechnologies').position().top}, 500);
});

$('.nav-link--workExamples').click(function(){
       $('html, body').animate({scrollTop:$('#workExamples').position().top}, 500);
});

$('.nav-link--contacts').click(function(){
       $('html, body').animate({scrollTop:$('#contacts').position().top}, 500);
});