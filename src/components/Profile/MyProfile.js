import React from 'react';
import '../style/Profile.css';
import { useSelector } from 'react-redux';
import RocketProfile from './RocketProfile';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets);
  const displayRocket = rockets.filter((rocket) => rocket.rocketReserved === true);

  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <div className="card-container">
        <div className="rockets">
          <h3 className="title">ALL MY ROCKETS</h3>
          {displayRocket.map((rocket) => (
            <RocketProfile
              key={rocket.rockedId}
              name={rocket.rocketName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
