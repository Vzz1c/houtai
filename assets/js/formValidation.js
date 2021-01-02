let form = layui.form
let layer = layui.layer
form.verify({
    username: function(value){
        if(!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)){
            return '用户名不能有特殊字符';
        }
        if(/(^\_)|(\__)|(\_+$)/.test(value)){
            return '用户名首尾不能出现下划线\'_\'';
        }
        if(/^\d+\d+\d$/.test(value)){
            return '用户名不能全为数字';
        }
    }
    ,pass: [
        /^[\S]{6,12}$/
        ,'密码必须6到12位，且不能出现空格'
    ],
    repwd: function (value) {
        let val = $(".reg-box input[name=password]").val();
        if (val !== value) {
            return '两次密码不相同';
        }
    }
});