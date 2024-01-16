$(document).ready(function(){
	$(window).scroll(function(){
		//fixed navbar on scroll

		if(this.scrolly > 20) {
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
});
