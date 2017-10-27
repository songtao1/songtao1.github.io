//获取url中的id
function getId(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
var id = getId("id");
this.Data = {};
function getData() {

}
setData()
//遍历数据
function setData() {
  $(".detail-fpdm").text("发票代码："+"1");
  $(".detail-fphm").text("发票号码："+"2");
  $(".detail-kprq").text("开票日期："+"3");
  $(".detail-jym").text("校 验 码："+"4");
  $(".detail-name").text("发票代码："+"5");
  $(".detail-nsrsbh").text("发票号码："+"6");
  $(".detail-address").text("开票日期："+"7");
  $(".detail-phone").text("校 验 码："+"8");
  $(".detail-bank").text("开户行及账号："+" 工商"+"  "+"9");
  $(".detail-name-sell").text("发票代码："+"5");
  $(".detail-nsrsbh-sell").text("发票号码："+"6");
  $(".detail-address-sell").text("开票日期："+"7");
  $(".detail-phone-sell").text("校 验 码："+"8");
  $(".detail-bank-sell").text("开户行及账号："+" 工商"+"  "+"9");
  $(".detail-demo").text("这是备注");
  //循环详情

  $(".detail-je").text("金额："+"3337");
  $(".detail-se").text("税额："+"222228");
  $(".detail-jshj").text("价税合计"+"22222");

  for(var i=0; i<10; i++){
  var str = '<p class="detail-detailmsg detail-common"><span>'+'小米蓝牙'
  +'</span><span>'
  +'118'
  +'</span><span>'
  +'118'+'</span></p>';
  $(".detail-detailmsg-list").append(str);
  }
}
