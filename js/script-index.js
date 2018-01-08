$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	$(".js-back").hide();

   console.log(activities);


/*
* Función que se encarga de pintar una noticia
* dentro del p class showNews
*/

 $(function printNews(){
 	$(".showNews").append('NUEVAS RECETAS')
 });

 console.log('Recipes: ', recipesArray);


});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
var recipe = [];
function renderHighlightedRecipes(recipesArray) {	
	for(var i in recipesArray){
	if(recipesArray[i].highlighted == true){
		recipe.push(recipesArray[i]);
		renderRecipe(recipesArray[i]);
		} 
	}
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/

function renderRecipe(recipe) {
	//console.log('Voy a pintar la receta: ', recipes);
	
	var title = recipe.title;
	var name = recipe.source.name;
	var image = recipe.name;
		$(".list-recipes").append('<a class="item-recipe" href="#">' +
                               '<span class="attribution">'+
                                 '<span class="title-recipe">'+ title +'</span>' +
                                 '<span class="metadata-recipe">'+
                                   '<span class="author-recipe">'+ name +'</span>' +
                                   '<span class="bookmarks-recipe">' +
                                     '<span class="icon-bookmark"></span>' +
                                   '</span>' +
                                 '</span>' +
                               '</span>' +
                               '<img src="img/recipes/320x350/' + image + '.jpg' + '"/>' +
                             '</a>');
 };



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	
  for (var i = 0; i < activities.length; i++) {
      renderActivity(activities[i]);
    } 
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	console.log('Activities: ', activities);
	$('.wrapper-message').hide();
	
}


