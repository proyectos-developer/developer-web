import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

import { Provider } from 'react-redux'
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'

import proyectosdata from './redux/slice/proyectosdata.js'
import correodata from './redux/slice/correodata.js'
import begindata from './redux/slice/begindata.js'
import datareducer from './redux/reducers/datareducer.js'

const store = configureStore ({
    reducer: ({
      data_reducer: datareducer,
      correo_data: correodata,
      begin_data: begindata,
      proyectos_data: proyectosdata
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false
    })
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App/>
  </Provider>
)
