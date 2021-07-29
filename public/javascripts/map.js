
// coordenadas, zoom
var map = L.map('main_map').setView([35.67868958505365, 139.7755085815321], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy: <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> constributors'
}).addTo(map);

L.marker([35.71998944429415, 139.83995753074788]).addTo(map);