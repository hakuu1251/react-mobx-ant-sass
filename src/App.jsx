import React from "react"
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Main from './pages/main'

const App = () => {
	return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Redirect to="/" />
        <Redirect from="*" to="/404" />
      </Switch>
    </BrowserRouter>
	)
}

export default App
