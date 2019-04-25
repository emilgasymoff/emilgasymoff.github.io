$('.navbar-toggler').on('click',function(){
	$('.navigation').addClass('navigation--active');
})

$('.close-icon').on('click', function(){
	$('.navigation').removeClass('navigation--active');
})