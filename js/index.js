$(function() {FastClick.attach(document.body);});
//获取用户id
getCookie();
var userId;
// getCompanyData();
function getCookie() {
  // userId = $.cookie('openid');
}
//点击调取微信扫一扫
$(".home-scan-input").click(function() {
  //请求微信接口配置，成功后返回
  // wx.config({
  //   debug: true,
  //   appId: 'wx351bcc373d6987d2',
  //   timestamp: 1508831182000,
  //   nonceStr: '0SZNf7oxVl7fnNq6',
  //   signature: '53c051abfb8e6f3fb72dd59d8c25b610641adae7',
  //   jsApiList: [
  //     'scanQRCode',
  // ]
  // })
})
//根据id获取公司的数据
function getCompanyData() {
  $.ajax({
    type:'POST',
    url:'/a/',
    dataType:'json',
    data:{name:xxx,age:xxx},
    success:function(data){
      // code = data.code;
    },
    error:function(jqXHR){
      showModal(jqXHR)
    }
});
}
setData()
function setData(data) {
  $(".company-name").text("北京闪电报销");
  $(".company-report-num").text("23423442");
  $(".company-name,.company-report-num").css("color","#fff");

}
