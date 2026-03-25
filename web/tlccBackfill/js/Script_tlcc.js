
//必需的變數
var fbid;//FB的id
var startS = true;//預設值開，允許的IP就能執行後端
var openS = true;//按啟動鈕(預設要顯示)，登FB後自動進入主頁(變數名稱不能用open)

//需求的變數
var readS = true;//填寫是否完成，false沒寫，true寫了(預設)

$(document).ready(function () {
    //判斷IP和初始化二擇一
    //startAction();//初始化開始
    getIpClient();// 判斷IP是否有權限
});

// 判斷IP是否有權限(async一定要加)
async function getIpClient() {
    let ok_ip = "60.248.166.173, 59.124.243.115, 180.169.121.196, 101.86.66.82, 117.143.178.30, 211.22.126.65";//允許的IP

    try {
        const response = await axios.get('https://api.ipify.org?format=json');//取得網路資訊
        var ipobj = response.data.ip; // 取得外網ip

        if (ok_ip.indexOf(ipobj) >= 0) {
            startAction();
        } else {
            location.href = "https://tlcc.gameflier.com/tlccBoard20230919/";//未外對開放時，暫時跳轉到這頁
            startS = false;
            $('.gobt').hide();
            message("活動網頁搶修中！！<br>有任何訊息會於官方網站公告！！", '好的');
        }
    } catch (error) {
        console.error(error);
    }
}

//初始化開始
function startAction() {
    var u = navigator.userAgent.toLowerCase();
    if (u.match("line")) {
        var urlMKEY = "";
        var url = location.href;
        var arr = url.split("?");
        if (arr[1] != undefined) {
            var arrsplit = arr[1].split("&");
            let obj = {};
            for (let i of arrsplit) {
                obj[i.split("=")[0]] = i.split("=")[1];
            }
            if (obj.MKEY != undefined) {
                urlMKEY = "MKEY=" + obj.MKEY;
            }
        }
        location.href = "?" + urlMKEY + "&openExternalBrowser=1";
        Swal.fire({
            allowOutsideClick: false,
            title: '請使用外部瀏覽器進行活動！',
            html: '如Chrome或Safari等外部其他應用程式瀏覽器開啟',
            showConfirmButton: false
        })
    }

    //訊息框的"好的"鈕
    $('.clobt').click(function () {
        if (!readS) {
            setTimeout(function () {
                lightbx2('message');
            }, 300);

        }

    });

    //FBID();//初始載入登入者Cookie
}

// FB SDK
window.fbAsyncInit = function () {
    FB.init({
        appId: '643675287867096', //  官網暫時測試專用:180232791733678 正式:643675287867096
        cookie: true,
        xfbml: true,
        version: 'v17.0'
    });

    FB.AppEvents.logPageView();
};

//FB初始化下載
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/zh_TW/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//FB登入
function LoginFB() {

    if (fbid == undefined) {
        //確認是否登入FB
        FB.getLoginStatus(function (response) {
            //status 說明此應用程式用戶的登入狀態。狀態可能為以下其中一項：
            //connected - 這位用戶已登入 Facebook，也已經登入您的應用程式。
            //not_authorized - 這位用戶已登入 Facebook，但尚未登入您的應用程式。
            //unknown - 這位用戶沒有登入 Facebook，因此您無法得知用戶是否已登入您的應用程式，或者之前已呼叫 FB.logout()，因此無法連結至 Facebook。

            if (response.status === 'connected') {
                //如果狀態是 connected，就會包含 authResponse，且由以下資料所構成：
                //accessToken - 含有這位應用程式用戶的存取權杖。
                //expiresIn - 以 UNIX 時間顯示權杖何時到期並需要再次更新。
                //signedRequest - 已簽署的參數，其中包含這位應用程式用戶的資訊。
                //userID - 這位應用程式用戶的編號。

                fbid = response["authResponse"]["userID"];
                /* var accessToken = response.authResponse.accessToken;*/
                FBapi();
                return;
            }
        });
    }

    if (fbid == undefined) {
        FB.login(function (response) {
            if (response.status === 'connected') {
                fbid = response["authResponse"]["userID"];
                FBapi();
            } else {
                // 執行登入失敗的流程
                //alert(JSON.stringify(response));
                message('FB登入失敗！請重新再試！', '好的');//已填寫

            }
            return;
        }, { scope: 'public_profile,user_likes' });
    }

    if (fbid != undefined) {
        FBapi();
    }
}

