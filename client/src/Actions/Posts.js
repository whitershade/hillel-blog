import axios from 'axios';
import { push } from 'react-router-redux'
import { createAction } from 'redux-actions';
import Notifications from 'react-notification-system-redux';
import { handleError } from './Errors';
import * as types from '../Constants/Posts';


export const startAddItems = createAction(types.START_ADD_ITEMS);
export const addItems = createAction(types.ADD_ITEMS);
export const addItemsError = createAction(types.ADD_ITEMS_ERROR);

export const startAddItem = createAction(types.START_ADD_ITEM);
export const addItem = createAction(types.ADD_ITEM);
export const addItemError = createAction(types.ADD_ITEM_ERROR);


export const loadItem = id => async dispatch => {
  try {
    const { data: post } = await axios.get(`/api/posts/${ id }`);

    dispatch(addItem(post));
  } catch (e) {
    dispatch(handleError(e));
  }
}

export const loadItems = () => async dispatch => {
  try {
    const { data: posts } = await axios.get('/api/posts');

    dispatch(addItems(posts));
  } catch (e) {
    dispatch(handleError(e));
  }
}

export const createItem = values => async dispatch => {
  try {
    await axios.post('/api/posts', values);

    dispatch(push('/posts'));

    dispatch(Notifications.success({
      title: 'Success',
      message: 'Post was created'
    }));

  } catch (e) {
    dispatch(handleError(e));
  }
};
