ymaps.ready(function () {
        var myMap = new ymaps.Map("map", {
            coordinates: [55.59813981, 37.35469250],
            center: [55.59813981, 37.35469250],
            zoom: 18,
            controls: ['smallMapDefaultSet']
        }) ,

            myPlacemark = new ymaps.Placemark(
            (
                myMap.getCenter()
            ), {}, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/svg/customPin.svg',
            // Размеры метки.
//            iconImageSize: [75, 150],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
//            iconImageOffset: [-44, -59],
            zIndex: 10000
             });


    myMap.geoObjects
        .add(myPlacemark);
    myMap.controls.remove('mapTools');
    myPlacemark.events.add('click', function () {
        $("#we_here").slideDown(1000);
    });
    $('#close').on('click', function(){
        $("#we_here").slideUp(1000);
    });
});



