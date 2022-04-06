$(document).ready(function () {
	$('head').append('<link rel="stylesheet" type="text/css" href="../common/scripts/gifts/gifts.css" media="all">');
	var scroll=$(boxesSelector);
	scroll.append('<div id="boxesContainer"></div>');
	var bContainer=$('#boxesContainer');
	bContainer.append('<div class="instructions">'+instructions+'<table> <tbody> <tr> <td> <span class="bounce">↓</span> </td> <td> </td> <td><span class="bounce">↓</span> </td> </tr> </tbody> </table> </div>');
	bContainer.append('<div id="boxes" class="boxes boxesfirsttry"></div>');
	var boxes=$('#boxes');
	for (var i = 0; i < 9; i++) {
		boxes.append('<div id="'+(i+1)+'"> <img src="../common/scripts/gifts/img/box_c.png" class="try"> <img src="../common/scripts/gifts/img/download.png" class="opentry"> <span class="boxtext">50%</span> </div>');
	}

	bContainer.append('<div class="sweet-overlay" style="opacity: 1.03; display: none;" tabindex="-1"></div>');
	bContainer.append('<div class="sweet-alert animated bounceIn" id="modal02"> <div class="sa-icon sa-success" id="success02"> <span class="sa-line sa-tip" id="successtip02"></span> <span class="sa-line sa-long" id="successlong02"></span> <div class="sa-placeholder"></div> <div class="sa-fix"></div> </div> <p id="cnt">'+lastTry+'<br>'+lastTry2+'</p> <div class="sa-button-container"> <div class="sa-confirm-button-container"> <button id="update" style="display: inline-block; box-shadow: rgba(140, 212, 245, 0.8) 0px 0px 2px, rgba(0, 0, 0, 0.0470588) 0px 0px 0px 1px inset; background-color: #FFA400;"> OK </button> <div class="la-ball-fall"></div> </div> </div> </div>');


	scroll.append('<div class="spin-result-wrapper"> <div class="pop-up-window"> <div class="close-popup"></div> <span class="pop-up-heading" style="margin-bottom: 20px!important; display: block;">'+congrats+'</span> <p class="pop-up-text" style="text-align: center!important;">'+congrats2+'<span class="price_land_s1">'+price+'</span> <span class="price_land_curr">'+currency+'</span></p><br /> <button class="pop-up-button">Ok</button> </div> </div>');

	$(formSelector).wrap('<div class="gifts_order_block"></div>');

	$(".boxes > div").click(function(){
		if ($(this).parent().hasClass("boxesfirsttry")){
			$(".boxes").removeClass("boxesfirsttry");
			$(this).addClass("openbox");
			$(this).find(".try").hide();
			$(this).find(".opentry").show();
			setTimeout(function(){
				$(".sweet-overlay").show();
				$(".sweet-alert").show()
			},500);
		}
		else {
			$(this).parent().hasClass("boxeslasttry")&&($(this).hasClass("openbox")||($(this).find(".try").hide(),
				$(this).find(".opentry").show(),
				$(this).find(".boxtext").css("display","block"),
				setTimeout(function(){
					$(".new-comebacker-overlay").is(":visible")&&$(".new-comebacker-overlay").hide(),$(".new-comebacker-overlay .boxes-is-open").show(),
					$(".new-comebacker-overlay .boxes-not-open").hide(),
					$(".spin-result-wrapper").show(),
					setTimeout(function(){
						$("#boxesContainer").slideUp(250);
						setTimeout(function(){
							$(".gifts_order_block").slideDown(250)
						},500);
					},500);
				},500)));
		}
	});
	$("#update").click(function(){
		$(".sweet-overlay").hide();
		$(".sweet-alert").hide();
		$(".boxes").addClass("boxeslasttry");
	});
	$(".pop-up-button, .close-popup").click(function(){
		$(".spin-result-wrapper").hide();
	});
	$("a, .menu__item").bind("click.smoothscroll",function(e){
		e.preventDefault();
		var o=$("#scroll-to-boxes").offset().top - 80;
		$("html, body").stop().animate({scrollTop:o},500,"swing");
	});
});