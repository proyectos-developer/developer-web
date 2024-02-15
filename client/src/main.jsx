import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

import { Provider } from 'react-redux'
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'

const store = configureStore ({
  reducer: ({

  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({

  })
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App/>
  </Provider>
)
