import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Revendedor from './pages/Revendedor';
import Compras from './pages/Compras';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/revendedor" component={Revendedor} />
        <Route path="/compras" component={Compras} />
      </Switch>
    </BrowserRouter>
  );
}