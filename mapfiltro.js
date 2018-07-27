
mapboxgl.accessToken = 'pk.eyJ1IjoiY2Fyb2Nyb21hdGljYSIsImEiOiJjamsxOWt3aG4wMGF5M2tsN2huMjVkYWtkIn0.XOH8AhfjmFY4baCYXfA4eA';
var places = {
    "id": "places",
    "type": "FeatureCollection",
    "features": [{

        "type": "Feature",
                  "properties": {
                      "description": "Helados artesanales",
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
                      "description": "Especialidad en pastas y bruschetas",
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
                      "description": "Café pintoresco",
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
                      "description": "Restaurant Peruano",
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
                    "description": "Bar Patrimonial",
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
                  "description": "Completos rancios",
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
                "description": "<a href=\"#open-modal\" class=\"btn\">Ver mas información</a>",
                "icon": "bar",
                "text": " Máscara Pub",
                "pago-tarjeta":"no"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-71.62488619664786, -33.04300168451749]
            }
    }]
};

var filterGroup = document.getElementById('filter-group');
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-71.624542,-33.043469],
    zoom:17
});

map.on('load', function() {
    // Add a GeoJSON source containing place coordinates and information.
    map.addSource("places", {
        "type": "geojson",
        "data": places
    });

    places.features.forEach(function(feature) {
        var symbol = feature.properties['icon'];
        var layerID = 'poi-' + symbol;

        // Add a layer for this symbol type if it hasn't been added already.
        if (!map.getLayer(layerID)) {
            map.addLayer({
                "id": layerID,
                "type": "symbol",
                "source": "places",
                "layout": {
                    "icon-image": symbol + "-15",
                    "icon-allow-overlap": true,
                    "text-field": "{text}",
                    "text-size": 12,
                    "text-font": ["Open Sans Bold"],
                    "text-offset": [0, 0.6],
                    "text-anchor": "top"
                },
                "filter": ["==", "icon", symbol]
            });

            // Add checkbox and label elements for the layer.
            var input = document.createElement('input');
            input.type = 'checkbox';
            input.id = layerID;
            input.checked = true;
            filterGroup.appendChild(input);

            var label = document.createElement('label');
            label.setAttribute('for', layerID);
            label.textContent = symbol;
            filterGroup.appendChild(label);

            // When the checkbox changes, update the visibility of the layer.
            input.addEventListener('change', function(e) {
                map.setLayoutProperty(layerID, 'visibility',
                    e.target.checked ? 'visible' : 'none');
            });
        }
    });



    
});


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
                        "description": "Helados artesanales",
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
                        "description": "Especialidad en pastas y bruschetas",
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
                        "description": "Café pintoresco",
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
                        "description": "Restaurant Peruano",
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
                      "description": "Bar Patrimonial",
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
                    "description": "Completos rancios",
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
                  "description": "<a href=\"#open-modal\" class=\"btn\">Ver mas información</a>",
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

/** popup */

// When a click event occurs on a feature in the places layer, open a popup at the
  // location of the feature, with description HTML from its properties.
  map.on('click', 'places', function popup(e) {
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