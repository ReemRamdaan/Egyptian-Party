
$('#openBtn').click(function(){
   let sideBarWidth=$('#side-nav').outerWidth(); 

    if($('#side-nav').css('left')===('0px')){
        $('#side-nav').animate({left:`${-sideBarWidth}`},1000);  
    }
    else
    {
        $('#side-nav').animate({left:'0px'},1000); 
    }
})
$('#closeBtn').click(function(){
    sideBarWidth=$('#side-nav').outerWidth(); 
        $('#side-nav').animate({left:`${-sideBarWidth}`},1000);
   
})


let headerContentOffset= $('.header-content').offset().top;
$(window).scroll(function(){
    let windowScroll=$(window).scrollTop();   
    if(windowScroll >headerContentOffset){
         $('#openBtn').css('display','none') 
    }
    else{
        $('#openBtn').css('display','flex') 
    }
})

$("a[href^='#']").click(function(e){
    let linkHref=$(e.target).attr('href');
    let sectionOffset=$(linkHref).offset().top;
    $('html,body').animate({scrollTop:sectionOffset},100)
})

$('#singer1').click(function(){
   let sing1Offset=$('#sing1').offset().top;
   if(sing1Offset==0){
    $('#sing1').slideDown(500);  
   }
else
{
    $('#sing1').slideUp(500);
}
})
$('#singer2').click(function(){
   let sing2Offset=$('#sing2').offset().top;
   if(sing2Offset!=0){
    $('#sing2').slideUp(500);
   }
else
{
    $('#sing2').slideDown(500);
}
})
$('#singer3').click(function(){
   let sing3Offset=$('#sing3').offset().top;
   if(sing3Offset!=0){
    $('#sing3').slideUp(500);
   }
else
{
    $('#sing3').slideDown(500);
}
})
$('#singer4').click(function(){
   let sing4Offset=$('#sing4').offset().top;
   if(sing4Offset!=0){
    $('#sing4').slideUp(500);
   }
else
{
    $('#sing4').slideDown(500);
}
})

let countDownDate = new Date("Mar 5, 2025 00:00:00").getTime();
let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  if (distance > 0) {
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  $('#day').html(days);
  $('#hour').html(hours);
  $('#minute').html(minutes);
  $('#second').html(seconds);
  
  }
  else{
    let days=0;
    let hours=0;
    let minutes=0;
    let seconds=0;
     $('#day').html(days);
 $('#hour').html(hours);
 $('#minute').html(minutes);
 $('#second').html(seconds);
     clearInterval(x);
     $('#late').html("Unfortunatly You came late ");
}
}, 1000);

let message=document.getElementById('message');
let counter=100;
message.addEventListener('input',function(eventInfo){
if(eventInfo.data != null&&counter!=0){
    counter--;
    $('#counter').html(counter);
}
 else if(eventInfo.data != null&&counter==0){
    counter=0;
    alert('You cant enter more than 100 char'); 
}
else{
    counter+=1;
    $('#counter').html(counter);
}
})
