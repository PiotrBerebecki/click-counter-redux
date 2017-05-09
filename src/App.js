import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import { connect } from 'react-redux';

import './App.css';

class App extends Component {
  handleClick = e => {
    this.props[e.target.id]();
    this.props.displayNotification();
  };

  render() {
    // console.log(this.props);
    return (
      <div className="app">
        <p>{this.props.count}</p>
        <button id="decrease" onClick={this.handleClick}>
          -
        </button>
        <button id="increase" onClick={this.handleClick}>
          +
        </button>
      </div>
    );
  }
}

App.propTypes = {
  count: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    count: state.count,
    notification: state.notification,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
