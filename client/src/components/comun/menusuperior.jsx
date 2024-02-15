import React, { useState } from 'react'

export default function MenuSuperior ({proporcional}){

    const [menu_superior, setMenuSuperior] = useState('')

    return (
        <div style={{width: '100%', height: 100 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
            <div className='d-flex' style={{width: '100%', height: 100 / proporcional, paddingTop: 34 / proporcional, paddingBottom: 34 / proporcional}}>
                <div className='d-flex justify-content-start' style={{width: '20%', height: 32 / proporcional}}>
                    <p style={{fontSize: 32 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, color: '#000000', cursor: 'pointer', fontWeight: 700,
                        fontFamily: 'Hind, sans-serif'}}>
                        REVOLUCION DIGITAL
                    </p>
                </div>
                <div className='d-flex justify-content-center' style={{width: '60%', height: 32 / proporcional}}>
                    <div style={{width: '10%', height: 32  / proporcional, cursor: 'pointer'}}
                        onMouseOver={() => setMenuSuperior('inicio')} onMouseLeave={() => setMenuSuperior('')}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
                                    color: '#000000'}}>
                            Inicio
                        </p>
                    </div>
                    <div style={{width: '10%', height: 32  / proporcional, cursor: 'pointer'}}
                        onMouseOver={() => setMenuSuperior('inicio')} onMouseLeave={() => setMenuSuperior('')}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
                                    color: '#000000'}}>
                            Nosotros
                        </p>
                    </div>
                    <div style={{width: '10%', height: 32  / proporcional, cursor: 'pointer'}}
                        onMouseOver={() => setMenuSuperior('inicio')} onMouseLeave={() => setMenuSuperior('')}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
                                    color: '#000000'}}>
                            Servicios
                        </p>
                    </div>
                    <div style={{width: '10%', height: 32  / proporcional, cursor: 'pointer'}}
                        onMouseOver={() => setMenuSuperior('inicio')} onMouseLeave={() => setMenuSuperior('')}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
                                    color: '#000000'}}>
                            Portafolio
                        </p>
                    </div>
                    <div style={{width: '10%', height: 32  / proporcional, cursor: 'pointer'}}
                        onMouseOver={() => setMenuSuperior('inicio')} onMouseLeave={() => setMenuSuperior('')}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
                                    color: '#000000'}}>
                            Blog
                        </p>
                    </div>
                    <div style={{width: '10%', height: 32  / proporcional, cursor: 'pointer'}}
                        onMouseOver={() => setMenuSuperior('inicio')} onMouseLeave={() => setMenuSuperior('')}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
                                    color: '#000000'}}>
                            Contáctanos
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}