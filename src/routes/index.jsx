import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { MyRoute } from './MyRoutes';

import Home from '../templates/Home';
import Login from '../templates/Login';
import Profile from '../templates/Profile';
// import { Login as LoginComponent } from '../components/Login';
import mock from '../components/Login/mock';
import Register from '../templates/Register';

export const Routes = () => {
  return (
    <Switch>
      <MyRoute component={Register} path="/register" exact />;
      <MyRoute component={Login} path="/login" exact />;
      <MyRoute component={Profile} path="/profile" exact isClosed />;
      <MyRoute component={Home} path="/" /> ;
    </Switch>
  );
};
