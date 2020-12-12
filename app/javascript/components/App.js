import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Burgers from './Burgers/Burgers'
import Burgers from './Burger/Burger'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Burgers} />
      <Route exact path="/burgers/:slug" component={Burger} />
    </Switch>
  )
}

export default App
