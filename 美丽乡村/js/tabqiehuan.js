//swiper tab切换
			var tabsSwiper = new Swiper('.swiper-container',{
				speed:500,
				onSwiperCreated:function(){
					var H=$(".content-slide").eq(0).height();
				
					$(".swiper-wrapper").css('height', H+'px');
					$(".swiper-slide").css('height', H+'px');
				},
				onSlideChangeStart: function(swiper){
					var H = $(".content-slide").eq(tabsSwiper.activeIndex).height();
					
					$(".tabs .active").removeClass('active');
					$(".tabs a").eq(tabsSwiper.activeIndex).addClass('active');
					$(".swiper-slide").css('height', H + 'px');
					$(".swiper-wrapper").css('height', H + 'px');
					$(".tabs .active").removeClass('active');
					$(".tabs a").eq(tabsSwiper.activeIndex).addClass('active');
				}
			});
			
			$(".tabs a").on('touchstart mousedown',function(e){
				e.preventDefault()
				$(".tabs .active").removeClass('active');
				$(this).addClass('active');
				tabsSwiper.slideTo($(this).index());
			});
			
			$(".tabs a").click(function(e){
				e.preventDefault();
			});
