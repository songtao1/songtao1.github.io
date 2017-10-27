//初始化页面
this.show = false;
getData(1);
//点击显示状态
$(".bill-type-select").click(function(){
  this.show = !this.show;
  $(".show-type").css("display",this.show?"block":"none")
  $(".bill-modal").css("display",this.show?"block":"none")
  $("body").css({"height":"100%","overflow":"hidden"})
});
//点击状态显示数据
$(".bill-spe").click(function(){
  getData("专");
  closeModal();
});
$(".bill-ele").click(function(){
  getData("普电");
  closeModal();
});
$(".bill-normal").click(function(){
  getData("普");
  closeModal();
});
//打印数据
function getData(b) {
  for(var i = 0; i<10; i++){
  var strs ='<div class="bill-list-item"><p class="bill-item-title">'
  +'北京京东世纪'+'</p><p class="bill-amount"><span class="bill-amount1-text">&yen;</span><span class="bill-amount1">'
  +"319"+'</span><span class="bill-amount2">金额：￥'
  +"222"+'</span><span class="bill-amount2">税额：￥'+
  "21"+'</span></p><p class="bill-date">开票日期：'
  +"2017年12月2日"+'</p></div>';
  $(".bill-list").append(strs);
  }
  //获取id
  var id = 0;
  $(".bill-list-item").click(function() {
    window.location.href = "./detail.html?id="+id;
  })
}
//关闭选择蒙层
function closeModal() {
  $(".show-type").css("display","none");
  $(".bill-modal").css("display","none");
  $("body").css({"height":"100%","overflow":"auto"})
}
