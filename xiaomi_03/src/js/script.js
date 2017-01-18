/**
 * 
 * @authors chenfuxin
 * @date    2016-08-31 17:19:06
 */

//=require _modules/miVisibleWatcher.js

function childrenEvent() {

  //懒加载
  var lazyload = function() {
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
  }

  //头图轮换
  var index = 0;
  var _time = '';
  var winHei = 0;
  var $items = $('.slider').find('.part');

  var change = function() {
    $items.removeClass('active').eq(index).addClass('active');
  }

  var timer = function() {
    _time = setInterval(function() {
      index++;

      if (index === 2) {
        index = 0;
      }
      change();
    }, 3000);
  }

  var setHead = function() {
    winHei = $(window).height() - $('#J-nav').find('.items').height();
  }
  setHead();

  //导航吸顶、跳转
  var navEvent = function() {
    var $nav = $('#J-nav');
    var $items = $nav.find('.items');
    var target = '';
    var $scrollTop = $(window).scrollTop();

    $(window).on('scroll', function() {
      if ($(this).scrollTop() > winHei) {
        $nav.addClass('fixed');
      } else {
        $nav.removeClass('fixed');
      }
    });

    $items.on('click', function() {
      $(this).addClass('active').siblings().removeClass('active');
      target = $(this).attr('data-target');

      if (target && $(target).length) {
        $('html, body').animate({
          scrollTop: $(target).offset().top
        }, 500);
      }
      return false;
    });
  }

  $(window).resize(function() {
    setHead();
  });

  var init = function() {
    lazyload();
    navEvent();
    timer();
  }

  init();

  $('.share').on('click', function() {
    share();
  });

  var shareContent = [{
      title: '刚刚在小米网参加#小米儿童节专场#，看到了辣条、大白兔、弹珠、悠悠球！亲爱的小伙伴们，再次看到这些属于我们那个时代的零食玩具，真是感慨万分！这个“六一”，找回童年，像小时候一样快乐！分享还可以获得小米5尊享版（3D陶瓷）的优先购买资格噢！',
      pic: 'http://hd.mi.com/y/05241o/img/childhood-weibo1.jpg'
    },

    {
      title: '刚刚在小米网参加#小米儿童节专场#，看到了辣条、大白兔、弹珠、悠悠球！亲爱的小伙伴们，再次看到这些属于我们那个时代的零食玩具，真是感慨万分！这个“六一”，找回童年，像小时候一样快乐！分享还可以获得小米5尊享版（3D陶瓷）的优先购买资格噢！',
      pic: 'http://hd.mi.com/y/05241o/img/childhood-weibo2.jpg'
    }
  ];

  //分享
  function share() {
    var random = parseInt(Math.random() * 2);
    var content = shareContent[random];
    var url = 'http://hd.mi.com/y/05241o/index.html';
    title = content.title;
    pic = content.pic,
      ralateUid = '',
      language = '';
    window.open('http://service.weibo.com/share/share.php?url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title) + '&pic=' + encodeURIComponent(pic) + '&ralateUid=' + encodeURIComponent(ralateUid) + '&language=' + encodeURIComponent(language), '_blank', 'width=615,height=505');
  }
}


$(document).ready(function() {
  childrenEvent();
});
