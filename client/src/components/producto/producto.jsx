import React, { useState } from 'react'

import icono_plus from '../../assets/iconos/icono_plus_black_96.png'
import icono_minus from '../../assets/iconos/icono_minus_black_96.png'

import icono_facebook from '../../assets/iconos/icono_facebook_black_96.png'
import icono_instagram from '../../assets/iconos/icono_instagram_black_96.png'
import icono_linkedin from '../../assets/iconos/icono_linkedin_black_96.png'
import icono_twitter from '../../assets/iconos/icono_twitter_black_96.png'
import icono_tiktok from '../../assets/iconos/icono_tiktok_black_96.png'
import { useNavigate } from 'react-router-dom'

export default function Producto ({proporcional}){

    const navigate = useNavigate()

    const [cantidad, setCantidad] = useState (1)

    const [show_add_cart, setShowAddCart] = useState (false)

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto', padding: `${130 / proporcional}px ${300 / proporcional}px ${130 / proporcional}px ${300 / proporcional}px`}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '49%', height: 'auto'}}>
                        <div className='position-relative' style={{width: '100%', height: 750 / proporcional, marginBottom: 20 / proporcional, background: '#dbe4eb'}}>
                            <div className='position-absolute rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, background: 'rgba(23, 43, 222, 1)',
                                top: 60 / proporcional, left: 60 / proporcional}}>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${120 / proporcional}px`, color: 'white', fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
                                        marginBottom: 0, textAlign: 'center'}}>
                                    50% Dcto.
                                </p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                            <div style={{width: '31%', height: 'auto'}}>
                                <div style={{width: '100%', height: 205 / proporcional, background: '#dbe4eb'}}/>
                            </div>
                            <div style={{width: '31%', height: 'auto'}}>
                                <div style={{width: '100%', height: 205 / proporcional, background: '#dbe4eb'}}/>
                            </div>
                            <div style={{width: '31%', height: 'auto'}}>
                                <div style={{width: '100%', height: 205 / proporcional, background: '#dbe4eb'}}/>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '49%', height: 'auto'}}>
                        <p style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 16 / proporcional, color: 'rgb(22, 36, 65)', fontWeight: 800,
                            fontFamily: 'Montserrat, sans-serif'}}>
                            Producto
                        </p>
                        <div className='d-flex' style={{width: '100%', height: 50 / proporcional, marginBottom: 26 / proporcional}}>
                            <div style={{width: '25%', height: 'auto'}}>
                                <p style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, color: '#2d572c', fontWeight: 800, fontFamily: 'Montserrat, sans-serif', marginBottom: 0,
                                    textDecoration: 'line-through'}}>
                                    S/. 600
                                </p>
                            </div>
                            <div style={{width: '25%', height: 'auto'}}>
                                <p style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, color: '#2d572c', fontWeight: 800, fontFamily: 'Montserrat, sans-serif', marginBottom: 0}}>
                                    S/. 300
                                </p>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 31 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: 'rgb(136, 136, 136)', fontWeight: 400}}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididut ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exertcitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor inreprehenderit involuptate velit esse cillum dolore eu.
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 50 / proporcional, marginBottom: 50 / proporcional}}>
                            <div className='d-flex rounded' style={{width: 150 / proporcional, height: 50 / proporcional, marginRight: 20 / proporcional}}>
                                <input 
                                    type='number'
                                    className='form-control'
                                    style={{width: 100 / proporcional, height: 50 / proporcional, fontSize: 18 / proporcional, border: '1px solid rgb(225, 225, 225)', color: 'rgb(136, 136, 136)',
                                        borderRadius: 0}}
                                    value={cantidad}
                                    onChange={(event) => setCantidad (event.target.value)}
                                    placeholder='1' />
                                <div style={{width: 50 / proporcional, height: 50 / proporcional, border: '1px solid rgb(225, 225, 225)', borderLeft: 'none'}}>
                                    <div className='d-flex justify-content-center' style={{width: 50 / proporcional, height: 25 / proporcional, borderBottom: '1px solid rgb(225, 225, 225)', }}>
                                        <img src={icono_plus} style={{width: 14 / proporcional, height: 14 / proporcional, margin: 4.5 / proporcional, cursor: 'pointer'}}/>
                                    </div>
                                    <div className='d-flex justify-content-center' style={{width: 50 / proporcional, height: 25 / proporcional}}>
                                        <img src={icono_minus} style={{width: 14 / proporcional, height: 14 / proporcional, margin: 4.5 / proporcional, cursor: 'pointer'}}/>

                                    </div>
                                </div>
                            </div>
                            <button className='btn' style={{width: 200 / proporcional, height: 50 / proporcional, background: '#2d572c', color: 'white', fontSize: 18 / proporcional, fontWeight: 800}}>
                                Agregar a carrito
                            </button>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 33 / proporcional}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 19 / proporcional, color: 'rgb(22, 36, 65)', fontWeight: 800,
                                fontFamily: 'Montserrat, sans-serif'}}>
                                Información
                            </p>
                            <div className='d-flex' style={{width: '100%', height: 30 / proporcional, marginTop: 11 / proporcional, marginBottom: 11 / proporcional}}>
                                <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: 'rgb(22, 36, 65)', fontWeight: 800,
                                    fontFamily: 'Montserrat, sans-serif', marginRight: 10 / proporcional}}>
                                    SKU:
                                </p>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: 'rgb(170, 170, 170)', fontWeight: 400,
                                    fontFamily: 'Montserrat, sans-serif'}}>
                                    403
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 30 / proporcional, marginTop: 11 / proporcional, marginBottom: 11 / proporcional}}>
                                <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: 'rgb(22, 36, 65)', fontWeight: 800,
                                    fontFamily: 'Montserrat, sans-serif', marginRight: 10 / proporcional}}>
                                    Categoría:
                                </p>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: 'rgb(170, 170, 170)', fontWeight: 400,
                                    fontFamily: 'Montserrat, sans-serif'}}>
                                    Electrónica
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 30 / proporcional, marginTop: 11 / proporcional, marginBottom: 11 / proporcional}}>
                                <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: 'rgb(22, 36, 65)', fontWeight: 800,
                                    fontFamily: 'Montserrat, sans-serif', marginRight: 10 / proporcional}}>
                                    Tags:
                                </p>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: 'rgb(170, 170, 170)', fontWeight: 400,
                                    fontFamily: 'Montserrat, sans-serif'}}>
                                    Sciencia, tecnología
                                </p>
                            </div>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 30 / proporcional, marginBottom: 23 / proporcional}}>
                            <p style={{fontSize: 22 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Hind, sans-serif', color: 'rgb(22, 36, 65)',
                                fontWeight: 800, marginRight: 10 / proporcional}}>
                                Compartir:
                            </p>
                            <div className='d-flex justify-content-start' style={{width: '100%', height: 26 / proporcional}}>
                                <img src={icono_facebook} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 3 / proporcional, cursor: 'pointer', marginRight: 10 / proporcional}}/>
                                <img src={icono_twitter} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 3 / proporcional, cursor: 'pointer', marginRight: 10 / proporcional}}/>
                                <img src={icono_instagram} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 3 / proporcional, cursor: 'pointer', marginRight: 10 / proporcional}}/>
                                <img src={icono_tiktok} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 3 / proporcional, cursor: 'pointer', marginRight: 10 / proporcional}}/>
                                <img src={icono_linkedin} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 3 / proporcional, cursor: 'pointer', marginRight: 10 / proporcional}}/>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between' style={{width: '100%', height: 48 / proporcional, marginBottom: 10 / proporcional}}>
                            <div style={{width: '33%', height: 48 / proporcional}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 800, color: '#2d572c', fontFamily: 'Hind, sans-serif',
                                    marginBottom: 0, marginTop: 13 / proporcional, marginBottom: 13 / proporcional}}>
                                    Descripción
                                </p>
                                <div className='rounded' style={{width: '50%', height: 2 / proporcional, background: '#2d572c'}}/>
                            </div>
                            <div style={{width: '33%', height: 48 / proporcional}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 800, color: 'rgb(221, 221, 221)', fontFamily: 'Hind, sans-serif',
                                    marginBottom: 0, marginTop: 13 / proporcional, marginBottom: 13 / proporcional, textAlign: 'center'}}>
                                    Información adicional
                                </p>
                            </div>
                            <div style={{width: '33%', height: 48 / proporcional}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 800, color: 'rgb(221, 221, 221)', fontFamily: 'Hind, sans-serif',
                                    marginBottom: 0, marginTop: 13 / proporcional, marginBottom: 13 / proporcional, textAlign: 'end'}}>
                                    Revisiones(0)
                                </p>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 'auto', paddingTop: 18 / proporcional, paddingBottom: 20 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, color: 'rgb(136, 136, 136)', fontFamily: 'Hind, sans-serif',
                                marginBottom: 0}}>
                                Lorem ipsum dolor sit amet conse ctetuer adipiscing elit, sed diam noum nibhie eismod. 
                                Facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent lupatum zzril delenit augue duis dolore te feugait nulla facilisi.
                                 Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '100%', height: 30 / proporcional, marginTop: 20 / proporcional, marginBottom: 29 / proporcional}}>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: 'rgb(22, 36, 65)', fontWeight: 800,
                            fontFamily: 'Montserrat, sans-serif'}}>
                            Productos Relacionados
                        </p>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '24%', height: 'auto', cursor: 'pointer'}} onClick={() => navigate ('/producto/producto/sku')}>
                            <div className='position-relative' style={{width: '100%', height: 305 / proporcional, marginBottom: 15 / proporcional}}
                                onMouseOver={() => setShowAddCart(true)} onMouseLeave={() => setShowAddCart(false)}>
                                <div style={{width: '100%', height: 305 / proporcional, background: '#dbe4eb'}}/>
                                {
                                    show_add_cart ? (
                                        <div className='position-absolute start-0' style={{width: '100%', height: 50 / proporcional, top: 255 / proporcional}}>
                                            <button className='btn' style={{width: '100%', height: 50 / proporcional, top: 255 / proporcional, background: 'rgba(23, 43, 222, 1)',
                                                fontSize: 18 / proporcional, color: 'white'}}>
                                                Agregar a carrito
                                            </button>
                                        </div>
                                    ) : null
                                }
                            </div>
                            <div style={{width: '100%', height: 'auto'}}>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 30 / proporcional}}>
                                    <div className='d-flex justify-content-start' style={{width: '49%', height: 30 / proporcional, marginBottom: 3 / proporcional}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: 'rgb(22, 36, 65)', fontWeight: 800,
                                            fontFamily: 'Montserrat, sans-serif'}}>
                                            Tivoli Audio
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: '49%', height: 30 / proporcional}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: 'rgb(22, 36, 65)', fontWeight: 800,
                                            fontFamily: 'Montserrat, sans-serif'}}>
                                            S/. 600
                                        </p>
                                    </div>
                                </div>
                                <div style={{width: '100%', height: 'auto'}}>
                                    <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: '#888888', fontWeight: 600,
                                        fontFamily: 'Montserrat, sans-serif'}}>
                                        ELECTRÓNICA
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div style={{width: '24%', height: 'auto', cursor: 'pointer'}} onClick={() => navigate ('/producto/producto/sku')}>
                            <div className='position-relative' style={{width: '100%', height: 305 / proporcional, marginBottom: 15 / proporcional}}
                                onMouseOver={() => setShowAddCart(true)} onMouseLeave={() => setShowAddCart(false)}>
                                <div style={{width: '100%', height: 305 / proporcional, background: '#dbe4eb'}}/>
                                {
                                    show_add_cart ? (
                                        <div className='position-absolute start-0' style={{width: '100%', height: 50 / proporcional, top: 255 / proporcional}}>
                                            <button className='btn' style={{width: '100%', height: 50 / proporcional, top: 255 / proporcional, background: 'rgba(23, 43, 222, 1)',
                                                fontSize: 18 / proporcional, color: 'white'}}>
                                                Agregar a carrito
                                            </button>
                                        </div>
                                    ) : null
                                }
                            </div>
                            <div style={{width: '100%', height: 'auto'}}>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 30 / proporcional}}>
                                    <div className='d-flex justify-content-start' style={{width: '49%', height: 30 / proporcional, marginBottom: 3 / proporcional}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: 'rgb(22, 36, 65)', fontWeight: 800,
                                            fontFamily: 'Montserrat, sans-serif'}}>
                                            Tivoli Audio
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: '49%', height: 30 / proporcional}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: 'rgb(22, 36, 65)', fontWeight: 800,
                                            fontFamily: 'Montserrat, sans-serif'}}>
                                            S/. 600
                                        </p>
                                    </div>
                                </div>
                                <div style={{width: '100%', height: 'auto'}}>
                                    <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: '#888888', fontWeight: 600,
                                        fontFamily: 'Montserrat, sans-serif'}}>
                                        ELECTRÓNICA
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div style={{width: '24%', height: 'auto', cursor: 'pointer'}} onClick={() => navigate ('/producto/producto/sku')}>
                            <div className='position-relative' style={{width: '100%', height: 305 / proporcional, marginBottom: 15 / proporcional}}
                                onMouseOver={() => setShowAddCart(true)} onMouseLeave={() => setShowAddCart(false)}>
                                <div style={{width: '100%', height: 305 / proporcional, background: '#dbe4eb'}}/>
                                {
                                    show_add_cart ? (
                                        <div className='position-absolute start-0' style={{width: '100%', height: 50 / proporcional, top: 255 / proporcional}}>
                                            <button className='btn' style={{width: '100%', height: 50 / proporcional, top: 255 / proporcional, background: 'rgba(23, 43, 222, 1)',
                                                fontSize: 18 / proporcional, color: 'white'}}>
                                                Agregar a carrito
                                            </button>
                                        </div>
                                    ) : null
                                }
                            </div>
                            <div style={{width: '100%', height: 'auto'}}>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 30 / proporcional}}>
                                    <div className='d-flex justify-content-start' style={{width: '49%', height: 30 / proporcional, marginBottom: 3 / proporcional}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: 'rgb(22, 36, 65)', fontWeight: 800,
                                            fontFamily: 'Montserrat, sans-serif'}}>
                                            Tivoli Audio
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: '49%', height: 30 / proporcional}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: 'rgb(22, 36, 65)', fontWeight: 800,
                                            fontFamily: 'Montserrat, sans-serif'}}>
                                            S/. 600
                                        </p>
                                    </div>
                                </div>
                                <div style={{width: '100%', height: 'auto'}}>
                                    <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: '#888888', fontWeight: 600,
                                        fontFamily: 'Montserrat, sans-serif'}}>
                                        ELECTRÓNICA
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div style={{width: '24%', height: 'auto', cursor: 'pointer'}} onClick={() => navigate ('/producto/producto/sku')}>
                            <div className='position-relative' style={{width: '100%', height: 305 / proporcional, marginBottom: 15 / proporcional}}
                                onMouseOver={() => setShowAddCart(true)} onMouseLeave={() => setShowAddCart(false)}>
                                <div style={{width: '100%', height: 305 / proporcional, background: '#dbe4eb'}}/>
                                {
                                    show_add_cart ? (
                                        <div className='position-absolute start-0' style={{width: '100%', height: 50 / proporcional, top: 255 / proporcional}}>
                                            <button className='btn' style={{width: '100%', height: 50 / proporcional, top: 255 / proporcional, background: 'rgba(23, 43, 222, 1)',
                                                fontSize: 18 / proporcional, color: 'white'}}>
                                                Agregar a carrito
                                            </button>
                                        </div>
                                    ) : null
                                }
                            </div>
                            <div style={{width: '100%', height: 'auto'}}>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 30 / proporcional}}>
                                    <div className='d-flex justify-content-start' style={{width: '49%', height: 30 / proporcional, marginBottom: 3 / proporcional}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: 'rgb(22, 36, 65)', fontWeight: 800,
                                            fontFamily: 'Montserrat, sans-serif'}}>
                                            Tivoli Audio
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: '49%', height: 30 / proporcional}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: 'rgb(22, 36, 65)', fontWeight: 800,
                                            fontFamily: 'Montserrat, sans-serif'}}>
                                            S/. 600
                                        </p>
                                    </div>
                                </div>
                                <div style={{width: '100%', height: 'auto'}}>
                                    <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: '#888888', fontWeight: 600,
                                        fontFamily: 'Montserrat, sans-serif'}}>
                                        ELECTRÓNICA
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}