const apiKey = "AIzaSyCBS8QgrjlTbZvaGloOV24gOMLaxBPxo0c";

const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
script.async = true;
script.defer = true;

document.head.appendChild(script);