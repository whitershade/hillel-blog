import axios from 'axios';
import { createAction } from 'redux-actions';
import Notifications from 'react-notification-system-redux';
import { handleError } from './Errors';
import * as types from '../Constants/Comments';


export const startAddItem = createAction(types.START_ADD_ITEM);
export const addItem = createAction(types.ADD_ITEM);
export const addItemError = createAction(types.ADD_ITEM_ERROR);

export const createItem = () => async (dispatch) => {
  const formData = new FormData();
  formData.append('image', document.getElementById('file').files[0]);

  try {
    const { data: imageLink } = await axios.post('/api/files', formData, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });

    dispatch(Notifications.success({
      title: 'Success',
      message: 'Image was created',
    }));

    return imageLink;
  } catch (e) {
    dispatch(handleError(e));
  }
};
