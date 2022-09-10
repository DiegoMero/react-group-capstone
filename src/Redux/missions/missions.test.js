import { missionReducer, changeMissionStatus } from './missions';

describe('test the operation to change the reserved value', () => {
  test('test the operation of reserved value', () => {
    const mission = [
      {
        missionDescription: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
        missionId: '9D1B7E0',
        missionName: 'Thaicom',
        reserved: false,
      },
    ];

    const newState = [
      {
        missionDescription: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
        missionId: '9D1B7E0',
        missionName: 'Thaicom',
        reserved: true,
      },
    ];
    expect(missionReducer(mission, changeMissionStatus('9D1B7E0'))).toEqual(newState);
  });
});
