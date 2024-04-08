import React, { useState } from 'react'

import MenuSuperiorTCell from '../comun/menusuperiorcell.jsx'
import PrincipalTCell from './principalcell.jsx'
import TiendaProductosTCell from './tiendaproductoscell.jsx'

export default function NuestraTienda ({proporcional}){

    const [position, setPosition] = useState(0)

    window.onscroll = () => {
        setPosition(window.scrollY)
    }

    return(
        <div style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 600 / proporcional}}>
                <div className={`position-fixed top-0 start-0 ${position > 600 / proporcional ? 'shadow' : ''}`} style={{width: '100%', height: 100 / proporcional, zIndex: 99999,
                        background: position > 600 / proporcional ? 'white' : 'transparent'}}>
                    <MenuSuperiorTCell proporcional={proporcional} position={position}/>
                </div>
                <div className='position-absolute top-0 start-0' style={{width: '100%', height: 600 / proporcional, zIndex: 9}}>
                    <PrincipalTCell proporcional={proporcional}/>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                {/**<TiendaProductosTCell proporcional={proporcional}/>**/}
            </div>
        </div>
    )
}