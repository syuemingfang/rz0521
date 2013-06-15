// JavaScript //
define(["ready", "jquery"], function() {
	$(document).ready(function(){
		// Water //
		//if($('.wrap_bg_water-main').length > 0) water($('.wrap_bg_water-main'));
		
		if($('.logo').length > 0)logoEffect($('.logo'));
		
		// Light //
		if($('.wrap_light').length > 0) light($('.wrap_light'));
		if($('.wrap_light2').length > 0) light($('.wrap_light2'));
		if($('.wrap_light3').length > 0) light($('.wrap_light3'));
		// PhotoBtn //		
		$('.pg_pb').photobutton({
			bind:'mouseenter',
			type:'filename',
			name:'_hv',
			attribute:'src',
			speed:1000
		});	
		// Fancybox //	
		$('.lightbox').fancybox();
	}); 
	function water(target){
		target.animate({
			top: '-=60'
		}, 5000, function() {
			target.animate({
				top: '+=60'
			}, 5000, function() {
				water(target);
			});
		});
	}
	function logoEffect(target){
		target.animate({
			opacity: 0.5
		}, 1000, function() {
			target.animate({
				opacity: 1
			}, 1000, function() {
				logoEffect(target);
			});
		});
	}
	function light(target){
		target.animate({
			opacity: 0.25
		}, 100, function() {
			target.animate({
				opacity: 1
			}, 100, function() {
				light(target);
			});
		});
	}
});