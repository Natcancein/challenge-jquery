$(document).ready( function(){

	$(".js-menu").hide();
	console.log("Documento listo")
	

});

/**
 * funcion para ocultar y añadir clase make
 */
 $(".js-show-recipe").click(function(){
  	$('.page').removeClass('make');
  });

   $(".js-show-make").click(function(){
  	$('.page').addClass('make');
  });
