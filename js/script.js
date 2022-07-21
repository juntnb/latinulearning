$(document).ready(function(){
    //헤더 푸터 컴포넌트
    $('#header').load('components/header.html', function() {
        $(".header-wrap .gnb> li").hover(function(){
            $(this).children('.gnb-sub').stop().slideToggle(200);
        });
    });

    $('#footer').load('components/footer.html');

})

// position 위치표시
$(function () {
    let $menu = $("#position_wrap ul li");
    let $contents = $(".section-wrap > section");
    
    $menu.click(function () {
        let index = $(this).index();
        let section = $contents.eq(index);
        let contentsTop = section.offset().top - 80;

        $("html,body").stop().animate({scrollTop: contentsTop});
    });
    
    $(window).scroll(function () {
        $contents.each(function () {
            if ($(this).offset().top - 80 <= $(window).scrollTop() + $( window ).innerHeight() / 2) {
                let idx = $(this).index();

                $menu.eq(idx).addClass("now").siblings().removeClass("now");
            }
        })
    })
})

// 답
$(function () {
    let answer_btn = $(".answer-btn");
    answer_btn.parents(".num-list").css({"margin" : "unset"});
    answer_btn.click(function () {
        console.log($(this).parents(".num-list").siblings(".answer-wrap"));
        
        $(this).parents(".num-list").siblings(".answer-wrap").slideToggle();
    })
});