jQuery(document).ready(function($){
//    инициализация скрипта на jquery
//    инициализация слайдера
        var swiper = new Swiper ('.swiper-container', {
        slidesPerView: 'auto', //количество слайдов в пределах видимости
        centeredSlides: true, //центровка слайдов
        freeMode: true, //свободный режим
        spaceBetween: 0, //программируемое расстояние между слайдами. сделано в ксс
        nextButton: '.swiper-button-next-custom', // кнопка "вперёд"
        prevButton: '.swiper-button-prev-custom', //кнопка "назад"
        mousewheelControl: true, //прокрутка колесом мыши
        loop: true //бесконечный слайдер

    })
//инициализация нажатий на кнопки навигационного меню
//        кнопка "свадебная флористика" при добавлении дополнительных классов - копировать полностью
        $("a.wedding").on('click', function(){ //инициализация события нажатия
            $('#top-menu a').not(this).removeClass('active'); // удаление класса красного цвета для всех пунктов меню
            $(this).addClass('active'); //кроме текущего
            var wedding = $('#wedding').index(); // выяснение индекса начального слайда группы
            swiper.slideTo(wedding, 1500); //перемотка до первого слайда в группе
        }); //завершение скрипта  нажатия на кнопку
//    остальные делать таким же образом

        $("a.photosessions").on('click', function(){
            $('#top-menu a').not(this).removeClass('active');
            $(this).addClass('active');
            var photosessions = $('#photosessions').index();
            swiper.slideTo(photosessions, 1500);
        });

        $("a.newyear").on('click', function(){
            $('#top-menu a').not(this).removeClass('active');
            $(this).addClass('active');
            var newyear = $('#newyear').index();
            swiper.slideTo(newyear, 1500);
        });

        $("a.business").on('click', function(){
            $('#top-menu a').not(this).removeClass('active');
            $(this).addClass('active');
            var business = $('#business').index();
            swiper.slideTo(business, 1500);
        });



    var win_h = $(window).height();
    var footer_h = $('footer').height();
    var top_h = $('nav').height();
    $('.swiper-slide').css({'margin-top': top_h});
    $('.divider').parent('.swiper-slide').css({'margin-top': 0});
    $('.swiper-slide img').css({'height':(win_h - ((top_h + footer_h)*1.44))});
    if ($(window).height() > 720) {
       $('.swiper-slide img').css({'height':(win_h - ((top_h + footer_h)*1.3))});
    }
    if ($(window).height() > 800) {
       $('.swiper-slide img').css({'height':(win_h - ((top_h + footer_h)*1.25))});
    }
    $('.swiper-button-prev-custom, .swiper-button-next-custom').css({'margin-top': ((win_h)*0.55)});
    $(window).resize(function($){
swiper.update();
                    });
//    завершение работы скрипта
    });
