$(document).ready(function(){


	//Code for incomes
	$(document).on('change', '.oneInc', function(){
		income = $(this).data('income');
		container = $('#' + income);
		wrapper = $('.incomes');

		if( $(this).is(':checked')){
			if( wrapper.is(':visible')){
				container.slideDown(70)
			}else {
				wrapper.slideDown(70, function(){
					container.slideDown(70)
				})
			}
		}else {
			container.slideUp(70);
		}

		if($('.oneInc:checked') < 1) {
			wrapper.hide();
		}
	})

	//code for dependents
	$(document).on('change', '.depChange', function(){
		var number = $(this).val();
		if(number > 0){
			$('.dependentsContainer').fadeIn();
		}else{
			$('.dependentsContainer').slideUp(70);
		}
		$('.dep').hide();
		$('.dep').slice(0,number).fadeIn();
	})
	/*
	$('#taxpayerCreate').formToWizard({
		submitButton: 'submit'
	});*/
});