import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Report from './Report';
import Resources from './Resources';
import Track from './Track';
import Status from './Status';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/personal-website' component={Home}></Route>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/Report' component={Report}></Route>
      <Route exact path='/Resources' component={Resources}></Route>
      <Route exact path='/Track' component={Track}></Route>
      <Route exact path='/Status' component={Status}></Route>
    </Switch>
  );
}


export default Main;