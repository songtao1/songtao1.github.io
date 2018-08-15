//移动端点击按钮展示菜单
$('.nav_btn').on('click', function() {
    var state = $('.nav-list').css('display');
    if (state == "none") {
        $('.nav-list').show();
    } else {
        $('.nav-list').hide();
    }

})
$('.nav-list li a').on('click', function() {
    $('.nav-list').hide();
})
//提交信息
$('.submit').on('click',function(){
    var clientWidth = $(window).width();
    var vala="",valb="";
    var reg = /^1[3|4|5|7|8][0-9]{9}$/;
    if(clientWidth>768){
        vala = $('.name').eq(0).val();
        valb = $('.phone').eq(0).val();
    }else{
        vala = $('.name').eq(1).val();
        valb = $('.phone').eq(1).val();
    }
    
    console.log(vala,valb)
    if(!vala){
        alert("请输入姓名");
        return;
    }
    if(!reg.test(valb)){
        alert("请输入正确的手机号");
        return;
    }
})




