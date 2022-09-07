/* eslint-disable import/extensions */
import './style/Missions.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadMissions } from '../Redux/missions/missions';

const Missions = () => {
  const mission = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMissions());
  }, []);

  return (
    <div className="missions-section">
      <div className="missions-header">
        <div className="mission-column">Mission</div>
        <div className="description-column">Description</div>
        <div className="status-column">Status</div>
        <div className="join-mission-column" />
      </div>
      <ul className="missions-list">
        {mission.item.map((data) => (
          <li className="mission-card" key={data.missionId}>
            <div className="mission-name">{data.missionName}</div>
            <div className="mission-description">{data.missionDescription}</div>
            <div className="mission-member-status">
              <div>NOT A MEMBER</div>
            </div>
            <div className="mission-join-button">
              <button type="button">Join Mission</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Missions;
