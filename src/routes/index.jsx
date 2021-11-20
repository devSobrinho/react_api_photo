import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../templates/Home';
import Login from '../templates/Login';
import Register from '../templates/Register';

export const Routes = () => {
  return (
    <Switch>
      <Route component={Home} path="/" exact />;
      <Route component={Register} path="/register" exact />;
      <Route component={Login} path="/login" exact />;
    </Switch>
  );
};
