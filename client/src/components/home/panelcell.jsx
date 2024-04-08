import React, { useEffect, useState } from 'react'

import MenuSuperiorCell from '../comun/menusuperiorcell.jsx'
import SliderHomeCell from '../home/slidercell.jsx'
import AreasTrabajoCell from '../home/areastrabajocell.jsx'
import ServiciosCell from '../home/servicioscell.jsx'
import ProyectosCell from '../home/proyectoscell.jsx'
import PreguntanosCell from '../home/preguntanoscell.jsx'
import ImaginacionCell from '../home/imaginacioncell.jsx'
import ClientesCell from '../home/clientescell.jsx'

export default function HomeCell ({proporcional}){

    const [position, setPosition] = useState(0)

    window.onscroll = () => {
        setPosition(window.scrollY)
    }
    
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 900 / proporcional}}>
                <div className={`position-fixed top-0 start-0 ${position > 600 / proporcional ? 'shadow' : ''}`} style={{width: '100%', height: 'auto', zIndex: 99999,
                        background: position > 800 / proporcional ? 'white' : 'transparent'}}>
                    <MenuSuperiorCell proporcional={proporcional} position={position}/>
                </div>
                <div className='position-absolute top-0 start-0' style={{width: '100%', height: 900 / proporcional, zIndex: 9}}>
                    <SliderHomeCell proporcional={proporcional}/>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <AreasTrabajoCell proporcional={proporcional}/>
                <ServiciosCell proporcional={proporcional}/>
                <ProyectosCell proporcional={proporcional}/>
                <PreguntanosCell proporcional={proporcional}/>
                <ImaginacionCell proporcional={proporcional}/>
                <ClientesCell proporcional={proporcional}/>
            </div>
        </div>
    )
}