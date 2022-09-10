/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../Redux/configureStore';
import CardRockets from './cardRockets';

const rocket = {
  rocketId: 'falcon1',
  rocketName: 'Falcon 1',
  rocketDesc:
    'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
  rocketImg: 'https://imgur.com/DaCfMsj.jpg',
  rocketWiki: 'https://en.wikipedia.org/wiki/Falcon_1',
  rocketReserved: false,
};

function MockRockets() {
  <Provider store={store}>
    <CardRockets rocket={rocket} />
  </Provider>
};

it('renders correctly', () => {
  const tree = renderer
    .create(<MockRockets />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});