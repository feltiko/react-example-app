import React from 'react';
import { Switch, Route } from 'react-router';
import { Provider } from 'react-redux';
import Header from './Components/Header';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import Store from './Store';

import './App.css';

function App() {
  return (
    <Provider store={Store}>
      <div>
        <Header />
        <Switch className="App">
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
