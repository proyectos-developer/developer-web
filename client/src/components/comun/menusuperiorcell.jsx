import React, { useEffect, useState } from 'react'

import icono_user_white from '../../assets/iconos/icono_user_white_96.png'
import icono_shop_white from '../../assets/iconos/icono_shop_white_96.png'
import icono_search_white from '../../assets/iconos/icono_search_white_96.png'
import icono_user_black from '../../assets/iconos/icono_user_black_96.png'
import icono_shop_black from '../../assets/iconos/icono_shop_black_96.png'
import icono_search_black from '../../assets/iconos/icono_search_black_96.png'

import icono_dot_white from '../../assets/iconos/icono_dot_white_96.png'
import icono_dot_green from '../../assets/iconos/icono_dot_green_96.png'
import icono_menu_white from '../../assets/iconos/icono_menu_white_96.png'
import icono_menu_black from '../../assets/iconos/icono_menu_black_96.png'

import icono_cross from '../../assets/iconos/icono_cross_black_96.png'
import icono_logout from '../../assets/iconos/icono_logout_black_96.png'

import { useLocation, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { set_authenticated, set_open_screen_search, set_open_menu_principal } from '../../redux/actions/dataactions'
import {begindata} from '../../redux/slice/begindata'
import { beginConstants } from '../../uri/begin-constants'

export default function MenuSuperiorCell ({proporcional, position}){

    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch ()

    const [menu_superior, setMenuSuperior] = useState('')
    const [menu_perfil, setMenuPerfil] = useState(false)
    const [menu_servicios, setMenuServicios] = useState(false)

    const {open_screen_search, authenticated, open_menu_principal} = useSelector(({data_reducer}) => data_reducer)
    const {log_out} = useSelector (({begin_data}) => begin_data)

    useEffect (() => {
        if (log_out && log_out.success === true){
            window.localStorage.removeItem('usuario')
            window.localStorage.removeItem('session_id')
            dispatch(set_authenticated(false))
            dispatch(begindata(beginConstants({}, true, 0).log_out))
            navigate ('/')
        }
    }, [log_out])

    const mi_cuenta = () => {
        console.log (authenticated)
        if (authenticated){
            setMenuPerfil(menu_perfil ? false : true)
        }else{
            console.log ('entra')
            window.scrollTo(0, 0)
            navigate('/mi-cuenta/login')
        }
    }

    return (
        <div className='poition-relative' style={{width: '100%', height: 'auto', paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional, zIndex: 99999}}>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                <p style={{fontSize: 24 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: position > 600 / proporcional ? 'black' : 'white', cursor: 'pointer', fontWeight: 700, fontFamily: 'Hind, sans-serif'}} onClick={() => {navigate ('/'); window.scrollTo(0, 0)}}>
                    REVOLUCION DIGITAL
                </p>
            </div>

            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                <div className='d-flex justify-content-start' style={{width: '50%', height: 'auto'}}>
                    <img src={position > 600 / proporcional ? icono_menu_black : icono_menu_white} 
                            style={{width: 30 / proporcional, height: 30 / proporcional, margin: 1 / proporcional, cursor: 'pointer'}}
                            onMouseOver={() => setMenuSuperior('mi-cuenta')} onMouseLeave={() => setMenuSuperior('')}
                            onClick={() => {dispatch (set_open_menu_principal(!open_menu_principal))}}/>
                </div>
                <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                    <img src={position > 600 / proporcional ? icono_search_black : icono_search_white} 
                            style={{width: 22 / proporcional, height: 22 / proporcional, margin: `${5 / proporcional}px ${20 / proporcional}px ${5 / proporcional}px ${5 / proporcional}px`, cursor: 'pointer'}}
                            onMouseOver={() => setMenuSuperior('mi-cuenta')} onMouseLeave={() => setMenuSuperior('')}
                            onClick={() => dispatch (set_open_screen_search(!open_screen_search))}/>
                    <div className='position-relative' 
                        style={{width: 22 / proporcional, height: 'auto', margin: `${5 / proporcional}px ${20 / proporcional}px ${5 / proporcional}px ${5 / proporcional}px`, cursor: 'pointer'}}
                        onClick={() => setMenuSuperior(menu_superior === 'carrito-compras' ? '' : 'carrito-compras')}>
                        <img className='position-absolute top-0 start-0' src={position > 600 / proporcional ? icono_shop_black : icono_shop_white} 
                                style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        {/**<div className='position-absolute top-100 start-100 translate-middle rounded-circle'
                            style={{width: 20 / proporcional, height: 20 / proporcional, background: '#2d572c', zIndex: 999999}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: 'white', textAlign: 'center', fontWeight: 700,
                                    fontFamily: 'Montserrat, sans-serif'}}>
                                3
                            </p>
    </div>**/}
                        {/**
                            menu_superior ===  'carrito-compras' ? (
                                <div className='shadow rounded position-absolute' style={{width: 400 / proporcional, height: 'auto', padding: 30 / proporcional, 
                                    background: 'white', zInde: 9999999, top: 40 / proporcional, left: -300 / proporcional}}>
                                    <div style={{width: 340 / proporcional, height: 'auto'}}>
                                        <div style={{width: '100%', height: 'auto'}}>
                                            <div className='d-flex' style={{width: 340 / proporcional, height: 84 / proporcional, marginBottom: 8 / proporcional}}>
                                                <div style={{width: 84 / proporcional, height: 84 / proporcional, marginRight: 20 / proporcional}}>
                                                    <div style={{width: 84 / proporcional, height: 84 / proporcional, background: '#dbe4eb'}}/>
                                                </div>
                                                <div style={{width: 236 / proporcional, height: 84 / proporcional}}>
                                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, color: '#888888', 
                                                        fontFamily: 'Hind, sans-serif', fontWeight: 400}}>
                                                        Radio
                                                    </p>
                                                    <p style={{fontSize: 14 / proporcional, lineHeight: `${36 / proporcional}px`, marginBottom: 0, color: 'rgb(22, 36, 65)', 
                                                        fontFamily: 'Montserrat, sans-serif', fontWeight: 700}}>
                                                        1 x 30
                                                    </p>
                                                </div>
                                                <div style={{width: 20 / proporcional, height: 20 / proporcional}}>
                                                    <img src={icono_cross} style={{width: 15 / proporcional, height: 15 / proporcional, margin: 2.5 / proporcional, cursor: 'pointer'}}/>
                                                </div>
                                            </div>
                                            <div className='d-flex' style={{width: 340 / proporcional, height: 84 / proporcional, marginBottom: 8 / proporcional}}>
                                                <div style={{width: 84 / proporcional, height: 84 / proporcional, marginRight: 20 / proporcional}}>
                                                    <div style={{width: 84 / proporcional, height: 84 / proporcional, background: '#dbe4eb'}}/>
                                                </div>
                                                <div style={{width: 236 / proporcional, height: 84 / proporcional}}>
                                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, color: '#888888', 
                                                        fontFamily: 'Hind, sans-serif', fontWeight: 400}}>
                                                        Radio
                                                    </p>
                                                    <p style={{fontSize: 14 / proporcional, lineHeight: `${36 / proporcional}px`, marginBottom: 0, color: 'rgb(22, 36, 65)', 
                                                        fontFamily: 'Montserrat, sans-serif', fontWeight: 700}}>
                                                        1 x 30
                                                    </p>
                                                </div>
                                                <div style={{width: 20 / proporcional, height: 20 / proporcional}}>
                                                    <img src={icono_cross} style={{width: 15 / proporcional, height: 15 / proporcional, margin: 2.5 / proporcional, cursor: 'pointer'}}/>
                                                </div>
                                            </div>
                                            <div className='d-flex' style={{width: 340 / proporcional, height: 84 / proporcional, marginBottom: 8 / proporcional}}>
                                                <div style={{width: 84 / proporcional, height: 84 / proporcional, marginRight: 20 / proporcional}}>
                                                    <div style={{width: 84 / proporcional, height: 84 / proporcional, background: '#dbe4eb'}}/>
                                                </div>
                                                <div style={{width: 236 / proporcional, height: 84 / proporcional}}>
                                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, color: '#888888', 
                                                        fontFamily: 'Hind, sans-serif', fontWeight: 400}}>
                                                        Radio
                                                    </p>
                                                    <p style={{fontSize: 14 / proporcional, lineHeight: `${36 / proporcional}px`, marginBottom: 0, color: 'rgb(22, 36, 65)', 
                                                        fontFamily: 'Montserrat, sans-serif', fontWeight: 700}}>
                                                        1 x 30
                                                    </p>
                                                </div>
                                                <div style={{width: 20 / proporcional, height: 20 / proporcional}}>
                                                    <img src={icono_cross} style={{width: 15 / proporcional, height: 15 / proporcional, margin: 2.5 / proporcional, cursor: 'pointer'}}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 22 / proporcional}}>
                                            <div style={{width: '49%',  height: 'auto'}}>
                                                <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: 'rgb(22, 36, 65)', 
                                                    fontFamily: 'Montserrat, sans-serif', fontWeight: 800}}>
                                                    Total:
                                                </p>
                                            </div>
                                            <div className='d-flex justify-content-end' style={{width: '49%',  height: 'auto'}}>
                                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: 'rgb(23, 43, 222)', 
                                                    fontFamily: 'Montserrat, sans-serif', fontWeight: 800}}>
                                                    S/. 1,250
                                                </p>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                                            <button className='btn' style={{width: '49%', height: 60 / proporcional, color: 'white', background: 'rgb(23, 43, 222)',
                                                    fontFamily: 'Hind, sans-serif', fontWeight: 400, fontSize: 16 / proporcional}}
                                                    onClick={() => {navigate ('/carrito-compras'); setMenuSuperior(''); window.scrollTo(0, 0)}}>
                                                Lista de compras
                                            </button>
                                            <button className='btn' style={{width: '49%', height: 60 / proporcional, color: 'white', background: '#2d572c',
                                                    fontFamily: 'Hind, sans-serif', fontWeight: 400, fontSize: 16 / proporcional}}>
                                                Pagar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : null
                         */}
                    </div>
                    <div className='position-relative' 
                        style={{width: 22 / proporcional, height: 'auto', margin: `${5 / proporcional}px ${20 / proporcional}px ${5 / proporcional}px ${5 / proporcional}px`, cursor: 'pointer'}}
                        onClick={() => {mi_cuenta()}}>
                        <img className='position-absolute top-0 start-0' src={position > 800 / proporcional ? icono_user_black : icono_user_white} 
                                style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        {
                            menu_perfil ? (
                                <div className='shadow rounded position-absolute' style={{width: 300 / proporcional, height: 'auto', padding: 30 / proporcional, 
                                    background: 'white', zInde: 9999999, top: 40 / proporcional, left: -250 / proporcional}}
                                    onClick={() => dispatch(begindata(beginConstants({}, false, 0).log_out))}>
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                                            <img src={icono_logout} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 2 / proporcional, marginRight: 7 / proporcional}}/>
                                            <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: '#212121', 
                                                fontFamily: 'Hind, sans-serif', fontWeight: 600}}>
                                                Cerrar sesión
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>
            {
                open_menu_principal ? (
                    <div className='position-absolute' style={{width: 400 / proporcional, height: '100%', top: 104 / proporcional, zIndex: 999999, right: 0}}>
                        <div className='' style={{width: '100%', height: 'auto', background: position > 600 ? 'rgba(23, 43, 222, 0.6)' : 'rgba(23, 43, 222, 0.6)', padding: 20 / proporcional}}>
                            <div className='d-flex justify-content-end' style={{width: '100%', height: 48  / proporcional, cursor: 'pointer'}}
                                onMouseOver={() => setMenuSuperior('inicio')} onMouseLeave={() => setMenuSuperior('')} 
                                onClick={() => {navigate ('/'); window.scrollTo(0, 0);
                                    dispatch(set_open_menu_principal(false))}}>
                                {
                                    location.pathname.split('/')[1] === '' ? (
                                        <img src={position > 600 ? icono_dot_green : icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 4}}/>
                                    ) : null
                                }
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
                                            color: position > 600 / proporcional ? 'black' : 'white'}}>
                                    Inicio
                                </p>
                            </div>
                            <div className='d-flex justify-content-end' style={{width: '100%', height: 48  / proporcional, cursor: 'pointer'}}
                                onMouseOver={() => setMenuSuperior('nosotros')} onMouseLeave={() => setMenuSuperior('')} onClick={() => {navigate ('/sobre-nosotros'); window.scrollTo(0, 0);
                                    dispatch(set_open_menu_principal(false))}}>
                                {
                                    location.pathname.split('/')[1] === 'sobre-nosotros' ? (
                                        <img src={position > 600 ? icono_dot_green : icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 4}}/>
                                    ) : null
                                }
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
                                            color: position > 600 / proporcional ? 'black' : 'white', textAlign: 'center'}}>
                                    Nosotros
                                </p>
                            </div>
                            <div className='d-flex justify-content-end' style={{width: '100%', height: 48  / proporcional, cursor: 'pointer'}}
                                onMouseOver={() => setMenuSuperior('servicios')} onMouseLeave={() => setMenuSuperior('')} 
                                onClick={() => {setMenuServicios(!menu_servicios)}}>
                                {
                                    location.pathname.split('/')[1] === 'nuestros-servicios' ? (
                                        <img src={position > 600 ? icono_dot_green : icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 4}}/>
                                    ) : null
                                }
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
                                            color: position > 600 / proporcional ? 'black' : 'white', textAlign: 'center'}}>
                                    Servicios
                                </p>
                            </div>
                            {
                                menu_servicios ? (
                                    <div className='' style={{width: '100%', height: 'auto', padding: 10 / proporcional}}>
                                        <div style={{width: '100%', height: 'auto'}}>
                                            <div className='d-flex justify-content-end' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}
                                                onClick={() =>{ navigate('/nuestros-servicios'); window.scrollTo (0, 0)}}>
                                                <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: 'white', 
                                                    fontFamily: 'Hind, sans-serif', fontWeight: 500}}>
                                                    Todos los servicios
                                                </p>
                                            </div>
                                            <div style={{width: '100%', height: 1 / proporcional, background: '#efefef', marginBottom: 10 / proporcional}}/>
                                            <div className='d-flex justify-content-end' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}
                                                onClick={() =>{ navigate('/nuestros-servicios/consultoria-digital'); window.scrollTo (0, 0)}}>
                                                <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: 'white', 
                                                    fontFamily: 'Hind, sans-serif', fontWeight: 500}}>
                                                    Consultoría digital
                                                </p>
                                            </div>
                                            <div style={{width: '100%', height: 1 / proporcional, background: '#efefef', marginBottom: 10 / proporcional}}/>
                                            <div className='d-flex justify-content-end' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}
                                                onClick={() => {navigate('/nuestros-servicios/desarrollo-web'); window.scrollTo (0, 0)}}>
                                                <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: 'white', 
                                                    fontFamily: 'Hind, sans-serif', fontWeight: 500}}>
                                                    Páginas web
                                                </p>
                                            </div>
                                            <div style={{width: '100%', height: 1 / proporcional, background: '#efefef', marginBottom: 10 / proporcional}}/>
                                            <div className='d-flex justify-content-end' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}
                                                onClick={() => {navigate('/nuestros-servicios/desarollo-ecommerce'); window.scrollTo (0, 0)}}>
                                                <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: 'white', 
                                                    fontFamily: 'Hind, sans-serif', fontWeight: 500}}>
                                                    Desarrollo e-commerce
                                                </p>
                                            </div>
                                            <div style={{width: '100%', height: 1 / proporcional, background: '#efefef', marginBottom: 10 / proporcional}}/>
                                            <div className='d-flex justify-content-end' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}
                                                onClick={() => {navigate('/nuestros-servicios/aplicacion-movil'); window.scrollTo (0, 0)}}>
                                                <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: 'white', 
                                                    fontFamily: 'Hind, sans-serif', fontWeight: 500}}>
                                                    Desarrollo aplicaciones móviles
                                                </p>
                                            </div>
                                            <div style={{width: '100%', height: 1 / proporcional, background: '#efefef', marginBottom: 10 / proporcional}}/>
                                            <div className='d-flex justify-content-end' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}
                                                onClick={() => {navigate('/nuestros-servicios/desarrollo-software'); window.scrollTo (0, 0)}}>
                                                <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: 'white', 
                                                    fontFamily: 'Hind, sans-serif', fontWeight: 500}}>
                                                    Desarrollo software
                                                </p>
                                            </div>
                                            <div style={{width: '100%', height: 1 / proporcional, background: '#efefef', marginBottom: 10 / proporcional}}/>
                                            <div className='d-flex justify-content-end' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}
                                                onClick={() => {navigate('/nuestros-servicios/marketing-digital'); window.scrollTo (0, 0)}}>
                                                <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: 'white', 
                                                    fontFamily: 'Hind, sans-serif', fontWeight: 500}}>
                                                    Marketing digital 
                                                </p>
                                            </div>
                                            <div style={{width: '100%', height: 1 / proporcional, background: '#efefef', marginBottom: 10 / proporcional}}/>
                                            <div className='d-flex justify-content-end' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}
                                                onClick={() => {navigate('/nuestros-servicios/soporte-tecnico'); window.scrollTo (0, 0)}}>
                                                <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: 'white', 
                                                    fontFamily: 'Hind, sans-serif', fontWeight: 500}}>
                                                    Soporte técnico
                                                </p>
                                            </div>
                                            <div style={{width: '100%', height: 1 / proporcional, background: '#efefef', marginBottom: 10 / proporcional}}/>
                                            <div className='d-flex justify-content-end' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}
                                                onClick={() => {navigate('/nuestros-servicios/servicios-nube'); window.scrollTo (0, 0)}}>
                                                <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: 'white', 
                                                    fontFamily: 'Hind, sans-serif', fontWeight: 500}}>
                                                    Servicios en la nube (Cloud services)
                                                </p>
                                            </div>
                        1            </div>
                                    </div>
                                ) : null
                            }
                            <div className='d-flex justify-content-end' style={{width: '100%', height: 48  / proporcional, cursor: 'pointer'}}
                                onMouseOver={() => setMenuSuperior('portafolio')} onMouseLeave={() => setMenuSuperior('')} onClick={() => {navigate ('/nuestro-portafolio'); window.scrollTo(0, 0);
                                    dispatch(set_open_menu_principal(false))}}>
                                {
                                    location.pathname.split('/')[1] === 'nuestro-portafolio' ? (
                                        <img src={position > 600 ? icono_dot_green : icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 4}}/>
                                    ) : null
                                }
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
                                            color: position > 600 / proporcional ? 'black' : 'white', textAlign: 'center'}}>
                                    Portafolio
                                </p>
                            </div>
                            <div className='d-flex justify-content-end' style={{width: '100%', height: 48  / proporcional, cursor: 'pointer'}}
                                onMouseOver={() => setMenuSuperior('blog')} onMouseLeave={() => setMenuSuperior('')} onClick={() => {navigate ('/nuestro-blog'); window.scrollTo(0, 0);
                                    dispatch(set_open_menu_principal(false))}}>
                                {
                                    location.pathname.split('/')[1] === 'nuestro-blog' ? (
                                        <img src={position > 600 ? icono_dot_green : icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 4}}/>
                                    ) : null
                                }
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
                                            color: position > 600 / proporcional ? 'black' : 'white', textAlign: 'center'}}>
                                    Blog
                                </p>
                            </div>
                            <div className='d-flex justify-content-end' style={{width: '100%', height: 48  / proporcional, cursor: 'pointer'}}
                                onMouseOver={() => setMenuSuperior('tienda')} onMouseLeave={() => setMenuSuperior('')} onClick={() => {navigate ('/nuestra-tienda'); window.scrollTo(0, 0);
                                    dispatch(set_open_menu_principal(false))}}>
                                {
                                    location.pathname.split('/')[1] === 'nuestra-tienda' ? (
                                        <img src={position > 600 ? icono_dot_green : icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 4}}/>
                                    ) : null
                                }
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
                                            color: position > 600 / proporcional ? 'black' : 'white', textAlign: 'center'}}>
                                    Tienda
                                </p>
                            </div>
                            <div className='d-flex justify-content-end' style={{width: '100%', height: 48  / proporcional, cursor: 'pointer'}}
                                onMouseOver={() => setMenuSuperior('contacto')} onMouseLeave={() => setMenuSuperior('')} onClick={() => {navigate ('/contactanos'); window.scrollTo(0, 0);
                                    dispatch(set_open_menu_principal(false))}}>
                                {
                                    location.pathname.split('/')[1] === 'contactanos' ? (
                                        <img src={position > 600 ? icono_dot_green : icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 4}}/>
                                    ) : null
                                }
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
                                            color: position > 600 / proporcional ? 'black' : 'white', textAlign: 'center'}}>
                                    Contáctanos
                                </p>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}