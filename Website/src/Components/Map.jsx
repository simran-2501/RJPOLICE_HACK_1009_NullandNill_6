import React, { useEffect } from 'react';

function Map() {
  useEffect(() => {
    // Define initMap as a global function
    window.initMap = async () => {
      try {
        var centerLatLng = { lat: 30.6513502, lng: 76.839041 };
        var map = new window.google.maps.Map(document.getElementById('map'), {
          center: centerLatLng,
          zoom: 10
        });

        const serverEndpoint = 'https://8108-103-23-239-38.ngrok-free.app/api/locations';

        const locations = await fetch(serverEndpoint, {
          method: 'get',
          headers: new Headers({
            'ngrok-skip-browser-warning': '69420',
            'Content-Type': 'application/json'
          })
        });

        if (!locations.ok) {
          throw new Error('HTTP error! Status: ${locations.status}');
        }

        var data = await locations.json();
        const icons = {
          camera: {
            icon: 'https://maps.google.com/mapfiles/kml/pal4/icon46.png',
          }
        };

        var infowindow = new window.google.maps.InfoWindow();

        Object.keys(data).forEach((key) => {
          var location = data[key];

          if (!isNaN(parseFloat(location.latitude)) && !isNaN(parseFloat(location.longitude))) {
            var marker = new window.google.maps.Marker({
              map: map,
              position: {
                lat: parseFloat(location.latitude),
                lng: parseFloat(location.longitude)
              },
              icon: icons[location.type].icon
            });

            marker.addListener('click', function () {
              infowindow.close();

              var geocoder = new google.maps.Geocoder();
              geocoder.geocode({ location: marker.getPosition() }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                  var address = results[0].formatted_address;
                  var pincode = address.match(/\b\d{6}\b/);

                  infowindow.setContent(
                    "<div class='info-window'>" +
                    "<p>Latitude: " + location.latitude + "</p>" +
                    "<p>Longitude: " + location.longitude + "</p>" +
                    "<p>Id: RJ-" + pincode + "-" + key + "</p>" +
                    "<p>Address: " + address + "</p>" +
                    "</div>"
                  );
                  infowindow.open(map, marker);
                }
              });
            });
          } else {
            console.error('Invalid latitude or longitude:', location.latitude, location.longitude);
          }
        });
      } catch (error) {
        console.error('Error initializing map or fetching data:', error);
      }
    };

    // Load Google Maps script
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCBS8QgrjlTbZvaGloOV24gOMLaxBPxo0c&callback=initMap';
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      delete window.initMap;
      document.head.removeChild(script);
    };
  }, []);

  return <div id="map" style={{height:'87vh', width: '100%' }}></div>;
}

export default Map;