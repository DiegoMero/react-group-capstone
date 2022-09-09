import '../style/Missions.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadMissions } from '../../redux/missions/missions';
import MissionItem from './MissionItem';

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
        {mission.map((mission) => (
          <MissionItem
            key={mission.missionId}
            mission={mission}
          />
        ))}
      </ul>
    </div>
  );
};

export default Missions;
