$(function(){
    // $(function(조건){실행})
    
    
    // 변수 선언(변수처리)
    let $tab=$('.sec-bbs li'),
        $modal=$('#modal');
    
    
    // tab구현
    $tab.on('click',function(event){
     //a링크를 무효화
     event.preventDefault();
     // li의 on 클래스 삭제
     $tab.removeClass('on');
     //클릭한 li에 on클래스 추가
     $(this).addClass('on');
    })
    
    //modal 창
    
    $('.sec-bnr .cont a').on('click', function(){
     $('#modal').addClass('on');
    })
    
    $('#modal .inp-close').on('click', function(){
     $('#modal').removeClass('on');
    })
    
    
    
    
    
    
    
});
