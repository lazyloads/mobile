/**
 *
 * @authors chenfuxin (chenfuxin@99cj.com.cn)
 * @date    2016-11-02 09:14:33
 */

//=require _modules/miVisibleWatcher.js

var mi5Commemorative = {

  /* 懒加载 */
  lazyload: function() {

    var $visibleWatcher = $('#J_visibleWatcher');
    var $sections = $('.section', $visibleWatcher);

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

  init: function() {
    this.lazyload();
  }
}

$(document).ready(function() {
  mi5Commemorative.init();
});
