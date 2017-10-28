$(function() {FastClick.attach(document.body);});
//获取数据
getCookie();
var userId = 1;
function getCookie() {
  userId = $.cookie('open_id');
}
var id = getId("id");
getData(userId,id);
var save = getId("save");
$(".detail-savebtn").css({"display":save==1?"block":"none"});
$(".detail-savebtn").bind("click",function() {
  saveData(userId,id)
})
//保存发票
function saveData(userId,id) {
  var params = {
    open_id:userId,
    invoice_id:id,
    is_save:1
  }
  $.ajax({
    type:'post',
    url:'/api/invoice/save',
    data:JSON.stringify(params),
    contentType: "application/json",
    dataType:'json',
    success:function(d){
      showModal("保存成功！")
    }
  });
}
//获取数据
function getData() {
  console.log(id)
  var params= {
    open_id:1,
    // invoice_id:id,
    invoice_id:7
  }
  $.ajax({
    type:'get',
    url:'http://192.168.1.110:2000/api/invoice/detail',
    dataType:'json',
    data:params,
    success:function(d){
    console.log(d.data.invoice)
    setData(d.data.invoice,d.data.invoice_detail);
    }
  });
}
//遍历数据
function setData(a,d) {
    $(".detail-fpdm").text("发票代码："+a.fpdm);
    $(".detail-fphm").text("发票号码："+a.fphm);
    $(".detail-kprq").text("开票日期："+a.kprq);
    $(".detail-jym").text("校 验 码："+a.jym);
    $(".detail-name").text("名称："+a.gfmc);
    $(".detail-nsrsbh").text("纳税人识别号："+a.gfsbh);
    $(".detail-address").text("地址及电话："+a.gfdzdh);
    $(".detail-bank").text("开户行及账号："+a.gfyhzh);
    $(".detail-name-sell").text("名称："+a.xfmc);
    $(".detail-nsrsbh-sell").text("纳税人识别号："+a.xfsbh);
    $(".detail-address-sell").text("地址及电话："+a.xfdzdh);
    $(".detail-bank-sell").text("开户行及账号："+a.xfyhzh);
    $(".detail-demo").text(a.zfbz);

  //循环详情

  $(".detail-je").text("金额："+a.je);
  $(".detail-se").text("税额："+a.se);
  $(".detail-jshj").text("价税合计："+a.jshj);

  for(var i=0; i<d.length; i++){
  var str = '<p class="detail-detailmsg detail-common"><span>'+d[i].hwmc
  +'</span><span>'
  +d[i].je
  +'</span><span>'
  +d[i].se+'</span></p>';
  $(".detail-detailmsg-list").append(str);
  }
}
//获取url中的id
function getId(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
  // 提示框
  function showModal(str) {
  $(".common-modal").css("display","block");
  $(".common-modal").text(str);
  var timer=setTimeout(function(){$(".common-modal").css("display","none");clearTimeout(timer)},2000);
  }
