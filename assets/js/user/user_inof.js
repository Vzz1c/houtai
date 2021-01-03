$(function () {
    initUserInfo();
    $("#btnReset").on("click", function (e) {
        e.preventDefault();
        initUserInfo();
    });
    $(".layui-form").on("submit", function (e) {
        e.preventDefault();
        console.log("11111")
        $.ajax({
            method: "post",
            url:"/my/userinfo",
            data:$(this).serialize(),
            success: function (res) {
                console.log("2222")
                if (res.status) {
                    return layer.msg("更新失败")
                }
                layer.msg("更新成功")
                window.parent.getUserInfo()
            }
        })
    });
});

function initUserInfo() {
    $.ajax({
        method:"get",
        url:"/my/userinfo",
        success: function (res) {
            if (res.status) {
                return layer.msg("获取信息失败")
            }
            form.val("formUserInfo",res.data);
        }
    })
}
