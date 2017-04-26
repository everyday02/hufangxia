var X = new Object();
(function(window) {
  $window = $(window),
  $body = $('body'),
  $wrapper = $('#recall-wrapper'),
  $recal01 = $('.recall-01'),
  $recal02 = $('.recall-02'),
  $recal03_interval= null;
  X = {
    listeners: {
      onLoaded: function() {
        $window.on('load', function() {
          window.setTimeout(function() {
          	$body.removeClass('is-loading');
            setTimeout(function(){
              $("#typed").typed({
                strings: ["参差荇菜,^300左右流之<br />^1000窈窕淑女,^300寤寐求之<br />"],
                typeSpeed: 400,
                backDelay: 500,
                cursorChar: '',
                callback: function() {
                  $('.girl-firend-head').fadeIn('slow');
                }
              });
            },3000);
          }, 200);
  			});
      },
      bindMoveSectionDown: function() {
        $('#moveSectionDown').click(function() {
          $.fn.fullpage.moveSectionDown();
        });
      }
    },
    initListenrs: function() {
      this.listeners.onLoaded();
      this.listeners.bindMoveSectionDown();
    },
    recall2Fn: function() {
      console.info('recall2Fn call...');
      $recal02.find('.map-me-you').css({'opacity': 0}).show().animate({'width': '65%', 'opacity': 1},2000, null, function() {
        $('.boy-wuhan').fadeIn(2500,function() {
          $('.girl-tianshui').fadeIn('slow');
          $recal02.find('.map-me-you').animate({'width': '45%'})
          $(".map-say-content").show();
          $('.map-say-01').typed({
            strings: ["两个纬度相差甚远的南北方孩子<br>"],
            typeSpeed: 400,
            backDelay: 500,
            cursorChar: '',
            callback: function() {
              $('.map-me-you').hide();
              $('.map-beijing-shunyi').css({'opacity': 0}).show().animate({'width': '45%', 'opacity': 1}, 2000);
              $('.map-say-02').typed({
                strings: ["在诺大的北京顺义区相遇<br>"],
                typeSpeed: 400,
                backDelay: 500,
                cursorChar: '',
                callback: function() {

                }
              });
              // '鬼使神差地在繁花似锦的『大北京』相遇'
            }
          });
        });
      });
      // $recal02.find('.map-me-you').fadeIn(2000);
    },
    recall3Fn: function() {
      if($recal03_interval) clearInterval($recal03_interval);

      var firstEl = null,
          preElements = Array.from($('.recall-03 .setp')).reverse();

      $(preElements).hide();

      firstEl = $(preElements.pop());
      firstEl.fadeIn('slow');

      $recal03_interval = setInterval(function() {
        console.info('interval ing...');
        firstEl.fadeOut().hide();
        firstEl = $(preElements.pop());
        firstEl.fadeIn('slow');
        if(preElements.length == 0) clearInterval($recal03_interval);
      }, 5000);
    },
    afterFullPageScroll: function(anchorLink, index, slideIndex) {
      console.info(index);
      switch (index) {
        case 1:
          break;
        case 2:
          X.recall2Fn();
          break;
        case 3:
          X.recall3Fn();
          break;
        case 4:
          break;
        default:
          break;
      }
    },
    init: function() {
      console.info('init page script');

      $wrapper.fullpage({
        // navigationTooltips: ['提示一','提示二','提示三','提示四'],
        navigation: true,
        afterLoad: X.afterFullPageScroll
      });
      this.initListenrs();
    }
  }
})(window);
