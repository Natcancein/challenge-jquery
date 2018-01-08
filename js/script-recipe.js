$(document).ready( function(){

	$(".js-menu").hide();
	console.log("Documento listo")
	

});

/**
 * funciones para ocultar y añadir clase make,
 * y para ocultar y añadir clase active
 */
 $(".js-show-recipe").click(function(){
  	$('.page').removeClass('make');
  	$('.js-show-recipe').addClass('active');
  	$('.js-show-make').removeClass('active');
  });

   $(".js-show-make").click(function(){
  	$('.page').addClass('make');
  	$('.js-show-make').addClass('active');
  	$('.js-show-recipe').removeClass('active');
  });
