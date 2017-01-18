/**
 *
 * @authors chenfuxin (chenfuxin@99cj.com.cn)
 * @date    2016-11-02 09:14:33
 */

//=require _modules/vue.js

var xmAppShoppingMall = {

  /* vue.js */
  getDate: function() {
    $.ajax({
      url: '../11733_01/js/xmApp.json',
      type: 'GET',
      dataType: 'json',
      error: function() {
        alert('数据出错！')
      },
      success: function(data) {
        var _data = data.data;
        var app = new Vue({
          el: '#J_visibleWatcher',
          data: {
            data: _data
          }
        });
        var sliderRotation = function() {
          var _index = 0;
          var _time = "";
          var win_w = $(window).width();
          var slider = $('#J_slider');
          var imageBox = slider.find('.slider-wrap');
          var slider_num = imageBox.find('.slider-img').size();
          var slider_w = slider_num * win_w * 3;
          var iconBox = slider.find('.slider-page');
          var iconArr = iconBox.children('span');

          $('.slider-img').css({
            'width': win_w + "px"
          });

          imageBox.css({
            'width': slider_w + 'px'
          });

          var change = function() {
            iconArr.removeClass('current').eq(_index).addClass('current');
            $('.slider-img').animate({
              'left': '-' + _index * win_w + 'px'
            });
          }

          var timer = function() {
            _time = setInterval(function() {
              _index++;

              if (_index == 3) {
                _index = 0;
              }
              change();
            }, 3000);
          }
          timer();
        }
        sliderRotation();
      }
    });
  },

  init: function() {
    this.getDate();
  },
};

$(document).ready(function() {
  xmAppShoppingMall.init();

  
});
