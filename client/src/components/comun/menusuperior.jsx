import React, { useState } from 'react'

import icono_user from '../../assets/iconos/icono_user_white_96.png'
import icono_shop from '../../assets/iconos/icono_shop_white_96.png'
import icono_search from '../../assets/iconos/icono_search_white_96.png'

export default function MenuSuperior ({proporcional}){

    const [menu_superior, setMenuSuperior] = useState('')

    return (
        <div style={{width: '100%', height: 100 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
            <div className='d-flex' style={{width: '100%', height: 100 / proporcional, paddingTop: 34 / proporcional, paddingBottom: 34 / proporcional}}>
                <div className='d-flex justify-content-start' style={{width: '20%', height: 32 / proporcional}}>
                    <p style={{fontSize: 32 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, color: '#ffffff', cursor: 'pointer', fontWeight: 700,
                        fontFamily: 'Hind, sans-serif'}}>
                        REVOLUCION DIGITAL
                    </p>
                </div>
                <div className='d-flex justify-content-center' style={{width: '60%', height: 32 / proporcional}}>
                    <div style={{width: '10%', height: 32  / proporcional, cursor: 'pointer'}}
                        onMouseOver={() => setMenuSuperior('inicio')} onMouseLeave={() => setMenuSuperior('')}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
                                    color: '#ffffff'}}>
                            Inicio
                        </p>
                    </div>
                    <div style={{width: '10%', height: 32  / proporcional, cursor: 'pointer'}}
                        onMouseOver={() => setMenuSuperior('inicio')} onMouseLeave={() => setMenuSuperior('')}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
                                    color: '#ffffff'}}>
                            Nosotros
                        </p>
                    </div>
                    <div style={{width: '10%', height: 32  / proporcional, cursor: 'pointer'}}
                        onMouseOver={() => setMenuSuperior('inicio')} onMouseLeave={() => setMenuSuperior('')}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
                                    color: '#ffffff'}}>
                            Servicios
                        </p>
                    </div>
                    <div style={{width: '10%', height: 32  / proporcional, cursor: 'pointer'}}
                        onMouseOver={() => setMenuSuperior('inicio')} onMouseLeave={() => setMenuSuperior('')}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
                                    color: '#ffffff'}}>
                            Portafolio
                        </p>
                    </div>
                    <div style={{width: '10%', height: 32  / proporcional, cursor: 'pointer'}}
                        onMouseOver={() => setMenuSuperior('inicio')} onMouseLeave={() => setMenuSuperior('')}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
                                    color: '#ffffff'}}>
                            Blog
                        </p>
                    </div>
                    <div style={{width: '10%', height: 32  / proporcional, cursor: 'pointer'}}
                        onMouseOver={() => setMenuSuperior('inicio')} onMouseLeave={() => setMenuSuperior('')}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
                                    color: '#ffffff'}}>
                            Contáctanos
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-end' style={{width: '20%', height: 32 / proporcional}}>
                    <img src={icono_search} style={{width: 22 / proporcional, height: 22 / proporcional, marginRight: 10 / proporcional, cursor: 'pointer',
                            margin: 5 / proporcional}}/>
                    <img src={icono_user} style={{width: 22 / proporcional, height: 22 / proporcional, marginRight: 10 / proporcional, cursor: 'pointer',
                            margin: 5 / proporcional}}/>
                    <img src={icono_shop} style={{width: 22 / proporcional, height: 22 / proporcional, cursor: 'pointer',
                            margin: 5 / proporcional}}/>
                </div>
            </div>
        </div>
    )
}