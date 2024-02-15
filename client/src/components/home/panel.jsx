import React from 'react'

import MenuSuperior from '../comun/menusuperior.jsx'
import SliderHome from '../home/slider.jsx'
import AreasTrabajo from '../home/areastrabajo.jsx'

export default function Home ({proporcional}){
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 900 / proporcional}}>
                <div className='position-absolute top-0 start-0' style={{width: '100%', height: 100 / proporcional, zIndex: 99999}}>
                    <MenuSuperior proporcional={proporcional}/>
                </div>
                <div className='position-absolute top-0 start-0' style={{width: '100%', height: 900 / proporcional, zIndex: 9}}>
                    <SliderHome proporcional={proporcional}/>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <AreasTrabajo proporcional={proporcional}/>
            </div>
        </div>
    )
}