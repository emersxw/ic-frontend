import React from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Users from './Users'
import App from './App'

function Main() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/users' component={Users} />
      <Redirect to='/users' />
    </Switch>
    </div>
  )
}

export default Main;