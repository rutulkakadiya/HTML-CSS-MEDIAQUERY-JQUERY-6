$(window).scroll(function()
{
    $('header').toggleClass('background',$(this).scrollTop()>100);
});



$(document).ready(function(){
    $("#toggle").click(function(){
        $(".block").toggleClass("aa")
        $("header").toggleClass("bb")
    })

    $("#toggle1").click(function(){
        $(".block").toggleClass("cc")
        $("header").css("margin-left","0%")
    })
    
    
})