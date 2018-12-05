import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

OfflinePluginRuntime.install();
ReactDOM.render(<App />, document.getElementById("app"));