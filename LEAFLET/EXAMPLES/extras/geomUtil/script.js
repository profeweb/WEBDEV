var latLng1, point1, latLng2, point2, distance, length, km;
var polyline;


var map = L.map('map').setView([39.561242801348776, 3.1700566743479612], 10);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.on('click', function(e) {

  if (!latLng1) {
    latLng1 = e.latlng;
    point1 = e.layerPoint;
    L.marker(latLng1).addTo(map).
      bindPopup('Point A<br/>' + e.latlng + '<br/>' + e.layerPoint).openPopup();
  } else {
    latLng2 = e.latlng;
    point2 = e.layerPoint;
    L.marker(latLng2).addTo(map).
      bindPopup('Point B<br/>' + e.latlng + '<br/>' + e.layerPoint).openPopup();
  }

  if (latLng1 && latLng2) {
    L.polyline([latLng1, latLng2], {
      color: 'red'
    }).addTo(map);

    refreshDistanceAndLength();
  }
})

map.on('zoomend', function(e) {
  refreshDistanceAndLength();
})

function refreshDistanceAndLength() {
  distance = L.GeometryUtil.distance(map, latLng1, latLng2);
  length = L.GeometryUtil.length([point1, point2]);
  document.getElementById('distance').innerHTML = distance;
  document.getElementById('length').innerHTML = length;
  km = distanceLatLong(latLng1.lat, latLng1.lng, latLng2.lat, latLng2.lng, "K");
  document.getElementById('km').innerHTML = km;
}

function distanceLatLong(lat1, lon1, lat2, lon2, unit) {
  if ((lat1 == lat2) && (lon1 == lon2)) {
    return 0;
  }
  else {
    var radlat1 = Math.PI * lat1/180;
    var radlat2 = Math.PI * lat2/180;
    var theta = lon1-lon2;
    var radtheta = Math.PI * theta/180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + 
           Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }
    return dist;
  }
}