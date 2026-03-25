// JavaScript Document
$(document).ready(function() {
	//fancybox
	$(".various").fancybox({

		width		: '60%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
	
	//link
	$('.rewardT').attr('href','http://pilidl.zld.com.tw/news/newsDetail.aspx?count=done&id=32').attr('target','_self');//虛寶領取教學
	$('.billingT').attr('href','http://pilidl.zld.com.tw/news/newsDetail.aspx?count=done&id=50').attr('target','_self');//儲值流程教學
	$('#slogan a').attr('href','http://pilidl.zld.com.tw/action/20150311_war/index.html').attr('target','_blank');
	$('.logo').attr('href','index.aspx').attr('target','_self');
	$('.signup').attr('href','account/register.aspx').attr('target','_blank');//申帳
	$('.download').attr('href','download/program.aspx').attr('target','_self');//程式下載
	$('.event').attr('href','http://pilidl.zld.com.tw/action/20150311_war/index.html').attr('target','_blank');//活動
	$('#cf a').attr('href','//www.youtube.com/embed/9IHdew6cJIc?rel=0&autoplay=1');
	$('a.fb').attr('href','http://openid.zealotdigital.com.tw/pilidl_path/fbdirector?url=http://pilidl.zld.com.tw/launcher_w.aspx');
	$('a.google').attr('href','http://openid.zealotdigital.com.tw/pilidl_path/googledirector?url=http://pilidl.zld.com.tw/launcher_w.aspx');
	
		//敬請期待
	$.fn.comingsoon = function(){
		$(this).click(function(){
			 alert("敬請期待");
		});
	};	
	//$( ".billingT,.rewardT" ).comingsoon();
	
})