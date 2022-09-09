import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeMissionStatus } from '../../Redux/missions/missions';

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
        {mission.reserved === true && (<div>Active Member</div>)}
        {mission.reserved === false && (<div>NOT A MEMBER</div>)}
      </div>
      <div className="mission-join-button">
        {mission.reserved === true && (<button type="button" onClick={clickHandler}>Leave Mission</button>)}
        {mission.reserved === false && (<button type="button" onClick={clickHandler}>Join Mission</button>)}
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
