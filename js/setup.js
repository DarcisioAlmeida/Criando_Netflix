
/*
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })


*/
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        nav:false,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },            
            960:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });
