
  $(document).ready(function() {
    $("#basic-form").validate();
  });
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    
   
  }
  $(document).ready(function() {
    $(window).resize(function(){

        if ($(window).width() <= 768) {  
    
            $('#test1').css("display","none")
    
        }else
        {
            $('#test1').css("display","contents")
        }   
    
    });
  });
  $("#carouselButton").click(function(){
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');                    
    }
});
