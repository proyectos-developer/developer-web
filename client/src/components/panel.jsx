import React from 'react'
import { Outlet } from 'react-router-dom'

import fondo_image from '../assets/images/home_actualizacion_1920.png'

import FooterPrincipal from './comun/footerprincipal.jsx'

export default function GlobalPanel ({proporcional}){
    return (
        <div className='' style={{width: '100%', height: '100%'}}>
            <div sclassName='position-relative' style={{width: 'auto', height: 1150 / proporcional, backgroundImage: `url(${fondo_image})`, backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className='' style={{width: '100%', height: 1150 / proporcional,  background: 'rgba(23, 43, 222, 0.4)'}}/>
                <div className='position-absolute top-50 start-50 translate-middle' style={{width: '100%', height: 'auto'}}>
                    <p style={{fontSize: 90 / proporcional, lineHeight: `${107 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 30 / proporcional,
                            textAlign: 'center', color: 'white'}}>
                        ESTAMOS ACTUALIZANDO NUESTRA PÁGINA PARA QUE TENGA UNA MEJOR EXPERIENCIA
                    </p>
                    <p style={{fontSize: 40 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind', marginBottom: 30 / proporcional,
                            textAlign: 'center', color: 'white'}}>
                        Diseño de página web, aplicaciones móviles, marketing digital, software, e-commerce, entre otras cosas
                    </p>
                </div>      
            </div>        
        </div>
    )
}