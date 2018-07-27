
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


// Add geolocate control to the map.
map.addControl(new mapboxgl.GeolocateControl({
  positionOptions: {
      enableHighAccuracy: true
  },
  trackUserLocation: true
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
                      "description": "<strong>Emporio La Rosa</strong><li>Salón de Té</li><li>Promedio de consumo por persona: $7000</li><li>RedCompra: si</li><p><a href=\"#emporioLaRosa\" class=\"btn\">Ver mas información</a></p>",
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
                      "description": "<strong>Bendita Pasta</strong><li>Restaurant Internacional</li><li>Promedio de consumo por persona: $12000</li><li>RedCompra: si</li><p><a href=\"#benditaPasta\" class=\"btn\">Ver mas información</a>",
                      "icon": "restaurant",
                      "text": "Restaurant Bendita Pasta"
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [-71.6245945665435, -33.042955113920826]
                  }
              }, {
                  "type": "Feature",
                  "properties": {
                      "description": "<strong>Café del Poeta</strong><li>Café Turístico</li><li>Promedio de consumo por persona: $7000</li><li>RedCompra: si</li><p><a href=\"#cafeDelPoeta\" class=\"btn\">Ver mas información</a></p>",
                      "icon": "cafe",
                      "text": "Cafe del poeta"
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [-71.62441373740486, -33.04306430901435]
                  }
              }, {
                  "type": "Feature",
                  "properties": {
                      "description": "<strong>Nazca</strong><li>Restaurant Peruano</li><li>Promedio de consumo por persona: $12000</li><li>RedCompra: si</li><p><a href=\"#nazca\" class=\"btn\">Ver mas información</a></p>",
                      "icon": "restaurant",
                      "text": "  Nazca"
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [-71.62485300287267, -33.042700258237126]
                  }
              },
            
              {
                "type": "Feature",
                "properties": {
                    "description": "<strong>Cinzano</strong><li>Restaurant Patrimonial</li><li>Promedio de consumo por persona: $7000</li><li>RedCompra: si</li><p><a href=\"#cinzano\" class=\"btn\">Ver mas información</a></p>",
                    "icon": "bar",
                    "text": " Bar Cinzano",
                    "pago-tarjeta":"si"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-71.62497333715338, -33.04306571313724]
                }
            },
          
            {
              "type": "Feature",
              "properties": {
                  "description": "<strong>Otro K-Nibal</strong><li>Comida al Paso</li><li>Promedio de consumo por persona: $1500</li><li>RedCompra: no</li><p><a href=\"#knibal\" class=\"btn\">Ver mas información</a></p>",
                  "icon": "fast-food",
                  "text": " Otro K-nibal",
                  "pago-tarjeta":"no"
              },
              "geometry": {
                  "type": "Point",
                  "coordinates": [-71.62515622482663, -33.04315950108205]
              }
          },
        
          {
            "type": "Feature",
            "properties": {
                "description": "<strong>Máscara</strong><li>Pub</li><li>Promedio de consumo por persona: $10000</li><li>RedCompra: no</li><p><a href=\"#mascara\" class=\"btn\">Ver mas información</a></p>",
                "icon": "bar",
                "text": " Máscara Pub",
                "pago-tarjeta":"no"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-71.62488619664786, -33.04300168451749]
            }
        }]
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


                        