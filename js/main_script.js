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
var mql = window.matchMedia('all and (min-width: 990px)');
if (mql.matches) {
	// Добавление анимации к кнопке заказа
	function order_button_animate(){
		$('.orderButton').addClass('wow zoomIn');
	}
	order_button_animate();
	// Добавление анимации к заголовку секции и полоскам над и под ними
	function Heading_Horizontal_Lines_animate(){
		$('.horizontalLine').addClass('wow zoomIn');
	}
	Heading_Horizontal_Lines_animate();

	function H2_Heading_animate(){
		$('h2.section__heading').addClass('wow zoomIn');
	}
	H2_Heading_animate();

	// Анимирование секции "Обо Мне"
	$('.infoPannel__item').attr('data-wow-duration','1s');
	$('.aboutMe .presonal-Info').addClass('wow fadeInLeft');
	$('.aboutMe .resume').addClass('wow fadeInRight');
	$('.aboutMe .skills').addClass('wow zoomIn');

	// Анимирование секции "Used Technologies"
	$('.technologiesPannel__item').attr('data-wow-delay','0.20');
	$('.technologiesPannel__item').attr('data-wow-duration','1s');
	$('.technologiesPannel__item').addClass('wow zoomIn');

	// Анимирование секции "Work Examples"
	$('.examples__item').attr('data-wow-duration','1s');
	$('.examples__item').addClass('wow zoomIn');

	// Анимирование секции "Contacts"
	$('.contacts__phoneNumbers').attr('data-wow-duration','1s');
	$('.contacts__phoneNumbers').addClass('wow zoomIn');
	$('.contacts .socials__list').attr('data-wow-duration','1s');
	$('.contacts .socials__list').addClass('wow zoomIn');

	// Добавление расстояния с низу дисплея к срабатыванию анимации
	function add_data_wow_offset(){
		$('.wow').attr('data-wow-offset','160');
	}
	add_data_wow_offset();    
}
