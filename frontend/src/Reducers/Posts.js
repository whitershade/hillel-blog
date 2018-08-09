import { omit } from 'lodash';
import * as types from '../Constants/Posts';
import * as commentTypes from '../Constants/Comments';

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
    case types.UPDATE_ITEM:
      return {
        ...state,
        data: {
          ...state.data,
          [payload._id]: payload
        }
      }

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
              payload
            ]
          }
        }
      }

      return state;
    }

    default:
      return state;
  }
}
