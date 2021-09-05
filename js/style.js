$(function(){
  $(".hover1").hover(function(){
    $("#header").addClass("img2");
    $("#header").removeClass("img1");
  },
  function(){
    $("#header").addClass("img1");
    $("#header").removeClass("img2");
  });

  $(".hover2").hover(function(){
    $("#header").removeClass("img1");
    $("#header").addClass("img3");eader
  },
  function(){
    $("#header").removeClass("img3");
    $("#header").addClass("img1");
  });

  $(".hover3").hover(function(){
    $("#header").addClass("img4");
    $("#header").removeClass("img1");
  },
  function(){
    $("#header").addClass("img1");
    $("#header").removeClass("img4");
  });

  $(".hover4").hover(function(){
    $("#header").addClass("img5");
    $("#header").removeClass("img1");
  },
  function(){
    $("#header").addClass("img1");
    $("#header").removeClass("img5");
  });

  $(window).scroll(function (){
		$('.fadeIn').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight){
				$(this).addClass('scrollIn');
			}
		});
	});
});
