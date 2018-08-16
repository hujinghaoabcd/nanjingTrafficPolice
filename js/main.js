
var main = function () {
    var init = function () {
        // --nav 开始--
        navMenuTab();
        // --content 开始
        paTab();
        zjTab();
        // iconTab();
    };
    // --nav 开始--
    var navMenuTab = function () {
        $('.jq-navMenu').mouseenter(function () {
            $(this).addClass('current').siblings("li").removeClass('current');
            // $('.jq-content').removeClass('current').eq($(this).index()).addClass('current');
        })
    };
    // --content 开始
    var paTab = function () {
        $('.js-paTab').mouseenter(function () {
            $(this).addClass("on");
            $(this).siblings('h3').removeClass('on');
            $(this).parent('div').siblings('.js-pzBox').children('ul').eq($(this).index()).fadeIn(200).siblings('ul').fadeOut(200);
        });
    };
    var zjTab = function () {
        $('.js-zjTab').mouseenter(function () {
            $(this).siblings().removeClass('active').siblings().eq($(this).index()).addClass('active');
            $(this).parent().siblings('ul').removeClass('current').eq($(this).index()).addClass('current');
        });
    };
    return {
        init:init
    };
}();
