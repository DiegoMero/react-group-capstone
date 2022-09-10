import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../Redux/configureStore';
import MissionItem from '../MissionItem';

const mission = {
  missionDescription: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
  missionId: '9D1B7E0',
  missionName: 'Thaicom',
  reserved: false,
};

function MockMission() {
  <Provider store={store}>
    <MissionItem mission={mission} />
  </Provider>;
}

it('renders correctly', () => {
  const tree = renderer
    .create(<MockMission />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
