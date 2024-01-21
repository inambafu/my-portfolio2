$(document).ready(function(){
	$(window).scroll(function(){
		//fixed sticky navbar on scroll

		if(this.scrollY > 20){
			$('.navbar').addClass("sticky");	
		}else{
			$('.navbar').removeClass("sticky");
		}

		//scroll btn-hide/show
		if(this.scrollY > 400) {
			$('.scroll-up-btn').addClass("show");
		}else{
			$('.scroll-up-btn').removeClass("show");
		}
	});

	//script for slide up
	$('.scroll-up-btn').click(function(){
		$('html').animate({scrollTop: 0});
	
		// removing smooth scroll on slide up button click
		$('html').css("scrollBehaviour", "auto");
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








