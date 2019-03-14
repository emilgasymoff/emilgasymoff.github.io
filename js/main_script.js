// Preloader--------------------------------------------------------------------------------------
$(window).on('load',function(){
	$('.preloader_area').fadeOut();
})


// Медленный скролл при нажатии на ссылку---------------------------------------------------------
$('.nav-link--mainBanner').click(function(){
       $('html, body').animate({scrollTop:$('#mainBanner').position().top}, 600);
});

$('.nav-link--aboutMe').click(function(){
       $('html, body').animate({scrollTop:$('#aboutMe').position().top}, 600);
});

$('.nav-link--usedTechnologies').click(function(){
       $('html, body').animate({scrollTop:$('#usedTechnologies').position().top}, 600);
});

$('.nav-link--workExamples').click(function(){
       $('html, body').animate({scrollTop:$('#workExamples').position().top}, 600);
});

$('.nav-link--contacts').click(function(){
       $('html, body').animate({scrollTop:$('#contacts').position().top}, 600);
});

$('.orderButton').click(function(){
       $('html, body').animate({scrollTop:$('#contacts').position().top}, 3000);
});

// Работа с WOW.js-----------------------------------------------------------------------------------

	// Анимация для разрешения экрана с минимальной шириной 1000px--------------------------------------
var mql = window.matchMedia('all and (min-width: 1000px)');
if (mql.matches) {
	// Добавление анимации к заголовку секции и полоскам над и под ним
	function Heading_Horizontal_Lines_animate(){
		$('.horizontalLine').addClass('wow fadeInRight');
	}
	Heading_Horizontal_Lines_animate();

	function H2_Heading_animate(){
		$('h2.section__heading').addClass('wow fadeInLeft');
	}
	H2_Heading_animate()

	// Анимирование секции "Обо Мне"
	$('.infoPannel__item').attr('data-wow-duration','1s');
	$('.infoPannel__item').addClass('wow fadeInRight');

	// Анимирование секции "Used Technologies"
	$('.technologiesPannel__item').attr('data-wow-delay','0.20');
	$('.technologiesPannel__item').attr('data-wow-duration','1s');
	$('.technologiesPannel__item').addClass('wow zoomIn');

	// Анимирование секции "Work Examples"
	$('.examples__item').attr('data-wow-duration','1s');
	$('.examples__item').addClass('wow slideInRight');

	// Анимирование секции "Contacts"
	$('.contacts__phoneNumbers').attr('data-wow-duration','1s');
	$('.contacts__phoneNumbers').addClass('wow fadeInRight');
	$('.contacts .socials__list').attr('data-wow-duration','1s');
	$('.contacts .socials__list').addClass('wow fadeInLeft');

	// Добавление расстояния с низу дисплея к срабатыванию анимации
	function add_data_wow_offset(){
		$('.wow').attr('data-wow-offset','160');
	}
	add_data_wow_offset();    
}
