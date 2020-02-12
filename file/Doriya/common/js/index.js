$(document).ready(function(){

		var $win_w = $(window).width();

		if($win_w <= 414) {
			$('#trigger').stop().click(function(){
				$('#gnb').toggle(300);
			});
			$('#gnb>li').stop().click(function(){
				$('#gnb').toggle(200);
			});
			

			$('#submit').click(function(){
			$('#search').css({'display':'block'});
			});
			$('#search').click(function(){
				$('#search').css({'display':'none'});
			});
	
		}
		
			
	
		

		

	



});