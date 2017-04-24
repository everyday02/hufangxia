var X = new Object();
(function(window) {
  $window = $(window),
  $body = $('body'),
  $wrapper = $('#recall-wrapper'),
  $recal01 = $('.recall-01');
  X = {
    listeners: {
      onLoaded: function() {
        $window.on('load', function() {
  				window.setTimeout(function() {
  					$body.removeClass('is-loading');
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
    init: function() {
      console.info('init page script');

      $wrapper.fullpage({
        // navigationTooltips: ['提示一','提示二','提示三','提示四'],
        navigation: true
      });
      this.initListenrs();
    }
  }
})(window);
