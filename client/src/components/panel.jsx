import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import FooterPrincipal from './comun/footerprincipal.jsx'
import ModalCargando from './modal/cargando.jsx'
import { useDispatch, useSelector } from 'react-redux'

import icono_search_white from '../assets/iconos/icono_search_white_96.png'
import icono_cross_white from '../assets/iconos/icono_cross_white_96.png'
import icono_up from '../assets/iconos/icono_page_up_96.png'
import icono_cotiza from '../assets/iconos/icono_cotiza_aqui_96.png'
import { set_authenticated, set_open_screen_search } from '../redux/actions/dataactions.js'

export default function GlobalPanel ({proporcional}){

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [boton_cotiza, setBotonCotiza] = useState (false)
    const [search, setSearch] = useState('')
    
    const begin_data = useSelector(({begin_data}) => begin_data)
    const {open_screen_search} = useSelector(({begin_data}) => begin_data)

    useEffect(() => {
        if (window.localStorage.getItem ('session_id')){
            dispatch(set_authenticated(true))
        }
    }, [])

    return (
        <div className='position-relative' style={{width: '100%', height: '100%'}}>
            {
                open_screen_search ? ( 
                    <div className='position-absolute top-0 start-0' 
                        style={{width: '100%', height: '100%', background: 'rgba(23, 43, 222, 0.8)', zIndex: 999999}}>
                        <div className='position-relative' style={{width: '100%', height: '100vh'}}>
                            <div className='position-absolute' style={{width: 50 / proporcional, height: 50 / proporcional, right: 60 / proporcional, top: 60 / proporcional, cursor: 'pointer'}}
                                onClick={() => dispatch(set_open_screen_search(false))}>
                                <img src={icono_cross_white} style={{width: 50 / proporcional, height: 50 / proporcional}}/>
                            </div>
                            <div className='position-absolute top-50 start-50 translate-middle' 
                                style={{width: '100%', height: 60 / proporcional, paddingLeft: 550 / proporcional, paddingRight: 550 / proporcional}}>
                                <div className='d-flex shado' style={{width: '90%', height: 60 / proporcional, borderBottom: '2px solid white', background: 'transparent'}}>
                                    <input
                                        type='default'
                                        className='form-control border-0'
                                        style={{width: '100%', height: 60 / proporcional, fontSize: 18 / proporcional, background: 'transparent',
                                            color: 'white', fontFamily: 'Hind, sans-serif', fontWeight: 600}}
                                        value={search}
                                        onChange={(event) => setSearch (event.target.value)}
                                        placeholder='Escriba su búsqueda'
                                        id='search'
                                    />
                                    <img src={icono_search_white} style={{width: 30 / proporcional, height: 30 / proporcional, margin: 10, cursor: 'pointer'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            }
            <div className='position-fixed top-50 shadow-lg rounded-circle' style={{width: 'auto', height: 'auto', background: 'transparent',
              right: 36 / proporcional, cursor: 'pointer', zIndex: 99999}} onClick={() => {navigate('/cotizacion'); window.scrollTo(0, 0)}}
              onMouseOver={() => setBotonCotiza(true)} onMouseLeave={() => setBotonCotiza(false)}>
              <img src={icono_cotiza} style={{width: boton_cotiza ? 72  / proporcional : 96 / proporcional, 
              height: boton_cotiza ? 72  / proporcional : 96 / proporcional, marginBottom: 5 / proporcional}}/>
              {
                boton_cotiza ? (
                    <div className='rounded-pill shadow' style={{width: 'auto', height: 30 / proporcional, background: 'white', padding: 5 / proporcional}}>
                      <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, textAlign: 'center', color: 'black', cursor: 'pointer'}}>
                          Cotiza aquí
                      </p>
                    </div>
                ) : null
              }
            </div>
            <div className='position-fixed' style={{width: 64 / proporcional, height: 64 / proporcional, bottom: 36 / proporcional,
              left: 36 / proporcional, cursor: 'pointer', zIndex: 99999}} onClick={() => window.scrollTo(0, 0)}>
              <img src={icono_up} style={{width: 64 / proporcional, height: 64 / proporcional}}/>
            </div>
            <a href='https://wa.me/51968169584?text=Hola,%20vi%20tu%20página%20web%20y%20me%20gustaría%20mas%20información%20sobre%20tus%20productos.' target='_blank' rel='noopener noreferrer'>
                <img alt='whatsapp' className='position-fixed' src="https://img.icons8.com/fluent/72/000000/whatsapp.png" 
                    style={{bottom: 36 / proporcional, right: 36 / proporcional, zIndex: 99999}}/>
            </a>
            <Outlet/>
            <ModalCargando loading={begin_data.loading}/>
            <FooterPrincipal proporcional={proporcional}/>
        </div>
    )
}