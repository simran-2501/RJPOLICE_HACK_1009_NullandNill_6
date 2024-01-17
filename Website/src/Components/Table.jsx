import React, { useState, useEffect } from 'react';
import { MapPin, Video } from 'react-feather'; // Assuming you have the MapPin component

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch('http://localhost:3000/getobjectdetection') // Update the endpoint accordingly
      .then(response => response.json())
      .then(data => setData(Object.values(data)))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const generateMapsLink = (latitude, longitude) => {
    return `https://maps.google.com/?q=${latitude},${longitude}`;
  };

  return (
    <div className='py-10'>
      <table className="border-collapse w-fit text-center m-auto">
        <tr className="font-bold bg-gray-400">
          <td className="border px-20 py-2 border-gray-300">S.no</td>
          <td className="border px-20 py-2 border-gray-300">Camera Id</td>
          <td className="border px-20 py-2 border-gray-300">Geo Location</td>
          <td className="border px-20 py-2 border-gray-300">Dangerous Objects</td>
          <td className="border px-20 py-2 border-gray-300">Clip</td>
        </tr>
        {data.map((item, index) => (
          <tr key={index} className="bg-white">
            <td className="border px-20 py-2 border-gray-300">{index + 1}</td>
            <td className="border px-20 py-2 border-gray-300">{item.id}</td>
            <td className="border px-20 py-2 border-gray-300">
              <p>{`Latitude: ${item.latitude}, Longitude: ${item.longitude}`}</p>
              <a
                href={generateMapsLink(item.latitude, item.longitude)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className='flex bg-green-600 text-white text-sm font-bold m-auto mt-4 w-fit rounded-2xl py-2 px-3'>
                  <p>Maps</p>
                  <MapPin className='text-red-600 ml-2'/>
                </div>
              </a>
            </td>
            <td className="border px-20 py-2 border-gray-300">
              <p>{`Knife: ${item.knife}`}</p>
              <p>{`Guns: ${item.guns}`}</p>
              <p>{`Sharp Objects: ${item.sharpobjects}`}</p>
              <p>{`Explosive: ${item.explosive}`}</p>
            </td>
            <td className="border px-20 py-2 border-gray-300">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <Video />
              </a>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
