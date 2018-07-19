import React from 'react';
import { Switch, Route } from 'react-router';
import Header from './Components/Header';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch className="App">
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
