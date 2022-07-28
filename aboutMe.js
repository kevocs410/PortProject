$(() => {


$(".socialIcon, .whatIDone, .myGoals").hide()





$(".leftButton").on("click",function(){
    $(".whatIDone").hide()
    $(".myGoals").hide()
$(".socialIcon").fadeIn(2000)
})

$(".middleButton").on("click",function(){
    $(".socialIcon").hide()
    $(".myGoals").hide()
$(".whatIDone").fadeIn(2000)
})
      
    
$(".rightButton").on("click",function(){
    $(".socialIcon").hide()
    $(".whatIDone").hide()
$(".myGoals").fadeIn(2000)
})
    
    
    
    
    
    
    
    
    });