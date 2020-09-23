
// const ABC = require('./bootstrap-datepicker');
// console.log('dep' , ABC.temp);

jQuery(document).ready(function($) {



        
  $('#date').datepicker({
   todayHighlight: true,
   format: 'dd/mm/yyyy',
   startDate: new Date()   
  });
      
 

//AOS animation------------------------------------------------------
   AOS.init({
    duration: 1000,
    easing: "ease-in-out-back"
  });


//------mouse movement--------
     let mouseName = $('.circle');
    $('html').mousemove(function (e) {
        mouseName.show().offset({
            left: e.pageX - 50,
            top: e.pageY - 50
        })
      // $(".circle").css("transform","translate3d("+newposX+"px,"+newposY+"px,0px)");


    })


    //----------add active class on page load-------
    var path=window.location.href;

                $(".navbar .nav-link").each(function(){

                    if (this.href == path) {
                        var active=$(this).addClass('active');
                        $('.navbar .nav-link').not(active).removeClass('active');
                    }
                });


    //----------add active class on nav-link click-------
    
                // $(".navbar .nav-link").click(function(event) {
                //       var active=$(this).addClass('active');
                //         $('.navbar .nav-link').not(active).removeClass('active');
                // });

     var date1 = new Date();
     console.log(date1);
     $('.today_date').text((date1).toDateString());


    $(document).on('click', '.step1_btn', function(event) {
     
      $('.rightside_form1').hide();
      $('.rightside_form2').fadeIn('slow');


      $('.progress_bar_div #progressbar').find('li').eq(0).addClass('active');


    });


     $(document).on('click', '.step2_btn', function(event) {
     
      $('.rightside_form2').hide();
      $('.rightside_form3').fadeIn('slow');

      $('.back_link').css('display', 'block').addClass('back_step3');


      $('.progress_bar_div #progressbar').find('li').eq(1).addClass('active');

    });





     $(document).on('click', '.step3_btn', function(event) {
     
      $('.rightside_form3').hide();
      $('.rightside_form4').fadeIn('slow');

      $('.back_link').removeClass('back_step3').addClass('back_step4');

      $('.progress_bar_div #progressbar').find('li').eq(2).addClass('active');


    });


    $(document).on('click', '.step4_btn', function(event) {
     
          $('.rightside_form4').hide();
          $('.rightside_form5').fadeIn('slow');

          $('.back_link').removeClass('back_step4').addClass('back_step5');


          $('.progress_bar_div #progressbar').find('li').eq(3).addClass('active');

    });

    $(document).on('click', '.step5_btn', function(event) {
     
        $('.rightside_form5').hide();
        $('.rightside_form6').fadeIn('slow');

        $('.back_link').removeClass('back_step5').addClass('back_step6');


        $('.progress_bar_div #progressbar').find('li').eq(4).addClass('active');

    });


    $(document).on('click', '.step6_btn', function(event) {
     
      $('#main_page_div').hide();
      $('#last_page_div').fadeIn('slow');

      $('.back_link').css('display', 'none');


      $('.progress_bar_div #progressbar').find('li').eq(5).addClass('active');

    });


     $('.back_link').click(function(event) 
     {

       // all_child= $(this).parents('.meeting_heading_div').siblings('#main_page_div').find('.forms').children();
        // prev_fs= $(this).parents('.meeting_heading_div').siblings('#main_page_div').find('.forms').children(':last').addClass('current');
        
        if( $('.rightside_form2').css('display') == 'block' ) 
        {
              $('.rightside_form2').hide();
              $('.rightside_form1').fadeIn('slow');
              $('.progress_bar_div #progressbar').find('li').eq(0).removeClass('active');
              $(this).css('display', 'none');
        } 
        

        if( $('.rightside_form3').css('display') == 'block' ) 
        {
              $('.rightside_form3').hide();
              $('.rightside_form2').fadeIn('slow');
              $('.progress_bar_div #progressbar').find('li').eq(1).removeClass('active');
        } 

        if( $('.rightside_form4').css('display') == 'block' ) 
        {
              $('.rightside_form4').hide();
              $('.rightside_form3').fadeIn('slow');
              $('.progress_bar_div #progressbar').find('li').eq(2).removeClass('active');
        } 

        if( $('.rightside_form5').css('display') == 'block' ) 
        {
              $('.rightside_form5').hide();
              $('.rightside_form4').fadeIn('slow');
              $('.progress_bar_div #progressbar').find('li').eq(3).removeClass('active');
        } 

        if( $('.rightside_form6').css('display') == 'block' ) 
        {
              $('.rightside_form6').hide();
              $('.rightside_form5').fadeIn('slow');
              $('.progress_bar_div #progressbar').find('li').eq(4).removeClass('active');
        } 

       
     
        // if($(this).hasClass('back_step3'))
        // {
        //   $('.rightside_form3').hide();
        //   $('.rightside_form2').fadeIn('slow');
        //   $('.progress_bar_div #progressbar').find('li').eq(1).removeClass('active');
        // }

        // if($(this).hasClass('back_step4'))
        // {
        //   $('.rightside_form4').hide();
        //   $('.rightside_form3').fadeIn('slow');
        //   // $('.rightside_form2').fadeIn('slow');
        //   // $('.rightside_form1').fadeIn('slow');
        //   $('.progress_bar_div #progressbar').find('li').eq(2).removeClass('active');
        // }

        //  if($(this).hasClass('back_step5'))
        // {
        //   $('.rightside_form5').hide();
        //   $('.rightside_form4').fadeIn('slow');
        //   $('.progress_bar_div #progressbar').find('li').eq(3).removeClass('active');
        // }


        //  if($(this).hasClass('back_step6'))
        // {
        //   $('.rightside_form6').hide();
        //   $('.rightside_form5').fadeIn('slow');
        //   $('.progress_bar_div #progressbar').find('li').eq(4).removeClass('active');
        // }

        //  else if($(this).hasClass('back_step7'))
        // {
        //   $('.rightside_form7').hide();
        //   $('.rightside_form6').fadeIn('slow');
        //   $('.progress_bar_div #progressbar').find('li').eq(5).removeClass('active');
        // }

      });









// var current_fs, next_fs, previous_fs; //fieldsets
// var opacity;
// var current = 1;
// var steps = $(".rightside_form1").length;
// console.log(steps);

// setProgressBar(current);

// $(".step1_btn").click(function(){
//   current_fs = $(this).parent();
//   next_fs = $(this).parent().next();
//     //Add Class Active
//     $("#progressbar li").eq($(".rightside_form1").index(next_fs)).addClass("active");
//     //show the next fieldset
//     next_fs.show();
//     //hide the current fieldset with style
//     current_fs.animate({opacity: 0}, {
//     step: function(now) {
//     // for making fielset appear animation
//       opacity = 1 - now;
//       current_fs.css({
//     'display': 'none',
//     'position': 'relative'
//     });
//     next_fs.css({'opacity': opacity});
//   },
//   duration: 500
//   });
//   setProgressBar(++current);
//   });

// $(".previous").click(function(){

// current_fs = $(this).parent();
// previous_fs = $(this).parent().prev();

// //Remove class active
// $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

// //show the previous fieldset
// previous_fs.show();

// //hide the current fieldset with style
// current_fs.animate({opacity: 0}, {
// step: function(now) {
// // for making fielset appear animation
// opacity = 1 - now;

// current_fs.css({
// 'display': 'none',
// 'position': 'relative'
// });
// previous_fs.css({'opacity': opacity});
// },
// duration: 500
// });
// setProgressBar(--current);
// });

// function setProgressBar(curStep){
// var percent = parseFloat(100 / steps) * curStep;
// percent = percent.toFixed();
// $(".progress-bar")
// .css("width",percent+"%")
// }



});
 




