import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from '../components/App';
import DevTools from './DevTools';

class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <App />
          <DevTools />
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
