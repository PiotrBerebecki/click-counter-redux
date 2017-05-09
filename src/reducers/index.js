import { combineReducers } from 'redux';

const count = (state = 0, action) => {
  switch (action.type) {
    case 'DECREASE':
      return state - 1;
    case 'INCREASE':
      return state + 1;
    default:
      return state;
  }
};

const notification = (state = 'hide', action) => {
  // console.log('reducer', action.type);
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      console.log('reducer show');
      return 'show';
    case 'HIDE_NOTIFICATION':
      console.log('reducer hide');
      return 'hide';
    default:
      return state;
  }
};

export default combineReducers({
  count,
  notification,
});
