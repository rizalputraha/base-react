import React, { Component } from 'react';
import {
  Route,
} from 'react-router-dom';

import { message } from 'antd';

import Login from "./pages/Login/Login";
import Dashboard from './pages/Dashboard/Dashboard';

// import Navbar from './components/Navbar';
// import Form from './components/Form';

class App extends Component {
  render() {
    if (navigator.onLine) {
      message.info('App is online.');
    } else {
      message.info('App is offline.');
    }
    return (
      <div className="App">
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </div>

    );
  }
}

export default App;
