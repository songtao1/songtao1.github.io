$(function() {FastClick.attach(document.body);});
//获取数据
getCookie();
var userId=1;
//所有input初始化
$(".com-inp-common").attr("disabled","disabled");
function getCookie() {
  userId = $.cookie('open_id');
}
getData(userId);
function getData(userId) {
  $.ajax({
    type:'get',
    url:'/api/user/get',
    dataType:'json',
    data:{open_id:userId},
    success:function(d){
      setData(d.data)
    },
  });
}
function setData(data) {
  $(".com-name").val(data.company_name);
  $(".com-nsrsbh").val(data.tax_number);
  $(".com-bank").val(data.account_bank);
  $(".com-zh").val(data.account_number);
  $(".com-address").val(data.address);
  $(".com-num").val(data.telephone);
}
//点击编辑
$(".com-edit").click(function() {
  if($(".com-edit").text()==="编辑"){
    $(".com-edit").text("保存");
    $(".com-inp-common").removeAttr("disabled");
  }else{
    $(".com-inp-common").attr("disabled","disabled");
    saveCompanyCard();
  }
})
//保存数据
function saveCompanyCard() {
  $(".com-edit").text("编辑");
  saveData(userId);
}
//保存信息请求
function saveData(userId) {
  var postData = {
    open_id:userId,
    company_name:$(".com-name").val(),
    tax_number:$(".com-nsrsbh").val(),
    address:$(".com-address").val(),
    account_bank:$(".com-bank").val(),
    account_number:$(".com-zh").val(),
    telephone:$(".com-num").val()
  }
  $.ajax({
    type:'post',
    url:'/api/user/edit',
    data:JSON.stringify(postData),
    dataType:'json',
    contentType:"application/json",
    success:function(data){
      showModal("保存成功！")
    }
  });
}
//显示弹框保存成功！
function showModal(str) {
  $(".common-modal").css("display","block");
  $(".common-modal").text(str);
  var timer=setTimeout(function(){$(".common-modal").css("display","none");clearTimeout(timer)},2000);
}
