$( document ).ready(function() {
    $("#button1M").click(function(){
        $('html, body').animate({ scrollTop: $('#navigation').offset().top });
    });
    $("#button2M").click(function(){
        $('html, body').animate({ scrollTop: $('#navigation').offset().top });
    });
    $("#button3M").click(function(){
        $('html, body').animate({ scrollTop: $('#navigation').offset().top });
    });
    $("#button4M").click(function(){
        $('html, body').animate({ scrollTop: $('#navigation').offset().top });
    });
    $("#button5M").click(function(){
        $('html, body').animate({ scrollTop: $('#navigation').offset().top });
    });
    $("#ulImdb").click(function(){
        $('html, body').animate({ scrollTop: $('#navigation').offset().top });
    });
    $("#ulrt").click(function(){
        $('html, body').animate({ scrollTop: $('#navigation').offset().top });
    });
    $("#ulmeta").click(function(){
        $('html, body').animate({ scrollTop: $('#navigation').offset().top });
    });
    $("#ulall").click(function(){
        $('html, body').animate({ scrollTop: $('#navigation').offset().top });
    });
    $("#recentlyAdded").click(function(){
        $('html, body').animate({ scrollTop: $('#navigation').offset().top });
    });
    $("#newReleases").click(function(){
        $('html, body').animate({ scrollTop: $('#navigation').offset().top });
    });
    $("#topImdbSource").click(function(){
        $('html, body').animate({ scrollTop: $('#topImdb').offset().top });
    });
    $("[id^=imGenre]").click(function(){
        $('html, body').animate({ scrollTop: $('#topImdbResult').offset().top });
    });
});
