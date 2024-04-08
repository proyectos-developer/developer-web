import React, { useState } from 'react'

import MenuSuperiorTablet from '../../comun/menusuperiortablet.jsx'
import PrincipalTablet from './principaltablet.jsx'
import ForgotPasswordTablet from './forgotpasswordtablet.jsx'

export default function OlvideContraseñaTablet ({proporcional}){

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
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional,
                    paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional}}>
                <div style={{width: '80%', height: 'auto'}}>
                    <ForgotPasswordTablet proporcional={proporcional}/>
                </div>
            </div>
        </div>
    )
}