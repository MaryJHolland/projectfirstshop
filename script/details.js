;
! function($) {
    let sid = location.search.substring(1).split('=')[1];
    $.ajax({
        url: 'http://localhost/Firstshop/php/detail.php',
        data: {
            sid: sid
        },
        dataType: 'json',

    }).done(function(data) {
        console.log(data);
        console.log(data.url);
        $('.smallpic img').attr('src', data.url);
        console.log($('.smallpic img'));
        $('.bigpicshow img').attr('src', data.url);
        console.log(data.url);
        let $right = $('.right ul span');
        $right.eq(0).html(data.title);
        $right.eq(2).html(`￥${data.price}`);
        $right.eq(4).after(`&emsp;98%`);
        let smalpiclist = $('.smallpiclist');
        let smallpicarr = data.piclisturl.split(',');
        let strml = '';
        $.each(smallpicarr, function(index, value) {
            strml += `<li><img src="${value}"></img>`;
        });
        smalpiclist.html(strml);

    })

    //放大镜效果
    //怎么存储--数组
    let arrsid = [];
    let arrnum = [];

}(jQuery)