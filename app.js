$(() => {


$(".socialIcon, .whatIDone, .myGoals, .whatIDoTitle, .followMeTitle").hide()



$(".aboutButton").on("click",function(){
    $(".whatIDone").hide()
    $(".myGoals").hide()
       $(".whatIDoTitle").hide()
    $(".socialIcon").hide()
    $(".followMeTitle").hide()
$(".aboutMe").fadeIn(2000)
$(".title").fadeIn(2000)
})


$(".leftButton").on("click",function(){
    $(".whatIDone").hide()
    $(".myGoals").hide()
    $(".aboutMe").hide()
    $(".title").hide()
    $(".whatIDoTitle").hide()
$(".socialIcon").fadeIn(2000)
$(".followMeTitle").fadeIn(2000)
})

$(".middleButton").on("click",function(){
    $(".socialIcon").hide()
    $(".myGoals").hide()
    $(".title").hide()
    $(".aboutMe").hide()
    $(".followMeTitle").hide()
$(".whatIDone").fadeIn(2000)
$(".whatIDoTitle").fadeIn(2000)
})
      
    
$(".rightButton").on("click",function(){
    $(".socialIcon").hide()
    $(".whatIDone").hide()
    $(".followMeTitle").hide()
    $(".whatIDoTitle").hide()
    $(".aboutMe").hide()
$(".myGoals").fadeIn(2000)
$(".title").fadeIn(2000)
})


$(".grapixDesign").on("mouseover",function(){
    $(".grapixDesign").attr("src", "/Users/kevoproductions/Desktop/Port project/PortProject/r.jpeg")})

    $(".grapixDesign").on("mouseleave",function(){
        $(".grapixDesign").attr("src", "/Users/kevoproductions/Desktop/Port project/PortProject/desin.jpeg")})


      
$(".aboutMeHide").hide()


        $(".aboutMeP").on("mouseover",function(){
            $(".aboutMeHide").fadeIn(2000);
        })
       

})

