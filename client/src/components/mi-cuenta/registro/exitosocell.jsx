import React, { useState } from 'react'

import MenuSuperiorCell from '../../comun/menusuperiorcell.jsx'
import ExitoCell from './exitocell.jsx'

export default function RegistroExitosoCell ({proporcional}){

    const [position, setPosition] = useState(0)

    window.onscroll = () => {
        setPosition(window.scrollY)
    }

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 'auto', background: 'rgb(23, 43, 222)'}}>
                    <MenuSuperiorCell proporcional={proporcional} position={position}/>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional,
                    paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
                <ExitoCell proporcional={proporcional}/>
            </div>
        </div>
    )
}