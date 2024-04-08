import React, { useEffect, useState } from 'react'

import MenuSuperior from '../comun/menusuperior.jsx'
import SliderHome from '../home/slider.jsx'
import AreasTrabajo from '../home/areastrabajo.jsx'
import Servicios from '../home/servicios.jsx'
import Proyectos from '../home/proyectos.jsx'
import Preguntanos from '../home/preguntanos.jsx'
import Imaginacion from '../home/imaginacion.jsx'
import Clientes from '../home/clientes.jsx'

export default function Home ({proporcional}){

    const [position, setPosition] = useState(0)

    window.onscroll = () => {
        setPosition(window.scrollY)
    }
    
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 800 / proporcional}}>
                <div className={`position-fixed top-0 start-0 ${position > 800 / proporcional ? 'shadow' : ''}`} style={{width: '100%', height: 'auto', zIndex: 99999,
                        background: position > 800 / proporcional ? 'white' : 'transparent'}}>
                    <MenuSuperior proporcional={proporcional} position={position}/>
                </div>
                <div className='position-absolute top-0 start-0' style={{width: '100%', height: 800 / proporcional, zIndex: 9}}>
                    <SliderHome proporcional={proporcional}/>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <AreasTrabajo proporcional={proporcional}/>
                <Servicios proporcional={proporcional}/>
                <Proyectos proporcional={proporcional}/>
                <Preguntanos proporcional={proporcional}/>
                <Imaginacion proporcional={proporcional}/>
                <Clientes proporcional={proporcional}/>
            </div>
        </div>
    )
}