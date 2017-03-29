import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

import './App.css';


class App extends Component {
  handleClick = (e) => {
    this.props[e.target.id]();
  }

  render() {
    localStorage.setItem('redux_count', JSON.stringify(this.props.count));
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
  decrease: React.PropTypes.func.isRequired,
  increase: React.PropTypes.func.isRequired
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
