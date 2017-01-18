/**
 * 
 * @authors chenfuxin
 * @date    2016-08-31 17:19:06
 */

//=require _modules/miVisibleWatcher.js

var mitvActivityEvent = {

  /* 懒加载 */
  lazyload: function() {
    var $visibleWatcher = $("#J_visibleWatcher");
    var $sections = $(".section", $visibleWatcher);

    $sections.visibleWatcher({
      onVisible: function($elm, index) {
        $sections.filter(function(i) {
          return i <= index + 1;
        }).addClass('preload').find('img').each(function() {
          var _src = $(this).attr('data-src');
          $(this).attr('src', _src);
        });
      }
    });
  },

  /* 导航跳转 */
  navEvent: function() {
    var $nav = $(".item");
    var target = "";

    $nav.on('click', function() {
      target = $(this).attr('data-target');
      if (target && $(target).length) {
        $('html, body').animate({
          scrollTop: $(target).offset().top
        }, 500);
      }
    });
  },

  init: function() {
    this.lazyload();
    this.navEvent();
  }
}

$(document).ready(function() {
  mitvActivityEvent.init();
});
