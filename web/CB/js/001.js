// JavaScript Document


$(function() {
	$('#DOWNLOADING').click(function(){window.open('http://download.gamefirst.com.tw/dl/installer/Daolong_installer_v490.zip');}); 
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


