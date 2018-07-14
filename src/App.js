import React from 'react';
import { Switch, Route } from 'react-router';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import './App.css';

function App() {
  return (
    <Switch className="App">
      <Route exact path="/" component={Homepage} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default App;
