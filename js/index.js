$(function() {FastClick.attach(document.body);});
//获取用户id
getCookie();
var userId=1;
// getCompanyData();
function getCookie() {
  userId = $.cookie('open_id');
}
getCompanyData(userId);
//点击调取微信扫一扫
$(".home-scan-input").click(function() {
  // $.ajax({
  //   type:'post',
  //   url:'',
  //   dataType:'json',
  //   data:{},
  //   success:function(data){
      // code = data.code;
      //请求微信接口配置，成功后返回
      wx.config({
        debug: true,
        appId: 'wx4352736235faf8f8',
        timestamp: 1509180204,
        nonceStr: '3030787213',
        signature: '58578f3a0f9ecb49af7eb9077e514060d5beb164',
        jsApiList: [
          'scanQRCode',
          'checkJsApi',
        ]
      });
    wx.ready(function(){
      //微信处理成功验证
      wx.checkJsApi({
            jsApiList : ['scanQRCode'],
            success : function(res) {
            }
          });
    });
    wx.scanQRCode({
    needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
    scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
    success: function (res) {
    var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
    alert(result);
    }
    });

  //   }
  // })
})
//根据id获取公司的数据
function getCompanyData(userId) {
  $.ajax({
    type:'get',
    url:'/api/user/get',
    dataType:'json',
    data:{open_id:userId},
    success:function(d){
      setData(d.data);
    }
  });
}
function setData(data) {
  $(".company-name").text(data.company_name==null?"请填写企业名称":data.company_name);
  $(".company-report-num").text(data.tax_number==null?"请填写纳税人识别号":data.tax_number);
  var col = data.company_name==null && data.tax_number==null;
  $(".company-name,.company-report-num").css("color",col?"#b1bcfc":"#fff");
}
