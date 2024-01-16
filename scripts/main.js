$(document).ready(function(){
	$(window).scroll(function(){
		//fixed sticky navbar on scroll

		if(this.scrollY > 20){
			$('.navbar').addClass("sticky");	
		}else{
			$('.navbar').removeClass("sticky");
		}
	});
	//typing effect
	var typed = new Typed(".typing", {
		strings: ["Web Designer", "Web Developer", "Freelancer", "Consultant"],
		typeSpeed: 100,
		backSpeed: 60,
		loop:true
	});

	//typing effect 2
	var typed = new Typed(".typing-2", {
		strings: ["Web Designer", "Web Developer", "Freelancer", "Consultant",],
		typeSpeed: 100,
		backSpeed: 70,
		loop:true
	});
	
});








