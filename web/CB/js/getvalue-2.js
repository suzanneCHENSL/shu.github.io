/////////////////////////////////////////////////// 
//  傳遞參數getValue.js                          //
//  版本:v3.5                                    //
//  Create by eden lin                           //
///////////////////////////////////////////////////
var suid ='' + GetQueryString("suid");
var url ='' + GetQueryString("url");
var flag ='' + GetQueryString("flag");
url=url.replace(/\@/g , "?");
url=url.replace(/\+/g , "&");

function GetQueryString(_get_suid) 
{ 
	var reg = new RegExp("(^|&)"+ _get_suid +"=([^&]*)(&|$)"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r!=null) return unescape(r[2]); return ''; 
} 

function chkURL(_url) 
{ 		
	var target=/=/gi;
	var r = _url.match(target); 
	if (r!=null) return true; return false; 
} 

function gotoURL(_get_url, _get_target, _get_suid) 
{                        

	var type =chkURL(_get_url);
	var url;
	var fyn;
	if (type==true) {
		url='&';
	} else {
		url='?';
	}
	if (flag=="Y") {
		fyn='';
	} else {
		fyn='&flag=N';
	}
		
	
	if (_get_target!="") {
		window.open(_get_url + url + 'suid=' + _get_suid + fyn, _get_target,'');
		//window.open(_get_url + url + "suid=" + _get_suid + "&flag=N", _get_target,'');
	} else {
		window.location.href=_get_url + url + 'suid=' + _get_suid + fyn;
		//window.location.replace(_get_url + url + 'suid=' + _get_suid + fyn);
		//window.location.replace(_get_url + url + "suid=" + _get_suid + "&flag=N");
	}		

} 
