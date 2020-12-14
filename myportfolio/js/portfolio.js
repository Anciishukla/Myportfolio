//menu coding

$(document).ready(function() {
	$(".home").hover(function(){
		$(".home").css("opacity" , "0");
		$(".user ,.cog , .eye, .envelop").css("opacity" , "0.9");
		$(".a-text, .s-text, .c-text, .w-text").addClass("d-none");
		$(".h-text").removeClass("d-none");
		$(".h-text").addClass("animated zoomIn");
		$(".h-text").css("cursor" , "pointer");
	});

		$(".user").hover(function(){
		$(".user").css("opacity" , "0");
		$(".a-text").removeClass("d-none");
		$(".home ,.cog ,.eye,.envelop").css("opacity" , "0.9");
		$(".h-text, .s-text, .c-text, .w-text").addClass("d-none");
		$(".a-text").addClass("animated zoomIn");
		$(".a-text").css("cursor" , "pointer");
	});

			$(".cog").hover(function(){
		$(".cog").css("opacity" , "0");
		$(".s-text").removeClass("d-none");
		$(".user ,.home ,.eye,.envelop").css("opacity" , "0.9");
		$(".a-text, .h-text, .c-text, .w-text").addClass("d-none");
		$(".s-text").addClass("animated zoomIn");
		$(".s-text").css("cursor" , "pointer");
	});

			$(".eye").hover(function(){
		$(".eye").css("opacity" , "0");
		$(".w-text").removeClass("d-none");
		$(".user ,.cog ,.home,.envelop").css("opacity" , "0.9");
		$(".a-text, .s-text, .c-text, .h-text").addClass("d-none");
		$(".w-text").addClass("animated zoomIn");
		$(".w-text").css("cursor" , "pointer");
	});
				$(".envelop").hover(function(){
		$(".envelop").css("opacity" , "0");
		$(".c-text").removeClass("d-none");
		$(".user ,.cog ,.eye,.home").css("opacity" , "0.9");
		$(".a-text, .s-text, .h-text, .w-text").addClass("d-none");
		$(".c-text").addClass("animated zoomIn");
		$(".c-text").css("cursor" , "pointer");
	});
});



//tag coding

$(document).ready(function() {
	$(".bdy").html("<i>&ltbody&gt</i>");
	$(".hone").html("<i>&lth1&gt</i>");
	$(".c-hone").html("<i>&lt/h1&gt</i>");
	$(".c-bdy").html("<i>&lt/body&gt</i>");
	$(".c-hml").html("<i>&lt/html&gt</i>");
});



//Section Coding

$(document).ready(function() {

	//home coding
	$(".h-text").click(function() {
			$(".para-about , .para-skill , .para-contact , .para-work").addClass("d-none");	
			$(".para-home").removeClass("d-none");
			$(".heading").removeClass("d-none");
			$(".para-home").addClass("animated fadeIn");
			document.querySelector(".add-heading").innerHTML = " ";
		var string = "Hi, I'm Anchal, web developer ";
	var i=0;
	if (i<string.length) {
		setInterval(function() {
	  document.querySelector(".add-heading").innerHTML += string.charAt(i);

	  if(i == 2 || i == 14)
	  {
	  	document.querySelector(".add-heading").innerHTML += "<br>";
	  }

	i++;
	},150);
		return false;
	}	
	});

	//about coding

	$(".a-text").click(function() {
		$(".para-home , .para-skill , .para-contact , .para-work").addClass("d-none");	
			$(".para-about").removeClass("d-none");
			$(".heading").removeClass("d-none");
			document.querySelector(".add-heading").innerHTML = " ";
		var string = "About Me";
	var i=0;
	if (i<string.length) {
		setInterval(function() {
	  document.querySelector(".add-heading").innerHTML += string.charAt(i);
	  
	i++;
	},100);
		return false;
	}	
	});

	//skills coding

	$(".s-text").click(function() {
		$(".para-home , .para-about , .para-contact , .para-work").addClass("d-none");	
		$(".para-skill").removeClass("d-none");
			$(".heading").removeClass("d-none");
		document.querySelector(".add-heading").innerHTML = " ";
		var string = "Skills &  Experience";
	var i=0;
	if (i<string.length) {
		setInterval(function() {
	  document.querySelector(".add-heading").innerHTML += string.charAt(i);
	i++;
	},100);
		return false;
	}	
	});

	//contact coding

	$(".c-text").click(function() {
		$(".para-home , .para-skill ,.para-about , .para-work").addClass("d-none");	
		$(".para-contact").removeClass("d-none");
			$(".heading").removeClass("d-none");
		document.querySelector(".add-heading").innerHTML = " ";
		var string = "Contct me";
	var i=0;
	if (i<string.length) {
		setInterval(function() {
	  document.querySelector(".add-heading").innerHTML += string.charAt(i);
	i++;
	},100);
		return false;
	}	
	});

	//Work coding

	$(document).ready(function() {
		$(".w-text").click(function() {
			$(".para-home , .para-skill ,.para-about , .para-contact , .heading").addClass("d-none");	
		$(".html-tag").addClass("d-none");
	$(".image-cont").addClass("d-none");
	$(".para-work").removeClass("d-none");
		});		
	}); 

});

