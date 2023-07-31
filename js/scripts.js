// Open and close animation for the projects page

	// Animation for fewd project
	$('div.fewd14').bind('click', function(){
		$(this).addClass('fewdShow');
		$('div.contentF').delay(500).show('fold', 400);
	})
	$('div.fewd14').mouseleave(function() {
		$(this).removeClass('fewdShow');
		$('div.contentF').hide('fold', 400);
	});

	// Animation for calculator project
	$('div.calc').bind('click', function(){
		$(this).addClass('calcShow');
		$('div.contentCalc').delay(500).show('fold', 400);
	})
	$('div.calc').mouseleave(function() {
		$(this).removeClass('calcShow');
		$('div.contentCalc').hide('fold', 400);
	});

	// Animation for announcement2.0 project
	$('div.announcement2').bind('click', function(){
		$(this).addClass('ann2Show');
		$('div.contentAnn2').delay(500).show("fold", 400);
	})
	$('div.announcement2').mouseleave(function() {
		$(this).removeClass('ann2Show');
		$('div.contentAnn2').hide('fold', 400);
	});

	// Animation for announcement project
	$('div.announcement').bind('click', function(){
		$(this).addClass('ann1Show');
		$('div.contentAnn').delay(500).show('fold', 400);
	})
	$('div.announcement').mouseleave(function() {
		$(this).removeClass('ann1Show');
		$('div.contentAnn').hide('fold', 400);
	});

	// Animation for animation project
	$('div.animation').bind('click', function(){
		$(this).addClass('animeShow');
		$('div.contentAnime').delay(500).show('fold', 400);
	})
	$('div.animation').mouseleave(function() {
		$(this).removeClass('animeShow');
		$('div.contentAnime').hide('fold', 400);
	});


	// Animation for wireframe project
	$('div.wireframe').bind('click', function(){
		$(this).addClass('wireShow');
		$('div.contentWire').delay(500).show('fold', 400);
	})
	$('div.wireframe').mouseleave(function() {
		$(this).removeClass('wireShow');
		$('div.contentWire').hide('fold', 400);
	});


	// Animation for fewd section
	$('div.trust').bind('click', function(){
		$(this).addClass('trustShow');
		$('div.contentTrust').delay(500).show('fold', 400);
	})
	$('div.trust').mouseleave(function() {
		$(this).removeClass('trustShow');
		$('div.contentTrust').hide('fold', 400);
	});

	
	//Animation for showing the html, css and js logo on the skills page
	function showSkills() {
		$('.coding div').each(function(i){ //These works as a for loop

        	setTimeout(function(){
          	$('.coding div').eq(i).addClass('showLogos');//This makes it itereate on each image
        	}, 200 * (1+i)); //Delay miliseconds for the skill pictures
        
      	})

	}







