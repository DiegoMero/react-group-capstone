/* eslint-disable import/no-duplicates */
import React, { useEffect, useState } from 'react';
import './style/Rockets.css';
import displayRockets from '../Redux/Rockets/RocketsApi';
import { reserveRocket } from '../Redux/Rockets/RocketsApi';

function Rockets() {
  const [state, setState] = useState([]);
  console.log(state);

  useEffect(() => {
    displayRockets(setState);
  }, []);

  const handle = (e) => {
    displayRockets(reserveRocket(e.target.id));
  };

  return (
    <div>
      {state.map((item) => (
        <div className="rocketsdiv" key={item.id}>
          <span className="image"><img src={item.flickr_images} alt="rocket" /></span>
          <div className="elements">
            <h2 className="sub" key={item.id}>{item.rocket_name}</h2>
            <p>
              {item.description}
            </p>
            <button
              type="button"
              id={item.id}
              className="reserve"
              onClick={handle}
            >
              Reserve Rocket
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rockets;
