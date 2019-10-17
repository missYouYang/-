$('#table').bootstrapTable('destroy').bootstrapTable({
    url: 'js/adm-user.json',
    method: 'POST',
    uniqueId: 'id',                        // 绑定ID，不显示
    striped: false,                         //是否显示行间隔色
    cache: false,                          //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
    sortable: true,                        //是否启用排序
    sortOrder: "asc",                      //排序方式
    sidePagination: "client",              //分页方式：client客户端分页，server服务端分页（*）
    undefinedText: '--',
    //singleSelect: true,                  // 单选checkbox，默认为复选
    showRefresh   : true,                  // 显示刷新按钮
    showColumns   : true,                  // 选择显示的列
    toolbar: '#item_info_toolbar',         // 搜索框位置
    search: true,                          // 搜索开启,
    strictSearch: true,
    clickToSelect: true,                   // 点击选中行
    pagination: true,                      //是否显示分页
    pageNumber:1,                          //初始化加载第一页，默认第一页,并记录
    pageSize:10,//每页显示的数量
    pageList: [10, 20, 50, 100],//设置每页显示的数量
    paginationPreText:"上一页",
    paginationNextText:"下一页",
    paginationLoop:false,
    height:665,
    data_local: "zh-US",
    showHeader:true,
    columns: [
        {
            checkbox: true
        },{
            field: 'username',
            title:'用户名',
            valign: 'middle',
            width: '16%',
            sortable: true
        },{
            field: 'fullname',
            title:'姓名',
            width: '16%'
        },{
            field: 'status',
            title:'密码认证',
            width: '16%'
        },{
            field: 'availableSpace',
            title:'智能卡认证',
            valign: 'middle',
            width: '16%'
        },{
            field: 'totalSpace',
            title:'个人空间配额',
            width: '16%'
        },{
            field: 'storageServer',
            title:'私密空间配额',
            width: '16%',
            formatter: operateFormatter
        }
    ],
});

function getSelectValue(){
    var a = $table.bootstrapTable('getSelections');//获取选中行的数据
    if(a.length > 0){
        console.log(a);
    }
}

function operateFormatter (value, row, index) {
    var result = '<button class="btn  btn-action" title="激活USBKEY认证" onclick=""><i class="glyphicon glyphicon-pencil"></i></button>'
    return result;
}

