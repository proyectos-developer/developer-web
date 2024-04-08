import React, { useState } from 'react'

import MenuSuperiorCell from '../comun/menusuperiorcell.jsx'
import PrincipalCell from './principalcell.jsx'
import DatosCell from './datoscell.jsx'
import FormularioCell from './formulariocell.jsx'

export default function ContactanosCell ({proporcional}){

    const [position, setPosition] = useState(0)

    window.onscroll = () => {
        setPosition(window.scrollY)
    }

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 600 / proporcional}}>
                <div className={`position-fixed top-0 start-0 ${position > 600 / proporcional ? 'shadow' : ''}`} style={{width: '100%', height: 'auto', zIndex: 99999,
                        background: position > 600 / proporcional ? 'white' : 'transparent'}}>
                    <MenuSuperiorCell proporcional={proporcional} position={position}/>
                </div>
                <div className='position-absolute top-0 start-0' style={{width: '100%', height: 600 / proporcional, zIndex: 9}}>
                    <PrincipalCell proporcional={proporcional}/>
                </div>
            </div>
            <DatosCell proporcional={proporcional}/>
            <FormularioCell proporcional={proporcional}/>
        </div>
    )
}