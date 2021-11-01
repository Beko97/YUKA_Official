//font script
(function(d) { //小塚ゴシック
    var config = {
    kitId: 'oej5kbk',
    scriptTimeout: 3000,
    async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

$(function() {
    $('.carousel_list').slick({ //carousel
        arrow: true,
        autoplay: true,
        dots: true,
    });

    $('.carousel_item').hover( //スライドのフィルター
        function() {
            $('.hoverImg').toggleClass('hoverImg-block');
            $('.thumbnail img').toggleClass('imgOpacity');
        }
    );
    //moreButton
    function buttonChange(name) {
        $(name).hover(
            function() {
                $(this).attr('src', 'image/more_hover.png');
                },
            function() {
                if (name === '#hoverButton3') {
                    $(this).attr('src', 'image/more_button_white.png');
                } else {
                    $(this).attr('src', 'image/more_button.png');
                }
            }
        );
    }

    buttonChange('#hoverButton');
    buttonChange('#hoverButton2');
    buttonChange('#hoverButton3');
//hamburger
    $('#hamburger').on('click', function(){
        $('span', this).toggleClass('clicked');
        $('.main_nav').toggleClass('clicked');
    });
});


