// initMap() - функция инициализации карты
function initMap() {
    // Координаты центра на карте.
    var coordinates = {
            lat: 13.746877,
            lng: 100.533067
        },
        image = './img/svg/icon-map-marker.svg',
        map = new google.maps.Map(document.getElementById('map'), {
            // Опции
            center: coordinates,
            zoom: 14,
            scrollwheel: false,
            disableDefaultUI: true
        }),

        marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            icon: image,
            animation: google.maps.Animation.DROP //BOUNCE
        });
}
