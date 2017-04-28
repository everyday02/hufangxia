var X = new Object();
(function(window) {
  $window = $(window),
  $body = $('body'),
  $wrapper = $('#recall-wrapper'),
  $recal01 = $('.recall-01'),
  $recal02 = $('.recall-02'),
  $recal03_interval= null;
  X = {
    recall2FnFlag: false,
    recall3FnFlag: false,
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
          $('.girl-tianshui').fadeIn('slow',function() {
            $recal02.find('.map-me-you').animate({'width': '45%'});
            $('.girl-tianshui').animate({left: '9%'})
            $('.boy-wuhan').animate({top: '67%', left: '35.5%'})
          });

          $(".map-say-content").show();
          $('.map-say-01').typed({
            strings: ["两个纬度相差甚远的南北方孩子"],
            typeSpeed: 400,
            backDelay: 500,
            cursorChar: '',
            callback: function() {
              $('.girl-tianshui').fadeOut();
              $('.boy-wuhan').fadeOut();
              $('.map-me-you').hide();

              $('.map-beijing-shunyi').css({'opacity': 0}).show().animate({'opacity': 1}, 2000);
              $('.map-say-02').typed({
                strings: ["在诺大的北京的顺义区。"],
                typeSpeed: 400,
                backDelay: 500,
                cursorChar: '',
                callback: function() {
                  $('.recall-02 .icon-qinglv').fadeIn(3000);
                  $('.map-say-03').typed({
                    strings: ["相遇^600 相知^600 相恋。"],
                    typeSpeed: 400,
                    backDelay: 500,
                    cursorChar: '',
                    callback: function() {
                      X.recall2FnFlag = true;
                      $('.icon-zuanshi').fadeIn();
                      $('.icon-meiguihua').fadeIn('slow');
                      $('.icon-heart').fadeIn(3000);
                    }
                  });
                }
              });
              /*
              $('.map-beijing-shunyi').css({'opacity': 0}).show().animate({'width': '45%', 'opacity': 1}, 2000);
              $('.map-say-02').typed({
                strings: ["在诺大的北京顺义区相遇<br>"],
                typeSpeed: 400,
                backDelay: 500,
                cursorChar: '',
                callback: function() {

                }
              });
              */
              // '鬼使神差地在繁花似锦的『大北京』相遇'
            }
          });
        });
      });
      // $recal02.find('.map-me-you').fadeIn(2000);
    },
    recall3Fn: function() {
      if($recal03_interval) clearInterval($recal03_interval);

      $('.more-steps').show();
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
        if(preElements.length == 0) {
          $('.recall-03 .setp').hide();
          X.recall3FnFlag = true;
          clearInterval($recal03_interval);
          X.recall3FnCallBack_photoWall();
        }
      }, 5000);
    },
    recall3FnCallBack_photoWall: function() {
      console.info('recall3FnCallBack_photoWall');
      $('.more-and-more').fadeIn(2000, function() {
        $('.more-and-more-photo-title').animate({top: '-60px'},2800, null,
        function() {
          var photopiles = Array.from($('.photopile li')).reverse();
          photopiles.sort(function() {
            return (0.5-Math.random());
          }).forEach(function(item, index) {
            setTimeout(function() {$(item).animate({'opacity': 1}, 2000)}, 400 * index);
          });
        });
      });
    },
    afterFullPageScroll: function(anchorLink, index, slideIndex) {
      console.info(index);
      switch (index) {
        case 1:
          break;
        case 2:
          if(X.recall2FnFlag) return;
          X.recall2Fn();
          break;
        case 3:
          if(X.recall3FnFlag) return;
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
