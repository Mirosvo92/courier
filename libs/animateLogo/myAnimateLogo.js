(function(){
	var $logoImg = $('.logo__img'),
        $logo = $('.logo');
	//function for change rotate
	function animateRotate(angle) {
		var $elem = $logoImg;
		$({deg: 0}).animate({deg: angle}, {
			duration: 1000,
			step: function(now) {
				$elem.css({
					transform: 'rotate(' + now + 'deg)'
				});
			}
		});
	}
	
	function degree(limitDeg){
		//limitDeg = 0;
		var timer = setInterval(function(){
			animateRotate(limitDeg);
			
		}, 5000);
		var timer2 = setInterval(function(){
			animateRotate(15);
	
		}, 4000);
		var timer3 = setInterval(function(){
			animateRotate(40);
	
		}, 6000);
	}
	
	degree(30);
	
}());	