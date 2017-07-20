import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { HashRouter as Switch,Route } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './App'
import allReducers from './reducers'
import Newspapers from './pages/Newspapers'
import Names from './pages/Names'

const store = createStore(allReducers)
const root = document.getElementById('root')
injectTapEventPlugin()

// let store = createStore(myApp)
ReactDOM.render(
  <Provider store={store}>
    <Switch>
      <div>
        <Route exact path='/' component={App}/>
        <Route path='/pages/Newspapers' component={Newspapers}/>
        <Route path='/pages/Names' component={Names}/>
      </div>
    </Switch>
  </Provider>,
  root)

// store.subscribe(render)

// render()
