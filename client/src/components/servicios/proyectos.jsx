import React, { useState } from 'react'

export default function Proyectos ({proporcional}){

    const [proyecto_seleccion, setProyectoSeleccion] = useState('') 

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='d-flex' style={{width: '100%', height: 500 / proporcional}}>
                <div className='position-relative' style={{width: '25%', height: 'auto', cursor: 'pointer'}}
                onMouseOver={() => setProyectoSeleccion ('proyecto_uno')} onMouseLeave={() => setProyectoSeleccion('')}>
                    <div style={{width: '100%', height: 500 / proporcional, background: 'rgba(219, 228, 235, 0.8)'}}/>
                    {
                        proyecto_seleccion === 'proyecto_uno' ? (
                            <div className='position-absolute top-0 start-0' style={{width: '100%', height: 500 / proporcional, background: 'rgba(45, 87, 44, 0.6)'}}>
                                <div className='position-relative' style={{width: '100%', height: 500 / proporcional}}>
                                    <div className='position-absolute top-50 start-50 translate-middle' style={{width: '100%', height: 'auto'}}>
                                        <div style={{width: 'auto', height: 'auto'}}>
                                            <p style={{fontSize: 22 / proporcional, fontWeight: 800, lineHeight: `${30 / proporcional}px`, color: 'white', marginBottom: 13 / proporcional,
                                                textAlign: 'center'}}>
                                                Diseño creativo
                                            </p>
                                            <p style={{fontSize: 13 / proporcional, fontWeight: 600, lineHeight: `${26 / proporcional}px`, color: 'white', marginBottom: 13 / proporcional,
                                                textAlign: 'center', color: 'white'}}>
                                                Diseño impreso
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    }
                </div>
                <div className='position-relative' style={{width: '25%', height: 'auto', cursor: 'pointer'}}
                onMouseOver={() => setProyectoSeleccion ('proyecto_dos')} onMouseLeave={() => setProyectoSeleccion('')}>
                    <div style={{width: '100%', height: 500 / proporcional, background: 'rgba(219, 228, 235, 0.8)'}}/>
                    {
                        proyecto_seleccion === 'proyecto_dos' ? (
                            <div className='position-absolute top-0 start-0' style={{width: '100%', height: 500 / proporcional, background: 'rgba(45, 87, 44, 0.6)'}}>
                                <div className='position-relative' style={{width: '100%', height: 500 / proporcional}}>
                                    <div className='position-absolute top-50 start-50 translate-middle' style={{width: '100%', height: 'auto'}}>
                                        <div style={{width: 'auto', height: 'auto'}}>
                                            <p style={{fontSize: 22 / proporcional, fontWeight: 600, lineHeight: `${26 / proporcional}px`, color: 'white', marginBottom: 13 / proporcional,
                                                textAlign: 'center', color: 'white'}}>
                                                Proyecto éxitoso
                                            </p>
                                            <p style={{fontSize: 13 / proporcional, fontWeight: 800, lineHeight: `${30 / proporcional}px`, color: 'white', marginBottom: 13 / proporcional,
                                                textAlign: 'center'}}>
                                                Diseño impreso
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    }
                </div>
                <div className='position-relative' style={{width: '25%', height: 'auto', cursor: 'pointer'}}
                onMouseOver={() => setProyectoSeleccion ('proyecto_tres')} onMouseLeave={() => setProyectoSeleccion('')}>
                    <div style={{width: '100%', height: 500 / proporcional, background: 'rgba(219, 228, 235, 0.8)'}}/>
                    {
                        proyecto_seleccion === 'proyecto_tres' ? (
                            <div className='position-absolute top-0 start-0' style={{width: '100%', height: 500 / proporcional, background: 'rgba(45, 87, 44, 0.6)'}}>
                                <div className='position-relative' style={{width: '100%', height: 500 / proporcional}}>
                                    <div className='position-absolute top-50 start-50 translate-middle' style={{width: '100%', height: 'auto'}}>
                                        <div style={{width: 'auto', height: 'auto'}}>
                                            <p style={{fontSize: 22 / proporcional, fontWeight: 800, lineHeight: `${30 / proporcional}px`, color: 'white', marginBottom: 13 / proporcional,
                                                textAlign: 'center'}}>
                                                Tu negocio
                                            </p>
                                            <p style={{fontSize: 13 / proporcional, fontWeight: 800, lineHeight: `${30 / proporcional}px`, color: 'white', marginBottom: 13 / proporcional,
                                                textAlign: 'center'}}>
                                                Diseño impreso
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    }
                </div>
                <div className='position-relative' style={{width: '25%', height: 'auto', cursor: 'pointer'}}
                onMouseOver={() => setProyectoSeleccion ('proyecto_cuatro')} onMouseLeave={() => setProyectoSeleccion('')}>
                    <div style={{width: '100%', height: 500 / proporcional, background: 'rgba(219, 228, 235, 0.8)'}}/>
                    {
                        proyecto_seleccion === 'proyecto_cuatro' ? (
                            <div className='position-absolute top-0 start-0' style={{width: '100%', height: 500 / proporcional, background: 'rgba(45, 87, 44, 0.6)'}}>
                                <div className='position-relative' style={{width: '100%', height: 500 / proporcional}}>
                                    <div className='position-absolute top-50 start-50 translate-middle' style={{width: '100%', height: 'auto'}}>
                                        <div style={{width: 'auto', height: 'auto'}}>
                                            <p style={{fontSize: 22 / proporcional, fontWeight: 800, lineHeight: `${30 / proporcional}px`, color: 'white', marginBottom: 13 / proporcional,
                                                textAlign: 'center'}}>
                                                Mi modo es community
                                            </p>
                                            <p style={{fontSize: 13 / proporcional, fontWeight: 800, lineHeight: `${30 / proporcional}px`, color: 'white', marginBottom: 13 / proporcional,
                                                textAlign: 'center'}}>
                                                Diseño impreso
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
}