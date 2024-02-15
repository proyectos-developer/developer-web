import React from 'react'

import icono_design from '../../assets/iconos/icono_diseño_white_128.png'
import icono_marcas from '../../assets/iconos/icono_marca_white_128.png'
import icono_configuracion from '../../assets/iconos/icono_configuracion_white_128.png'
import icono_digital from '../../assets/iconos/icono_digital_white_128.png'

export default function AreasTrabajo ({proporcional}){

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 170 / proporcional, paddingBottom: 120 / proporcional, paddingLeft: 300 / proporcional, paddingRight: 300 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '22%', height: 'auto'}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                        <div className='rounded-circle' style={{width: 115 / proporcional, height: 115 / proporcional, background: '#172bde', marginBottom: 23 / proporcional}}>
                            <img src={icono_design} style={{width: 48 / proporcional, height: 48 / proporcional, margin: 33.5 / proporcional}}/>
                        </div>
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <p style={{fontSize: 22 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 20 / proporcional, marginTop: 9 / proporcional, fontWeight: 800,
                                color: 'rgb(22, 36, 65)', textAlign: 'center'}}>
                            Diseño
                        </p>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 400,
                                color: 'rgb(117, 117, 117)', textAlign: 'center'}}>
                            Lorem ipsum dolor sit amet, consectetuer pelletesque sed diam, nonummy nibh.
                        </p>
                    </div>
                </div>
                <div style={{width: '22%', height: 'auto'}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                        <div className='rounded-circle' style={{width: 115 / proporcional, height: 115 / proporcional, background: '#172bde', marginBottom: 23 / proporcional}}>
                            <img src={icono_marcas} style={{width: 48 / proporcional, height: 48 / proporcional, margin: 33.5 / proporcional}}/>
                        </div>
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <p style={{fontSize: 22 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 20 / proporcional, marginTop: 9 / proporcional, fontWeight: 800,
                                color: 'rgb(22, 36, 65)', textAlign: 'center'}}>
                            Marca
                        </p>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 400,
                                color: 'rgb(117, 117, 117)', textAlign: 'center'}}>
                            Lorem ipsum dolor sit amet, consectetuer pelletesque sed diam, nonummy nibh.
                        </p>
                    </div>
                </div>
                <div style={{width: '22%', height: 'auto'}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                        <div className='rounded-circle' style={{width: 115 / proporcional, height: 115 / proporcional, background: '#172bde', marginBottom: 23 / proporcional}}>
                            <img src={icono_configuracion} style={{width: 48 / proporcional, height: 48 / proporcional, margin: 33.5 / proporcional}}/>
                        </div>
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <p style={{fontSize: 22 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 20 / proporcional, marginTop: 9 / proporcional, fontWeight: 800,
                                color: 'rgb(22, 36, 65)', textAlign: 'center'}}>
                            Gestión
                        </p>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 400,
                                color: 'rgb(117, 117, 117)', textAlign: 'center'}}>
                            Lorem ipsum dolor sit amet, consectetuer pelletesque sed diam, nonummy nibh.
                        </p>
                    </div>
                </div>
                <div style={{width: '22%', height: 'auto'}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                        <div className='rounded-circle' style={{width: 115 / proporcional, height: 115 / proporcional, background: '#172bde', marginBottom: 23 / proporcional}}>
                            <img src={icono_digital} style={{width: 48 / proporcional, height: 48 / proporcional, margin: 33.5 / proporcional}}/>
                        </div>
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <p style={{fontSize: 22 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 20 / proporcional, marginTop: 9 / proporcional, fontWeight: 800,
                                color: 'rgb(22, 36, 65)', textAlign: 'center'}}>
                            Digital
                        </p>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 400,
                                color: 'rgb(117, 117, 117)', textAlign: 'center'}}>
                            Lorem ipsum dolor sit amet, consectetuer pelletesque sed diam, nonummy nibh.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
} 