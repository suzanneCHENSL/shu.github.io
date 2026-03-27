$(document).ready(function () {
  $(".sbtn4").click(function () {
    $(".slidqrc").toggle();
  });

  // gotop ============================
  $(".slidertop").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1200
    );
    return false;
  });
});
// .....tab
$(function () {
  // 預設顯示第一個 Tab
  var _showTab = 0;
  $(".abgne_tab").each(function () {
    // 目前的頁籤區塊
    var $tab = $(this);

    var $defaultLi = $("ul.tabs li", $tab).eq(_showTab).addClass("active");
    $($defaultLi.find("a").attr("href")).siblings().hide();

    // 當 li 頁籤被點擊時...
    // 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
    $("ul.tabs li", $tab)
      .click(function () {
        // 找出 li 中的超連結 href(#id)
        var $this = $(this),
          _clickTab = $this.find("a").attr("href");
        // 把目前點擊到的 li 頁籤加上 .active
        // 並把兄弟元素中有 .active 的都移除 class
        $this.addClass("active").siblings(".active").removeClass("active");
        // 淡入相對應的內容並隱藏兄弟元素
        $(_clickTab).stop(false, true).fadeIn().siblings().hide();

        return false;
      })
      .find("a")
      .focus(function () {
        this.blur();
      });
  });
});
function op() {
  $("html").animate({ scrollTop: $(".content").offset().top - 80 }, 800);
}
function aca() {
  lightbx("aca");
}
function uid() {
  lightbx2("uid");
}
function ube1() {
  lightbx("ube1");
}
function rtnbx() {
  lightbx("rtnbx");
}
function tl() {
  window.alert("敬請期待");
}

$(document).ready(function() {				   
        $(".tvcf").colorbox({ iframe: true, innerWidth: 700, innerHeight: 393 });
    });


document.getElementById("cy").innerHTML =
  '<div><div class="bbk"></div><div class="imgbx"/><img src="images/gg.png" class="cyimg"/></div><div class="cyl">ⓒKOEITECMO GAMES CO., LTD. All rights reserved.  Publisher:Soft-World International Corp.  Game Operator:Game Flier International Corp.</div></span><span class="tg2">■ 本遊戲部分內容涉及暴力(戰場鬥爭)、恐怖(怪物造型)、菸酒(遊戲道具)情節。■ 請避免沉迷遊戲。■ 本遊戲部分內容須另行支付費用。</span> <a><img src="images/15L.png" /></a> </div>'; 