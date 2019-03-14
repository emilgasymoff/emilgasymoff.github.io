// Preloader
$(window).on('load',function(){
	$('.preloader_area').fadeOut();
})


// Медленный скролл при нажатии на ссылку
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

// Работа с WOW.js

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
$('.infoPannel').attr('data-wow-duration','1s');
$('.infoPannel').addClass('wow fadeInRight');

// Анимирование секции "Used Technologies"
$('.technologiesPannel').attr('data-wow-delay','0.5s');
$('.technologiesPannel').attr('data-wow-duration','1s');
$('.technologiesPannel').addClass('wow zoomIn');

// Анимирование секции "Work Examples"
$('.workExaples__list').attr('data-wow-duration','1s');
$('.workExaples__list').addClass('wow slideInRight');

// Добавление расстояния с низу дисплея к срабатыванию анимации
function add_data_wow_offset(){
	$('.wow').attr('data-wow-offset','170');
}
add_data_wow_offset();