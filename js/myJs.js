$(function(){


$(window).scroll(function(){

    // increase counts
    
    if($(this).scrollTop() >= $(".about").offset().top ){
     
        $('.number').each(function() {
            $(this).prop('Counter', 0).animate({
                    Counter: $(this).data('value')
                    
                }, {
                duration: 4000,
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }



    // navbar fixed

      let nav =$(".navbar")

    if($(this).scrollTop() >= 200){

        nav.css("position","fixed");
        nav.css("background-color","rgba(24, 6, 185, 0.8)")
    }
    if($(this).scrollTop() < 200){

        nav.css("position","absolute");
        nav.css("background-color","transparent")
    }


      // show scroll to top button 
    
      if($(this).scrollTop() > $(".about").offset().top){
        
        $(".scroll-up").fadeIn();
        
    }else{
        $(".scroll-up").fadeOut();
    }

})

   $(window).scroll(function(){
 
    //active tabes
    let tabe = $(".navbar .navbar-nav");

    if($(this).scrollTop() >= $(".about").offset().top ){
        tabe.find('[data-section=".about"]').addClass("active").siblings().removeClass("active")
        
    }
 
    if($(this).scrollTop() >= $(".services").offset().top ){
    tabe.find('[data-section=".services"]').addClass("active").siblings().removeClass("active")
        
    }

    if($(this).scrollTop() >= $(".portfolio").offset().top ){
        tabe.find('[data-section=".portfolio"]').addClass("active").siblings().removeClass("active")
        
    }


   if($(this).scrollTop() >= $(".pricing").offset().top ){
        tabe.find('[data-section=".pricing"]').addClass("active").siblings().removeClass("active")
        
    }
   if($(this).scrollTop() >= $(".contact-us").offset().top ){
        tabe.find('[data-section=".contact-us"]').addClass("active").siblings().removeClass("active")
        
    }
    if($(this).scrollTop() < 300 ){
        tabe.find('[data-section="home"]').addClass("active").siblings().removeClass("active")
        
    }
  
   });

   /* scroll to section */

$("nav .collapse ul li ").click(function(e){
	e.preventDefault();
	$("html,body").animate({
		scrollTop: $($(this).data("section")).offset().top
	}, 1000);	
});

   // toggle arrow

 $(".card .btn-link").click(function(){
     
     let down = $("this").find("#arrow-down");
     let  up = $("this").find("#arrow-up");
   if( down.css("display") === "block"){
    down.css("display","none");
    up.css("display","block");
   }
   else if( down.css("display") === "none"){
    down.css("display","block");
    up.css("display","none");
   }
   
 })
 
// scroll To Top

$(".scroll-up, .home").click(function(){
    $("body,html").animate({
      scrollTop :0    
  },1000);

})

// owl carousel 

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


// mouseover portifolio

$(".portfolio .item ").mouseover(function(){
    $(this).find(".details").css("transform","scale(1,1)").css("-webkit-transform","scale(1,1)").css("-moz-transform","scale(1,1)").css("-o-transform","scale(1,1)")
}).mouseout(function(){
    $(this).find(".details").css("transform","scale(0,0)").css("-webkit-transform","scale(0,0)").css("-moz-transform","scale(0,0)").css("-o-transform","scale(0,0)")

})

// venobox

$(".venobox").venobox();

   // isotope
/*     $grid = $(".portfilio-content");
   $grid.isotope({
     itemSelector: ".item",
     layoutMode :  "fitRows"
   })

$('.list li').on( 'click', function() {
 var filterValue = $(this).attr('data-filter');
 $grid.isotope({ filter: filterValue });
}); */ 



});