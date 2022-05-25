import { useEffect, useState } from 'react';

let formBody = [];
formBody.push(encodeURIComponent('FlightType') + '=' + encodeURIComponent('1'));
formBody.push(encodeURIComponent('Date') + '=' + encodeURIComponent('25/05/2022'));
let finalForm = formBody.join('&');

export const FlightInfo = () => {
  const [flightData, setFlightData] = useState(null);

  const fetchFlightData = () => {
    fetch('https://cors-anywhere.herokuapp.com/https://www.melbourneairport.com.au/api/flight/GetFlights', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Access-Control-Allow-Origin': 'https://external.airport.ai',
        Origin: 'https://www.melbourneairport.com.au',
      },
      body: finalForm,
    }).then((res) => {
      res.text().then((data) => {
        setFlightData(JSON.parse(data));
        console.log(JSON.parse(data));
      });
    });
  };

  useEffect(() => {
    setInterval(() => {}, 1000 * 60);
  }, []);

  //fetchFlightData();

  return <div>FlightInfo</div>;
};
