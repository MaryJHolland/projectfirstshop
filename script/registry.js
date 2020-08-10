;
! function($) {
    class registry {
        constructor() {
            this.inginput = $('input');

        }
        init() {
            this.firstclick();
        }
        firstclick() {
            this.inginput.on('click', function() {

                console.log(this.inginput);

            })
        }

    }
    let go = new registry();
    go.init();
}(jQuery)