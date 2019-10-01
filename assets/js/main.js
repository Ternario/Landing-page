(function ($) {
    let $navbar = $('#header-navbar');
    let $btnBack2top = $('#back2top');

    //back2top
    const back2TopOffset = 700;
    const back2TopAnimationDuration = 500;
    const back2TopAnimationFunction = 'swing';
    const back2Top = (pos) =>
        pos >= back2TopOffset
            ? $btnBack2top.fadeIn(500)
            : $btnBack2top.fadeOut(500);

            $btnBack2top.on('click', () => {
                $('html').animate(
                    {
                    scrollTop: 0
                    }, 
                    back2TopAnimationDuration,
                    back2TopAnimationFunction
                )
                return false;
            })
    


    //main menu
    const headerClassOnScroll = 'header-navbar--scrolled';
    const headerScrollTrigger = 100;

    $(window).on('scroll', () => {
        $(window).scrollTop() > headerScrollTrigger 
        ? $navbar.addClass(headerClassOnScroll)
        : $navbar.removeClass(headerClassOnScroll);
        back2Top($(window).scrollTop());
    });

    $navbar.onePageNav({
        currentClass: 'active',
        easing: 'swing',
        filter: ':not(.navbar-brend)',
        scrollspead: 750,
    });

    //close menu on click
    let windowWidth = $(window).width();

    $(window).on('resize', () => windowWidth = $(window).width());

    let $navbarLink = $('#header-navbar-collapse a');
    let $navbarToggler = $('.navbar-toggler');
    let $headerNavbarCollapse = $('#header-navbar-collapse');

    $navbarLink.on('click', ()=> {
        if (windowWidth < 992) {
            $navbarToggler.addClass('collapsed');
            $headerNavbarCollapse.removeClass('show');
        }
    });

    //aos
    AOS.init({
        disable: 'mobile',
        duration: 600,
        easing: 'ease-in-sine'
    });

})(jQuery);
