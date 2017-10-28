//初始化页面
$(function() {FastClick.attach(document.body);});
this.show = false;
//获取数据
getCookie();
var userId;
function getCookie() {
  userId = $.cookie('open_id');
}
getData(userId);
//点击显示状态
$(".bill-type-select").click(function(){
  this.show = !this.show;
  $(".show-type").css("display",this.show?"block":"none")
  $(".bill-modal").css("display",this.show?"block":"none")
  $("body").css({"height":"100%","overflow":this.show?"hidden":"auto"})
});
//点击状态显示数据
$(".bill-spe").click(function(){
  getData("01,02,03");
  closeModal();
});
$(".bill-ele").click(function(){
  getData("10,51,50,026");
  closeModal();
});
$(".bill-normal").click(function(){
  getData("01,02,03");
  closeModal();
});
//请求数据
function getData(type) {
  var params = {
    // open_id:userId,
    open_id:1,
    fplx:type
  }
  $.ajax({
    type:'get',
    // url:'/api/invoice/list',
    url:'http://192.168.1.110:2000/api/invoice/list',
    dataType:'json',
    data:params,
    success:function(d){
      setData(d.data.invocie_list)

    }
  });
}
//打印数据
function setData(b) {
  $(".bill-list").empty()
  var len =b.length;
  for(var i = 0; i<len; i++){
  var kpDate = b[i].kprq==null?"":b[i].kprq.substr(0,4)+"年"+ b[i].kprq.substr(4,2)+"月"+b[i].kprq.substr(6,2)+"日";
  var strs ='<div class="bill-list-item"><p class="bill-item-title">'
  +(b[i].gfmc?b[i].gfmc:"")+'</p><p class="bill-amount"><span class="bill-amount1-text">&yen;</span><span class="bill-amount1">'
  +(b[i].jshj?b[i].jshj:"0")+'</span><span class="bill-amount2">金额：￥'
  +(b[i].je?b[i].je:"0")+'</span><span class="bill-amount2">税额：￥'
  +(b[i].se?b[i].se:"0")+'</span></p><p class="bill-date">开票日期：'
  +kpDate+'</p></div>';
  $(".bill-list").append(strs);
  }
  // 获取id
  var id = 0;
  $(".bill-list-item").click(function() {
    var index = $(this).index();
    // id = b[index].id;
    window.location.href = "./detail.html?id="+b[index].id+"&save=0";
  })
}
//关闭选择蒙层
function closeModal() {
  $(".show-type").css("display","none");
  $(".bill-modal").css("display","none");
  $("body").css({"height":"100%","overflow":"auto"})
}
