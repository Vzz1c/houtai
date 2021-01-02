$(function () {
    getUserInfo();
    $("#btnLogout").on("click", function () {
        layer.confirm('is not?', {icon: 3, title:'提示'}, function(index){
            localStorage.removeItem("token")
            location.href="login.html"
            layer.close(index);
        });
    });
});
function getUserInfo() {
    $.ajax({
        method:"get",
        url:"/my/userinfo",
        success: function (res) {
            if (res.status) {
                return layui.layer.msg("获取失败");
            }
            randerAvatar(res.data)
        }
    })

    function randerAvatar(user) {
        let username = user.nickname || user.username;
         $("#welcome").html(username);
        if (user.user_pic != null) {
            $(".layui-nav-img").attr("src",user.user_pic).show()
            $(".text-avatar").hide();
        }else{
            $(".layui-nav-img").hide();
            let firstWords = username[0].toUpperCase();
            $(".text-avatar").html(firstWords).show()
        }
    }
}