//FBapi讀取基本資料
function FBapi() {
    FB.api('/me', function (response) {
        let fbname = response.name;
        //doCookieSetup(fbid, fbname);
        doForeverCookieSetup(fbid, fbname);
    });

    //$(window).on('unload', function () {
    //    window.close();
    //    alert("關閉當前頁面");
    //});
}

//-----以上FB的部份----------
//--------以下登入的部份-----------------

//登入存Cookie
function doCookieSetup(fbid, fbname) {
    window.sessionStorage.setItem("fbid", fbid);
    window.sessionStorage.setItem("fbname", fbname);
    FBID();
}

//登入永久存Cookie
function doForeverCookieSetup(fbid, fbname) {
    //永久保存Cookie
    localStorage.setItem("fbid", fbid);
    localStorage.setItem("fbname", fbname);
    FBID();
}

//登出鈕
function signoutbt2() {
    fbid = undefined;
    openS = true;
    $("#fbid").text("");
    clos2();
    LogoutForeverFB();
};

//登出清Cookie
function LogoutFB() {
    sessionStorage.removeItem("fbid");
    sessionStorage.removeItem("fbname");
    //FB.logout();//從FB登出
}

//登出清永久Cookie
function LogoutForeverFB() {
    //永久保存Cookie登出刪除
    localStorage.removeItem("fbid");
    localStorage.removeItem("fbname");
    //FB.logout();//從FB登出
}

//登入、登出切換
function FBID() {
    //fbid = sessionStorage.getItem('fbid');
    //取得永久保存Cookie內容
    fbid = localStorage.getItem("fbid");
    
    if (fbid == undefined) {
        //alert("已登出");
        $("#fbid").text("");
        signoutbt2();//登出鈕
    } else {
        //alert("已登入" + fbid);
        $("#fbid").text(fbid);
        if (openS) {
            openS = false;
            var _jsonD = { UID: fbid };
            ActionBefore("1-0", "ACTION_TLCC_20231102", _jsonD);//0:活動回填查詢
        }
    }
}

//首頁-FB帳號登入按鈕
function START_btn() {
    if (openS) {
        //fbid = sessionStorage.getItem('fbid');

        //取得永久保存Cookie內容
        fbid = localStorage.getItem("fbid");
        if (fbid == undefined) {
            LoginFB();//請先登入
        } else {
            FBID();
        }
    } else {
        lightbx('action1');//未登出的關閉，直接顯示不用撈資料
    }
}

function check() {
    readS = false;//沒寫
    var in_server = $('#server').val();//伺服器
    var in_name = $.trim($('#in_name').val());//遊戲帳號
    var in_role = $.trim($('#in_role').val());//角色名稱
    var in_roleid = $.trim($('#in_roleid').val());//角色碼ID
    console.log("伺服器=" + in_server + ", 遊戲帳號=" + in_name + ", 角色名稱=" + in_role + ", 角色碼ID=" + in_roleid);
    if (in_server == "0") {
        message('請選擇伺服器！', '好的');
        return;
    } else if (in_name == null || in_name == "") {
        message('遊戲帳號不能空白，請填寫！', '好的');
        return;
    } else if (in_role == null || in_role == "") {
        message('角色名稱不能空白，請填寫！', '好的');
        return;
    } else if (in_roleid == null || in_roleid == "") {
        message('角色碼ID不能空白，請填寫！', '好的');
        return;
    }
    readS = true;//控制按鈕的動作

    $('#st_server').text(in_server);
    $('#st_name').text(in_name);
    $('#st_role').text(in_role);
    $('#st_roleid').text(in_roleid);
    //message(), data(), tp(1);
    _jsonD = { UID: fbid, server_name: in_server, game_id: in_name, role_name: in_role, guid: in_roleid };
    ActionBefore("2-0", "ACTION_TLCC_20231102_REG", _jsonD);//0:活動回填
}


