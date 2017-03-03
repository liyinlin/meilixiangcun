//点赞函数
$(".ss .dj").each(function (index){
	$(this).on('touchstart',function(e){
		$(this).attr("src","img/yz.png");
		var sd=Number($(".ss .num").eq(index).html());
		$(".ss .num").eq(index).html(sd+1);
    });
})
//var s=0;
//function dianzan(obj){
//	obj.on('touchstart',function(e){
//		obj.attr("src","img/yz.png");
//		var sd=Number($(".ss .num").eq(index).html());
//		$(".ss .num").eq(index).html(sd+1);
//  });
//}
//$(".ss .dj").each(function (index){
//	var ts=$(this);
//	dianzan(ts);
//})


//点input框跳转下载函数
$(".dj input").eq(0).on('touchstart mousedown',function(e){
				var ua = navigator.userAgent.toLowerCase();
		    if (/iphone|ipad|ipod/.test(ua)) {
				window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.fosung.meihaojiayuanlt";
		    } else {
		        window.location.href="https://www.pgyer.com/Otv8";
		    }
	});
