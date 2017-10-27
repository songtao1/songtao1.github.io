$(function() {FastClick.attach(document.body);});
var chy = true;
//根据发票代码改变提示校验码提示内容
$(".hand-inp-fpdm").blur(function() {
  testBill();
})
//提交验证条件
$(".hand-inp-fphm").blur(function() {
  testfphmBill();
})
$(".hand-inp-jym").blur(function() {
var jymVal = parseInt($(".hand-inp-jym").val());
var str = $(".hand-jym").text();
if(isNaN(jymVal)) {
  showModal("请输入正确的"+str+"!");
  return chy = false;
}
})
//查验
$(".hand-btn").click(function() {
  var aVal = $(".hand-inp-fpdm").val();
  var bVal = $(".hand-inp-fphm").val();
  var cVal = $(".hand-inp-kprq").val();
  var dVal = $(".hand-inp-jym").val();
  if(!(aVal && bVal && cVal && dVal)) {
    showModal("输入不可以为空！");
    return chy = false;
  }
  testBill();
  testfphmBill();
  testJym();
  if(chy){
    console.log("post")
  }
  var dateVal = switchTime(cVal);
})

//将时间转换为8位的字符串
function switchTime(time1) {
var arr = time1.split("/");
var str = arr[2]+arr[0]+arr[1];
return str;
}
//校验码脚校验
function testJym() {
  var eVal = $(".hand-jym").text() == "校验码";
  var isJymLen = $(".hand-inp-jym").val().length;
  var jymVal = $(".hand-inp-jym").val();
  if(eVal){
      if(isJymLen!==6 || isNaN(jymVal)){
        showModal("校验码不正确！");
        return chy = false;
      }else{
        return chy = true;
      }
  }
}
//发票号码校验
function testfphmBill() {
  var fphmVala = $(".hand-inp-fphm").val().length;
  var fphmVal = parseInt($(".hand-inp-fphm").val());
  if(isNaN(fphmVal)) {
    showModal("请输入正确的发票号码！");
    return chy = false;
  }
  if(fphmVala!==8) {
    showModal("请输入8位的发票号码！");
    return chy = false;
  }
}
//发票代码校验
function testBill() {
var num = parseInt($(".hand-inp-fpdm").val(),10);
var numLen = $(".hand-inp-fpdm").val().length;
if(isNaN(num)){
  showModal("请输入正确的发票代码！")
  return chy = false;
}
if(numLen!==10 && numLen!==12){
  showModal("发票代码位数不对！");
  return chy = false;
}
//10位的情况判断第八位
var fpdmVal = parseInt($(".hand-inp-fpdm").val().charAt(7), 10);
var fpdmVala = parseInt($(".hand-inp-fpdm").val().charAt(0), 10);
var fpdmValb = $(".hand-inp-fpdm").val().substr(10,2);
console.log(fpdmValb)
if(numLen==10){
  if(fpdmVal===3 || fpdmVal===6) {
    console.log("普通发票");
    $(".hand-jym").text("校验码");
    $(".hand-inp-jym").attr("placeholder","校验码后六位");
    return chy = true;
  }else if(fpdmVal===1 || fpdmVal===2 || fpdmVal===5 || fpdmVal===7){
    console.log("专用发票")
    $(".hand-jym").text("税前金额");
    $(".hand-inp-jym").attr("placeholder","请输入税前金额");
    return chy = true;
  }else{
    showModal("发票代码有误！");
    return chy = false;
  }
}
//12位判断
if(numLen==12) {
  if(fpdmVala ===0){
    if(fpdmValb==="11"){
    console.log("普通电子发票")
    $(".hand-jym").text("校验码");
    $(".hand-inp-jym").attr("placeholder","校验码后六位");
    return chy = true;
  }else if(fpdmValb==="06"){
      console.log("普票")
      $(".hand-jym").text("校验码");
      $(".hand-inp-jym").attr("placeholder","校验码后六位");
      return chy = true;
    }else if(fpdmValb==="07"){
      console.log("卷票")
      $(".hand-jym").text("校验码");
      $(".hand-inp-jym").attr("placeholder","校验码后六位");
      return chy = true;
    }else {
      showModal("发票代码有误！");
      return chy = false;
    }
  }
  if(fpdmVala !==0 && fpdmVal===2){
    console.log("机动车发票")
    $(".hand-jym").text("不含税价");
    $(".hand-inp-jym").attr("placeholder","请输入不含税价")
  }else{
      showModal("发票代码有误！");
      return chy = false;
  }

}
}
//提示框
function showModal(str) {
$(".common-modal").css("display","block");
$(".common-modal").text(str);
var timer=setTimeout(function(){$(".common-modal").css("display","none");clearTimeout(timer)},2000);
}
