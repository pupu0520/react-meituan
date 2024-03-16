import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import { Provider } from 'react-redux'
import store from './store'


const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)


// redux-7 引入provider并包含app
// redux-8 provider挂在store属性

