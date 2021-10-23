$(window).on("load",function() {
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut('slow');
})


$(function() {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

$(function() {
    $("#progress-element").waypoint(function() {
        $(".progress-bar").each(function() {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
})

$(function() {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});

$(window).on('load', function () {
    $('#isotope-container').isotope({
    });

    $("#isotope-filters").on('click','button',function () {
        var filtervalue = $(this).attr('data-filter');
        $('#isotope-container').isotope({
            filter: filtervalue
        });
        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',//child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

$(function() {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});













