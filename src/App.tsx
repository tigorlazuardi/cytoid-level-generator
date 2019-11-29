import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Home from './views/Home'
import Preview from './views/Preview'
import { KeepAlive, Provider as KeepAliveProvider } from 'react-keep-alive'
import Navbar from './components/Navbar'

const App: React.FC = () => {
  return (
    <Router>
      <KeepAliveProvider>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <KeepAlive key='home'>
              <Home />
            </KeepAlive>
          </Route>
          <Route path='/preview'>
            <Preview />
          </Route>
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </KeepAliveProvider>
    </Router>
  )
}

export default App
