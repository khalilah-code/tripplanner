const mapboxgl = require("mapbox-gl");

function newMarker(mtype, coord){
  // create a marker
  const markerDOM = document.createElement("div");
  markerDOM.style.width = "32px";
  markerDOM.style.height = "39px";
  //assign correct backgroundImage base on type
  if (mtype === 'hotel'){markerDOM.style.backgroundImage = "url('http://i.imgur.com/D9574Cu.png')"}
  else if (mtype === 'restaurant'){markerDOM.style.backgroundImage = "url('http://i.imgur.com/cqR6pUI.png')"}
  else if (mtype === 'activity'){markerDOM.style.backgroundImage = "url('https://i.imgur.com/WbMOfMl.png')"}
  //create marker with given coord
  return new mapboxgl.Marker(markerDOM).setLngLat(coord)
}

module.exports = { newMarker }
