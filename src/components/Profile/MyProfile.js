import React from 'react';
import '../style/Profile.css';
import { useSelector } from 'react-redux';
import RocketProfile from './RocketProfile';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets);
  const displayRocket = rockets.filter((rocket) => rocket.rocketReserved === true);

  const missions = useSelector((state) => state.missions);

  const missionToDisplay = missions.filter((element) => element.reserved === true);
  return (
    <div className="profile-container">
      <div className="my-missions">
        <h2>My Missions</h2>
        <ul className="joined-mission-list">
          {missionToDisplay.map((mission) => (
            <li className="joined-mission-item" key={mission.missionId}>{mission.missionName}</li>
          ))}
        </ul>
      </div>
      <div className="card-container">
        <div className="rockets">
          <h2 className="title">My Rockets</h2>
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
