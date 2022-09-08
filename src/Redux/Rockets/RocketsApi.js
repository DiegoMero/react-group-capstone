import axios from 'axios';

const RESERVE_ROCKETS = 'RESERVE_ROCKETS';
const CANCEL_ROCKETS = 'CANCEL_ROCKETS';

const URL = 'https://api.spacexdata.com/v3/rockets';

const displayRockets = async (state) => {
  const petition = await axios.get(`${URL}`);
  state(petition.data);
};

export const reducerRocket = (state = [], action) => {
  switch (action.type) {
    case RESERVE_ROCKETS:
      return [
        ...state,
        {
          id: action.id,
          images: action.flickr_images,
          name: action.rocket_name,
          description: action.description,
        },
      ];

    case CANCEL_ROCKETS:
      return state.filter((rocket) => rocket.id !== action.id);

    default:
      return state;
  }
};

export const reserveRocket = (id) => {
  const rocket = {
    type: RESERVE_ROCKETS,
    active: true,
    id,
  };
  return rocket;
};

// export const cancelRocket = (id) => {
//   const cancel = {
//     type: CANCEL_ROCKETS,
//     id,
//   };
//   return cancel;
// };

export default displayRockets;
