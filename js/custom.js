$(function () {


    new WOW().init();


});

$(function () {


    $("#work").magnificPopup({

        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }


    });

});


$(function () {

    $("#team-members").owlCarousel({

        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true

    });

});

$(function () {

    $("#customers-testimonials").owlCarousel({

        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true

    });

});


/*$(function(){
    
    $('.counter').counterUp({
         delay: 10,
         time: 2000
        
     });
    
});*/

/* $(document).ready(function(){


    $('.counter').each(function(){

        $(this).prop('Counter',0).animate({

            Counter:$(this).text()

        },{
           duration:3500,
            easing:'swing',
            step: function(now){

                $(this).text(Math.cell(now));
            }

        });


    });

});*/


$(function () {

    $("#clinets-list").owlCarousel({

        items: 5,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true

    });

});

//remove

$(function(){
    
    $(window).scroll(function(){
        
        if($(this).scrollTop() <50){
           
            $("nav").removeClass("iman-hasan");
           $("#back-to-top").fadeOut("slow", function(){
               
           });
            
           }
           else{
           
           $("nav").addClass("iman-hasan");
           $("#back-to-top").fadeIn("slow", function(){
               
               
           });
           }
        
    });
    
    
});


//smooth-scrolling


/*$(function(){
    
    $("a.smooth-scroll").click(function(event){
        
        event.preventDefault();
        
        var section = $(this).attr("href");
        $('html,body').animate({
            
            scrollTop: $(section).offset().top
        } 1250);
        
    });
    
    
});*/