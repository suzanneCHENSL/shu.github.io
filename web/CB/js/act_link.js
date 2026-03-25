//===========================Cookie專用================================
function GetCookieVal(offset)
//獲得Cookie解碼後的值
{
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1)
	endstr = document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
}

function SetCookie(name, value)
//設定Cookie值
{
	var expdate = new Date();
	var argv = SetCookie.arguments;
	var argc = SetCookie.arguments.length;
	var expires = (argc > 2) ? argv[2] : null;
	var path = (argc > 3) ? argv[3] : null;
	var domain = (argc > 4) ? argv[4] : null;
	var secure = (argc > 5) ? argv[5] : false;
	if(expires!=null) expdate.setTime(expdate.getTime() + ( expires * 1000 ));
	document.cookie = name + "=" + escape (value) +((expires == null) ? "" : ("; expires="+ expdate.toGMTString()))
	+((path == null) ? "" : ("; path=" + path)) +((domain == null) ? "" : ("; domain=" + domain))
	+((secure == true) ? "; secure" : "");
}

function DelCookie(name)
//刪除Cookie
{
	var exp = new Date();
	exp.setTime (exp.getTime() - 1);
	var cval = GetCookie (name);
	document.cookie = name + "=" + cval + "; expires="+ exp.toGMTString();
}

function GetCookie(name)
//獲得Cookie的原始值
{
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen)
	{
	var j = i + alen;
	if (document.cookie.substring(i, j) == arg)
	return GetCookieVal (j);
	i = document.cookie.indexOf(" ", i) + 1;
	if (i == 0) break;
	}
	return null;
}
//===========================Cookie專用================================

var suid = getParameter("suid");
var flag = getParameter("flag");
var SWF = document.getElementsByTagName("param");
for(i = 0; i < SWF.length; i++){
  if(SWF[i].name == 'movie'){
    var SWFname = SWF[i].value;
    break;
  }
}

if ((suid=="")||(!suid)||(suid=="none")||(suid=="null")){
	suid = GetCookie("suid");
}else{
	SetCookie("suid", suid);
}

//document.write('<p>suid: ' + suid+ '<br>flag: ' + flag + '</p>');

//document.write("<embed width=100% height=100% fullscreen=yes src='"+SWFname+"?suid="+suid+"'>")

//document.write("<img src='http://www.ujgame.com/ujcasual/function/action_count.aspx?suid="+suid+"' width='0' height='0'>");

document.write("<div style='position:absolute;'><img src='http://act.uj.com.tw/action_count/action_count.aspx?suid="+suid+"&flag="+flag+"' width='0' height='0'></div>");

function getParameter(parameterName) {  
  var strQuery = location.search.substring(1);  
  var paramName = parameterName + "=";  
  
  if (strQuery.length > 0) {  
    begin = strQuery.indexOf(paramName);  
  
    if (begin != -1) {
      begin += paramName.length; 
  
      end = strQuery.indexOf("&" , begin);  
      if ( end == -1 ) end = strQuery.length  
  
      return unescape(strQuery.substring(begin, end));  
    }  
    return "null";  
  }  
}

function register_step1(){
    window.open("https://www.uj.com.tw/MemberSys/MemRegister/register_step1.aspx?suid="+suid);
}

function register_from(sgame){
	window.open("http://www.uj.com.tw/MemberSys/MemRegister/fromwhere.aspx?suid="+suid+"&sgame="+sgame);
}

function getsuid(){
    return suid;
}