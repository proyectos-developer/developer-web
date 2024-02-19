import { useState, useEffect } from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './styles.css'

import GlobalPanel from './components/panel.jsx'
import GlobalPanelTablet from './components/paneltablet.jsx'
import GlobalPanelCell from './components/panelcell.jsx'

import Home from './components/home/panel.jsx'
import HomeTablet from './components/home/paneltablet.jsx'
import HomeCell from './components/home/panelcell.jsx'

import SobreNosotros from './components/nosotros/panel.jsx'
import SobreNosotrosTablet from './components/nosotros/paneltablet.jsx'
import SobreNosotrosCell from './components/nosotros/panelcell.jsx'

import NuestrosServicios from './components/servicios/panel.jsx'
import NuestrosServiciosTablet from './components/servicios/paneltablet.jsx'
import NuestrosServiciosCell from './components/servicios/panelcell.jsx'

import NuestroPortafolio from './components/portafolio/panel.jsx'
import NuestroPortafolioTablet from './components/portafolio/paneltablet.jsx'
import NuestroPortafolioCell from './components/portafolio/panelcell.jsx'

import Contactanos from './components/contactanos/panel.jsx'
import ContactanosTablet from './components/contactanos/paneltablet.jsx'
import ContactanosCell from './components/contactanos/panelcell.jsx'

import Blog from './components/blog/panel.jsx'
import BlogTablet from './components/blog/paneltablet.jsx'
import BlogCell from './components/blog/panelcell.jsx'

import MiCuenta from './components/mi-cuenta/panel.jsx'
import MiCuentaTablet from './components/mi-cuenta/paneltablet.jsx'
import MiCuentaCell from './components/mi-cuenta/panelcell.jsx'

export default function App (){
  const [width, setWidth] = useState(window.outerWidth)

  useEffect(() => {
    window.addEventListener('resize', handle_resize)

    return () => {
      window.removeEventListener('resize', handle_resize)
    }
  }, [])

  const handle_resize = () => {
    setWidth(window.outerWidth)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={width < 500 ? <GlobalPanelCell proporcional={499 / width}/> :
                                 width < 991 ? <GlobalPanelTablet proporcional={991 / width}/> :
                                               <GlobalPanel proporcional={1920/ width}/>}>

            <Route path='' element={width < 500 ? <HomeCell proporcional={499 / width}/> :
                                    width < 991 ? <HomeTablet proporcional={991 / width}/> :
                                                  <Home proporcional={1920/ width}/>}/>

            <Route path='sobre-nosotros' element={width < 500 ? <SobreNosotrosCell proporcional={499 / width}/> :
                                                  width < 991 ? <SobreNosotrosTablet proporcional={991 / width}/> :
                                                                <SobreNosotros proporcional={1920/ width}/>}/>

            <Route path='nuestros-servicios' element={width < 500 ? <NuestrosServiciosCell proporcional={499 / width}/> :
                                                      width < 991 ? <NuestrosServiciosTablet proporcional={991 / width}/> :
                                                                    <NuestrosServicios proporcional={1920/ width}/>}/>

            <Route path='nuestro-portafolio' element={width < 500 ? <NuestroPortafolioCell proporcional={499 / width}/> :
                                                      width < 991 ? <NuestroPortafolioTablet proporcional={991 / width}/> :
                                                                    <NuestroPortafolio proporcional={1920/ width}/>}/>

            <Route path='blog' element={width < 500 ? <BlogCell proporcional={499 / width}/> :
                                        width < 991 ? <BlogTablet proporcional={991 / width}/> :
                                                      <Blog proporcional={1920/ width}/>}/>

            <Route path='contactanos' element={width < 500 ? <ContactanosCell proporcional={499 / width}/> :
                                               width < 991 ? <ContactanosTablet proporcional={991 / width}/> :
                                                             <Contactanos proporcional={1920/ width}/>}/>
            <Route path='mi-cuenta' element={width < 500 ? <MiCuentaCell proporcional={499 / width}/> :
                                             width < 991 ? <MiCuentaTablet proporcional={991 / width}/> :
                                                           <MiCuenta proporcional={1920/ width}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}