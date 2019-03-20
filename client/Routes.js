import { React } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { chairReport } from '/chair_report';
import { main } from './main.js'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={main}/>
      <Route path="/chair_report" component={chairReport}/>
    </Switch>
  </BrowserRouter>
);
