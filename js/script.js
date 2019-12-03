$( document ).ready(function() {
	var selects = ($(".quantity-select").length - 1);


	$('.tabs-item a:not(:first)').addClass('is-inactive');
	$('.info').hide();
	$('.info:first').show();


	function updateButton() {
		var quantity = 0;
		$(".quantity-select").each(function(){
			if($(this).val() != 0) {
	    		quantity = quantity + (parseInt($(this).val(), 10));
			}
		});
		if (quantity >= 1) {
			$( ".summary-button" ).addClass( "is-active" );
			$( ".summary-empty" ).addClass( "is-disabled" );
			$( ".summary-resume" ).addClass( "is-active" );
		} else {
			$( ".summary-button" ).removeClass( "is-active" );
			$( ".summary-empty" ).removeClass( "is-disabled" );
			$( ".summary-resume" ).removeClass( "is-active" );
		}
  	}

    $(".quantity-select").change(function() {
		updateButton();
	});



  	$(".js-contact .input-txt").keyup( function() {
        var $emptyFields = $('.js-contact .input-txt').filter(function() {
            return $.trim(this.value) === "";
        });

        if (!$emptyFields.length) {
			$( ".summary-button" ).addClass( "is-active" );
        }
	});


    $('.breadcumb-link').click(function(){
   		updateButton();
  		var isValid = true;
	  	$('.js-contact .input-txt').each(function() {
	    	if ( $(this).val() === '' ) 
	        	isValid = false;
	  	});
	  	if (isValid == true) {
			$( ".summary-button" ).addClass( "is-active" );
	  	}
	});

    /* tabs */
    $('.tabs-link').click(function(){
   		  var t = $(this).attr('id');
		  if($(this).hasClass('is-inactive')){ //this is the start of our condition 
		    $('.tabs-link').addClass('is-inactive');           
		    $(this).removeClass('is-inactive');
		    
		    $('.info').hide();
		    $('#'+ t + 'C').show();
		 }
	});


    /* tabs */
    $('.summary-button').click(function(){
   		if($(this).hasClass( "is-active" )) {
	  		$(this).removeClass( "is-active" )
   		}
	});
	$('.summary-button').click(function(){
		console.log("foo");
  		var isValid = true;
	  	$('.js-contact .input-txt').each(function() {
	    	if ( $(this).val() === '' ) 
	        	isValid = false;
	  	});
	  	if (isValid == true) {
			$( ".summary-button" ).addClass( "is-active" );
	  	}
	});



    $('.payment-methodItem').click(function(){
		$(".payment-methodItem").removeClass( "is-active" );
		$(this).addClass( "is-active" );
	});

});