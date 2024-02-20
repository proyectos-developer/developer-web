import React, { useState } from 'react'

import icono_right from '../../assets/iconos/icono_right_two_96.png'
import icono_search from '../../assets/iconos/icono_search_black_96.png'

import icono_facebook from '../../assets/iconos/icono_facebook_black_96.png'
import icono_instagram from '../../assets/iconos/icono_instagram_black_96.png'
import icono_twitter from '../../assets/iconos/icono_twitter_black_96.png'
import icono_tiktok from '../../assets/iconos/icono_tiktok_black_96.png'
import icono_linkedin from '../../assets/iconos/icono_linkedin_black_96.png'
import { useNavigate } from 'react-router-dom'

export default function TiendaProductos ({proporcional}){

    const navigate = useNavigate()
    
    const [sorting, setSorting] = useState('')
    const [show_add_cart, setShowAddCart] = useState(false)

    const [searc_product, setSearchProducto] = useState('')
    const [rango_precio, setRangoPrecio] = useState(0)

    return (    
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto', paddingRight: 300 / proporcional, paddingLeft: 300 / proporcional, paddingTop: 130 / proporcional, paddingBottom: 130 / proporcional}}>
                <div className="d-flex justify-content-between" style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '76%', height: 'auto'}}>
                        <div className='d-flex justify-content-between' style={{width: '100%', height: 60 / proporcional, marginBottom: 30 / proporcional}}>
                            <div style={{width: '50%', height: 60 / proporcional}}>
                                <div style={{width: '100%', height: 60 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${60 / proporcional}px`, fontWeight: 800, color: '#162441', fontFamily: 'Montserrat, sans-serif',
                                            marginBottom: 0}}>
                                        Mostrando 1 - 12 de 18 Resultados
                                    </p>
                                </div>
                            </div>
                            <div style={{width: '50%', height: 60 / proporcional}}>
                                <div className='d-flex justify-content-end' style={{width: '100%', height: 60 / proporcional}}>
                                    <select
                                        className='form-select'
                                        value={sorting}
                                        onChange={(value) => setSorting(value)}
                                        id='sorting'
                                        style={{width: 300 / proporcional, height: 60 / proporcional, color: 'rgb (136, 136, 136)', fontFamily: 'Hind, sans-serif', fontWeight: 400,
                                                fontSize: 18 / proporcional, background: '#dbe4eb'}}>
                                        <option value='0'>Ordenar por</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <div style={{width: '31%', height: 'auto'}}>
                                    <div className='position-relative' style={{width: '100%', height: 305 / proporcional, marginBottom: 15 / proporcional, background: '#dbe4eb',
                                            cursor: 'pointer'}}
                                        onMouseOver={() => setShowAddCart(true)} onMouseLeave={() => setShowAddCart(false)}
                                        onClick={() => navigate ('/producto/producto/sku')}>
                                        {
                                            show_add_cart ? (
                                                <div className='position-absolute start-0' style={{width: '100%', height: 50 / proporcional, top: 255 / proporcional}}>
                                                    <button className='btn'
                                                        style={{width: '100%', height: 50 / proporcional, background: 'rgba(23, 43, 222, 1)', color: 'white', fontSize: 16 / proporcional,
                                                            color: 'white', fontWeight: 700}}>
                                                        Agregar a carrito
                                                    </button>
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                                            <div style={{width: '49%', height: 'auto', marginBottom: 3 / proporcional}}>
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 800, fontFamily: 'Montserrat, sans-serif',
                                                    color: 'rgb(22, 36, 65)', textAlign: 'start'}}>
                                                    Phone 
                                                </p>
                                            </div>
                                            <div style={{width: '49%', height: 'auto', marginBottom: 3 / proporcional}}>
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 800, fontFamily: 'Montserrat, sans-serif',
                                                    color: 'rgb(22, 36, 65)', textAlign: 'end'}}>
                                                    S/. 900 
                                                </p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto'}}>
                                            <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: '#888888', fontWeight: 600, fontFamily: 'Montserrat, sans-serif'}}>
                                                Electrónica
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{width: '31%', height: 'auto'}}>
                                    <div className='position-relative' style={{width: '100%', height: 305 / proporcional, marginBottom: 15 / proporcional, background: '#dbe4eb',
                                            cursor: 'pointer'}}
                                        onMouseOver={() => setShowAddCart(true)} onMouseLeave={() => setShowAddCart(false)}
                                        onClick={() => navigate ('/producto/producto/sku')}>
                                        {
                                            show_add_cart ? (
                                                <div className='position-absolute start-0' style={{width: '100%', height: 50 / proporcional, top: 255 / proporcional}}>
                                                    <button className='btn'
                                                        style={{width: '100%', height: 50 / proporcional, background: 'rgba(23, 43, 222, 1)', color: 'white', fontSize: 16 / proporcional,
                                                            color: 'white', fontWeight: 700}}>
                                                        Agregar a carrito
                                                    </button>
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                                            <div style={{width: '49%', height: 'auto', marginBottom: 3 / proporcional}}>
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 800, fontFamily: 'Montserrat, sans-serif',
                                                    color: 'rgb(22, 36, 65)', textAlign: 'start'}}>
                                                    Phone 
                                                </p>
                                            </div>
                                            <div style={{width: '49%', height: 'auto', marginBottom: 3 / proporcional}}>
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 800, fontFamily: 'Montserrat, sans-serif',
                                                    color: 'rgb(22, 36, 65)', textAlign: 'end'}}>
                                                    S/. 900 
                                                </p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto'}}>
                                            <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: '#888888', fontWeight: 600, fontFamily: 'Montserrat, sans-serif'}}>
                                                Electrónica
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{width: '31%', height: 'auto'}}>
                                    <div className='position-relative' style={{width: '100%', height: 305 / proporcional, marginBottom: 15 / proporcional, background: '#dbe4eb',
                                            cursor: 'pointer'}}
                                        onMouseOver={() => setShowAddCart(true)} onMouseLeave={() => setShowAddCart(false)}
                                        onClick={() => navigate ('/producto/producto/sku')}>
                                        {
                                            show_add_cart ? (
                                                <div className='position-absolute start-0' style={{width: '100%', height: 50 / proporcional, top: 255 / proporcional}}>
                                                    <button className='btn'
                                                        style={{width: '100%', height: 50 / proporcional, background: 'rgba(23, 43, 222, 1)', color: 'white', fontSize: 16 / proporcional,
                                                            color: 'white', fontWeight: 700}}>
                                                        Agregar a carrito
                                                    </button>
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                                            <div style={{width: '49%', height: 'auto', marginBottom: 3 / proporcional}}>
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 800, fontFamily: 'Montserrat, sans-serif',
                                                    color: 'rgb(22, 36, 65)', textAlign: 'start'}}>
                                                    Phone 
                                                </p>
                                            </div>
                                            <div style={{width: '49%', height: 'auto', marginBottom: 3 / proporcional}}>
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 800, fontFamily: 'Montserrat, sans-serif',
                                                    color: 'rgb(22, 36, 65)', textAlign: 'end'}}>
                                                    S/. 900 
                                                </p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto'}}>
                                            <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: '#888888', fontWeight: 600, fontFamily: 'Montserrat, sans-serif'}}>
                                                Electrónica
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <div style={{width: '31%', height: 'auto'}}>
                                    <div className='position-relative' style={{width: '100%', height: 305 / proporcional, marginBottom: 15 / proporcional, background: '#dbe4eb',
                                            cursor: 'pointer'}}
                                        onMouseOver={() => setShowAddCart(true)} onMouseLeave={() => setShowAddCart(false)}
                                        onClick={() => navigate ('/producto/producto/sku')}>
                                        {
                                            show_add_cart ? (
                                                <div className='position-absolute start-0' style={{width: '100%', height: 50 / proporcional, top: 255 / proporcional}}>
                                                    <button className='btn'
                                                        style={{width: '100%', height: 50 / proporcional, background: 'rgba(23, 43, 222, 1)', color: 'white', fontSize: 16 / proporcional,
                                                            color: 'white', fontWeight: 700}}>
                                                        Agregar a carrito
                                                    </button>
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                                            <div style={{width: '49%', height: 'auto', marginBottom: 3 / proporcional}}>
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 800, fontFamily: 'Montserrat, sans-serif',
                                                    color: 'rgb(22, 36, 65)', textAlign: 'start'}}>
                                                    Phone 
                                                </p>
                                            </div>
                                            <div style={{width: '49%', height: 'auto', marginBottom: 3 / proporcional}}>
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 800, fontFamily: 'Montserrat, sans-serif',
                                                    color: 'rgb(22, 36, 65)', textAlign: 'end'}}>
                                                    S/. 900 
                                                </p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto'}}>
                                            <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: '#888888', fontWeight: 600, fontFamily: 'Montserrat, sans-serif'}}>
                                                Electrónica
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{width: '31%', height: 'auto'}}>
                                    <div className='position-relative' style={{width: '100%', height: 305 / proporcional, marginBottom: 15 / proporcional, background: '#dbe4eb',
                                            cursor: 'pointer'}}
                                        onMouseOver={() => setShowAddCart(true)} onMouseLeave={() => setShowAddCart(false)}
                                        onClick={() => navigate ('/producto/producto/sku')}>
                                        {
                                            show_add_cart ? (
                                                <div className='position-absolute start-0' style={{width: '100%', height: 50 / proporcional, top: 255 / proporcional}}>
                                                    <button className='btn'
                                                        style={{width: '100%', height: 50 / proporcional, background: 'rgba(23, 43, 222, 1)', color: 'white', fontSize: 16 / proporcional,
                                                            color: 'white', fontWeight: 700}}>
                                                        Agregar a carrito
                                                    </button>
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                                            <div style={{width: '49%', height: 'auto', marginBottom: 3 / proporcional}}>
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 800, fontFamily: 'Montserrat, sans-serif',
                                                    color: 'rgb(22, 36, 65)', textAlign: 'start'}}>
                                                    Phone 
                                                </p>
                                            </div>
                                            <div style={{width: '49%', height: 'auto', marginBottom: 3 / proporcional}}>
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 800, fontFamily: 'Montserrat, sans-serif',
                                                    color: 'rgb(22, 36, 65)', textAlign: 'end'}}>
                                                    S/. 900 
                                                </p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto'}}>
                                            <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: '#888888', fontWeight: 600, fontFamily: 'Montserrat, sans-serif'}}>
                                                Electrónica
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{width: '31%', height: 'auto'}}>
                                    <div className='position-relative' style={{width: '100%', height: 305 / proporcional, marginBottom: 15 / proporcional, background: '#dbe4eb',
                                            cursor: 'pointer'}}
                                        onMouseOver={() => setShowAddCart(true)} onMouseLeave={() => setShowAddCart(false)}
                                        onClick={() => navigate ('/producto/producto/sku')}>
                                        {
                                            show_add_cart ? (
                                                <div className='position-absolute start-0' style={{width: '100%', height: 50 / proporcional, top: 255 / proporcional}}>
                                                    <button className='btn'
                                                        style={{width: '100%', height: 50 / proporcional, background: 'rgba(23, 43, 222, 1)', color: 'white', fontSize: 16 / proporcional,
                                                            color: 'white', fontWeight: 700}}>
                                                        Agregar a carrito
                                                    </button>
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                                            <div style={{width: '49%', height: 'auto', marginBottom: 3 / proporcional}}>
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 800, fontFamily: 'Montserrat, sans-serif',
                                                    color: 'rgb(22, 36, 65)', textAlign: 'start'}}>
                                                    Phone 
                                                </p>
                                            </div>
                                            <div style={{width: '49%', height: 'auto', marginBottom: 3 / proporcional}}>
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 800, fontFamily: 'Montserrat, sans-serif',
                                                    color: 'rgb(22, 36, 65)', textAlign: 'end'}}>
                                                    S/. 900 
                                                </p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto'}}>
                                            <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: '#888888', fontWeight: 600, fontFamily: 'Montserrat, sans-serif'}}>
                                                Electrónica
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <div style={{width: '31%', height: 'auto'}}>
                                    <div className='position-relative' style={{width: '100%', height: 305 / proporcional, marginBottom: 15 / proporcional, background: '#dbe4eb',
                                            cursor: 'pointer'}}
                                        onMouseOver={() => setShowAddCart(true)} onMouseLeave={() => setShowAddCart(false)}
                                        onClick={() => navigate ('/producto/producto/sku')}>
                                        {
                                            show_add_cart ? (
                                                <div className='position-absolute start-0' style={{width: '100%', height: 50 / proporcional, top: 255 / proporcional}}>
                                                    <button className='btn'
                                                        style={{width: '100%', height: 50 / proporcional, background: 'rgba(23, 43, 222, 1)', color: 'white', fontSize: 16 / proporcional,
                                                            color: 'white', fontWeight: 700}}>
                                                        Agregar a carrito
                                                    </button>
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                                            <div style={{width: '49%', height: 'auto', marginBottom: 3 / proporcional}}>
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 800, fontFamily: 'Montserrat, sans-serif',
                                                    color: 'rgb(22, 36, 65)', textAlign: 'start'}}>
                                                    Phone 
                                                </p>
                                            </div>
                                            <div style={{width: '49%', height: 'auto', marginBottom: 3 / proporcional}}>
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 800, fontFamily: 'Montserrat, sans-serif',
                                                    color: 'rgb(22, 36, 65)', textAlign: 'end'}}>
                                                    S/. 900 
                                                </p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto'}}>
                                            <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: '#888888', fontWeight: 600, fontFamily: 'Montserrat, sans-serif'}}>
                                                Electrónica
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{width: '31%', height: 'auto'}}>
                                    <div className='position-relative' style={{width: '100%', height: 305 / proporcional, marginBottom: 15 / proporcional, background: '#dbe4eb',
                                            cursor: 'pointer'}}
                                        onMouseOver={() => setShowAddCart(true)} onMouseLeave={() => setShowAddCart(false)}
                                        onClick={() => navigate ('/producto/producto/sku')}>
                                        {
                                            show_add_cart ? (
                                                <div className='position-absolute start-0' style={{width: '100%', height: 50 / proporcional, top: 255 / proporcional}}>
                                                    <button className='btn'
                                                        style={{width: '100%', height: 50 / proporcional, background: 'rgba(23, 43, 222, 1)', color: 'white', fontSize: 16 / proporcional,
                                                            color: 'white', fontWeight: 700}}>
                                                        Agregar a carrito
                                                    </button>
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                                            <div style={{width: '49%', height: 'auto', marginBottom: 3 / proporcional}}>
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 800, fontFamily: 'Montserrat, sans-serif',
                                                    color: 'rgb(22, 36, 65)', textAlign: 'start'}}>
                                                    Phone 
                                                </p>
                                            </div>
                                            <div style={{width: '49%', height: 'auto', marginBottom: 3 / proporcional}}>
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 800, fontFamily: 'Montserrat, sans-serif',
                                                    color: 'rgb(22, 36, 65)', textAlign: 'end'}}>
                                                    S/. 900 
                                                </p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto'}}>
                                            <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: '#888888', fontWeight: 600, fontFamily: 'Montserrat, sans-serif'}}>
                                                Electrónica
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{width: '31%', height: 'auto'}}>
                                    <div className='position-relative' style={{width: '100%', height: 305 / proporcional, marginBottom: 15 / proporcional, background: '#dbe4eb',
                                            cursor: 'pointer'}}
                                        onMouseOver={() => setShowAddCart(true)} onMouseLeave={() => setShowAddCart(false)}
                                        onClick={() => navigate ('/producto/producto/sku')}>
                                        {
                                            show_add_cart ? (
                                                <div className='position-absolute start-0' style={{width: '100%', height: 50 / proporcional, top: 255 / proporcional}}>
                                                    <button className='btn'
                                                        style={{width: '100%', height: 50 / proporcional, background: 'rgba(23, 43, 222, 1)', color: 'white', fontSize: 16 / proporcional,
                                                            color: 'white', fontWeight: 700}}>
                                                        Agregar a carrito
                                                    </button>
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                                            <div style={{width: '49%', height: 'auto', marginBottom: 3 / proporcional}}>
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 800, fontFamily: 'Montserrat, sans-serif',
                                                    color: 'rgb(22, 36, 65)', textAlign: 'start'}}>
                                                    Phone 
                                                </p>
                                            </div>
                                            <div style={{width: '49%', height: 'auto', marginBottom: 3 / proporcional}}>
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 800, fontFamily: 'Montserrat, sans-serif',
                                                    color: 'rgb(22, 36, 65)', textAlign: 'end'}}>
                                                    S/. 900 
                                                </p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto'}}>
                                            <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: '#888888', fontWeight: 600, fontFamily: 'Montserrat, sans-serif'}}>
                                                Electrónica
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <div style={{width: '31%', height: 'auto'}}>
                                    <div className='position-relative' style={{width: '100%', height: 305 / proporcional, marginBottom: 15 / proporcional, background: '#dbe4eb',
                                            cursor: 'pointer'}}
                                        onMouseOver={() => setShowAddCart(true)} onMouseLeave={() => setShowAddCart(false)}
                                        onClick={() => navigate ('/producto/producto/sku')}>
                                        {
                                            show_add_cart ? (
                                                <div className='position-absolute start-0' style={{width: '100%', height: 50 / proporcional, top: 255 / proporcional}}>
                                                    <button className='btn'
                                                        style={{width: '100%', height: 50 / proporcional, background: 'rgba(23, 43, 222, 1)', color: 'white', fontSize: 16 / proporcional,
                                                            color: 'white', fontWeight: 700}}>
                                                        Agregar a carrito
                                                    </button>
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                                            <div style={{width: '49%', height: 'auto', marginBottom: 3 / proporcional}}>
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 800, fontFamily: 'Montserrat, sans-serif',
                                                    color: 'rgb(22, 36, 65)', textAlign: 'start'}}>
                                                    Phone 
                                                </p>
                                            </div>
                                            <div style={{width: '49%', height: 'auto', marginBottom: 3 / proporcional}}>
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 800, fontFamily: 'Montserrat, sans-serif',
                                                    color: 'rgb(22, 36, 65)', textAlign: 'end'}}>
                                                    S/. 900 
                                                </p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto'}}>
                                            <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: '#888888', fontWeight: 600, fontFamily: 'Montserrat, sans-serif'}}>
                                                Electrónica
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{width: '31%', height: 'auto'}}>
                                    <div className='position-relative' style={{width: '100%', height: 305 / proporcional, marginBottom: 15 / proporcional, background: '#dbe4eb',
                                            cursor: 'pointer'}}
                                        onMouseOver={() => setShowAddCart(true)} onMouseLeave={() => setShowAddCart(false)}
                                        onClick={() => navigate ('/producto/producto/sku')}>
                                        {
                                            show_add_cart ? (
                                                <div className='position-absolute start-0' style={{width: '100%', height: 50 / proporcional, top: 255 / proporcional}}>
                                                    <button className='btn'
                                                        style={{width: '100%', height: 50 / proporcional, background: 'rgba(23, 43, 222, 1)', color: 'white', fontSize: 16 / proporcional,
                                                            color: 'white', fontWeight: 700}}>
                                                        Agregar a carrito
                                                    </button>
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                                            <div style={{width: '49%', height: 'auto', marginBottom: 3 / proporcional}}>
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 800, fontFamily: 'Montserrat, sans-serif',
                                                    color: 'rgb(22, 36, 65)', textAlign: 'start'}}>
                                                    Phone 
                                                </p>
                                            </div>
                                            <div style={{width: '49%', height: 'auto', marginBottom: 3 / proporcional}}>
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 800, fontFamily: 'Montserrat, sans-serif',
                                                    color: 'rgb(22, 36, 65)', textAlign: 'end'}}>
                                                    S/. 900 
                                                </p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto'}}>
                                            <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: '#888888', fontWeight: 600, fontFamily: 'Montserrat, sans-serif'}}>
                                                Electrónica
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{width: '31%', height: 'auto'}}>
                                    <div className='position-relative' style={{width: '100%', height: 305 / proporcional, marginBottom: 15 / proporcional, background: '#dbe4eb',
                                            cursor: 'pointer'}}
                                        onMouseOver={() => setShowAddCart(true)} onMouseLeave={() => setShowAddCart(false)}
                                        onClick={() => navigate ('/producto/producto/sku')}>
                                        {
                                            show_add_cart ? (
                                                <div className='position-absolute start-0' style={{width: '100%', height: 50 / proporcional, top: 255 / proporcional}}>
                                                    <button className='btn'
                                                        style={{width: '100%', height: 50 / proporcional, background: 'rgba(23, 43, 222, 1)', color: 'white', fontSize: 16 / proporcional,
                                                            color: 'white', fontWeight: 700}}>
                                                        Agregar a carrito
                                                    </button>
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                                            <div style={{width: '49%', height: 'auto', marginBottom: 3 / proporcional}}>
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 800, fontFamily: 'Montserrat, sans-serif',
                                                    color: 'rgb(22, 36, 65)', textAlign: 'start'}}>
                                                    Phone 
                                                </p>
                                            </div>
                                            <div style={{width: '49%', height: 'auto', marginBottom: 3 / proporcional}}>
                                                <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 800, fontFamily: 'Montserrat, sans-serif',
                                                    color: 'rgb(22, 36, 65)', textAlign: 'end'}}>
                                                    S/. 900 
                                                </p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto'}}>
                                            <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: '#888888', fontWeight: 600, fontFamily: 'Montserrat, sans-serif'}}>
                                                Electrónica
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-end' style={{width: '100%', height: 30 / proporcional, marginBottom: 90 / proporcional}}>
                                <div style={{width: 40 / proporcional, height: 30 / proporcional}}>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: 'rgb(28, 52, 103)', fontFamily: 'Hind, sans-serif',
                                        fontWeight: 400, textAlign: 'center'}}>
                                        1
                                    </p>
                                </div>
                                <div style={{width: 40 / proporcional, height: 30 / proporcional}}>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: 'rgb(28, 52, 103)', fontFamily: 'Hind, sans-serif',
                                        fontWeight: 400, textAlign: 'center'}}>
                                        2
                                    </p>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: 20 / proporcional, height: 30 / proporcional}}>
                                    <img src={icono_right} style={{width: 18 / proporcional, height: 18 / proporcional, marginTop: 6 / proporcional, marginBottom: 6 / proporcional,
                                        cursor: 'pointer'}}/>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: 20 / proporcional, height: 30 / proporcional}}>
                                    <div style={{width: 2 / proporcional, height: 'auto', background: '#dbe4eb'}}/>
                                </div>
                                <div style={{width: 80 / proporcional, height: 30 / proporcional}}>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'rgb(22, 36, 65)', marginBottom: 0, fontWeight: 700,
                                        fontFamily: 'Montserrat, sans-serif'}}>
                                        Ver todo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '22%', height: 'auto'}}>
                        <div className='d-flex rounded' style={{width: '100%', height: 60 / proporcional, marginBottom: 56 / proporcional, background: '#dbe4eb'}}>
                            <input 
                                type='default'
                                className='form-control border-0'
                                style={{width: '85%', height: 60 / proporcional, background: '#dbe4eb', fontSize: 18 / proporcional, fontFamily: 'Hind, sans-serif', fontWeight: 400}}
                                value={searc_product}
                                onChange={(event) => setSearchProducto(event.target.value)}
                                placeholder='Buscar producto'/>
                            <div className='d-flex justify-content-center' style={{width: '15%', height: 60 / proporcional}}>
                                <img src={icono_search} style={{width: 18 / proporcional, height: 18 / proporcional, marginTop: 21 / proporcional, marginBottom: 21 / proporcional}}/>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 29 / proporcional, color: 'rgb(22, 36, 65)',
                                fontFamily: 'Montserrat, sans-serif', fontWeight: 800}}>
                                Filtrar por precio
                            </p>
                        </div>
                        <div style={{width: '100%', height: 3 / proporcional, marginBottom: 55 / proporcional}}>
                            <input 
                                type='range'
                                className='form-range'
                                id='rango_precio'
                                value={rango_precio}
                                onChange={(value) => setRangoPrecio(value)}/>
                        </div>
                        <div className='d-flex justify-content-between' style={{width: '100%', height: 60 / proporcional, marginBottom: 55 / proporcional}}>
                            <div className='d-flex justify-content-start' style={{width: '39%', height: 60 / proporcional}}>
                                <button className='btn' style={{width: 150 / proporcional, height: 60 / proporcional, background: '#2d572c', fontSize: 16 / proporcional, color: 'white',
                                        fontFamily: 'Monserrat, sans-serif', fontWeight: 800}}>
                                    Filtrar
                                </button>
                            </div>
                            <div className='d-flex justify-content-end' style={{width: '59%', height: 60 / proporcional}}>
                                <p style={{fontSize: 14 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0, fontWeight: 800, fontFamily: 'Montserrat, sans-serif',
                                    color: 'rgb(22, 36, 65)'}}>
                                    Precio: S/. 90 - S/. 150
                                </p>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 35 / proporcional}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(22, 36, 65)',
                                fontWeight: 800, marginBottom: 17 / proporcional}}>
                                Categorías de productos
                            </p>
                            <div style={{width: '100%', height: 'auto'}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(28, 52, 103)',
                                    fontWeight: 600, marginBottom: 17 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional}}>
                                    Electrónica (10)
                                </p>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(28, 52, 103)',
                                    fontWeight: 600, marginBottom: 17 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional}}>
                                    Juegos (2)
                                </p>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(28, 52, 103)',
                                    fontWeight: 600, marginBottom: 17 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional}}>
                                    Redes (4)
                                </p>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(28, 52, 103)',
                                    fontWeight: 600, marginBottom: 17 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional}}>
                                    Sin categoría (12)
                                </p>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 35 / proporcional}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(22, 36, 65)',
                                fontWeight: 800, marginBottom: 17 / proporcional}}>
                                Tags
                            </p>
                            <div style={{width: '100%', height: 'auto'}}>
                                <div className="d-flex justify-content-between" style={{width: '100%', height: 60 / proporcional, marginBottom: 2 / proporcional}}>
                                    <div className='rounded' 
                                        style={{width: '49%', height: 60 / proporcional, background: '#dbe4eb', paddingTop: 17 / proporcional, paddingBottom: 17 / proporcional}}>
                                        <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(28, 52, 103)',
                                            fontWeight: 400, marginBottom: 17 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional, textAlign: 'center'}}>
                                            APPLE
                                        </p>
                                    </div>
                                    <div className='rounded' 
                                        style={{width: '49%', height: 60 / proporcional, background: '#dbe4eb', paddingTop: 17 / proporcional, paddingBottom: 17 / proporcional}}>
                                        <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(28, 52, 103)',
                                            fontWeight: 400, marginBottom: 17 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional, textAlign: 'center'}}>
                                            APPS
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between" style={{width: '100%', height: 60 / proporcional, marginBottom: 2 / proporcional}}>
                                    <div className='rounded' 
                                        style={{width: '49%', height: 60 / proporcional, background: '#dbe4eb', paddingTop: 17 / proporcional, paddingBottom: 17 / proporcional}}>
                                        <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(28, 52, 103)',
                                            fontWeight: 400, marginBottom: 17 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional, textAlign: 'center'}}>
                                            BUSINESS
                                        </p>
                                    </div>
                                    <div className='rounded' 
                                        style={{width: '49%', height: 60 / proporcional, background: '#dbe4eb', paddingTop: 17 / proporcional, paddingBottom: 17 / proporcional}}>
                                        <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(28, 52, 103)',
                                            fontWeight: 400, marginBottom: 17 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional, textAlign: 'center'}}>
                                            DESIGN
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between" style={{width: '100%', height: 60 / proporcional, marginBottom: 2 / proporcional}}>
                                    <div className='rounded' 
                                        style={{width: '70%', height: 60 / proporcional, background: '#dbe4eb', paddingTop: 17 / proporcional, paddingBottom: 17 / proporcional}}>
                                        <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(28, 52, 103)',
                                            fontWeight: 400, marginBottom: 17 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional, textAlign: 'center'}}>
                                            PHOTOGRAPHY
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between" style={{width: '100%', height: 60 / proporcional, marginBottom: 2 / proporcional}}>
                                    <div className='rounded' 
                                        style={{width: '49%', height: 60 / proporcional, background: '#dbe4eb', paddingTop: 17 / proporcional, paddingBottom: 17 / proporcional}}>
                                        <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(28, 52, 103)',
                                            fontWeight: 400, marginBottom: 17 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional, textAlign: 'center'}}>
                                            SCIENCE
                                        </p>
                                    </div>
                                    <div className='rounded' 
                                        style={{width: '49%', height: 60 / proporcional, background: '#dbe4eb', paddingTop: 17 / proporcional, paddingBottom: 17 / proporcional}}>
                                        <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(28, 52, 103)',
                                            fontWeight: 400, marginBottom: 17 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional, textAlign: 'center'}}>
                                            TECH
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 35 / proporcional, marginBottom: 65 / proporcional}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(22, 36, 65)',
                                fontWeight: 800, marginBottom: 17 / proporcional}}>
                                Instagram
                            </p>
                            <div style={{width: '100%', height: 'auto'}}>
                                <div className="d-flex justify-content-between" style={{width: '100%', height: 'auto', marginBottom: 6 / proporcional}}>
                                    <div style={{width: '24%', height: 70 / proporcional, background: '#bde4eb'}}/>
                                    <div style={{width: '24%', height: 70 / proporcional, background: '#bde4eb'}}/>
                                    <div style={{width: '24%', height: 70 / proporcional, background: '#bde4eb'}}/>
                                    <div style={{width: '24%', height: 70 / proporcional, background: '#bde4eb'}}/>
                                </div>
                                <div className="d-flex justify-content-between" style={{width: '100%', height: 'auto', marginBottom: 6 / proporcional}}>
                                    <div style={{width: '24%', height: 70 / proporcional, background: '#bde4eb'}}/>
                                    <div style={{width: '24%', height: 70 / proporcional, background: '#bde4eb'}}/>
                                    <div style={{width: '24%', height: 70 / proporcional, background: '#bde4eb'}}/>
                                    <div style={{width: '24%', height: 70 / proporcional, background: '#bde4eb'}}/>
                                </div>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 35 / proporcional, marginBottom: 65 / proporcional}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(22, 36, 65)',
                                fontWeight: 800, marginBottom: 17 / proporcional}}>
                                Compartir
                            </p>
                            <div className='d-flex justify-content-start' style={{width: '100%', height: 26 / proporcional}}>
                                <img src={icono_facebook} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 3 / proporcional, cursor: 'pointer', marginRight: 10 / proporcional}}/>
                                <img src={icono_twitter} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 3 / proporcional, cursor: 'pointer', marginRight: 10 / proporcional}}/>
                                <img src={icono_instagram} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 3 / proporcional, cursor: 'pointer', marginRight: 10 / proporcional}}/>
                                <img src={icono_tiktok} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 3 / proporcional, cursor: 'pointer', marginRight: 10 / proporcional}}/>
                                <img src={icono_linkedin} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 3 / proporcional, cursor: 'pointer', marginRight: 10 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}