//문자는 '' 안에 들어가야함. 숫자는 안 넣어도됨
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
    });
    
    //modal 창
    
    $('.sec-bnr .cont a').on('click', function(){
     $('#modal').addClass('on');
    });
    
    $('#modal .inp-close').on('click', function(){
     $('#modal').removeClass('on');
    });
    
    
    //slide
    //변수선언
    let now = 1,
        width = 100
    
    
    setInterval(function(){
        
    //if (조건){ }else{ }
    //만약 now가 1,2일 경우 (첫번째이미지일경우)
        if(now<3){
    // .slide >ul 의 left값을 -100%로 애니메이션 줌
   //.animate({left:'-100%'}) 또는 .animate(left,'-100%')
       $('.slide > ul').animate({
        left: (now * width * (-1))+'%' 
       // left: (now *-100)+'%' 
    });
        //now+1=now. now+1은 다시 now
    now++;   /*2*/
    //now+1 * -100, 1+1*-100 >-200
   // now+1 * -100, 2+1*-100 >-300 계속 반복됨
        }else{
            //그밖에 now값이 3일 경우 맨처음 이미지로 감
         $('.slide >ul').animate({
            left:0
            })
            // now값을 다시 1로. 처음으로 돌아간 후 반복됨. 안그럼 한바퀴 후 첫이미지에서 멈춤
            now=1;
        }
        
        

                
        
        
        
    },3000)
    
    
   

    
    
    
    
    
    
});

















