

var pb=document.querySelector("#pb").children;
for(let i = 0; i< pb.length; i++) 
{
    
	pb[i].addEventListener("click",function(){
		for(let j = 0; j < pb.length; j++) {
            pb[j].classList.remove("active_");
            $(".titles li").removeClass("animation");
            $(".pngs li").removeClass("animation");  
        }   
        this.classList.add("active_");
    })
    
}

$(document).ready(function() {
	$("li").click(function() {
        $("li").removeClass('active_');
        var index = $(this).index('.progressbar li') + 1;
        $(".titles li:nth-child("+index+")").addClass("animation");
        $(".pngs li:nth-child("+index+")").addClass("animation");
        $(".progressbar li:nth-child(-n"+index+")").addClass('active_');  
        count();

    });
    	
})


$(document).on('keypress',function(e) {
    
    
    if(e.which == 13) 
    {
        var x=document.getElementsByClassName("active_");
        var y=document.querySelector("#pb").children;
        if(x.length<y.length)
            y[x.length].classList.add("active_");
        var index=x.length;
        $(".titles li:nth-child("+index+")").addClass("animation");
        for(let i=0;i<x.length;i++)
            {
                $(".titles li:nth-child("+i+")").removeClass("animation");
                $(".pngs li:nth-child("+i+")").removeClass("animation");
            }
        $(".pngs li:nth-child("+index+")").addClass("animation");
        count();
           
    }
  
    if(e.keyCode>=97 && e.keyCode<=100)
    {
        var x=document.getElementsByClassName("active_");
        var y=document.querySelector("#pb").children;

        if(x.length)
        {
            var i=x.length;
            $(".titles li:nth-child("+i+")").removeClass("animation");
            $(".pngs li:nth-child("+i+")").removeClass("animation");
            for(let i=x.length-1;i>0;i--)
            {
                y[i].classList.remove("active_");
            }
        }
        y[0].classList.add("active_");
        var index=1;
        $(".titles li:nth-child("+index+")").addClass("animation");
        $(".pngs li:nth-child("+index+")").addClass("animation");
        count();
        
    }

    if(e.keyCode>=101 && e.keyCode<=104)
    {
        var x=document.getElementsByClassName("active_");
        var y=document.querySelector("#pb").children;

        if(x.length)
        {
            var i=x.length;
            $(".titles li:nth-child("+i+")").removeClass("animation");
            $(".pngs li:nth-child("+i+")").removeClass("animation");
            for(let i=x.length-1;i>0;i--)
            {
                y[i].classList.remove("active_");
            }
        }

        for(let i=0;i<2;i++)
            y[i].classList.add("active_");
       
        var index=x.length;
        $(".titles li:nth-child("+index+")").addClass("animation");
        for(let i=0;i<x.length;i++)
            {
                $(".titles li:nth-child("+i+")").removeClass("animation");
                $(".pngs li:nth-child("+i+")").removeClass("animation");
            }
        $(".pngs li:nth-child("+index+")").addClass("animation");
        count();
       

    }

    if(e.keyCode>=105 && e.keyCode<=108)
    {
        var x=document.getElementsByClassName("active_");
        var y=document.querySelector("#pb").children;

        if(x.length)
        {
            var i=x.length;
            $(".titles li:nth-child("+i+")").removeClass("animation");
            $(".pngs li:nth-child("+i+")").removeClass("animation");
            for(let i=x.length-1;i>0;i--)
            {
                y[i].classList.remove("active_");
            }
        }
        for(let i=0;i<3;i++)
            y[i].classList.add("active_");
       
        var index=x.length;
        $(".titles li:nth-child("+index+")").addClass("animation");
        for(let i=0;i<x.length;i++)
            {
                $(".titles li:nth-child("+i+")").removeClass("animation");
                $(".pngs li:nth-child("+i+")").removeClass("animation");
            }
        $(".pngs li:nth-child("+index+")").addClass("animation");
        count();
      
    }

    if(e.keyCode>=109 && e.keyCode<=112)
    {
        var x=document.getElementsByClassName("active_");
        var y=document.querySelector("#pb").children;

        if(x.length)
        {
            var i=x.length;
            $(".titles li:nth-child("+i+")").removeClass("animation");
            $(".pngs li:nth-child("+i+")").removeClass("animation");
            for(let i=x.length-1;i>0;i--)
            {
                y[i].classList.remove("active_");
            }
        }
        for(let i=0;i<4;i++)
            y[i].classList.add("active_");
       
        var index=x.length;
        $(".titles li:nth-child("+index+")").addClass("animation");
        for(let i=0;i<x.length;i++)
            {
                $(".titles li:nth-child("+i+")").removeClass("animation");
                $(".pngs li:nth-child("+i+")").removeClass("animation");
            }
        $(".pngs li:nth-child("+index+")").addClass("animation");
        count();
    }

    if(e.keyCode>=113 && e.keyCode<=116)
    {
        var x=document.getElementsByClassName("active_");
        var y=document.querySelector("#pb").children;

        if(x.length)
        {
            var i=x.length;
            $(".titles li:nth-child("+i+")").removeClass("animation");
            $(".pngs li:nth-child("+i+")").removeClass("animation");
            for(let i=x.length-1;i>0;i--)
            {
                y[i].classList.remove("active_");
            }
        }
        for(let i=0;i<5;i++)
            y[i].classList.add("active_");
       
        var index=x.length;
        $(".titles li:nth-child("+index+")").addClass("animation");
        for(let i=0;i<x.length;i++)
            {
                $(".titles li:nth-child("+i+")").removeClass("animation");
                $(".pngs li:nth-child("+i+")").removeClass("animation");
            }
        $(".pngs li:nth-child("+index+")").addClass("animation");
   
    }

    if(e.keyCode>=117 && e.keyCode<=122)
    {
        var x=document.getElementsByClassName("active_");
        var y=document.querySelector("#pb").children;

        if(x.length)
        {
            var i=x.length;
            $(".titles li:nth-child("+i+")").removeClass("animation");
            $(".pngs li:nth-child("+i+")").removeClass("animation");
            for(let i=x.length-1;i>0;i--)
            {
                y[i].classList.remove("active_");
            }
        }
        for(let i=0;i<6;i++)
            y[i].classList.add("active_");
       
        var index=x.length;
        $(".titles li:nth-child("+index+")").addClass("animation");
        for(let i=0;i<x.length;i++)
            {
                $(".titles li:nth-child("+i+")").removeClass("animation");
                $(".pngs li:nth-child("+i+")").removeClass("animation");
            }
        $(".pngs li:nth-child("+index+")").addClass("animation");
        count();
      
    }

    


});

