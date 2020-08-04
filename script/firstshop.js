;
! function($) {
    class render {

    }
}(jQuery);
! function($) {
    class lunbotu {
        constructor() {
            this.piclist = $(".lunbotu [class^='img'] ");
            this.arrows = $('.lunbotu .arrow a');

            this.ollist = $('.lunbotu li');
            this.mainwrap = $('.lunbotu .mainwrap')
            this.arrpic = ['https://img23.iblimg.com/market-12/images/activity/1791169228.jpg', 'https://img22.iblimg.com/market-12/images/activity/498356165.jpg', 'https://img22.iblimg.com/market-12/images/activity/1082977309.jpg', 'https://img23.iblimg.com/market-12/images/activity/88982283.jpg', 'https://img22.iblimg.com/market-12/images/activity/1245923958.jpg'];
            this.index = 0;
        }
        init() {
                this.picrender();
                this.movebyli();
                this.rightmove();
                this.leftmove();

            }
            //添加图片
        picrender() {
                this.piclist.html("<img />");
                this.imgbox = $('.lunbotu img');
                this.imgbox.attr("src", this.arrpic[1]).css({
                    width: '1070px',
                    height: '400px'
                });
            }
            //圆圈控制列表
        movebyli() {
                this.ollist.on('click', function() {
                    index == $(this).index();
                    this.picswitch();
                })
            }
            //右箭头移动
        rightmove() {
                this.arrows[1].on('click', function() {
                    index++;
                    if (index > this.ollist.length - 1) {
                        index = 0;
                    }
                    this.picswitch();
                })
            }
            //左箭头移动
        leftmove() {
            this.arrows[0].on('click', function() {
                index--;
                if (index < 0) {
                    index = 0;
                }
                this.picswitch();
            })
        }

        //自动轮播
        automove() {
            setInterval(function() {
                this.rightmove()
            }, 3000);

        }
        picswitch() {
            this.ollist.eq(index).addclass('active').siblings('.mainwrap ol li').removeClass('active');
            this.piclist.eq(index).stop(true).animate({ opacity: 1 }).siblings(".lunbotu [class^='img'] ").animate({ opacity: 0 });
        }
    }
    let go = new lunbotu();
    go.init();

}(jQuery);