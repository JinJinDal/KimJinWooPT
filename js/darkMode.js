$(document).ready(function(){

    $('input').click(function(){

     if($("input:checked").val() === 'on'){
         $('.radio-box').addClass('active');
         $('.inner').addClass('active');
         $('a').addClass('active');
         $('#MainSct1').addClass('active');
         $('hr').addClass('active');
         $('body').css({
             background : 'white',
             transition: 'all 1s'
         });
         console.log('click');
     }else{
         $('.radio-box').removeClass('active');
         $('.inner').removeClass('active');
         $('a').removeClass('active');
         $('#MainSct1').removeClass('active');
         $('hr').removeClass('active');
         $('body').css('background','black');
         console.log('noclick');
     }
    }); 
 });