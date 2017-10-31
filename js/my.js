$(function() {
  FastClick.attach(document.body);
});
// getData();
//请求数据
function getData() {
  $.get("test.cgi", {
      name: "John",
      time: "2pm"
    },
    function(data) {
      setData(d)
    });
}
//加载数据
function setData(d) {
  $(".my-comname").text("北京闪电报销");
  $(".my-phone").text("1231231312");
}