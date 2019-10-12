function u_register() {
    var userName = $("#userName").val();
    var userPassword = $("#userPassword").val();
    var userPhone = $("#userPhone").val();
    var userSex = $('input[name="sex"]:checked').val();
    var data = new FormData();
    var fag= true;
   if(userName != null && userName != ''){

       $("#error_userName").html("");
       data.append("userName",userName);
   }else{
       $("#error_userName").html("<a style='color: #f10215'>*</a>用户名不能为空");
       fag =false;
   }

    if(userPassword != null && userPassword != ''){
        data.append("userPassword",userPassword);
        $("#error_upserPassword").html("")
    }else{
        $("#error_upserPassword").html("<a style='color: #f10215'>*</a>密码不能为空")
        fag =false;
    }

    if(userPhone != null && userPhone != ''){
        data.append("userPhone",userPhone);
        $("#error_upserPhone").html("")
    }else{
        $("#error_upserPhone").html("<a style='color: #f10215'>*</a>密码不能为空")
        fag =false;
    }
    data.append("userSex",userSex);
   console.log(data.get("userSex"));
/*    if(fag ==true){
        $.ajax({
            url:"localhost:8080/SSMDemo/user/userLogin",
            type:"post",
            async:false,
            data:data,
            success:function (data) {
                console.log(data)
            },
            error:function () {
                alert("网络错误")
            }
        })
    }*/

}