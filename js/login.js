function user_login () {
    var userName = $("#userName").val();
    $("#login_error").text("");
    if($("#userName").val() == null || $("#userName").val() == ''){
        $("#username_error").text("用户名不能为空");
        return false;
    }else{
        $("#username_error").text("");
    }

    if($("#password").val() == null || $("#password").val() == ''){
        $("#password_error").text("密码不能为空");
        return false;
    }else {
        $("#password_error").text("");
    }

}