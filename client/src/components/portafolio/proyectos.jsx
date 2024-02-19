import React, { useState } from 'react'

export default function Proyectos ({proporcional}){

    const [seleccion_proyecto, setSeleccionProyecto] = useState('')

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto', paddingLeft: 300 / proporcional, paddingRight: 300 / proporcional, paddingTop: 125 / proporcional, paddingBottom: 125 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 36 / proporcional, marginBottom: 24 / proporcional}}>
                    <div style={{width: 130 / proporcional, height: 26 / proporcional, marginBottom: 10 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 800, color: '#2d572c',
                            textAlign: 'center'}}>
                            Mostrar todo
                        </p>
                    </div>
                    <div style={{width: 130 / proporcional, height: 26 / proporcional, marginBottom: 10 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(136, 136, 136, 136)',
                            textAlign: 'center'}}>
                            Creativo
                        </p>
                    </div>
                    <div style={{width: 130 / proporcional, height: 26 / proporcional, marginBottom: 10 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(136, 136, 136, 136)',
                            textAlign: 'center'}}>
                            Características
                        </p>
                    </div>
                    <div style={{width: 130 / proporcional, height: 26 / proporcional, marginBottom: 10 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(136, 136, 136, 136)',
                            textAlign: 'center'}}>
                            Diseño gráfico
                        </p>
                    </div>
                    <div style={{width: 130 / proporcional, height: 26 / proporcional, marginBottom: 10 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'rgb(136, 136, 136, 136)',
                            textAlign: 'center'}}>
                            Paquetes
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 75 / proporcional}}>
                    <div style={{width: '32%',  height: 520 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionProyecto ('proyecto_uno')} 
                        onMouseLeave={() => setSeleccionProyecto('')}>
                        <div className='position-relative' style={{width: '100%', height:  420 / proporcional, marginBottom: 30 / proporcional, background: '#dbe4eb'}}>
                            {
                                seleccion_proyecto === 'proyecto_uno' ? (
                                    <div className='position-absolute top-0 start-0' style={{width: '100%', height: 420 / proporcional, background: 'rgba(23, 43, 222, 0.6)'}}>

                                    </div>
                                ) : null
                            }
                        </div>
                        <div style={{width: '100%', height: 70 / proporcional}}>
                            <p style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 13 / proporcional, fontWeight: 800, color: 'rgb(22, 36, 65)',
                                    textAlign: 'center', fontFamily: 'Montserrat, sans-serif'}}>
                                Diseño
                            </p>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 600, color: 'rgb(136, 136, 136)',
                                    textAlign: 'center', fontFamily: 'Hind, sans-serif'}}>
                                Branding / Paquete
                            </p>
                        </div>
                    </div>
                    <div style={{width: '32%',  height: 520 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionProyecto ('proyecto_dos')} 
                        onMouseLeave={() => setSeleccionProyecto('')}>
                        <div className='position-relative' style={{width: '100%', height:  420 / proporcional, marginBottom: 30 / proporcional, background: '#dbe4eb'}}>
                            {
                                seleccion_proyecto === 'proyecto_dos' ? (
                                    <div className='position-absolute top-0 start-0' style={{width: '100%', height: 420 / proporcional, background: 'rgba(23, 43, 222, 0.6)'}}>

                                    </div>
                                ) : null
                            }
                        </div>
                        <div style={{width: '100%', height: 70 / proporcional}}>
                            <p style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 13 / proporcional, fontWeight: 800, color: 'rgb(22, 36, 65)',
                                    textAlign: 'center', fontFamily: 'Montserrat, sans-serif'}}>
                                Diseño
                            </p>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 600, color: 'rgb(136, 136, 136)',
                                    textAlign: 'center', fontFamily: 'Hind, sans-serif'}}>
                                Branding / Característico
                            </p>
                        </div>
                    </div>
                    <div style={{width: '32%',  height: 520 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionProyecto ('proyecto_tres')} 
                        onMouseLeave={() => setSeleccionProyecto('')}>
                        <div className='position-relative' style={{width: '100%', height:  420 / proporcional, marginBottom: 30 / proporcional, background: '#dbe4eb'}}>
                            {
                                seleccion_proyecto === 'proyecto_tres' ? (
                                    <div className='position-absolute top-0 start-0' style={{width: '100%', height: 420 / proporcional, background: 'rgba(23, 43, 222, 0.6)'}}>

                                    </div>
                                ) : null
                            }
                        </div>
                        <div style={{width: '100%', height: 70 / proporcional}}>
                            <p style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 13 / proporcional, fontWeight: 800, color: 'rgb(22, 36, 65)',
                                    textAlign: 'center', fontFamily: 'Montserrat, sans-serif'}}>
                                Diseño
                            </p>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 600, color: 'rgb(136, 136, 136)',
                                    textAlign: 'center', fontFamily: 'Hind, sans-serif'}}>
                                Branding / Creativo
                            </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 75 / proporcional}}>
                    <div style={{width: '32%',  height: 520 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionProyecto ('proyecto_cuatro')} 
                        onMouseLeave={() => setSeleccionProyecto('')}>
                        <div className='position-relative' style={{width: '100%', height:  420 / proporcional, marginBottom: 30 / proporcional, background: '#dbe4eb'}}>
                            {
                                seleccion_proyecto === 'proyecto_cuatro' ? (
                                    <div className='position-absolute top-0 start-0' style={{width: '100%', height: 420 / proporcional, background: 'rgba(23, 43, 222, 0.6)'}}>

                                    </div>
                                ) : null
                            }
                        </div>
                        <div style={{width: '100%', height: 70 / proporcional}}>
                            <p style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 13 / proporcional, fontWeight: 800, color: 'rgb(22, 36, 65)',
                                    textAlign: 'center', fontFamily: 'Montserrat, sans-serif'}}>
                                Diseño
                            </p>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 600, color: 'rgb(136, 136, 136)',
                                    textAlign: 'center', fontFamily: 'Hind, sans-serif'}}>
                                Branding / Paquete
                            </p>
                        </div>
                    </div>
                    <div style={{width: '32%',  height: 520 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionProyecto ('proyecto_cinco')} 
                        onMouseLeave={() => setSeleccionProyecto('')}>
                        <div className='position-relative' style={{width: '100%', height:  420 / proporcional, marginBottom: 30 / proporcional, background: '#dbe4eb'}}>
                            {
                                seleccion_proyecto === 'proyecto_cinco' ? (
                                    <div className='position-absolute top-0 start-0' style={{width: '100%', height: 420 / proporcional, background: 'rgba(23, 43, 222, 0.6)'}}>

                                    </div>
                                ) : null
                            }
                        </div>
                        <div style={{width: '100%', height: 70 / proporcional}}>
                            <p style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 13 / proporcional, fontWeight: 800, color: 'rgb(22, 36, 65)',
                                    textAlign: 'center', fontFamily: 'Montserrat, sans-serif'}}>
                                Diseño
                            </p>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 600, color: 'rgb(136, 136, 136)',
                                    textAlign: 'center', fontFamily: 'Hind, sans-serif'}}>
                                Branding / Característico
                            </p>
                        </div>
                    </div>
                    <div style={{width: '32%',  height: 520 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionProyecto ('proyecto_seis')} 
                        onMouseLeave={() => setSeleccionProyecto('')}>
                        <div className='position-relative' style={{width: '100%', height:  420 / proporcional, marginBottom: 30 / proporcional, background: '#dbe4eb'}}>
                            {
                                seleccion_proyecto === 'proyecto_seis' ? (
                                    <div className='position-absolute top-0 start-0' style={{width: '100%', height: 420 / proporcional, background: 'rgba(23, 43, 222, 0.6)'}}>

                                    </div>
                                ) : null
                            }
                        </div>
                        <div style={{width: '100%', height: 70 / proporcional}}>
                            <p style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 13 / proporcional, fontWeight: 800, color: 'rgb(22, 36, 65)',
                                    textAlign: 'center', fontFamily: 'Montserrat, sans-serif'}}>
                                Diseño
                            </p>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 600, color: 'rgb(136, 136, 136)',
                                    textAlign: 'center', fontFamily: 'Hind, sans-serif'}}>
                                Branding / Creativo
                            </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 115 / proporcional}}>
                    <div style={{width: '32%',  height: 520 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionProyecto ('proyecto_siete')} 
                        onMouseLeave={() => setSeleccionProyecto('')}>
                        <div className='position-relative' style={{width: '100%', height:  420 / proporcional, marginBottom: 30 / proporcional, background: '#dbe4eb'}}>
                            {
                                seleccion_proyecto === 'proyecto_siete' ? (
                                    <div className='position-absolute top-0 start-0' style={{width: '100%', height: 420 / proporcional, background: 'rgba(23, 43, 222, 0.6)'}}>

                                    </div>
                                ) : null
                            }
                        </div>
                        <div style={{width: '100%', height: 70 / proporcional}}>
                            <p style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 13 / proporcional, fontWeight: 800, color: 'rgb(22, 36, 65)',
                                    textAlign: 'center', fontFamily: 'Montserrat, sans-serif'}}>
                                Diseño
                            </p>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 600, color: 'rgb(136, 136, 136)',
                                    textAlign: 'center', fontFamily: 'Hind, sans-serif'}}>
                                Branding / Paquete
                            </p>
                        </div>
                    </div>
                    <div style={{width: '32%',  height: 520 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionProyecto ('proyecto_ocho')} 
                        onMouseLeave={() => setSeleccionProyecto('')}>
                        <div className='position-relative' style={{width: '100%', height:  420 / proporcional, marginBottom: 30 / proporcional, background: '#dbe4eb'}}>
                            {
                                seleccion_proyecto === 'proyecto_ocho' ? (
                                    <div className='position-absolute top-0 start-0' style={{width: '100%', height: 420 / proporcional, background: 'rgba(23, 43, 222, 0.6)'}}>

                                    </div>
                                ) : null
                            }
                        </div>
                        <div style={{width: '100%', height: 70 / proporcional}}>
                            <p style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 13 / proporcional, fontWeight: 800, color: 'rgb(22, 36, 65)',
                                    textAlign: 'center', fontFamily: 'Montserrat, sans-serif'}}>
                                Diseño
                            </p>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 600, color: 'rgb(136, 136, 136)',
                                    textAlign: 'center', fontFamily: 'Hind, sans-serif'}}>
                                Branding / Característico
                            </p>
                        </div>
                    </div>
                    <div style={{width: '32%',  height: 520 / proporcional, cursor: 'pointer'}} onMouseOver={() => setSeleccionProyecto ('proyecto_neve')} 
                        onMouseLeave={() => setSeleccionProyecto('')}>
                        <div className='position-relative' style={{width: '100%', height:  420 / proporcional, marginBottom: 30 / proporcional, background: '#dbe4eb'}}>
                            {
                                seleccion_proyecto === 'proyecto_neve' ? (
                                    <div className='position-absolute top-0 start-0' style={{width: '100%', height: 420 / proporcional, background: 'rgba(23, 43, 222, 0.6)'}}>

                                    </div>
                                ) : null
                            }
                        </div>
                        <div style={{width: '100%', height: 70 / proporcional}}>
                            <p style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 13 / proporcional, fontWeight: 800, color: 'rgb(22, 36, 65)',
                                    textAlign: 'center', fontFamily: 'Montserrat, sans-serif'}}>
                                Diseño
                            </p>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 600, color: 'rgb(136, 136, 136)',
                                    textAlign: 'center', fontFamily: 'Hind, sans-serif'}}>
                                Branding / Creativo
                            </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 60 / proporcional}}>
                    <button className='btn' style={{width: 200 / proporcional, height: 60 / proporcional, background: '#172bde', fontSize: 16 / proporcional, 
                        color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 800}}>
                        Ver más
                    </button>
                </div>
            </div>
        </div>
    )
}