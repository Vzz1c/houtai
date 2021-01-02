$.ajaxPrefilter(function (options) {
    options.url="http://ajax.frontend.itheima.net"+options.url;
    if (options.url.indexOf("/my/") !== -1) {
        options.headers={
            Authorization:localStorage.getItem("token") || ""
        }
    }
    options.complete=function (res) {
        console.log(res)                                                //"身份认证失败！"
        if (res.responseJSON.status === 1 && res.responseJSON.message === "身份认证失败！") {
            console.log("测试111")
            localStorage.removeItem("token");
            location.href="login.html"
        }
    }
});