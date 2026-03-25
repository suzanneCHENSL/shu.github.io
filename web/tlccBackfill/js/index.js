// JavaScript Document
//
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
//
$(window).load(function(){ 
		//
	setTimeout(function(){$('.load').fadeOut(1000);},200);/**/
	
	});
//
$(document).ready(function(){ 
 
 	//進入大理城
  	/*$('.gobt').click(function(){*/
			$('.slogn_2').addClass('on');
			/*setTimeout(function(){$('.ho1').css('display','none');},6500);*/
			setTimeout(function(){
				$('.bt').addClass('on');
				$('.idbx').show();
				},0);
			/*});*/
	//
	$('.clos_1').click(function(){
			clos();
		});
	$('.clos_2,.clos_6').click(function(){
			clos2();
		});
	$('.clos_3,.clos_5').click(function(){
			clos3();
		});
		
	//	
	$.firefly({
			images: ['images/star.png', 'images/star2.png','images/star.png'], 
			total:20, 
			on:'#kkb'
		});	
		
		
 });
 
 	/*var url=window.location.toString();
	var str=""; 
	var str_value="";
		if(url.indexOf("?")!=-1){
	var ary=url.split("?")[1].split("&");
    for(var i in ary){
        str=ary[i].split("=")[0];
        if (str == "tl") {
            str_value = decodeURI(ary[i].split("=")[1]);
        	}
    	}	
	}
	if (str_value == 1)
			{	
			 $('.ho1,.slogn_1').hide();
			 $('.bt,.slogn_2').addClass('on');
			 $('.idbx').show();
			 lightbx('action1');
			}
	if (str_value == 2)
			{
			 $('.ho1,.slogn_1').hide();
			 $('.bt,.slogn_2').addClass('on');
			 $('.idbx').show();
			 lightbx('action2');
			}
	if (str_value == 3)
			{
			 $('.ho1,.slogn_1').hide();
			 $('.bt,.slogn_2').addClass('on');
			 $('.idbx').show();
			 vdo();
			}
  
	if (str_value == 4)
			{
			 $('.ho1,.slogn_1').hide();
			 $('.bt,.slogn_2').addClass('on');
			 $('.idbx').show();
			 lightbx('notice');
			}*/
  
  
  
/*//登入
function loginbt(){
	$('.loginbt').hide();
	$('.idbx2').show();
	};
//登出
function signoutbt(){
	$('.idbx2').hide();
	$('.loginbt').show();
	};*/
// 光箱
function lightbx(na){
	$('#light_bx').animate({scrollTop:0});
	$('.bx2').removeAttr('style');
	$('body').css('overflow','hidden');
	$('#light_bx,#'+na).fadeIn();
	};
function lightbx2(na2){
	$('#light_bx2,#'+na2).fadeIn();
	};
	
//

	
// 光箱 ( 訊息視窗 )	
function message(_txt,_txt2){
	$('.bx').removeAttr('style');
	$('#light_bx2,#message2').fadeIn(200);
	$('.st2').html(_txt);
	$('.clobt > div').html(_txt2);
	};
function ph(im){
	$('.ph').html('<img src="images/'+ im + '.jpg"/>');
	$('#light_bx2,#phb').fadeIn(100);
	};	
//
function clos(){
	$('#light_bx').fadeOut(100);
	setTimeout(function(){
		$('#light_bx,.bx,body').removeAttr('style');
		},200);
	};
function clos2(){
	$('#light_bx').fadeOut(100);
	$('.vdbx > .v1').html('');
	setTimeout(function(){
		$('#light_bx,.bx2,body,.vdbx').removeAttr('style');
		},200);
	};
function clos3(){
	$('#light_bx2').fadeOut(100);
	setTimeout(function(){
		$('#light_bx2,.bx,#phb').removeAttr('style');
		},200);
	};
function stage(nb){
	$('.lightbx2').hide();
	$('.lightbx').show();
	};


//運送進度
function tp(nb){
	$('.tp'+nb).show();
	};	

//結拜序號
function data(){
	$('.data1,.confirm').hide();
	$('.data2,#step2').show();
	//setTimeout(function(){
	//	$('#light_bx').animate({scrollTop: $('#step2').offset().top},200);
	//	},200);
	};	
	
//結緣序號
function snumber(){
	var h1 =$('.kh').height();
	var h2 =$('#step1').height();
	var ha =h1+h2+18;
	//alert(ha);
	$('#step2').hide();
	$('#step3').show();
	setTimeout(function(){
		$('#light_bx').animate({scrollTop: ha}, 200);
		},200);
	};
//階段
function stage(nb){
	$('.stage0').hide();
	$('.stage'+nb).show();
	};
	
//城中戲院
function vdo(){
	$('body').css('overflow','hidden');
	$('#light_bx,#cf').fadeIn();
	$('.vdbx > .v1').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/Q5PvnZ5MY6w?autoplay=1&loop=1&controls=1&rel=0;wmode=transparent" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
	};	
	