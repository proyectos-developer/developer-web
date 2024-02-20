import React, { useState } from 'react'

import icono_user_white from '../../assets/iconos/icono_user_white_96.png'
import icono_shop_white from '../../assets/iconos/icono_shop_white_96.png'
import icono_search_white from '../../assets/iconos/icono_search_white_96.png'
import icono_user_black from '../../assets/iconos/icono_user_black_96.png'
import icono_shop_black from '../../assets/iconos/icono_shop_black_96.png'
import icono_search_black from '../../assets/iconos/icono_search_black_96.png'

import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { set_open_screen_search } from '../../redux/actions/dataactions'

export default function MenuSuperior ({proporcional, position}){

    const navigate = useNavigate()
    const dispatch = useDispatch ()

    const [menu_superior, setMenuSuperior] = useState('')

    const {open_screen_search} = useSelector(({data_reducer}) => data_reducer)

    return (
        <div style={{width: '100%', height: 100 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
            <div className='d-flex' style={{width: '100%', height: 100 / proporcional, paddingTop: 34 / proporcional, paddingBottom: 34 / proporcional}}>
                <div className='d-flex justify-content-start' style={{width: '20%', height: 32 / proporcional}}>
                    <p style={{fontSize: 32 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, color: position > 800 / proporcional ? 'black' : 'white', cursor: 'pointer', fontWeight: 700, fontFamily: 'Hind, sans-serif'}} onClick={() => navigate ('/')}>
                        REVOLUCION DIGITAL
                    </p>
                </div>
                <div className='d-flex justify-content-center' style={{width: '60%', height: 32 / proporcional}}>
                    <div style={{width: '10%', height: 32  / proporcional, cursor: 'pointer'}}
                        onMouseOver={() => setMenuSuperior('inicio')} onMouseLeave={() => setMenuSuperior('')}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
                                    color: position > 800 / proporcional ? 'black' : 'white'}} onClick={() => navigate ('/')}>
                            Inicio
                        </p>
                    </div>
                    <div style={{width: '10%', height: 32  / proporcional, cursor: 'pointer'}}
                        onMouseOver={() => setMenuSuperior('nosotros')} onMouseLeave={() => setMenuSuperior('')} onClick={() => navigate ('/sobre-nosotros')}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
                                    color: position > 800 / proporcional ? 'black' : 'white', textAlign: 'center'}}>
                            Nosotros
                        </p>
                    </div>
                    <div style={{width: '10%', height: 32  / proporcional, cursor: 'pointer'}}
                        onMouseOver={() => setMenuSuperior('servicios')} onMouseLeave={() => setMenuSuperior('')} onClick={() => navigate ('/nuestros-servicios') }>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
                                    color: position > 800 / proporcional ? 'black' : 'white', textAlign: 'center'}}>
                            Servicios
                        </p>
                    </div>
                    <div style={{width: '10%', height: 32  / proporcional, cursor: 'pointer'}}
                        onMouseOver={() => setMenuSuperior('portafolio')} onMouseLeave={() => setMenuSuperior('')} onClick={() => navigate ('/nuestro-portafolio')}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
                                    color: position > 800 / proporcional ? 'black' : 'white', textAlign: 'center'}}>
                            Portafolio
                        </p>
                    </div>
                    <div style={{width: '10%', height: 32  / proporcional, cursor: 'pointer'}}
                        onMouseOver={() => setMenuSuperior('blog')} onMouseLeave={() => setMenuSuperior('')} onClick={() => navigate ('/blog')}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
                                    color: position > 800 / proporcional ? 'black' : 'white', textAlign: 'center'}}>
                            Blog
                        </p>
                    </div>
                    <div style={{width: '10%', height: 32  / proporcional, cursor: 'pointer'}}
                        onMouseOver={() => setMenuSuperior('tienda')} onMouseLeave={() => setMenuSuperior('')} onClick={() => navigate ('/tienda')}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
                                    color: position > 800 / proporcional ? 'black' : 'white', textAlign: 'center'}}>
                            Tienda
                        </p>
                    </div>
                    <div style={{width: '10%', height: 32  / proporcional, cursor: 'pointer'}}
                        onMouseOver={() => setMenuSuperior('contacto')} onMouseLeave={() => setMenuSuperior('')} onClick={() => navigate ('/contactanos')}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
                                    color: position > 800 / proporcional ? 'black' : 'white', textAlign: 'center'}}>
                            Contáctanos
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-end' style={{width: '20%', height: 32 / proporcional}}>
                    <img src={position > 800 / proporcional ? icono_search_black : icono_search_white} 
                            style={{width: 22 / proporcional, height: 22 / proporcional, marginRight: 10 / proporcional, margin: 5 / proporcional, cursor: 'pointer'}}
                            onMouseOver={() => setMenuSuperior('mi-cuenta')} onMouseLeave={() => setMenuSuperior('')}
                            onClick={() => dispatch (set_open_screen_search(!open_screen_search))}/>
                    <img src={position > 800 / proporcional ? icono_user_black : icono_user_white} 
                            style={{width: 22 / proporcional, height: 22 / proporcional, marginRight: 10 / proporcional, margin: 5 / proporcional, cursor: 'pointer'}} 
                            onMouseOver={() => setMenuSuperior('mi-cuenta')} onMouseLeave={() => setMenuSuperior('')}
                            onClick={() => navigate ('/mi-cuenta')}/>
                    <img src={position > 800 / proporcional ? icono_shop_black : icono_shop_white} 
                            style={{width: 22 / proporcional, height: 22 / proporcional, margin: 5 / proporcional, cursor: 'pointer'}} 
                            onMouseOver={() => setMenuSuperior('mi-cuenta')} onMouseLeave={() => setMenuSuperior('')}
                            onClick={() => navigate ('/mi-cuenta')}/>
                </div>
            </div>
        </div>
    )
}