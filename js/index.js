

//тайтл
var space = "   \  ";
		var speed = "1000";
		var pos = 0;
		var msg = "life_in.exe ";
		function Scroll(){
			document.title = msg.substring(pos, msg.length) + space + msg.substring(0,pos);
			pos++;
			if(pos > msg.length) pos = 0;
			window.setTimeout("Scroll()", speed);
		} Scroll();

//мейн
$(document).ready(function() {
new WOW().init();
 $('#fullpage').fullpage({
      scrollBar: true,
      navigation: false,
      navigationTooltips: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'],
      loopBottom: false,
      sectionSelector: 'section'
    });
   int = -1;
  color_array = ['','linear-gradient(135deg, #ff0048, #9f27b5)','linear-gradient(45deg, #ff0048, #9f27b5)','linear-gradient(135deg, #ff0048, #9f27b5)','#f1c40f','#16a085'];

  $('section').each(function(){
    int++
    $(this).addClass('grid-item-' + int).css('background-image', color_array[int]);
  });
 //лоад
$('#video').delay(0).animate({'opacity':'0.5'},500);
$('.wrapper').delay(0).animate({'opacity':'1'},500);
$('.buttons').delay(0).animate({'opacity':'1'},500);
$('#canvas').delay(0).animate({'opacity':'1'},500);
$('section').delay(0).animate({'opacity':'1'},100);
});
//лого
$(function() { var logo = $(".lrg-logo"); $(window).scroll(function() {
var scroll = $(window).scrollTop();

    if (scroll >= 620) {
      if(!logo.hasClass("sml-logo")) {
        logo.hide();
        logo.removeClass('lrg-logo').addClass("sml-logo").fadeIn( "slow");
      }
    } else {
      if(!logo.hasClass("lrg-logo")) {
        logo.hide();
        logo.removeClass("sml-logo").addClass('lrg-logo').fadeIn( "slow");
      }
    }

});
});

//канвасы
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 355,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
    },
    "opacity": {
      "value": 0.48927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.2,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


//параллакс
var scene = document.getElementById('scene2');
var parallaxInstance = new Parallax(scene);
parallaxInstance.friction(0.4, 0);

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
relativeInput: true
parallaxInstance.friction(0.4, 0.4);

var scene = document.getElementById('scene1');
var parallaxInstance = new Parallax(scene);
parallaxInstance.friction(0.4, 0);
