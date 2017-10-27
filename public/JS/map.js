function initialize() {
    var mapCanvas = document.getElementById('map');


    var mapOptions = {
        center: new google.maps.LatLng(48.4583454, 18.896601),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
}


google.maps.event.addDomListener(window, 'load', initialize);
