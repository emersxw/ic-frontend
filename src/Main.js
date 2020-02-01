import React, { useState, createContext, useContext, useEffect } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Users from './Users';
import App from './App';
import Login from './Login';
import AddUser from './AddUser';
import { State } from './Store';

function Main() {
  const [state, setState] = useContext(State);
  useEffect(() => {
    console.log('state -> ', state);
  }, []);

  function handleLogout() {
    setState({
      ...state,
      token: null
    });

    localStorage.token = null;
  }

  if (state.loading) return <div>loading...</div>;

  if (state.token) {
    return (
      <div>
        <p>token: {state.token}</p>
        <button onClick={handleLogout}>logout</button>
        <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/users' component={Users} />
          <Route exact path='/add' component={AddUser} />
          <Redirect to='/' />
        </Switch>
      </div>
    );
  }

  return (
    <div>
      <p>token: {state.token}</p>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Redirect to='/login' />
      </Switch>
    </div>
  );
}

export default Main;
