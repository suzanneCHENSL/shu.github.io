$(window).load(function(){
	$("#mask").fadeOut(800);
	$('#scrollbar1, #scrollbar1').tinyscrollbar();	
		$("#btn_1").click(function(){
		$("#zoom").animate({ left: "0", top:"0"},{duration: 1300,easing:'easeInOutExpo'});
		$('#logo_b').fadeIn(1000);
		
	});	
	$("#btn_2").click(function(){
		$("#zoom").animate({top:"-1000" },{duration: 1300,easing:'easeInOutExpo'});
			$('#logo_b').fadeOut(1000);
	});
	$("#btn_3").click(function(){
		$("#zoom").animate({ top: "-2000"},{duration: 1300,easing:'easeInOutExpo'});
			$('#logo_b').fadeOut(1000);
	});
	$("#btn_4").click(function(){
		$("#zoom").animate({ top: "-3000"},{duration: 1300,easing:'easeInOutExpo'});
			$('#logo_b').fadeOut(1000);
	});
	$("#btn_5").click(function(){
		$("#zoom").animate({ top: "-4000"},{duration: 1300,easing:'easeInOutExpo'});		
			$('#logo_b').fadeOut(1000);				
	});
	$("#btn_6").click(function(){
		$("#zoom").animate({ top: "-5000"},{duration: 1300,easing:'easeInOutExpo'});		
			$('#logo_b').fadeOut(1000);				
	});

  	  
});

$(function(){ 
		function TOP(){
					$("#logo").animate({top:"-7"},{duration: 800,easing:'easeInOutQuad'}).animate({top:"7"},{duration: 800,easing:'easeInOutQuad'});
					setTimeout(TOP,1600)
			}
		TOP();
		
});