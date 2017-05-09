// import { store } from './index';

export const decrease = () => {
  return {
    type: 'DECREASE',
  };
};

export const increase = () => {
  return {
    type: 'INCREASE',
  };
};

// plain action creator
const showNotification = () => {
  // console.log('action', 'show');
  return {
    type: 'SHOW_NOTIFICATION',
  };
};

// plain action creator
const hideNotification = () => {
  // console.log('action', 'hide');
  return {
    type: 'HIDE_NOTIFICATION',
  };
};

// manager
export const displayNotification = () => {
  return dispatch => {
    // show notification
    dispatch(showNotification);

    // hide notification
    setTimeout(() => dispatch(hideNotification), 200);
  };
};
