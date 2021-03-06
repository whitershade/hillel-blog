import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as notifications } from 'react-notification-system-redux';
import user from './Users';
import posts from './Posts';


export default combineReducers({
  user,
  posts,
  notifications,
  routing: routerReducer,
});