//呼叫後端功能
function ActionBefore(Type, MKEY, _jsonD) {
    if (!startS) {
        return;
    }
    console.log("Type=" + Type + ",_jsonD=" + JSON.stringify(_jsonD));
    var _url = "https://tlcc.gameflier.com/service/API/" + MKEY;
    $.ajax({
        url: _url,
        type: 'POST',
        data: _jsonD,
        dataType: 'json', beforeSend: function () {
        },
        success: function (res) {
            console.log("Type=" + Type + ", ActionBefore-res:" + JSON.stringify(res));

            switch (Type) {
                case "1-0"://0:活動回填查詢
                    //我暫時測試用的
                    //if (fbid == "7427145673968421" || fbid == "7311003372249319") {
                    //    res = {"Code":1,"Message":"填寫完成","Data":{"STATUS":"0","L1":"0","L2":"0","L3":"0","L4":"0","L5":"0","L6":"0","L7":"0","R1":"1","R2":"0","R3":"0","R4":"0","R5":"0","R6":"0","R7":"0","R8":"0","R9":"0","R10":"0","R11":"0","R12":"0"}};
                    //}
                    //res = { "Code": 1, "Message": "填寫完成", "Data": { "STATUS": "0", "L1": "0", "L2": "1", "L3": "1", "L4": "0", "L5": "1", "L6": "0", "L7": "1", "R1": "1", "R2": "0", "R3": "0", "R4": "0", "R5": "0", "R6": "0", "R7": "0", "R8": "0", "R9": "0", "R10": "0", "R11": "0", "R12": "0" } };
                    if (res.Code == -1) {
                        message('目前尚未參加任何須回填的活動', '好的');//要有錯誤編號
                        return;
                    }else if (res.Code == 1) {
                        //狀態
                        if (res.Data["STATUS"] == 0) {//0:未填
                            $('.confirm').show();
                        } else if (res.Data["STATUS"] == 1) {//1:已填
                            $('.confirm').hide();
                            $('.transport').show();
                        }

                        //號召群雄拿大禮(改乾坤聚義 重回大理)
                        for (i = 1; i <= 7; i++) {
                            $(".L" + i ).addClass("hhh" + res.Data["L" + i]);
                        }
                        //攜手共闖洛陽(改攜手洛陽 共闖江湖)
                        for (r = 1; r <= 12; r++) {
                            $(".R" + r).addClass("hhh" + res.Data["R" + r]);
                        }
                        $('.hhh0').hide();
                        $('.hhh1').show();

                        lightbx('action1');
                    } else {
                        message(res.Message, '好的');
                    }
                    break;

                case "2-0"://0:活動回填
                    //我暫時測試用的
                    //if (fbid == "7427145673968421" || fbid == "7311003372249319") {
                    //    res = {"Code":1,"Message":"回填成功","Data":null};
                    //}
                    //res = { "Code": 1, "Message": "回填成功", "Data": null };
                    if (res.Code == 1) {
                        $('.confirm').hide();
                        $('.transport').show();
                        $(".st2").remove();//移除
                        $(".st3").attr("class", "st2");
                        $('.st2').show();
                        message();
                    } else {
                        message(res.Message, '好的');
                    }
                    break;

                default:
                    message("不明錯誤。", '好的');
            }


        },
        complete: function () {
        },
        error: function (xhr, ajaxOptions, throwError) {
            alert(Type + ', ' + xhr.status + ', ' + ajaxOptions + ', ' + throwError);
        }
    });

}



