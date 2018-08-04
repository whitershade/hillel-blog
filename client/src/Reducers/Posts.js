import * as types from '../Constants/Posts';

const initialState = {
  data: {}
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case types.ADD_ITEMS:
      return {
        ...state,
        data: payload
      }

    case types.ADD_ITEM:
      return {
        ...state,
        data: {
          ...state.data,
          [payload._id]: payload
        }
      }

    default:
      return state;
  }
}
