$(document).ready(function(){
	$('#Add').click(function(){
		var text =$('#textarea').val();
		$('.likha').append('<li><a><input type="checkbox" class="cross"/>'+text+'<button class="del">Remove</button></a></li>');
		
		$('#textarea').val('');
	});




	$('#ren').click(function(){

		$('li').remove();

	});

	

	$(document).on('click', '.del', function(){

		$(this).parent().remove();

	});


	$(document).on('click', '.cross', function(){
		if( $(this).parent().css('textDecoration') =='line-through' ){
			$(this).parent().css('textDecoration','none');


		}
		else{

			$(this).parent().css('textDecoration','line-through');

		}



	});



});