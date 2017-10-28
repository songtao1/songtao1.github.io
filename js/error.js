//初始化页面
$(function() {FastClick.attach(document.body);});
this.show = false;
//获取数据
getCookie();
var userId;
function getCookie() {
  userId = $.cookie('open_id');
}
//点击调取微信扫一扫
$(".error-scan").click(function() {
  $.ajax({
    type:'post',
    url:'',
    dataType:'json',
    data:{},
    success:function(data){
      // code = data.code;
      //请求微信接口配置，成功后返回
      wx.config({
        debug: true,
        appId: 'wx351bcc373d6987d2',
        timestamp: 1508831182000,
        nonceStr: '0SZNf7oxVl7fnNq6',
        signature: '53c051abfb8e6f3fb72dd59d8c25b610641adae7',
        jsApiList: [
          'scanQRCode',
      ]
      })
    },
    error:function(jqXHR){
      showModal(jqXHR)
    }
  });

})
