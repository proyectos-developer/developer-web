import React, { useState } from 'react'

import MenuSuperiorTablet from '../comun/menusuperiortablet.jsx'
import PrincipalTablet from './principaltablet.jsx'
import AreasTrabajoTablet from './areastrabajotablet.jsx'

export default function NuestrosServicioTablet ({proporcional}){

    const [position, setPosition] = useState(0)

    window.onscroll = () => {
        setPosition(window.scrollY)
    }

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 800 / proporcional}}>
                <div className={`position-fixed top-0 start-0 ${position > 800 / proporcional ? 'shadow' : ''}`} style={{width: '100%', height: 100 / proporcional, zIndex: 99999,
                        background: position > 800 / proporcional ? 'white' : 'transparent'}}>
                    <MenuSuperiorTablet proporcional={proporcional} position={position}/>
                </div>
                <div className='position-absolute top-0 start-0' style={{width: '100%', height: 800 / proporcional, zIndex: 9}}>
                    <PrincipalTablet proporcional={proporcional}/>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <AreasTrabajoTablet proporcional={proporcional}/>
            </div>
        </div>
    )
}