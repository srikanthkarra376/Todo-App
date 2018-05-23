
$("ul").on("click", "li",function(){

	$(this).toggleClass("completed");

});

//click on x to delete to do

$("ul").on("click","span",function(event){

	$(this).parent().fadeOut(500,function(){

		$(this).remove();
	});

	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){

	if(event.which === 13){

		// capturing text from input 

	     var todoText = $(this).val();
	     $(this).val("");

	     //Create a New li and the new li to ul

	     $("ul").append("<li><span> <i class='fa fa-trash'></i> </span> " +todoText + "</li>");

	}
});
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle()

});