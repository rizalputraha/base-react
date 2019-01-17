import React, { Component } from 'react';
import {
  Route,
} from 'react-router-dom';

import { message } from 'antd';
import { Offline, Online } from 'react-detect-offline';

import Login from "./pages/Login/Login";
import Dashboard from './pages/Dashboard/Dashboard';

// import Navbar from './components/Navbar';
// import Form from './components/Form';

class App extends Component {
  render() {
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
