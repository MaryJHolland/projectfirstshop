;
! function() {
    const $goods = $('.main_content .wrapgoods');
    console.log($goods);
    $.ajax({
        url: 'http://localhost/Firstshop/php/listdata.php',
        dataType: 'json'
    }).done(function(data) {
        let strhtml = '<div class= "goodsarea">';
        $.each(data, function(index, value) {
            strhtml +=
                `<a href="http://localhost/Firstshop/details.html?sid=${value.sid}">
                <div class="goods">
                 <div class="img"><img class="lazy" data-original="${value.url}"></div>

                 <div class="price">${value.price}</div>
                    <div class="goodstitle">￥${value.title}</div>
                    <div class="youhuiquan">123656</div>
                    <div class="addcart">
                        <input type="text" value="1">
                        <span><div class="btnup">＋
                        </div>
                        <div class="btndwn">-</div></span>
                        <div class="cartbtn"><button>加入购物车</button></div>

                    </div>
                    <div class="message">
                        <div class="comments">11</div>
                        <div class="recommand">1222</div>
                    </div>
                    <div class="shop">
                        <span>自营</span>
                        <a href="">圃美多自营旗舰店<span></span></a>
                    </div>
                    </div>
                    </a>
        `;
        });
        strhtml += '</div>';
        $goods.append(strhtml);
        $("img.lazy").lazyload({ effect: "fadeIn" });

    })
}(jQuery);
//分页
;
!
function() {
    const $goods = $('.main_content .wrapgoods');

    $('.page').pagination({
        pageCount: 3, //总的页数
        jump: true, //是否开启跳转到指定的页数，布尔值。
        // coping: true, //是否开启首页和尾页，布尔值。
        prevContent: '上一页',
        nextContent: '下一页',
        // homePage: '首页',
        // endPage: '尾页',
        callback: function(api) {
            console.log(api.getCurrent()); //获取当前的页码
            $.ajax({
                url: 'http://localhost/Firstshop/php/listdata.php',
                data: {
                    page: api.getCurrent()
                },
                dataType: 'json'
            }).done(function(data) {
                console.log(data);
                let strhtml = '<div class= "goodsarea">';
                $.each(data, function(index, value) {

                    strhtml +=
                        `<a href="http://localhost/Firstshop/details.html?sid=${value.sid}">
                        <div class="goods">
                         <div class="img"><img class="lazy" data-original="${value.url}"></div>
        
                         <div class="price">${value.price}</div>
                            <div class="goodstitle">￥${value.title}</div>
                            <div class="youhuiquan">123656</div>
                            <div class="addcart">
                                <input type="text" value="1">
                                <span><div class="btnup">＋
                                </div>
                                <div class="btndwn">-</div></span>
                                <div class="cartbtn"><button>加入购物车</button></div>
        
                            </div>
                            <div class="message">
                                <div class="comments">11</div>
                                <div class="recommand">1222</div>
                            </div>
                            <div class="shop">
                                <span>自营</span>
                                <a href="">圃美多自营旗舰店<span></span></a>
                            </div>
                            </div>
                            </a>
        `;
                });
                strhtml += '</div>';
                $goods.html(strhtml);
                $(function() {
                    $("img.lazy").lazyload({ effect: "fadeIn" });
                });

            })
        }
    })

}(jQuery);
//排序
;
! function() {
    //默认排序
    const $sort = $('.restoreorder ul li');
    console.log($sort.eq(0));
    $sort.eq(0).on('click', function() {

    })

}(jQuery);