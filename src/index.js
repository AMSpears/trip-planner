console.log('IT IS WORKING!! THIS IS THE INDEX.JS file')

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoiYXNwZWFyczg5IiwiYSI6ImNrN3Vya2I2dzAwMTgzbm53OTd4emUxeXoifQ.UhUlNaO9jJvKtrdaanpgTg'

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v11" // mapbox has lots of different map styles available.
});