//work page coding

$(document).ready(function() {
	$(".w-one").hover(function() {
		$(".v1-project").removeClass("d-none");
		$(".v2-project, .v3-project, .v4-project, .v5-project, .v6-project, .v7-project, .v8-project, .v9-project").addClass("d-none");
		$(".v1-project").addClass("animated zoomIn");
		$(".v1-project").css("cursor" , "pointer");
	});
	$(".w-two").hover(function() {
		$(".v2-project").removeClass("d-none");
		$(".v1-project, .v3-project, .v4-project, .v5-project, .v6-project, .v7-project, .v8-project, .v9-project").addClass("d-none");
		$(".v2-project").addClass("animated zoomIn");
		$(".v2-project").css("cursor" , "pointer");
	});
	$(".w-three").hover(function() {
		$(".v3-project").removeClass("d-none");
		$(".v2-project, .v1-project, .v4-project, .v5-project, .v6-project, .v7-project, .v8-project, .v9-project").addClass("d-none");
		$(".v3-project").addClass("animated zoomIn");
		$(".v3-project").css("cursor" , "pointer");
	
	});
	$(".w-four").hover(function() {
		$(".v4-project").removeClass("d-none");
		$(".v2-project, .v3-project, .v1-project, .v5-project, .v6-project, .v7-project, .v8-project, .v9-project").addClass("d-none");
		$(".v4-project").addClass("animated zoomIn");
		$(".v4-project").css("cursor" , "pointer");
	
	});
	$(".w-five").hover(function() {
		$(".v5-project").removeClass("d-none");
		$(".v2-project, .v3-project, .v4-project, .v1-project, .v6-project, .v7-project, .v8-project, .v9-project").addClass("d-none");
		$(".v5-project").addClass("animated zoomIn");
		$(".v5-project").css("cursor" , "pointer");
	});
	$(".w-six").hover(function() {
		$(".v6-project").removeClass("d-none");
		$(".v2-project, .v3-project, .v4-project, .v5-project, .v1-project, .v7-project, .v8-project, .v9-project").addClass("d-none");
		$(".v6-project").addClass("animated zoomIn");
		$(".v6-project").css("cursor" , "pointer");
	});
	$(".w-seven").hover(function() {
		$(".v7-project").removeClass("d-none");
		$(".v2-project, .v3-project, .v4-project, .v5-project, .v6-project, .v1-project, .v8-project, .v9-project").addClass("d-none");
		$(".v7-project").addClass("animated zoomIn");
		$(".v7-project").css("cursor" , "pointer");
	});
	$(".w-eight").hover(function() {
		$(".v8-project").removeClass("d-none");
		$(".v2-project, .v3-project, .v4-project, .v5-project, .v6-project, .v7-project, .v1-project, .v9-project").addClass("d-none");
		$(".v8-project").addClass("animated zoomIn");
		$(".v8-project").css("cursor" , "pointer");
	});
	
})