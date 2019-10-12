function u_register() {
    var userName = $("#userName").val();
    var userPassword = $("#userPassword").val();
    var userPhone = $("#userPhone").val();
    var userSex = $('input[name="sex"]:checked').val();
    var data = new FormData();

   if(userName != null && userName != ''){
       data.append("userName",userName);
   }else{
       $("#error_userName").html("<a style='color: #f10215'>*</a>用户名不能为空");
   }

    if(userPassword != null && userPassword != ''){
        data.append("userPassword",userPassword);
    }else{
        $("#error_upserPassword").html("<a style='color: #f10215'>*</a>密码不能为空")
    }

    if(userPhone != null && userPhone != ''){
        data.append("userPhone",userPhone);
    }else{
        $("#error_upserPhone").html("<a style='color: #f10215'>*</a>密码不能为空")
    }
    data.append("userSex",userSex);
/*cache属性，默认是 true ，就是页面需要缓存。有些时候修改了值，但是值没变，都是由于缓存的原因。ajax 请求存在着许多缓存问题。请求方式为 post 的时候，默认为 false ；请求方式为 get 的时候，默认为 true 。
async属性，默认是 true，决定本次执行的 ajax 请求是异步的。同步指的是：像后台代码一样，一行一行的执行。异步指的是：ajax 请求还没有执行完成就去执行下一句 js 。*/
    $.ajax({
        url:"localhost:8080/SSMDemo/user/userLogin",
        type:"post",
        async:false,
        data:{

        },
        success:function (data) {
            console.log(data)
        },
        error:function () {
            alert("网络错误")
        }
    })
}