import React, { useState } from 'react'

import icono_right from '../../assets/iconos/icono_right_two_96.png'

export default function TiendaProductos ({proporcional}){

    const [sorting, setSorting] = useState('')
    const [show_add_cart, setShowAddCart] = useState(false)

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
                                        onMouseOver={() => setShowAddCart(true)} onMouseLeave={() => setShowAddCart(false)}>
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
                                        onMouseOver={() => setShowAddCart(true)} onMouseLeave={() => setShowAddCart(false)}>
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
                                        onMouseOver={() => setShowAddCart(true)} onMouseLeave={() => setShowAddCart(false)}>
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
                                        onMouseOver={() => setShowAddCart(true)} onMouseLeave={() => setShowAddCart(false)}>
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
                                        onMouseOver={() => setShowAddCart(true)} onMouseLeave={() => setShowAddCart(false)}>
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
                                        onMouseOver={() => setShowAddCart(true)} onMouseLeave={() => setShowAddCart(false)}>
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
                                        onMouseOver={() => setShowAddCart(true)} onMouseLeave={() => setShowAddCart(false)}>
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
                                        onMouseOver={() => setShowAddCart(true)} onMouseLeave={() => setShowAddCart(false)}>
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
                                        onMouseOver={() => setShowAddCart(true)} onMouseLeave={() => setShowAddCart(false)}>
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
                                        onMouseOver={() => setShowAddCart(true)} onMouseLeave={() => setShowAddCart(false)}>
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
                                        onMouseOver={() => setShowAddCart(true)} onMouseLeave={() => setShowAddCart(false)}>
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
                                        onMouseOver={() => setShowAddCart(true)} onMouseLeave={() => setShowAddCart(false)}>
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
                                <div className='d-flex justify-content-center' style={{width: 40 / proporcional, height: 30 / proporcional}}>
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
                    <div style={{width: '22ß%', height: 'auto'}}>
                
                    </div>
                </div>
            </div>
        </div>
    )
}