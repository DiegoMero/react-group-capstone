import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeMissionStatus } from '../../redux/missions/missions';

const MissionItem = (props) => {
  const { mission } = props;
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(changeMissionStatus(mission.missionId));
  };

  return (
    <li className="mission-card">
      <div className="mission-name">{mission.missionName}</div>
      <div className="mission-description">{mission.missionDescription}</div>
      <div className="mission-member-status">
        <div>NOT A MEMBER</div>
      </div>
      <div className="mission-join-button">
        <button type="button" onClick={clickHandler}>Join Mission</button>
      </div>
    </li>
  );
};

MissionItem.propTypes = {
  mission: PropTypes.shape({
    missionId: PropTypes.string,
    missionName: PropTypes.string,
    missionDescription: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default MissionItem;
