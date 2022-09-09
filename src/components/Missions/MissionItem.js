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
        {mission.reserved === true && (<div className="active-member">Active Member</div>)}
        {mission.reserved === false && (<div className="inactive-member">NOT A MEMBER</div>)}
      </div>
      <div className="mission-join-button">
        {mission.reserved === true && (<button type="button" className="leave-button" onClick={clickHandler}>Leave Mission</button>)}
        {mission.reserved === false && (<button type="button" className="join-button" onClick={clickHandler}>Join Mission</button>)}
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
