import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import { connect } from 'react-redux';

import './App.css';


class App extends Component {
  handleClick = (e) => {
    this.props[e.target.id]();
  }

  render() {
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
  count: React.PropTypes.number.isRequired,
  increase: React.PropTypes.func.isRequired,
  decrease: React.PropTypes.func.isRequired
};


const mapStateToProps = (state) => {
  return {
    count: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