document.onkeydown = function(e) {

    switch (e.keyCode) {
        case 37:
            {
                var x=document.getElementsByClassName("active_");
                var y=document.querySelector("#pb").children;
                var index=x.length-1;
                if(x.length<=y.length)
                    y[x.length-1].classList.remove("active_");
                var i=index+1;
                $(".titles li:nth-child("+i+")").removeClass("animation");
                $(".pngs li:nth-child("+i+")").removeClass("animation");
                $(".titles li:nth-child("+index+")").addClass("animation");
                $(".pngs li:nth-child("+index+")").addClass("animation");
                count();
                
                break;
            }
        case 39:
            {
                var x=document.getElementsByClassName("active_");
                var y=document.querySelector("#pb").children;
                if(x.length<y.length)
                    y[x.length].classList.add("active_");
                var index=x.length;
                $(".titles li:nth-child("+index+")").addClass("animation");
                for(let i=0;i<x.length;i++)
                {
                    $(".titles li:nth-child("+i+")").removeClass("animation");
                    $(".pngs li:nth-child("+i+")").removeClass("animation");
                }
                $(".pngs li:nth-child("+index+")").addClass("animation");
                count();
             
                break;
            }
               
    }
  
}

if(localStorage.getItem('current')==null)
{
    localStorage.setItem('current','0');
}
else
{
    
    var index=parseInt(localStorage.getItem('current'));
    var x=document.querySelector("#pb").children;
    for(let i=0;i<index;i++)
    {
        x[i].classList.add("active_");
    }
    $(".titles li:nth-child("+index+")").addClass("animation");
    $(".pngs li:nth-child("+index+")").addClass("animation");

}

function count(){
    var x=document.getElementsByClassName("active_");
    var l=x.length;
    console.log(l);
    if(l!=0)
    {
        localStorage.setItem('current',l);

    }
}

    




