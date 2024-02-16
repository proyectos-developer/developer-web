import React, { useState } from 'react'

import icono_facebook from '../../assets/iconos/icono_facebook_white_96.png'
import icono_instagram from '../../assets/iconos/icono_instagram_white_96.png'
import icono_twitter from '../../assets/iconos/icono_twitter_white_96.png'
import icono_tiktok from '../../assets/iconos/icono_tiktok_white_96.png'
import icono_linkedin from '../../assets/iconos/icono_linkedin_white_96.png'

import icono_dot_white from '../../assets/iconos/icono_dot_white_96.png'
import arrow_right from '../../assets/iconos/icono_arrow_right_white_96.png'

export default function FooterPrincipal ({proporcional}){

    const [suscripcion, setSuscripcion] = useState('')

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto', background: 'rgba(23, 43, 222, 2)', paddingTop: 121 / proporcional, paddingBottom: 121 / proporcional, 
                    paddingLeft: 180 / proporcional, paddingRight: 180 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '25%', height: 'auto'}}>
                        <div style={{width: 'auto', height: 30 / proporcional, marginBottom: 16 / proporcional}}>
                            <p style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, fontWeight: 800, color: 'white',
                                fontFamily: 'Montserrat, sans-serif'}}>
                                REVOLUCIÓN DIGITAL
                            </p>
                        </div>
                        <div style={{width: '80%', height: 'auto', marginBottom: 17 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Hind sans-serif', color: 'rgb(177, 178, 178)', fontWeight: 400}}>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenenan commodo ligula eget dolor. Aenean massa. Cum sociis Them natoque penatibus et magnis dis.
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 25 / proporcional}}>
                            <img src={icono_facebook} style={{width: 25 / proporcional, height: 25 / proporcional, marginRight: 5 / proporcional, cursor: 'pointer'}}/>
                            <img src={icono_instagram} style={{width: 25 / proporcional, height: 25 / proporcional, marginRight: 5 / proporcional, cursor: 'pointer'}}/>
                            <img src={icono_twitter} style={{width: 25 / proporcional, height: 25 / proporcional, marginRight: 5 / proporcional, cursor: 'pointer'}}/>
                            <img src={icono_tiktok} style={{width: 25 / proporcional, height: 25 / proporcional, marginRight: 5 / proporcional, cursor: 'pointer'}}/>
                            <img src={icono_linkedin} style={{width: 25 / proporcional, height: 25 / proporcional, marginRight: 5 / proporcional, cursor: 'pointer'}}/>
                        </div>
                    </div>
                    <div style={{width: '25%', height: 'auto'}}>
                        <div style={{width: 'auto', height: 30 / proporcional, marginBottom: 16 / proporcional}}>
                            <p style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 800, color: 'white', fontFamily: 'Montserrat, sans-serif',
                                    marginBottom: 0}}>
                                Menú
                            </p>
                        </div>
                        <div className='' style={{width: '80%', height: 'auto'}}>
                            <div className='d-flex' style={{width: '100%', height: 34 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional, cursor: 'pointer'}}>
                                <img src={icono_dot_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 5 / proporcional, marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Hind, sans-serif',
                                    color: 'rgb(177, 178, 178)'}}>
                                    Inicio
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 34 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional, cursor: 'pointer'}}>
                                <img src={icono_dot_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 5 / proporcional, marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Hind, sans-serif',
                                    color: 'rgb(177, 178, 178)'}}>
                                    Nosotros
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 34 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional, cursor: 'pointer'}}>
                                <img src={icono_dot_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 5 / proporcional, marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Hind, sans-serif',
                                    color: 'rgb(177, 178, 178)'}}>
                                    Servicios
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 34 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional, cursor: 'pointer'}}>
                                <img src={icono_dot_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 5 / proporcional, marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Hind, sans-serif',
                                    color: 'rgb(177, 178, 178)'}}>
                                    Portafolio
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 34 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional, cursor: 'pointer'}}>
                                <img src={icono_dot_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 5 / proporcional, marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Hind, sans-serif',
                                    color: 'rgb(177, 178, 178)'}}>
                                    Blog
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 34 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional, cursor: 'pointer'}}>
                                <img src={icono_dot_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 5 / proporcional, marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Hind, sans-serif',
                                    color: 'rgb(177, 178, 178)'}}>
                                    Contáctanos
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '25%', height: 'auto'}}>
                        <div style={{width: 'auto', height: 30 / proporcional, marginBottom: 16 / proporcional}}>
                            <p style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 800, color: 'white', fontFamily: 'Montserrat, sans-serif',
                                    marginBottom: 0}}>
                                Nuestros Servicios
                            </p>
                        </div>
                        <div className='' style={{width: '80%', height: 'auto'}}>
                            <div className='d-flex' style={{width: '100%', height: 34 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional, cursor: 'pointer'}}>
                                <img src={icono_dot_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 5 / proporcional, marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Hind, sans-serif',
                                    color: 'rgb(177, 178, 178)'}}>
                                    Diseño web
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 34 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional, cursor: 'pointer'}}>
                                <img src={icono_dot_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 5 / proporcional, marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Hind, sans-serif',
                                    color: 'rgb(177, 178, 178)'}}>
                                    Desarrollo de apps móviles
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 34 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional, cursor: 'pointer'}}>
                                <img src={icono_dot_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 5 / proporcional, marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Hind, sans-serif',
                                    color: 'rgb(177, 178, 178)'}}>
                                    Marketing digital
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 34 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional, cursor: 'pointer'}}>
                                <img src={icono_dot_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 5 / proporcional, marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Hind, sans-serif',
                                    color: 'rgb(177, 178, 178)'}}>
                                    Sofware a medida
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 34 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional, cursor: 'pointer'}}>
                                <img src={icono_dot_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 5 / proporcional, marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Hind, sans-serif',
                                    color: 'rgb(177, 178, 178)'}}>
                                    Branding
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '25%', height: 'auto'}}>
                        <div style={{width: 'auto', height: 30 / proporcional, marginBottom: 16 / proporcional}}>
                            <p style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 800, color: 'white', fontFamily: 'Montserrat, sans-serif',
                                    marginBottom: 0}}>
                                Instagram
                            </p>
                        </div>
                        <div className='d-flex justify-content-between' style={{width: 380 / proporcional, height: 105 / proporcional, marginBottom: 17 / proporcional}}>
                            <div style={{width: '23%', height: 105 / proporcional}}>
                                <div className='rounded' style={{width: '100%', height: 105 / proporcional, background: '#dbe4eb'}}/>
                            </div>
                            <div style={{width: '23%', height: 105 / proporcional}}>
                                <div className='rounded' style={{width: '100%', height: 105 / proporcional, background: '#dbe4eb'}}/>
                            </div>
                            <div style={{width: '23%', height: 105 / proporcional}}>
                                <div className='rounded' style={{width: '100%', height: 105 / proporcional, background: '#dbe4eb'}}/>
                            </div>
                            <div style={{width: '23%', height: 105 / proporcional}}>
                                <div className='rounded' style={{width: '100%', height: 105 / proporcional, background: '#dbe4eb'}}/>
                            </div>
                        </div>
                        <div style={{width: 380 / proporcional, height: 90 / proporcional}}>
                            <div style={{width: 'auto', height: 30 / proporcional, marginBottom: 20 / proporcional}}>
                                <p style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 800, color: 'white', fontFamily: 'Montserrat, sans-serif',
                                        marginBottom: 0}}>
                                    Noticias
                                </p>
                            </div>
                            <div className='d-flex' style={{width: 305 / proporcional, height: 40 / proporcional, background: 'white', borderRadius: 8 / proporcional}}>
                                <input 
                                    type='e-mail'
                                    className='form-control border-0'
                                    style={{width: 305 / proporcional, height: 40 / proporcional, fontSize: 12 / proporcional, color: 'rgb(170, 170, 170)', fontFamily: 'Rubix, sans-serif',
                                            fontWeight: 300}}
                                    value={suscripcion}
                                    onChange={(event) => setSuscripcion(event.target.value)}
                                    id='suscripcion'
                                    placeholder='Tu e-mail'/>
                                <div className='' style={{width: 40 / proporcional, height: 40 / proporcional, background: '#000000', cursor: 'pointer'}}>
                                    <img src={arrow_right} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 10 / proporcional}}/>
                                </div>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}