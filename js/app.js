function navSlide()
{
	var burger=document.querySelector('.burger');
	var menu=document.querySelector('.menu');
	var li=document.querySelectorAll('.menu li');
	burger.addEventListener('click',function()
	{
		menu.classList.toggle('nav-active');
		li.forEach((link,index)=>
		{
			if(link.style.animation)
				link.style.animation='';
			else
				link.style.animation=`navLinkFade 0.5s ease forwards ${index / 7}s`;
		})
		
	});

}
navSlide();


 





