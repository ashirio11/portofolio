$(document).ready(function(){
    $('.header-item').on('click', function(event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });
});


$(function() {
    // 変数にクラスを入れる
    var btn = $('.page-top');
    
    //スクロールしてページトップから100に達したらボタンを表示
    $(window).on('load scroll', function(){
      if($(this).scrollTop() > 100) {
        btn.addClass('active');
      }else{
        btn.removeClass('active');
      }
    });
  
    //スクロールしてトップへ戻る
    btn.on('click',function () {
      $('body,html').animate({
        scrollTop: 0
      });
    });
  });


$(document).ready(function() {
  $('.button-red').on('click', function() {
      $('.LP-inner').removeClass('active-blue active-green').addClass('active-red');
      $('.footer-inner').removeClass('active-blue active-green').addClass('active-red');
      $('.header-item').removeClass('active-blue1 active-green1').addClass('active-red1');
      $('.title').removeClass('active-blue2 active-green2').addClass('active-red2');
      $('.drawer-content').removeClass('active-blue active-green').addClass('active-red');
  });

  $('.button-blue').on('click', function() {
      $('.LP-inner').removeClass('active-red active-green').addClass('active-blue');
      $('.footer-inner').removeClass('active-red active-green').addClass('active-blue');
      $('.header-item').removeClass('active-red1 active-green1').addClass('active-blue1');
      $('.title').removeClass('active-red2 active-green2').addClass('active-blue2');
      $('.drawer-content').removeClass('active-red active-green').addClass('active-blue');
  });

  $('.button-green').on('click', function() {
      $('.LP-inner').removeClass('active-red active-blue').addClass('active-green');
      $('.footer-inner').removeClass('active-red active-blue').addClass('active-green');
      $('.header-item').removeClass('active-blue1 active-red1').addClass('active-green1');
      $('.title').removeClass('active-blue2 active-red2').addClass('active-green2');
      $('.drawer-content').removeClass('active-blue active-red').addClass('active-green');
  });
});

$(function() {
  // 変数にクラスを入れる
  var text = $('.LP-text');
  var btn = $('.button-items');

  // IntersectionObserverのオプション
  var options = {
    root: null, // viewportを基準にする
    rootMargin: '0px',
    threshold: 0.1 // 10%表示されたら発火
  };

  if ($(window).scrollTop() === 0) {
    $('body').addClass('no-scroll');
  }
  
  // IntersectionObserverのコールバック関数
  var textCallback = function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $(entry.target).addClass('fade-in');
        // 2秒後にボタンの監視を開始
        setTimeout(function() {
          btn.each(function() {
            btnObserver.observe(this);
          });
        }, 2000); // 2000ミリ秒（2秒）の遅延
      }
    });
  };

  var btnCallback = function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $(entry.target).addClass('active');
        // ボタンのアニメーションが完了したときにスクロールを再度有効にする
        $(entry.target).on('transitionend', function() {
          $('body').removeClass('no-scroll');
          $('.drawer-icon').removeClass('disabled'); 
        });
      }
    });
  };

  // IntersectionObserverのインスタンスを作成
  var textObserver = new IntersectionObserver(textCallback, options);
  var btnObserver = new IntersectionObserver(btnCallback, options);

  // 監視する要素を指定
  text.each(function() {
    textObserver.observe(this);
  });
});

jQuery("#js-drawer-icon").on("click",function (e){
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
  $('body').toggleClass('no-scroll');
})

$(document).ready(function() {
  $('.drawer-content__link').on('click', function() {
    $('#js-drawer-content').removeClass('is-checked');
    $('.drawer-icon').removeClass('is-checked');
    $('body').removeClass('no-scroll');
  });
});

