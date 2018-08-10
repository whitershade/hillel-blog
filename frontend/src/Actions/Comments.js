import axios from 'axios';
import { createAction } from 'redux-actions';
import Notifications from 'react-notification-system-redux';
import { handleError } from './Errors';
import * as types from '../Constants/Comments';


export const startAddItem = createAction(types.START_ADD_ITEM);
export const addItem = createAction(types.ADD_ITEM);
export const addItemError = createAction(types.ADD_ITEM_ERROR);

export const createItem = values => async (dispatch) => {
  try {
    const { data: comment } = await axios.post('/api/comments', values);

    dispatch(addItem(comment));

    dispatch(Notifications.success({
      title: 'Success',
      message: 'Comment was created',
    }));
  } catch (e) {
    dispatch(handleError(e));
  }
};
