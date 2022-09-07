import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/rockets';

const displayRockets = async (state) => {
  const petition = await axios.get(`${URL}`);
  state(petition.data);
};

export default displayRockets;
