$(function() {FastClick.attach(document.body);});
//所有input初始化
$(".com-inp-common").attr("disabled","disabled");
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
  console.log($(".com-name").val())
  $(".com-edit").text("编辑");
  showModal("保存成功！");
}
//保存信息请求
function saveData() {
  $.ajax({
    type:'POST',
    url:'/a/',
    dataType:'json',
    data:{name:xxx,age:xxx},
    success:function(data){
      // code = data.code;
      showModal("保存成功！ ")
    },
    error:function(jqXHR){
      showModal(jqXHR)
    }
  });
}
//显示弹框保存成功！
function showModal(str) {
  $(".common-modal").css("display","block");
  $(".common-modal").text(str);
  var timer=setTimeout(function(){$(".common-modal").css("display","none");clearTimeout(timer)},2000);
}
