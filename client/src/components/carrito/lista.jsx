import React from 'react'

import icono_cross_black from '../../assets/iconos/icono_cross_black_96.png'
import icono_plus_black from '../../assets/iconos/icono_plus_black_96.png'
import icono_minus_black from '../../assets/iconos/icono_minus_black_96.png'

export default function ListaProductos({proporcional}){

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto', padding: `${150 / proporcional}px ${300 / proporcional}px ${150 / proporcional}px ${300 / proporcional}px`}}>
                <div style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex' style={{width: '100%', height: 50 / proporcional, borderBottom: '1px solid #dbe4eb'}}>
                        <div style={{width: '10%', height: 50 / proporcional}}/>
                        <div style={{width: '10%', height: 50 / proporcional}}/>
                        <div style={{width: '35%', height: 50 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginTop: 10 / proporcional, marginBottom: 10 / proporcional,
                                    color: 'rgb(22, 36, 65)', fontWeight: 700, fontFamily: 'Hind, sans-serif'}}>
                                Producto
                            </p>
                        </div>
                        <div style={{width: '15%', height: 50 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginTop: 10 / proporcional, marginBottom: 10 / proporcional,
                                    color: 'rgb(22, 36, 65)', fontWeight: 700, fontFamily: 'Hind, sans-serif'}}>
                                Precio
                            </p>
                        </div>
                        <div style={{width: '15%', height: 50 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginTop: 10 / proporcional, marginBottom: 10 / proporcional,
                                    color: 'rgb(22, 36, 65)', fontWeight: 700, fontFamily: 'Hind, sans-serif'}}>
                                Cantidad
                            </p>
                        </div>
                        <div style={{width: '15%', height: 50 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginTop: 10 / proporcional, marginBottom: 10 / proporcional,
                                    color: 'rgb(22, 36, 65)', fontWeight: 700, fontFamily: 'Hind, sans-serif'}}>
                                Subtotal
                            </p>
                        </div>
                    </div>
                    <div className='d-flex' style={{width: '100%', height: 140 / proporcional, borderBottom: '1px solid #dbe4eb'}}>
                        <div className='d-flex justify-content-center' style={{width: '10%', height: 140 / proporcional, padding: `${25 / proporcional}px ${10 / proporcional}px ${25 / proporcional}px ${10 / proporcional}px`}}>
                            <img src={icono_cross_black} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 35 / proporcional, marginBottom: 35 / proporcional}}/>
                        </div>
                        <div className='d-flex' style={{width: '10%', height: 140 / proporcional, padding: `${25 / proporcional}px ${10 / proporcional}px ${25 / proporcional}px ${0 / proporcional}px`}}>
                            <div style={{width: 90 / proporcional, height: 90 / proporcional, background: '#dbe4eb'}}/>
                        </div>
                        <div className='d-flex' style={{width: '35%', height: 140 / proporcional, padding: `${25 / proporcional}px ${10 / proporcional}px ${25 / proporcional}px ${0 / proporcional}px`}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${90 / proporcional}px`, marginBottom: 0, 
                                        color: 'rgb(22, 36, 65)', fontWeight: 400, fontFamily: 'Hind, sans-serif'}}>
                                Radio
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '15%', height: 140 / proporcional, padding: `${25 / proporcional}px ${10 / proporcional}px ${25 / proporcional}px ${0 / proporcional}px`}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${90 / proporcional}px`, marginBottom: 0, 
                                        color: 'rgb(136, 136, 136)', fontWeight: 400, fontFamily: 'Hind, sans-serif'}}>
                                S/. 300
                            </p>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '15%', height: 140 / proporcional, padding: `${25 / proporcional}px ${10 / proporcional}px ${25 / proporcional}px ${0 / proporcional}px`}}>
                            
                        </div>
                        <div className='d-flex' style={{width: '15%', height: 140 / proporcional, padding: `${25 / proporcional}px ${10 / proporcional}px ${25 / proporcional}px ${0 / proporcional}px`}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${90 / proporcional}px`, marginBottom: 0, 
                                        color: 'rgb(136, 136, 136)', fontWeight: 400, fontFamily: 'Hind, sans-serif'}}>
                                S/. 300
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}