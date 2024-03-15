$('#prev').on('click', function() {
	$('#cards').animate({
	  scrollLeft: '-=500'
	}, 500, 'swing');
  });
  
  $('#next').on('click', function() {
	$('#cards').animate({
	  scrollLeft: '+=500'
	}, 500, 'swing');
  });
