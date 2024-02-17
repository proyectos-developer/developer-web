import React from 'react'
import { Outlet } from 'react-router-dom'

import fondo_image from '../assets/images/home_actualizacion_991.png'

import FooterPrincipal from './comun/footerprincipal.jsx'

export default function GlobalPanelTablet ({proporcional}){
    return (
        <div className='' style={{width: '100%', height: '100%'}}>
            <div sclassName='position-relative' style={{width: 'auto', height: 333 / proporcional, backgroundImage: `url(${fondo_image})`, backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className='' style={{width: '100%', height: 333 / proporcional,  background: 'rgba(23, 43, 222, 0.4)'}}/>
                <div className='position-absolute start-50 translate-middle' style={{width: '100%', height: 'auto', top: '20%'}}>
                    <p style={{fontSize: 40 / proporcional, lineHeight: `${60 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 30 / proporcional,
                            textAlign: 'center', color: 'white'}}>
                        ESTAMOS ACTUALIZANDO NUESTRA PÁGINA PARA QUE TENGA UNA MEJOR EXPERIENCIA
                    </p>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind', marginBottom: 30 / proporcional,
                            textAlign: 'center', color: 'white'}}>
                        Diseño de página web, aplicaciones móviles, marketing digital, software, e-commerce, entre otras cosas
                    </p>
                </div>      
            </div>        
        </div>
    )
}