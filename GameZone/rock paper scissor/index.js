function randomnum()
{
    var num= Math.floor(Math.random() * (4 - 1) + 1);
    return(num);
}


    var uscore=0;
    var cscore=0;
    $(".new").hide();
$(".btn").click(function()
{
    $(this).fadeOut(100).fadeIn(100);
    var comp;
    switch(randomnum())
    {
        case 1:
        comp="rock";
        break;
        case 2:
        comp="paper";
        break;
        case 3:
        comp="scissor";
        break;
        default:
        alert("Error");
    }
    
    var user=$(this).attr("id");
    
    if(user==comp)
    {
      $(".result").text("It was Draw");
      $(".result").css("background-color","#13070C");
    }
    else if(user=="rock" && comp=="paper")
        {
            $(".result").text("You lost.Paper beats Rock");
            cscore++;
            $(".result").css("background-color","red");
            $(".comp").text(cscore);
        }
    else if(user=="rock" && comp=="scissor")
        {
            $(".result").text("You won! Rock beats Scissor");
            uscore++;
            $(".result").css("background-color","green");
            $(".you").text(uscore);
        }
    else if(user=="paper" && comp=="scissor")
        {
            $(".result").text("You lost.Scissor beats Paper");
            $(".result").css("background-color","red");
            cscore++;
            $(".comp").text(cscore);
        }
    else if(user=="paper" && comp=="rock")
        {
            $(".result").text("You won! Paper beats Rock");
            uscore++;
            $(".result").css("background-color","green");
            $(".you").text(uscore);
        }
        else if(user=="scissor"&& comp=="rock")
            {
                $(".result").text("You lost.Rock beats Scissor"); 
                cscore++;
                $(".result").css("background-color","red");
            $(".comp").text(cscore);
            }
            else if(user=="scissor"&& comp=="paper")
                {
                    $(".result").text("You won! Scissor beats Paper"); 
                    uscore++;
                    $(".result").css("background-color","green");
                    $(".you").text(uscore);  
                }
          else
          {
            alert("error");
          }
          time=1000;
          setTimeout(function() {
        }, time)
          $(".new").show();
          $(".new").click(function()
        {
            location.reload();
        })
})
 func