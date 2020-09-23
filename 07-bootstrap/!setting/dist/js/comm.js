$(function(){
    // 클릭시 해당 해쉬태그로 애니메이션 되면서 화면이동
    $('.navbar a, footer a[href="#home"]').on('click', function(event){
        event.preventDefault();

//hash는 반대, !는 없다면->이것의 해쉬태그가 비어있지 않다면
        if(this.hash !==""){
            let hash = this.hash

            $('html, body').animate({
                scrollTop : $(hash).offset().top   //오브젝트의 젤 탑값 까지 애니메이션 시켜줘
            },900, function(){
                window.location.hash = hash;    //윈도우 주소창에 해쉬를 붙이고 위치값 알려줌
            })
        }

    })

    // 스크롤 시 오브젝트가 애니메이션
    $(window).on('scroll', function(){
        $('.slideanim').each(function(){

            let pos = $(this).offset().top
            let winTop = $(window).scrollTop()

            if(pos < winTop + 600){
                $(this).addClass('slide-ani')
            }


        })
    })

    //스크롤 시 header 디자인 변경 (.sticky)
    //pc버전만
    // if ($(window).width() > 620) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 40) {
                $('.navber').addClass("sticky");
            } else {
                $('.navbar').removeClass("sticky");
            }
        });
    // }



})