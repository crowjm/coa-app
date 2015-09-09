//show and hide content under headers on main page

$("#about-header").click (
	function(){
		$("#about-content").toggle();
	}
);

$("#why-header").click (
	function(){
		$(".why-content").toggle();
	}
);

$("#how-header").click (
	function(){
		$("#how-content").toggle();
	}
);

$("#govt-header").click (
	function(){
		$("#govt-content").toggle();
	}
);

//reveal content and scroll to map so that it shows in viewport
$("#map-header").click(function(){
  $("#map-content").slideToggle("slow");
  if ($("#map-content").is(':visible')) {
     $("html, body").animate({scrollTop: $("#map-content").offset().top});
  }
});


//show and hide in how do i question
$("#billsq").click (
	function(){
		$("#billsa").toggle();
	}
);

$("#ticketq").click (
	function(){
		$(".ticketa").toggle();
	}
);

$("#adoptq").click (
	function(){
		$(".adopta").toggle();
	}
);

$("#recycleq").click (
	function(){
		$("#recyclea").toggle();
	}
);

$("#voteq").click (
	function(){
		$(".votea").toggle();
	}
);


//scroll smoothly to shown events on calendar

$(".sept7").click(function(){
  $("#sept7").slideToggle("slow");
  if ($("#sept7").is(':visible')) {
     $("html, body").animate({scrollTop: $("#sept7").offset().top});
  }
});

$(".sept11").click(function(){
  $("#sept11").slideToggle("slow");
  if ($("#sept11").is(':visible')) {
     $("html, body").animate({scrollTop: $("#sept11").offset().top});
  }
});

$(".sept20").click(function(){
  $("#sept20").slideToggle("slow");
  if ($("#sept20").is(':visible')) {
     $("html, body").animate({scrollTop: $("#sept20").offset().top});
  }
});