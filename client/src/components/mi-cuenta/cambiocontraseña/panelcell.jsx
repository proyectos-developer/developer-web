import React, { useState } from 'react'

import MenuSuperiorCell from '../../comun/menusuperiorcell.jsx'
import PrincipalCell from './principalcell.jsx'
import CambioPasswordCell from './cambiopasswordcell.jsx'

export default function CambiarContraseñaCell ({proporcional}){

    const [position, setPosition] = useState(0)

    window.onscroll = () => {
        setPosition(window.scrollY)
    }

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 800 / proporcional}}>
                <div className={`position-fixed top-0 start-0 ${position > 800 / proporcional ? 'shadow' : ''}`} style={{width: '100%', height: 'auto', zIndex: 99999,
                        background: position > 800 / proporcional ? 'white' : 'transparent'}}>
                    <MenuSuperiorCell proporcional={proporcional} position={position}/>
                </div>
                <div className='position-absolute top-0 start-0' style={{width: '100%', height: 800 / proporcional, zIndex: 9}}>
                    <PrincipalCell proporcional={proporcional}/>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional,
                    paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
                <div style={{width: '80%', height: 'auto'}}>
                    <CambioPasswordCell proporcional={proporcional}/>
                </div>
            </div>
        </div>
    )
}