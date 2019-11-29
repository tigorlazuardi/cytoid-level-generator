import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import store from './store'
import './css-reset.css'
import 'typeface-roboto'

const Main: React.FC = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<Main />, document.getElementById('root'))

serviceWorker.unregister()
