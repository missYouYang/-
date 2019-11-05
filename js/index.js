//left nav
$(".nav .nav_h3_js").off('click');
$(".nav .nav_h3_js").on('click',function(){

    var now = $(this);
    var sec_box = now.parent(".section");
    var ul_nums = sec_box.find("ul").length;
    if(ul_nums != 0){
        if(!now.find(".icon_down").hasClass("icon_up")){
            $(".nav").find("ul").slideUp("fast");                 /*nac所有lu关闭*/
            $(".nav").find(".icon_down").removeClass('icon_up');  /*nac所有lu出去icon_up*/
            sec_box.find(".icon_down").addClass('icon_up');          /*给当前标签添加icon_up*/
            sec_box.find("ul").slideDown("fast");
        }else{
            sec_box.find(".icon_down").removeClass('icon_up');
            sec_box.find("ul").slideUp("fast");
        }
    }
});