var map = L.map('map').setView([60.4518, -22.2666], 4);

var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

var marker = L.marker([60.4518, -22.2666]).addTo(map)
    .bindPopup('<b>Hello world!</b><br />This might be a dog park at some point').openPopup();

var popup = L.popup()
    .setLatLng([60.4518, -22.2666])
    .setContent('I am a standalone popup.')
    .openOn(map);

var DogIcon = L.icon({
    iconUrl: 'doggie.png',
    shadowUrl: 'doggie.png',
    
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var DogIcon = new DogIcon({iconUrl: 'doggie.png'})