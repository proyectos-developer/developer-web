import React, { useEffect, useState } from 'react'

import MenuSuperiorTablet from '../comun/menusuperiortablet.jsx'
import SliderHomeTablet from '../home/slidertablet.jsx'
import AreasTrabajoTablet from '../home/areastrabajotablet.jsx'
import ServiciosTablet from '../home/serviciostablet.jsx'
import ProyectosTablet from '../home/proyectostablet.jsx'
import PreguntanosTablet from '../home/preguntanostablet.jsx'
import ImaginacionTablet from '../home/imaginaciontablet.jsx'
import ClientesTablet from '../home/clientestablet.jsx'

export default function HomeTablet ({proporcional}){

    const [position, setPosition] = useState(0)

    window.onscroll = () => {
        setPosition(window.scrollY)
    }
    
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 900 / proporcional}}>
                <div className={`position-fixed top-0 start-0 ${position > 800 / proporcional ? 'shadow' : ''}`} style={{width: '100%', height: 'auto', zIndex: 99999,
                        background: position > 800 / proporcional ? 'white' : 'transparent'}}>
                    <MenuSuperiorTablet proporcional={proporcional} position={position}/>
                </div>
                <div className='position-absolute top-0 start-0' style={{width: '100%', height: 900 / proporcional, zIndex: 9}}>
                    <SliderHomeTablet proporcional={proporcional}/>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <AreasTrabajoTablet proporcional={proporcional}/>
                <ServiciosTablet proporcional={proporcional}/>
                <ProyectosTablet proporcional={proporcional}/>
                <PreguntanosTablet proporcional={proporcional}/>
                <ImaginacionTablet proporcional={proporcional}/>
                <ClientesTablet proporcional={proporcional}/>
            </div>
        </div>
    )
}