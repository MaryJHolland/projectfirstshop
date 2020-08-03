;
! function($) {
    class formconfirm {
        constructor() {
<<<<<<< HEAD
            const $input = $('input');
            const $span = $('span');
            let tipsarr = ['请输入用户名，仅限中英文，长度为6-10个字符', '请输入手机号码', '请输入验证码', '请输入密码，支持中英文大小写与数字输入', '请再次输入密码'];
            let errorarr = ['用户名输入不符合规范', '手机号码输入不符合规范', '验证码输入错误', '密码输入不符合规范', '密码输入不一致'];
        }
        init() {
            this.usernameinput()
        }
        inputtips() {
            $input.eq(index).on('focus', function() {
                $span.eq(index).html(function(index, ele) {
                    return tipsarr[index];
                }).css({
                    color: 'red',
                    fontDSize: '12px'
                });
            })
        }


    }
    new formconfirm.init();

=======
            this.$input = $('input');
            this.$span = $('span');
            this.tipsarr = ['请输入用户名，仅限中英文，长度为6-10个字符', '请输入手机号码', '请输入验证码', '请输入密码，支持中英文大小写与数字输入', '请再次输入密码'];
            this.errorarr = ['用户名输入不符合规范', '手机号码输入不符合规范', '验证码输入错误', '密码输入不符合规范', '密码输入不一致'];
        }
        init() {
            this.inputtips();
        }
        inputtips() {


            for (var i = 0; i < this.$span.size() - 1; i++) {
                // console.log(this.$span.eq(i));
                this.$span.eq(i).html(this.tipsarr[i]).css({
                    color: 'red',
                    fontDSize: '12px',
                    display: 'none'
                });

                //     this.$input.eq(i).on('focus', function() {


                //     this.$span.eq(i).html(function(index, ele) {
                //         return tipsarr[i];
                //     }).css({
                //         color: 'red',
                //         fontDSize: '12px'
                //     });
                // })
                // }
                // this.$input.eq(0).on('focus', function() {
                //     console.log(1);
                // })
            }
            // oninputtips() {
            //     $input.eq(index).on('input', function() {

            //     })
            // }
            this.$input.eq(0).on('focus', function() {
                this.$span.eq(0).css('display', 'block');
            });



        }

    }
    let go = new formconfirm();
    go.init();
>>>>>>> heheh

}(jQuery);