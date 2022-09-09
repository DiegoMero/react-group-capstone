import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);

  const missionToDisplay = missions.filter((element) => element.reserved === true);

  return (
    <div className="mission-rockets-continaer">
      <div>
        <h2>My Missions</h2>
        <ul>
          {missionToDisplay.map((mission) => (
            <li key={mission.missionId}>{mission.missionName}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>My Rockets</h2>
        <ul>
          <li>Hola</li>
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
