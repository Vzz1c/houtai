$(function () {
    $("#link_reg").on("click", function () {
        $(".login-box").hide()
        $(".reg-box").show()
    });
    $("#link_login").on("click", function () {
        $(".reg-box").hide()
        $(".login-box").show()
    });
    $("#form_reg").on("submit", function (e) {
        e.preventDefault();
        let formData = $(this).serialize();
        $.ajax({
            type: "post",   //请求的方式,例如get和post
            url: "/api/reguser",
            data: formData,
            success: function (res) {
                if (res.status) {
                    return layer.msg(res.message);
                }
                layer.msg(res.message,{time: 1000}, function () {
                    $("#link_login").click();
                });
            }
        })
    });
    $("#form_login").on("submit", function (e) {
        e.preventDefault();
        let formData = $(this).serialize();
        $.ajax({
            type: "post",   //请求的方式,例如get和post
            url: "/api/login",
            data: formData,
            success: function (res) {
                if (res.status) {
                    return layer.msg(res.message);
                }
                localStorage.setItem("token",res.token)
                layer.msg(res.message, {
                    icon: 1,
                    time: 1000 //2秒关闭（如果不配置，默认是3秒）
                }, function(){
                    location.href="index.html"
                });
            }
        })
    });
});