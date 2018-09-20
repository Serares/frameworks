$(document).ready(function(){

    $('#btn-contact').on('click',function(){
        window.location.href= '/jquery-menu-app/app/index.html'
    })


     // Initialize and add the map
     function initMap() {
        // The location of Uluru
        var uluru = {lat: 44.4380179, lng: 26.0699947};
        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 20, center: uluru});
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({position: uluru, map: map});
      }


})