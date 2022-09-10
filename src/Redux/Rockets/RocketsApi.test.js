import rocketSlice, { reserveRocket, cancelRocket } from './RocketsApi';

describe('test the operation of rocketSlice', () => {
  test('test the operation of reserveRocket', () => {
    const rockets = [
      {
        rocketId: 'falcon1',
        rocketName: 'Falcon 1',
        rocketDesc: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
        rocketImg: 'https://imgur.com/DaCfMsj.jpg',
        rocketWiki: 'https://en.wikipedia.org/wiki/Falcon_1',
        rocketReserved: false,
      },
    ];

    const newState = [
      {
        rocketId: 'falcon1',
        rocketName: 'Falcon 1',
        rocketDesc: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
        rocketImg: 'https://imgur.com/DaCfMsj.jpg',
        rocketWiki: 'https://en.wikipedia.org/wiki/Falcon_1',
        rocketReserved: true,
      },
    ];
    expect(rocketSlice(rockets, reserveRocket('falcon1'))).toEqual(newState);
  });

  test('test the operation of cancelRocket', () => {
    const rockets = [
      {
        rocketId: 'falcon1',
        rocketName: 'Falcon 1',
        rocketDesc: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
        rocketImg: 'https://imgur.com/DaCfMsj.jpg',
        rocketWiki: 'https://en.wikipedia.org/wiki/Falcon_1',
        rocketReserved: true,
      },
    ];

    const newState = [
      {
        rocketId: 'falcon1',
        rocketName: 'Falcon 1',
        rocketDesc: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
        rocketImg: 'https://imgur.com/DaCfMsj.jpg',
        rocketWiki: 'https://en.wikipedia.org/wiki/Falcon_1',
        rocketReserved: false,
      },
    ];
    expect(rocketSlice(rockets, cancelRocket('falcon1'))).toEqual(newState);
  });
});
