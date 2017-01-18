/**
 * 
 * @authors chenfuxin (chenfuxin@99cj.com.cn)
 * @date    2016-10-11 09:49:23
 */

//=require _modules/miVisibleWatcher.js
//=require _modules/vue.js

var recommendEvent = {
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

  /* template.js */
  getDate: function() {
    $.ajax({
      url: '../11733_03/js/goodslist.json',
      dataType: 'json',
      error: function() {
        alert("连接超时，请稍候重试！");
      },
      success: function(data) {
        formaDate(data);
      }
    });

    var formaDate = function(data) {
      if (data && data.code == 0) {
        var data = data.data;
        var app = new Vue({
          el: '#J_visibleWatcher',
          data: {
            data: data
          }
        });
      }
    }
  },

  init: function() {
    this.lazyload();
    this.getDate();
  }
}

$(document).ready(function() {
  recommendEvent.init();
});
