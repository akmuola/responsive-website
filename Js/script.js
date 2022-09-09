$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $(".navbar").css({"background-color":"IndianRed"});   
        }
        else{
            $(".navbar").css({"background-color":""});
        }

    })
})