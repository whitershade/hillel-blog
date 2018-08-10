import { omit } from 'lodash';
import * as types from '../Constants/Posts';
import * as commentTypes from '../Constants/Comments';

const initialState = {
  data: {},
  isLoading: false,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case types.START_LOAD_ITEMS:
      return { ...state, isLoading: true };

    case types.ADD_ITEMS:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };

    case types.LOAD_ITEMS_ERROR:
      return { ...state, isLoading: false };

    case types.ADD_ITEM:
    case types.UPDATE_ITEM:
      return {
        ...state,
        data: {
          ...state.data,
          [payload._id]: payload,
        },
      };

    case types.REMOVE_ITEM:
      return {
        ...state,
        data: omit(state.data, payload),
      };

    case commentTypes.ADD_ITEM: {
      return {
        ...state,
        data: {
          ...state.data,
          [payload.relatedPost]: {
            ...state.data[payload.relatedPost],
            comments: [
              ...state.data[payload.relatedPost].comments,
              payload,
            ],
          },
        },
      };

      return state;
    }

    default:
      return state;
  }
}
