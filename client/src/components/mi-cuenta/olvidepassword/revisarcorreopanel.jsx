import React, { useState } from 'react'

import MenuSuperior from '../../comun/menusuperior.jsx'
import Exito from './exito.jsx'

export default function RevisarCorreo ({proporcional}){

    const [position, setPosition] = useState(0)

    window.onscroll = () => {
        setPosition(window.scrollY)
    }

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 'auto', background: 'rgb(23, 43, 222)'}}>
                    <MenuSuperior proporcional={proporcional} position={position}/>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional,
                    paddingTop: 150 / proporcional, paddingBottom: 150 / proporcional}}>
                <Exito proporcional={proporcional}/>
            </div>
        </div>
    )
}