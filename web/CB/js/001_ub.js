// JavaScript Document

/*$(function(){

	$("#HEADER li a").mouseover(
	
		function(){
			var N =  $(this).position().left;
			
				$("#MENU").show().stop().animate({left:N},800,"easeOutElastic");
		});
				
	$("#HEADER").mouseout(
	
		function(){
			
			$("#MENU").hide();
		});
		
		return false;
});
*/
$(function() {
	$('#DOWNLOADING').click(function(){window.open('http://203.69.188.148/dl/installer/Daolong_installer_v490.zip');}); 
		});	
<!--下方圖片輪播-->

   $(function() {
      $('#slides').slidesjs({
        width: 860,
        height: 502,
        play: {
          active: true,
          auto: true,
          interval: 4000,
          swap: true
        }
      });
    });


