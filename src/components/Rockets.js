import React, { useEffect, useState } from 'react';
import './style/Rockets.css';
import displayRockets from '../Redux/RocketsApi';

function Rockets() {
  const [state, setState] = useState([]);
  console.log(state);

  useEffect(() => {
    displayRockets(setState);
  }, []);

  return (
    <div>
      {state.map((item) => (
        <div className="rocketsdiv" key={item.id}>
          <span className="image"><img src={item.flickr_images} alt="rocket" /></span>
          <div className="elements">
            <h2 className="sub" key={item.id}>{item.rocket_name}</h2>
            <span className="type">{item.rocket_type}</span>
            <p>
              {item.description}
            </p>
            <button type="button" className="reserve">Reserve Rocket</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rockets;
