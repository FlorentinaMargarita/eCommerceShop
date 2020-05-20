import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component'

const HatPage = () => (
  <div>
    <h1>HAT PAGE</h1>
  </div>

)



function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/hats' component={HatPage} />
      </Switch>
  
    </div>
  );
}



export default App;
