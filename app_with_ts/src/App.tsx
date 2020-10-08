import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import LoginPage from "./pages/login";
import HomePage from "./pages/Home"
export default () => {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/login" exact component={LoginPage} />
          <Route path="/" exact component={HomePage} />
        </Switch>
      </HashRouter>
    </div>
  )
}