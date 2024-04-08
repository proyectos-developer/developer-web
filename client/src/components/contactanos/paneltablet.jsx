import React, { useState } from 'react'

import MenuSuperiorTablet from '../comun/menusuperiortablet.jsx'
import PrincipalTablet from './principaltablet.jsx'
import DatosTablet from './datostablet.jsx'
import FormularioTablet from './formulariotablet.jsx'

export default function ContactanosTablet ({proporcional}){

    const [position, setPosition] = useState(0)

    window.onscroll = () => {
        setPosition(window.scrollY)
    }

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 800 / proporcional}}>
                <div className={`position-fixed top-0 start-0 ${position > 800 / proporcional ? 'shadow' : ''}`} style={{width: '100%', height: 'auto', zIndex: 99999,
                        background: position > 800 / proporcional ? 'white' : 'transparent'}}>
                    <MenuSuperiorTablet proporcional={proporcional} position={position}/>
                </div>
                <div className='position-absolute top-0 start-0' style={{width: '100%', height: 800 / proporcional, zIndex: 9}}>
                    <PrincipalTablet proporcional={proporcional}/>
                </div>
            </div>
            <DatosTablet proporcional={proporcional}/>
            <FormularioTablet proporcional={proporcional}/>
        </div>
    )
}