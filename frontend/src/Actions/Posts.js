import axios from 'axios';
import { push } from 'react-router-redux';
import { createAction } from 'redux-actions';
import Notifications from 'react-notification-system-redux';
import { handleError } from './Errors';
import * as types from '../Constants/Posts';

export const startLoadItems = createAction(types.START_LOAD_ITEMS);
export const addItems = createAction(types.ADD_ITEMS);
export const loadtemsError = createAction(types.LOAD_ITEMS_ERROR);

export const startAddItem = createAction(types.START_ADD_ITEM);
export const addItem = createAction(types.ADD_ITEM);
export const addItemError = createAction(types.ADD_ITEM_ERROR);

export const startRemoveItem = createAction(types.START_REMOVE_ITEM);
export const removeItem = createAction(types.REMOVE_ITEM);
export const removeItemError = createAction(types.REMOVE_ITEM_ERROR);

export const startUpdateItem = createAction(types.START_UPDATE_ITEM);
export const updateItem = createAction(types.UPDATE_ITEM);
export const updateItemError = createAction(types.UPDATE_ITEM_ERROR);

export const loadItem = id => async (dispatch) => {
  try {
    const { data: post } = await axios.get(`/api/posts/${id}`);

    dispatch(addItem(post));
  } catch (e) {
    dispatch(handleError(e));
  }
};

export const loadItems = () => async (dispatch) => {
  dispatch(startLoadItems());

  try {
    const { data: posts } = await axios.get('/api/posts');

    dispatch(addItems(posts));
  } catch (e) {
    dispatch(handleError(e));
  }
};

export const createItem = values => async (dispatch) => {
  try {
    const { data: post } = await axios.post('/api/posts', values);

    dispatch(addItem(post));

    dispatch(push('/posts'));

    dispatch(Notifications.success({
      title: 'Success',
      message: 'Post was created',
    }));
  } catch (e) {
    dispatch(handleError(e));
  }
};

export const deleteItem = id => async (dispatch) => {
  if (!window.confirm('Are you sure?')) return;

  try {
    const { data: postId } = await axios.delete(`/api/posts/${id}`);

    dispatch(removeItem(postId));
    dispatch(push('/posts'));

    dispatch(Notifications.success({
      title: 'Success',
      message: 'Post was deleted',
    }));
  } catch (e) {
    dispatch(handleError(e));
  }
};

export const patchItem = (id, attributes) => async (dispatch) => {
  try {
    const { data: post } = await axios.patch(`/api/posts/${id}`, attributes);

    dispatch(updateItem(post));
    dispatch(push('/posts'));

    dispatch(Notifications.success({
      title: 'Success',
      message: 'Post was updated',
    }));
  } catch (e) {
    dispatch(handleError(e));
  }
};
