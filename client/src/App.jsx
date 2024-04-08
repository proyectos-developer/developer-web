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
import BlogTablet from './components/blog/principaltablet.jsx'
import BlogCell from './components/blog/panelcell.jsx'

import MiCuentaLogin from './components/mi-cuenta/login/panel.jsx'
import MiCuentaLoginTablet from './components/mi-cuenta/login/paneltablet.jsx'
import MiCuentaLoginCell from './components/mi-cuenta/login/panelcell.jsx'

import MiCuentaRegistro from './components/mi-cuenta/registro/panel.jsx'
import MiCuentaRegistroTablet from './components/mi-cuenta/registro/paneltablet.jsx'
import MiCuentaRegistroCell from './components/mi-cuenta/registro/panelcell.jsx'

import NuestraTienda from './components/tienda/panel.jsx'
import NuestraTiendaTablet from './components/tienda/paneltablet.jsx'
import NuestraTiendaCell from './components/tienda/panelcell.jsx'

import DetallesProducto from './components/producto/panel.jsx'
import DetallesProductoTablet from './components/producto/paneltablet.jsx'
import DetallesProductoCell from './components/producto/panelcell.jsx'

import CarritoCompras from './components/carrito/panel.jsx'
import CarritoComprasTablet from './components/carrito/paneltablet.jsx'
import CarritoComprasCell from './components/carrito/panelcell.jsx'

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

            <Route path='nuestro-blog' element={width < 500 ? <BlogCell proporcional={499 / width}/> :
                                                width < 991 ? <BlogTablet proporcional={991 / width}/> :
                                                              <Blog proporcional={1920/ width}/>}/>

            <Route path='contactanos' element={width < 500 ? <ContactanosCell proporcional={499 / width}/> :
                                               width < 991 ? <ContactanosTablet proporcional={991 / width}/> :
                                                             <Contactanos proporcional={1920/ width}/>}/>

            <Route path='mi-cuenta/login' element={width < 500 ? <MiCuentaLoginCell proporcional={499 / width}/> :
                                                   width < 991 ? <MiCuentaLoginTablet proporcional={991 / width}/> :
                                                                 <MiCuentaLogin proporcional={1920/ width}/>}/>

            <Route path='mi-cuenta/registro' element={width < 500 ? <MiCuentaRegistroCell proporcional={499 / width}/> :
                                                      width < 991 ? <MiCuentaRegistroTablet proporcional={991 / width}/> :
                                                                    <MiCuentaRegistro proporcional={1920/ width}/>}/>

            <Route path='nuestra-tienda' element={width < 500 ? <NuestraTiendaCell proporcional={499 / width}/> :
                                                  width < 991 ? <NuestraTiendaTablet proporcional={991 / width}/> :
                                                                <NuestraTienda proporcional={1920/ width}/>}/>

            <Route path='producto/:producjto/:sku' element={width < 500 ? <DetallesProductoCell proporcional={499 / width}/> :
                                                           width < 991 ? <DetallesProductoTablet proporcional={991 / width}/> :
                                                                         <DetallesProducto proporcional={1920/ width}/>}/>

            <Route path='carrito-compras' element={width < 500 ? <CarritoComprasCell proporcional={499 / width}/> :
                                                   width < 991 ? <CarritoComprasTablet proporcional={991 / width}/> :
                                                                 <CarritoCompras proporcional={1920/ width}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}