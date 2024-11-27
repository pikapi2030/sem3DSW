function play()
{
var flag=true;
    $(".btn").click(function()
{
    var audio=new Audio("/green.mp3");
    audio.play();
   if(flag==true)
    {
        $(this).text("X");
        flag=false;
    }
    else
    {
        {
            $(this).text("O");
            flag=true;
        }
    }
    $(this).prop('disabled', true);
    check();
})
var win=[[0,1,2],[2,4,6],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[0,4,8],[2,4,6]]
let boxes=document.querySelectorAll(".btn")
function check()
{ for(pattern of win)
  { 
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;
    if(pos1!=""&&pos2!=""&&pos2!="")
        {
            if(pos1==pos2&&pos1==pos3)
                {
                    var delayInMilliseconds = 600;

setTimeout(function() {
    $("h2").text("WINNER!");
    $(".new").show();
    $("#reset").hide();
    var audio=new Audio("/wrong.mp3");
    audio.play();
}, delayInMilliseconds);
                  
                }
        }
       var full=true;
        for(let b of boxes)
          {
            if(b.innerText=="")
                {
                  full=false;
                }
          }
          if(full==true)
            {
                setTimeout(function() {
                    $("h2").text("DRAW!");
                    $(".new").show();
                    $("#reset").hide();
                    var audio=new Audio("/wrong.mp3");
                    audio.play();
                }, delayInMilliseconds);
            }
}}
}
play();
$(".reset").click(function()
{
    location.reload();
})