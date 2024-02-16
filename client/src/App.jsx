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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}