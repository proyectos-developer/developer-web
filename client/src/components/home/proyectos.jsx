import React, { useState } from 'react'

import fare_web from '../../assets/images/fare-web.png'
import comfisa_web from '../../assets/images/comfisa-web.png'
import app_taxi from '../../assets/images/app_taxi.png'
import app_manejo from '../../assets/images/app_manejo.png'

export default function Proyectos ({proporcional}){

    const [display_info_proyecto, setDisplayInfoProyecto] = useState('')

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
            <div id='carouselHomeProyectos' className='carousel slide' data-bs-ride='carousel'>
                <div className='carousel-inner'>
                    <div className='carousel-item active' data-bs-interval='3000'>
                        <div className='d-flex' style={{width: '100%', height: 408 / proporcional}}>
                            <div className='d-flex justify-content-center position-relative' style={{width: '25%', height: 408 / proporcional, cursor: 'pointer'}}
                            onMouseOver={() => setDisplayInfoProyecto ('proyecto_uno')} onMouseLeave={() => setDisplayInfoProyecto('')}>
                                <div className='' style={{width: 320 / proporcional, height: 408 / proporcional, backgroundImage: `url(${app_taxi})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover'}}/>
                                {
                                    display_info_proyecto === 'proyecto_uno' ? (
                                        <div className='position-absolute top-0 start-0 rounded shadow' style={{width: '100%', height: 408 / proporcional, background: 'rgb(23, 43, 222)', padding: 20 / proporcional}}>
                                            <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontWeight: 500, color: 'white', textAlign: 'center'}}>
                                                APLICACIÓN MÓVIL: 
                                                <br/> <span style={{fontSize: 20 / proporcional, fontWeight: 600}}>TAXI 24/7</span>
                                            </p>
                                        </div>
                                    ) : null
                                }
                            </div>              
                            <div className='d-flex justify-content-center position-relative' style={{width: '25%', height: 408 / proporcional, cursor: 'pointer'}}
                             onMouseOver={() => setDisplayInfoProyecto ('proyecto_dos')} onMouseLeave={() => setDisplayInfoProyecto('')}>
                                <div className='' style={{width: 320 / proporcional, height: 408 / proporcional, backgroundImage: `url(${app_manejo})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover'}}/>
                                {
                                    display_info_proyecto === 'proyecto_dos' ? (
                                        <div className='position-absolute top-0 start-0 rounded shadow' style={{width: '100%', height: 408 / proporcional, background: 'rgb(23, 43, 222)', padding: 20 / proporcional}}>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontWeight: 500, color: 'white', textAlign: 'center'}}>
                                            APLICACIÓN MÓVIL: 
                                            <br/> <span style={{fontSize: 20 / proporcional, fontWeight: 600}}>EXÁMEN DE MANEJO</span>
                                        </p>
                                        </div>
                                    ) : null
                                }
                            </div>              
                            <div className='d-flex justify-content-center position-relative' style={{width: '25%', height: 408 / proporcional, cursor: 'pointer'}}
                            onMouseOver={() => setDisplayInfoProyecto ('proyecto_tres')} onMouseLeave={() => setDisplayInfoProyecto('')}>
                                <div className='' style={{width: 320 / proporcional, height: 408 / proporcional, backgroundImage: `url(${comfisa_web})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover'}} />
                                {
                                    display_info_proyecto === 'proyecto_tres' ? (
                                        <div className='position-absolute top-0 start-0 rounded shadow' style={{width: '100%', height: 408 / proporcional, background: 'rgb(23, 43, 222)', padding: 20 / proporcional}}>
                                            <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontWeight: 500, color: 'white', textAlign: 'center'}}>
                                                PÁGINA WEB: 
                                                <br/> <span style={{fontSize: 20 / proporcional, fontWeight: 600}}>GRUPO COMFISA</span>
                                            </p>
                                        </div>
                                    ) : null
                                }
                            </div>              
                            <div className='d-flex justify-content-center position-relative' style={{width: '25%', height: 408 / proporcional, cursor: 'pointer'}}
                             onMouseOver={() => setDisplayInfoProyecto ('proyecto_cuatro')} onMouseLeave={() => setDisplayInfoProyecto('')}>
                                <div className='' style={{width: 320 / proporcional, height: 408 / proporcional, backgroundImage: `url(${fare_web})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover'}}/>
                                {
                                    display_info_proyecto === 'proyecto_cuatro' ? (
                                        <div className='position-absolute top-0 start-0 rounded shadow' style={{width: '100%', height: 408 / proporcional, background: 'rgb(23, 43, 222)', padding: 20 / proporcional}}>
                                            <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, fontWeight: 500, color: 'white', textAlign: 'center'}}>
                                                PÁGINA WEB: 
                                                <br/> <span style={{fontSize: 20 / proporcional, fontWeight: 600}}>FARE</span>
                                            </p>
                                        </div>
                                    ) : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <button className='carousel-control-prev' type='button' data-bs-target='#carouselHomeProyectos' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'/>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button className='carousel-control-next' type='button' data-bs-target='#carouselHomeProyectos' data-bs-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'/>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>
        </div>
    )
}