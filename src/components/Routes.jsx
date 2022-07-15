import React from 'react';
import Results from './Results';
import {Switch, Route, Redirect, useLocation} from 'react-router-dom';


const Routes = () => {
  const location = useLocation();

  return (
    <div className="p-4">
      <Switch>
        <Route exact path='/'>
          <Redirect to="/search"/>
        </Route>
        <Route exact path={['/news', '/search', '/videos', '/image', '/other']}>
          <Results/>
        </Route>
        <Route>
          <div 
          className="px-10 py-5 text-2xl font-bold bg-red-400 text-white">
              Invalid path: {location.pathname}
          </div>
        </Route>
      </Switch>
    </div>
  )
}

export default Routes;