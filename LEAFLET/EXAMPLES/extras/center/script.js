
var map = L.map('map').setView([39.561242801348776, 3.1700566743479612], 10);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const c = map.getCenter();
  document.getElementById('centre').innerHTML = c.lat+","+c.lng;

map.on('load', function(e) {
  refreshCenter();
});

map.on('zoomend', function(e) {
  refreshCenter();
});

map.on('moveend', function(e) {
  refreshCenter();
});

function refreshCenter() {
  const c = map.getCenter();
  document.getElementById('centre').innerHTML = c.lat+","+c.lng;
}