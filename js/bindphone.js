$(function() {FastClick.attach(document.body);});
//获取数据
getCookie();
var userId=1;
function getCookie() {
  userId = $.cookie('open_id');
}
$(".bindphone-num").blur(function() {
  testPhone();
})
var djsTime,
    isSend = true,
    countdown = 120;
//点击获取校验码
$(".send-code").click(function() {
  testPhone();
  if(isSend){
    djsTime = setInterval(function() {
      settime();
    },1000)
    getCode(userId);
  };
})
//点击绑定
$(".bind-btn").click(function() {
  testPhone();
  var codeVal = $(".bind-code").val();
  if(!codeVal) {
    showModal("请输入校验码！");
    return;
  }
  bindPhone(userId,codeVal);
})
//绑定请求
function bindPhone (userId,code) {
  var params = {open_id:userId+"",code:code,telephone:$(".bindphone-num").val()};
  $.ajax({
    type:'post',
    url:'/api/user/bindphone',
    dataType:'json',
    data:JSON.stringify(params),
    contentType:'application/json',
    success:function(data){
      showModal("绑定成功！")
    }
});
}
//获取验证码请求
function getCode(userId) {
  var params = {open_id:userId+"",telephone:$(".bindphone-num").val()};
  $.ajax({
    type:'post',
    url:'http://192.168.1.110:2000/api/user/bindphone',
    dataType:'json',
    data:JSON.stringify(params),
    contentType:'application/json',
    success:function(data){
      showModal("验证码已发送")
    }
});
}
//按钮倒计时
function settime() {
  var a =  $(".send-code");
  if (countdown == 0) {
  clearInterval(djsTime)
  a.removeAttr("disabled");
  a.css({"background": "#61b8ff"})
  a.text("重新验证码");
  countdown = 10;
  } else {
  a.attr("disabled", "true");
  a.css({"background": "#ccc", "cursor": "not-allowed"})
  a.text("重新发送(" + countdown + "s)");
  countdown--;
  }
}
//校验输入手机号
function testPhone() {
  var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
  var phoneVal = $(".bindphone-num").val();
  if(!phoneVal) {
    showModal("请输入手机号");
    return isSend = false;
  }
  if(!myreg.test(phoneVal)){
    showModal("请输入正确的手机号");
    return isSend = false;
  }
  return isSend = true;
}

//提示框
function showModal(str) {
  $(".common-modal").css("display","block");
  $(".common-modal").text(str);
  var timer=setTimeout(function(){$(".common-modal").css("display","none");clearTimeout(timer)},2000);
}
