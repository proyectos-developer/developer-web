import React, { useState } from 'react'

import MenuSuperior from '../comun/menusuperior'
import Principal from './principal.jsx'
import AreasTrabajo from './areastrabajo.jsx'
import Agencia from './agencia.jsx'
import FormaTrabajo from './formatrabajo.jsx'
import Proyectos from './proyectos.jsx'

export default function NuestrosServicios ({proporcional}){

    const [position, setPosition] = useState(0)

    window.onscroll = () => {
        setPosition(window.scrollY)
    }

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 900 / proporcional}}>
                <div className={`position-fixed top-0 start-0 ${position > 800 / proporcional ? 'shadow' : ''}`} style={{width: '100%', height: 100 / proporcional, zIndex: 99999,
                        background: position > 800 / proporcional ? 'white' : 'transparent'}}>
                    <MenuSuperior proporcional={proporcional} position={position}/>
                </div>
                <div className='position-absolute top-0 start-0' style={{width: '100%', height: 900 / proporcional, zIndex: 9}}>
                    <Principal proporcional={proporcional}/>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <AreasTrabajo proporcional={proporcional}/>
                <Agencia proporcional={proporcional}/>
                <FormaTrabajo proporcional={proporcional}/>
                <Proyectos proporcional={proporcional}/>
            </div>
        </div>
    )
}