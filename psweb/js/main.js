//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
$(".navbar-brand").click(function() {
    $('html,body').animate({
        scrollTop: $("#slider").offset().top},
        'slow');
});

$(".btn1").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top-50},
        'slow');
    $('.navbar-collapse.in').collapse('hide');
});
$(".btn2").click(function() {
    $('html,body').animate({
        scrollTop: $("#service").offset().top-50},
        'slow');
    $('.navbar-collapse.in').collapse('hide');
});
$(".btn3").click(function() {
    $('html,body').animate({
        scrollTop: $("#team").offset().top-50},
        'slow');
    $('.navbar-collapse.in').collapse('hide');
});
$(".btn4,.btn_ps").click(function() {
    $('html,body').animate({
        scrollTop: $("#join").offset().top-50},
        'slow');
    $('.navbar-collapse.in').collapse('hide');
});

jQuery(document).ready(function ($) {

    var options = {
        $SlideDuration: 1000,
        $DragOrientation: 1,
        $AutoPlay: true,
        $Idle: 5000,
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$,
        }
    };

    var jssor_slider = new $JssorSlider$("slider_container", options);

    //responsive code begin
    //you can remove responsive code if you don't want the slider to scale along with window
    function ScaleSlider() {
        var windowWidth = $(window).width();

        if (windowWidth) {
            var windowHeight = $(window).height();
            var originalWidth = jssor_slider.$OriginalWidth();
            var originalHeight = jssor_slider.$OriginalHeight();

            if (originalWidth / windowWidth > originalHeight / windowHeight) {
                jssor_slider.$ScaleHeight(windowHeight);
            }
            else {
                jssor_slider.$ScaleWidth(windowWidth);
            }
        }
        else
            window.setTimeout(ScaleSlider, 30);
    }

    ScaleSlider();

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    //responsive code end
});

var scrolltotop={
	setting:{
		startline: 50, //起始行
		scrollto: 0, //滾動到指定位置
		scrollduration: 400, //滾動過度
		fadeduration: [500,100] // 淡入淡出
	},
	controlHTML:'<img class="gotop" src="img/top.png" style="width:40px; height:40px;" alt="回到頂部" />', //返回顶部按钮
	controlattrs:{offsetx:"2%",offsety:"96px"},//返回按钮固定位置
	anchorkeyword:"#top",
	state:{
		isvisible:false,
		shouldvisible:false
	},scrollup:function(){
		if(!this.cssfixedsupport){
			this.$control.css({opacity:0});
		}
		var dest=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);
		if(typeof dest=="string"&&jQuery("#"+dest).length==1){
			dest=jQuery("#"+dest).offset().top;
		}else{
			dest=0;
		}
		this.$body.animate({scrollTop:dest},this.setting.scrollduration);
	},keepfixed:function(){
		var $window=jQuery(window);
		var controlx=$window.scrollLeft()+$window.width()-this.$control.width()-this.controlattrs.offsetx;
		var controly=$window.scrollTop()+$window.height()-this.$control.height()-this.controlattrs.offsety;
		this.$control.css({left:controlx+"px",top:controly+"px"});
	},togglecontrol:function(){
		var scrolltop=jQuery(window).scrollTop();
		if(!this.cssfixedsupport){
			this.keepfixed();
		}
		this.state.shouldvisible=(scrolltop>=this.setting.startline)?true:false;
		if(this.state.shouldvisible&&!this.state.isvisible){
			this.$control.stop().animate({opacity:1},this.setting.fadeduration[0]);
			this.state.isvisible=true;
		}else{
			if(this.state.shouldvisible==false&&this.state.isvisible){
				this.$control.stop().animate({opacity:0},this.setting.fadeduration[1]);
				this.state.isvisible=false;
			}
		}
	},init:function(){
		jQuery(document).ready(function($){
			var mainobj=scrolltotop;
			var iebrws=document.all;
			mainobj.cssfixedsupport=!iebrws||iebrws&&document.compatMode=="CSS1Compat"&&window.XMLHttpRequest;
			mainobj.$body=(window.opera)?(document.compatMode=="CSS1Compat"?$("html"):$("body")):$("html,body");
			mainobj.$control=$('<div id="topcontrol">'+mainobj.controlHTML+"</div>").css({position:mainobj.cssfixedsupport?"fixed":"absolute",bottom:mainobj.controlattrs.offsety,right:mainobj.controlattrs.offsetx,opacity:0,cursor:"pointer"}).attr({title:"返回頂部"}).click(function(){mainobj.scrollup();return false;}).appendTo("body");if(document.all&&!window.XMLHttpRequest&&mainobj.$control.text()!=""){mainobj.$control.css({width:mainobj.$control.width()});}mainobj.togglecontrol();
			$('a[href="'+mainobj.anchorkeyword+'"]').click(function(){mainobj.scrollup();return false;});
			$(window).bind("scroll resize",function(e){mainobj.togglecontrol();});
		});
	}
};
scrolltotop.init();