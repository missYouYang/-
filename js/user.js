$('#table').bootstrapTable('destroy').bootstrapTable({
    url: 'js/adm-user.json',
    method: 'get',
    uniqueId: 'id',                        // 绑定ID，不显示
    striped: false,                         //是否显示行间隔色
    cache: false,                          //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
    sortable: true,                        //是否启用排序
    sortOrder: "asc",                      //排序方式
    sidePagination: "client",              //分页方式：client客户端分页，server服务端分页（*）
    undefinedText: '--',
    clickToSelect: true,                   // 点击选中行
    pagination: true,                      //是否显示分页
    pageNumber:1,                          //初始化加载第一页，默认第一页,并记录
    pageSize:10,//每页显示的数量
    pageList: [10, 20, 50, 100],//设置每页显示的数量
    paginationPreText:"上一页",
    paginationNextText:"下一页",
    paginationLoop:false,
    height:471  ,
    data_local: "zh-US",
    showHeader:true,
    queryParams : function (params) {
        var temp = {
            rows: params.limit,                         //页面大小
            page: (params.offset / params.limit) + 1,   //页码
            sort: params.sort,      //排序列名
            sortOrder: params.order,//排位命令（desc，asc）
        }
        return temp;
    },
    columns: [
        {
            checkbox: true,
            width:50
        },{
            field: 'userPassword',
            title: '姓名',
            align: 'center',
            colspan: 1,
            width:100

        },
        {
            field: 'userName',
            title:'用户名',
            align: 'center',
            colspan: 1,
            width:100
        },{
            field: 'userSex',
            title:'性别',
            align: 'center',
            colspan: 1,
            width:100
        },{
            field: 'userPhone',
            title:'电话号码',
            align: 'center',
            colspan: 1,
            width:100
        },{
            field: 'createUser',
            title:'创建者',
            align: 'center',
            colspan: 1,
            width:100
        }
    ],
});
/*按钮的操作 清空input*/
function btn_empty() {
    $(".body_name").val("");
}

function btn_search() {
    console.log($("input[name='userName']").val());
    console.log($("input[name='userTel']").val());
}
/*点击按钮搜索*/

/*添加弹出框*/
$(function(){


    //添加用户
    $('#add_user').off('click');
    $('#add_user').on('click',function(){
        $('#addUserBox').modal('show');
    });

    //删除用户
    $('#del_user').off('click');

    $('#del_user').unbind('click').click(function () {
        var mycars = new Array()
        var a = $('#table').bootstrapTable('getSelections');//获取选择行数据
        console.log(a);
        console.log(a.length);
        for (var i = 0; i < a.length; i++) {//循环读取选中行数据
            mycars[i] = a[i].id;//获取选择行的值
        }
        if(mycars.length == 0){
            bs4pop.notice('请选择一行数据', {position: 'topcenter'})
        }else{
            $('#del_common').modal('show');
            $('#del_common_true').unbind('click').click(function () {
                bs4pop.notice('删除成功', {position: 'topcenter'});
                $('#del_common').modal('hide');
            });
        }
    });
    //添加用户确认
    $("#submitAddUser").off("click");
    $("#submitAddUser").on("click",function(){
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
            $("#error_upserPhone").html("<a style='color: #f10215'>*</a>手机号不能为空")
            fag =false;
        }
        data.append("userSex",userSex);
        console.log(data.get("userSex"));
    });
});



