$(function () {
    $(".layui-form").on("submit", function (e) {
        e.preventDefault();
        $.ajax({
            method:"post",
            url:"/my/updatepwd",
            data:$(this).serialize(),
            success: function (res) {
                if (res.status) {
                    return layer.msg(res.message)
                }
                layer.msg("修改密码成功")
            }
        })
    });
});
