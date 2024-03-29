import React, { useState } from 'react'

import MenuSuperior from '../comun/menusuperior'
import Principal from './principal.jsx'
import LoginUser from './loginuser.jsx'
import RegisterUser from './registeruser.jsx'

export default function MiCuenta ({proporcional}){

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
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', paddingLeft: 300 / proporcional, paddingRight: 300 / proporcional,
                    paddingTop: 150 / proporcional, paddingBottom: 150 / proporcional}}>
                <div style={{width: '45%', height: 'auto'}}>
                    <LoginUser proporcional={proporcional}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '10%', height: 'auto'}}>
                    <div style={{width: 2 / proporcional, height: 'auto', background: '#dbe4eb'}}/>
                </div>
                <div style={{width: '45%', height: 'auto'}}>
                    <RegisterUser proporcional={proporcional}/>
                </div>
            </div>
        </div>
    )
}