$(function() {FastClick.attach(document.body);});

$(".bindphone-num").blur(function() {
  testPhone();
})
var djsTime,
    isSend = false,
    countdown = 10,
    code;
//点击获取校验码
$(".send-code").click(function() {
  testPhone();
  if(isSend){
    djsTime = setInterval(function() {
      settime();
    },1000)
  };
  code = 1234;
  $(".bind-code").val(code);
})
//点击绑定
$(".bind-btn").click(function() {
  testPhone();
  var codeVal = $(".bind-code").val();
  if(!codeVal) {
    showModal("请输入校验码！");
    return;
  }
  if(codeVal!==code) {
    showModal("验证码错误！");
    return;
  }

})
//绑定请求
function bindPhone () {
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
//获取验证码请求
function getCode() {
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
    return;
  }
  if(!myreg.test(phoneVal)){
    showModal("请输入正确的手机号");
    return;
  }
  return isSend = true;
}

//提示框
function showModal(str) {
  $(".common-modal").css("display","block");
  $(".common-modal").text(str);
  var timer=setTimeout(function(){$(".common-modal").css("display","none");clearTimeout(timer)},2000);
}
