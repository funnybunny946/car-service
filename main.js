// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){
    // console.log('fadeAnime');
    //ふわっと動くきっかけのクラス名と動きのクラス名の設定
    $('.fadeUpTrigger').each(function(){ //fadeInUpTriggerというクラス名が
        var elemPos = $(this).offset().top-50; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeUp');
            // 画面内に入ったらfadeInというクラス名を追記
        }
        else{
            $(this).removeClass('fadeUp');
            // 画面外に出たらfadeInというクラス名を外す
        }
    });
    
    //関数でまとめることでこの後に違う動きを追加することが出来ます
    // $('.fadeDownTrigger').each(function(){ //fadeInDownTriggerというクラス名が
    // var elemPos = $(this).offset().top-50; //要素より、50px上の
    // var scroll = $(window).scrollTop();
    // var windowHeight = $(window).height();
    // if (scroll >= elemPos - windowHeight){
    // $(this).addClass('fadeDown');
    // // 画面内に入ったらfadeDownというクラス名を追記
    // }else{
    // $(this).removeClass('fadeDown');
    // // 画面外に出たらfadeDownというクラス名を外す
    // }
    // });    
    
}//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定
    
    // 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// window.addEventListener('DOMContentLoaded',function() {
//     this.document.getElementById('top-image-item1').addClass('active');
// });
function handleClickItem1(){
    this.pause();
    $('#top-image-item1').addClass('active');
    $('#top-image-item2').removeClass('active');
    $('#top-image-item3').removeClass('active');
    $('#top-image-item4').removeClass('active');
    $('#top-image-selector-item1').addClass('active');
    $('#top-image-selector-item2').removeClass('active');
    $('#top-image-selector-item3').removeClass('active');
    $('#top-image-selector-item4').removeClass('active');
}
function handleClickItem2(){
    this.pause();
    $('#top-image-item1').removeClass('active');
    $('#top-image-item2').addClass('active');
    $('#top-image-item3').removeClass('active');
    $('#top-image-item4').removeClass('active');
    $('#top-image-selector-item1').removeClass('active');
    $('#top-image-selector-item2').addClass('active');
    $('#top-image-selector-item3').removeClass('active');
    $('#top-image-selector-item4').removeClass('active');
}
function handleClickItem3(){
    this.pause();
    $('#top-image-item1').removeClass('active');
    $('#top-image-item2').removeClass('active');
    $('#top-image-item3').addClass('active');
    $('#top-image-item4').removeClass('active');
    $('#top-image-selector-item1').removeClass('active');
    $('#top-image-selector-item2').removeClass('active');
    $('#top-image-selector-item3').addClass('active');
    $('#top-image-selector-item4').removeClass('active');
}
function handleClickItem4(){
    $('#top-image-item1').removeClass('active');
    $('#top-image-item2').removeClass('active');
    $('#top-image-item3').removeClass('active');
    $('#top-image-item4').addClass('active');
    $('#top-image-selector-item1').removeClass('active');
    $('#top-image-selector-item2').removeClass('active');
    $('#top-image-selector-item3').removeClass('active');
    $('#top-image-selector-item4').addClass('active');
}


function pause(){
    const ytiframe= 'movieIframe';
    //iframeで表示しているwindowオブジェクトを取得
    const targetWindow = document.getElementById(ytiframe).contentWindow;

    //APIのコマンドを送信する関数
    const ag2ytControl = function(action,arg=null){
      targetWindow.postMessage('{"event":"command", "func":"'+action+'", "args":'+arg+'}', '*');
    };
    ag2ytControl('pauseVideo');
}