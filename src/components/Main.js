import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Report from './Report';
import Resources from './Resources';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/personal-website' component={Home}></Route>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/Report' component={Report}></Route>
      <Route exact path='/Resources' component={Resources}></Route>
    </Switch>
  );
}


export default Main;