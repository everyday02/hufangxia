var X = new Object();
(function(window) {
  $window = $(window),
  $body = $('body'),
  $wrapper = $('#recall-wrapper'),
  $recal01 = $('.recall-01'),
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
    recall3Fn: function() {
      if($recal03_interval) clearInterval($recal03_interval);
      var firstEl = null,
          preElements = Array.from($('.recall-03 .setp')).reverse();

      firstEl = $(preElements.pop());
      firstEl.fadeIn('slow');

      $recal03_interval = setInterval(function() {
        console.info('interval ing...');
        firstEl.fadeOut().remove();
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
