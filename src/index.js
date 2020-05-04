/* eslint-disable no-console */
console.log("Hello, do I run?")

const mapboxgl = require("mapbox-gl");
const { newMarker } = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2pvZW0iLCJhIjoiY2s3dW8zZXF2MTM3eTNkcXJpbzZ2b2c0OCJ9.dpB0zeDcNPLrx66lvMqo8g';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885],
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const markerDOM = document.createElement("div");
// markerDOM.style.width = "32px";
// markerDOM.style.height = "39px";
// markerDOM.style.backgroundImage = "url('https://i.imgur.com/WbMOfMl.png')";
// const fullstack = new mapboxgl.Marker(markerDOM).setLngLat([-87.6354, 41.8885]).addTo(map);

newMarker("activity", [-87.6354, 41.8885] ).addTo(map)
newMarker("hotel",[-86, 42]).addTo(map)
// newMarker("restaurant", [-87, 43]).addTo(map)
