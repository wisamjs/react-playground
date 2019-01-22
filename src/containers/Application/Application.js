import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styles from './Application.style';
import { Link } from 'react-router';

import { initApp } from '../../modules/Application/Application.actions';
import { isLoading } from './Application.selectors';

const actions = {
  initApp,
};

const selectors = createStructuredSelector({
  isLoading,
});

class Application extends Component {
  componentDidMount() {
    this.props.initApp();
  }

  render() {
    return (
      <div>
        <div style={styles.container}>
          <h1>React Playground</h1>
          <h2 style={{ color: 'red' }}>
            {this.props.isLoading ? 'Loading' : null}
          </h2>
        </div>
        {this.props.isLoading ? null : this.props.children}
      </div>
    );
  }
}

export default connect(
  selectors,
  actions,
)(Application);
