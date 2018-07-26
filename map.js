
mapboxgl.accessToken = 'pk.eyJ1IjoiY2Fyb2Nyb21hdGljYSIsImEiOiJjamsxOWt3aG4wMGF5M2tsN2huMjVkYWtkIn0.XOH8AhfjmFY4baCYXfA4eA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-71.624542,-33.043469],
    zoom:17
    
});


map.addControl(new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  zoom:19,
  center:[0,0]
}));


map.addControl(new mapboxgl.NavigationControl());
map.on('load', function () {
  // Add a layer showing the places.
  map.addLayer({
      "id": "places",
      "type": "symbol",
      "source": {
          "type": "geojson",
          "data": {
              "type": "FeatureCollection",
              "features": [{
                  "type": "Feature",
                  "properties": {
                      "description": "Emporio la Rosa",
                      "icon": "cafe",
                      "text": "Emporio la Rosa"
                    
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [-71.62432426273269,-33.04312025430806]
                  }
              }, {
                  "type": "Feature",
                  "properties": {
                      "description": "Bendita Pasta",
                      "icon": "cafe",
                      "text": "Bendita Pasta"
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [-71.6245945665435, -33.042955113920826]
                  }
              }, {
                  "type": "Feature",
                  "properties": {
                      "description": "rest",
                      "icon": "bar"
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [-77.090372, 38.881189]
                  }
              }, {
                  "type": "Feature",
                  "properties": {
                      "description": "rest",
                      "icon": "art-gallery"
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [-77.111561, 38.882342]
                  }
              }, ]
          }
      },
      "layout": {
        "icon-image": "{icon}-15",
        "icon-allow-overlap": true,
        "text-field": "{text}",
        "text-size": 12,
        "text-font": ["Open Sans Bold"],
        "text-offset": [0, 0.6],
        "text-anchor": "top"
        

      }
  });

  // When a click event occurs on a feature in the places layer, open a popup at the
  // location of the feature, with description HTML from its properties.
  map.on('click', 'places', function (e) {
      var coordinates = e.features[0].geometry.coordinates.slice();
      var description = e.features[0].properties.description;

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
  });

  // Change the cursor to a pointer when the mouse is over the places layer.
  map.on('mouseenter', 'places', function () {
      map.getCanvas().style.cursor = 'pointer';
  });

  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'places', function () {
      map.getCanvas().style.cursor = '';
  });
});