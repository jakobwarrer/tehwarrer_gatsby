const initialState = {
  image: 'none'
};
const SET_IMAGE = 'SET_IMAGE';
export const setImage = image => ({ type: SET_IMAGE, image });

const image = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_IMAGE':
      return action.image;
    default:
      return state;
  }
};

export default image;
