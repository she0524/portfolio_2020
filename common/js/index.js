$(document).ready(function(){
	var wd = $('.wrap > article').width();
	$('.wrap > article').height(wd);

		// background비율대로 줄어들어라
		$(window).resize(function(){
			var wd = $('.bg>.imgBox').width();
			$('.bg>.imgBox').height(wd);
			var wd = $('.wrap > article').width();
			$('.wrap > article').height(wd);

		});
		
		// var $trigger = $('#trigger'); //메뉴 지워라
		// $trigger.hide();



		var $UIUX = $('article.UIUX');
		var $Edit = $('article.Edit');
		var $Web = $('article.Web');

		$('#navWeb').on('click',function(){
			$UIUX.hide();
			$Edit.hide();
			$Web.show();
			$('#navWeb').css('font-weight','bold');
			$('#navUIUX').css('font-weight','inherit');
			$('#navEdit').css('font-weight','inherit');
		});

		$('#navUIUX').on('click',function(){
			$Edit.hide();
			$Web.hide();
			$UIUX.show();
			$('#navUIUX').css('font-weight','bold');
			$('#navEdit').css('font-weight','inherit');
			$('#navWeb').css('font-weight','inherit');
		});
		$('#navEdit').on('click',function(){
			$UIUX.hide();
			$Web.hide();
			$Edit.show();
			$('#navEdit').css('font-weight','bold');
			$('#navWeb').css('font-weight','inherit');
			$('#navUIUX').css('font-weight','inherit');
		});
	
		var $about = $('span>#about');
		var $body = $('body');
		// $about.on('mouseenter',function(){
		// 	$about.addClass('fotOn');
		// 	$body.addClass('fotBg');
		// });
		// $about.on('mouseleave',function(){
		// 	$about.removeClass('fotOn');
		// 	$body.removeClass('fotBg');
		// });
		$about.mouseenter(function(){
				$about.stop().animate({'color':'#fff'},400,
					function(){
						$body.animate({'background-color':'#000'},600);
				});
			});
		$about.mouseleave(function(){
				$about.stop().animate({'color':'#000'},200,
					function(){
						$body.animate({'background-color':'#fff'},400);
					});
			});

		// var $screen = $('.screen');
		// $screen.hide();


		var $wd = $(window).width();
		var $imgDiv = $('.hide');
		var $imgBox = $('.imgBox>a');


		// if ($wd < 1200) {//화면 너비가 1200px이하일때
		// 	$imgDiv.remove();//div 안에 있는 것들이 사라져라
		// 	// $imgBox.css('opacity','.5');//hover시 나타나는 백그라운드의 투명도
		// 	// $screen.show();
		// }

		//슬라이드메뉴
		var $trg = $('#trigger');
		var $menu = $('.pull-right');
		var $close = $('#close');

		if ($wd < 629) {
			$trg.click(function(){
				$menu.animate({left:0});
			});
			$close.click(function(){
				$menu.animate({left:-250});
			});
		}
			// $UIUX.click(function(e){
			// 	e.preventDefault();
			// 	$menu.animate({left:-250});
			// });
			// $Edit.click(function(e){
			// 	e.preventDefault();
			// 	$menu.animate({left:-250});
			// });
			// $Web.click(function(e){
			// 	e.preventDefault();
			// 	$menu.animate({left:-250});
			// });
		

});
