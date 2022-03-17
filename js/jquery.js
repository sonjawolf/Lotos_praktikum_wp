jQuery(document).ready(function($){
	$('#gornjaNavigacija').prepend('<div id="menu-icon"></div>');
    $("#menu-icon").on("click", function(){
        $("#gornjaNav").slideToggle();
        $(this).toggleClass("active");
    });
	
});



