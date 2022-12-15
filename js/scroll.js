window.addEventListener("DOMContentLoaded", function(){


    // $(document).ready(function(){
    //     var mHtml = $("html");
    //     var page = 1;
        
        
    //     mHtml.animate({scrollTop : 0},1);

    //     $(window).on("wheel", function(e) {
    //         if(mHtml.is(":animated")) return;
    //         if(e.originalEvent.deltaY > 0) {
    //             if(page == 21) return;
    //             page++;
    //         } 
    //         else if(e.originalEvent.deltaY < 0) {
    //             if(page == 1) return;
    //             page--;
    //         }
    //         var posTop =(page-1) * $(window).height();
    //         mHtml.animate({scrollTop : posTop});
    //     });
    // });


    this.window.onscroll = function(){
        console.log(window.scrollY);
     
    }


    $(window).scroll( function(){

        //get scroll position
        var topWindow = $(window).scrollTop();
        //multipl by 1.5 so the arrow will become transparent half-way up the page
        var topWindow = topWindow * 2;
        
        //get height of window
        var windowHeight = $(window).height();
            
        //set position as percentage of how far the user has scrolled 
        var position = topWindow / windowHeight;
        //invert the percentage
        position = 1 - position;
      
        //define arrow opacity as based on how far up the page the user has scrolled
        //no scrolling = 1, half-way up the page = 0
        $('#MainSct1').css('opacity', position);
      
      });

      $(window).scroll( function(){

      
      });
      
      $(document).ready(function(){


        let windowWidth = $(window).width();
        let windowHeight = $(window).height();
        // 윈도우 창 가로세로 크기를 알 수 있는 명령을 변수에 저장
        
                    $('#MainTitle').css({
                        left: windowWidth * 0.32,
                        right:windowWidth * 0.32,
                        top: windowHeight * 0.3,
                    });
                    $('.contentBox').css({
                        height : windowHeight
                    });
                    $('#Menutable').css({
                        height : windowHeight
                    });
                    // $('.headerJG').css({
                    //     width : windowWidth - 132
                    // });
        });

        


        
});
    

$(window).ready(function(){
    draw(80, '.pie-chart1', '#E0C8A5');
   draw(50, '.pie-chart2', '#8b22ff');
   draw(30, '.pie-chart3','#ff0');
 });
 
 function draw(max, classname, colorname){
    var i=1;
     var func1 = setInterval(function(){
       if(i<max){
           color1(i,classname,colorname);
           i++;
       } else{
         clearInterval(func1);
       }
     },10);
 }
 function color1(i, classname,colorname){
    $(classname).css({
         "background":"conic-gradient("+colorname+" 0% "+i+"%, #ffffff "+i+"% 100%)"
    });
 }