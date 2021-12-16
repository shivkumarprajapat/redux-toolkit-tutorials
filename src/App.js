import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Details from './pages/Details';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/user/:id' component={Details} />
      </Switch>
    </Router>
  )
}

export default App
