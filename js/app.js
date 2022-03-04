// back to top
$(function () {
   $(window).on('load', function(){
      $('.back_to_top').hide()
   })
   $('back_to_top').hide()
   $(window).on('scroll' ,function(){
      var scrolltop =$(this).scrollTop()
      if(scrolltop>800){
         $('.back_to_top').fadeIn(500)
      }else{
         $('.back_to_top').fadeOut(500)
      }
   })
   $('.back_to_top').on('click', function(){
      $('html,body').animate({
         scrollTop:0
      },800)
   })
// back to top end
// preloader
   $(window).on('load', function(){
      $('.preloader').fadeOut(500)
   })
//preloader end
// sticky menu start
$(window).on('scroll' , function(){
   var menu_heigt= $('#header').height()
   var scroll_top=$(window).scrollTop()
   if(scroll_top>menu_heigt){
      $('#header').addClass('header_animate').fadeIn(2000)
   }else{
      $('#header').removeClass('header_animate',500)
   }
})
// sticky menu end
// timer count down start
$('.count_down').countdown('2022/06/10', function(event) {
   var $this = $(this).html(event.strftime(''
     + '<div class="count_down_item"><span>%D</span><span>Days</span></div>'
     + '<div class="count_down_item"><span>%H</span><span>Hours</span></div>'
     + '<div class="count_down_item"><span>%M</span><span>Mins</span></div>'
     + '<div class="count_down_item"><span>%S</span><span>Secs</span></div>'
));
 });
//timer count down end
// filter start
$('.filter-container').filterizr();
$('gallery_filter li').on('click' , function(){
   $(this).addClass('active')
   $(this).siblings('.active').removeClass('active')
})
// filter end
// counterUp start
$('#counter').spincrement(options);
// counterUp end
})
// venobox start
new VenoBox();

// venobox end
// aos start
AOS.init();
// aos end
