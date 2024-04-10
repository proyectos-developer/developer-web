import React, { useEffect, useState } from 'react'
import { InstagramEmbed } from 'react-social-media-embed';

import {useNavigate} from 'react-router'

import {useDispatch, useSelector} from 'react-redux'

import icono_facebook from '../../assets/iconos/icono_facebook_white_96.png'
import icono_instagram from '../../assets/iconos/icono_instagram_white_96.png'
import icono_twitter from '../../assets/iconos/icono_twitter_white_96.png'
import icono_linkedin from '../../assets/iconos/icono_linkedin_white_96.png'

import icono_dot_white from '../../assets/iconos/icono_dot_white_96.png'
import arrow_right from '../../assets/iconos/icono_arrow_right_white_96.png'
import {begindata} from '../../redux/slice/begindata';
import { beginConstants } from '../../uri/begin-constants';
import { set_message_suscripcion } from '../../redux/actions/dataactions';

export default function FooterPrincipalTablet ({proporcional}){

    const navigate = useNavigate()
    const dispatch = useDispatch ()

    const [suscripcion, setSuscripcion] = useState('')
    const [esuscripcion, setESuscripcion] = useState('')

    const {send_suscripcion} = useSelector(({begin_data}) => begin_data)

    useEffect(() => {
        if (send_suscripcion && send_suscripcion.success === true && send_suscripcion.message !== '1'){
            const message = {
                message: 'Su suscripción se a realizado con éxito, comenzará a recibir noticias pronto.'
            }
            dispatch(set_message_suscripcion({message: message}))
            dispatch(begindata(beginConstants({}, true, 0).send_suscripcion))
            navigate ('/suscripcion')
        }else if (send_suscripcion && send_suscripcion.sucess === true && send_suscripcion.message === '1'){
            const message = {
                message: 'Ya está en la lista de suscripción, pronto enviaremos mas noticias.'
            }
            dispatch(set_message_suscripcion({message: message}))
            dispatch(begindata(beginConstants({}, true, 0).send_suscripcion))
            navigate ('/suscripcion')
        }
    }, [send_suscripcion])

    const enviar_suscripcion = () => {
        if (suscripcion === ''){
            setESuscripcion(suscripcion === '' ? true : false)
        }else{
            setESuscripcion(false)
            const suscribirse = {
                correo: suscripcion
            }
            dispatch(begindata(beginConstants(suscribirse, false, 0).send_suscripcion))
        }
    }

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto', background: 'rgba(23, 43, 222, 2)', paddingTop: 60 / proporcional, paddingBottom: 60 / proporcional, 
                    paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <div style={{width: '49%', height: 'auto'}}>
                        <div style={{width: 'auto', height: 30 / proporcional, marginBottom: 16 / proporcional}}>
                            <p style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, fontWeight: 800, color: 'white',
                                fontFamily: 'Montserrat, sans-serif'}}>
                                REVOLUCIÓN DIGITAL
                            </p>
                        </div>
                        <div style={{width: '80%', height: 'auto', marginBottom: 17 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Hind sans-serif', color: 'rgb(177, 178, 178)', fontWeight: 400}}>
                            Explora el cambio radical que está redefiniendo nuestra sociedad y como la tecnología esta liderando el camino hacia un futuro conectado y eficiente. Únete a la revolución digital y se parte del cambio.
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 25 / proporcional}}>
                            <a href='https://www.facebook.com/wolfsolutions' target='_blank' style={{width: 25 / proporcional, height: 25 / proporcional, marginRight: 5 / proporcional}}>
                                <img src={icono_facebook} style={{width: 25 / proporcional, height: 25 / proporcional, cursor: 'pointer'}}/>
                            </a>
                            <a href='https://www.instagram.com/developer.ideas/' target='_blank' style={{width: 25 / proporcional, height: 25 / proporcional, marginRight: 5 / proporcional}}>
                                <img src={icono_instagram} style={{width: 25 / proporcional, height: 25 / proporcional, cursor: 'pointer'}}/>
                            </a>
                            <a href='https://www.linkedin.com/company/25055456/admin/feed/posts/' target='_blank' style={{width: 25 / proporcional, height: 25 / proporcional, marginRight: 5 / proporcional}}>
                                <img src={icono_linkedin} style={{width: 25 / proporcional, height: 25 / proporcional, cursor: 'pointer'}}/>
                            </a>
                            <a href='https://twitter.com/developerideas' target='_blank' style={{width: 25 / proporcional, height: 25 / proporcional, marginRight: 5 / proporcional}}>
                                <img src={icono_twitter} style={{width: 25 / proporcional, height: 25 / proporcional, cursor: 'pointer'}}/>
                            </a>
                        </div>
                    </div>
                    <div style={{width: '49%', height: 'auto'}}>
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
                                    color: 'rgb(177, 178, 178)'}} onClick={() => {navigate('/') ; window.scrollTo(0, 0)}}>
                                    Inicio
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 34 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional, cursor: 'pointer'}}>
                                <img src={icono_dot_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 5 / proporcional, marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Hind, sans-serif',
                                    color: 'rgb(177, 178, 178)'}} onClick={() => {navigate('/sobre-nosotros'); window.scrollTo(0, 0)}}>
                                    Nosotros
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 34 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional, cursor: 'pointer'}}>
                                <img src={icono_dot_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 5 / proporcional, marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Hind, sans-serif',
                                    color: 'rgb(177, 178, 178)'}} onClick={() => {navigate('/nuestros-servicios'); window.scrollTo(0, 0)}}>
                                    Servicios
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 34 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional, cursor: 'pointer'}}>
                                <img src={icono_dot_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 5 / proporcional, marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Hind, sans-serif',
                                    color: 'rgb(177, 178, 178)'}} onClick={() => {navigate('/nuestro-portafolio'); window.scrollTo(0, 0)}}>
                                    Portafolio
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 34 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional, cursor: 'pointer'}}>
                                <img src={icono_dot_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 5 / proporcional, marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Hind, sans-serif',
                                    color: 'rgb(177, 178, 178)'}} onClick={() => {navigate('/nuestro-blog'); window.scrollTo(0, 0)}}>
                                    Blog
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 34 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional, cursor: 'pointer'}}>
                                <img src={icono_dot_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 5 / proporcional, marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Hind, sans-serif',
                                    color: 'rgb(177, 178, 178)'}} onClick={() => {navigate('/nuestra-tienda'); window.scrollTo(0, 0)}}>
                                    Tienda
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 34 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional, cursor: 'pointer'}}>
                                <img src={icono_dot_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 5 / proporcional, marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Hind, sans-serif',
                                    color: 'rgb(177, 178, 178)'}} onClick={() => {navigate('/contactanos'); window.scrollTo(0, 0)}}>
                                    Contáctanos
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '49%', height: 'auto'}}>
                        <div style={{width: 'auto', height: 30 / proporcional, marginBottom: 16 / proporcional}}>
                            <p style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 800, color: 'white', fontFamily: 'Montserrat, sans-serif',
                                    marginBottom: 0}}>
                                Nuestros Servicios
                            </p>
                        </div>
                        <div className='' style={{width: '80%', height: 'auto'}}>
                            <div className='d-flex' style={{width: '100%', height: 34 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional, cursor: 'pointer'}}
                                onClick={() => {navigate('/nuestros-servicios/consultoria-digital'); window.scrollTo(0, 0)}}>
                                <img src={icono_dot_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 5 / proporcional, marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Hind, sans-serif',
                                    color: 'rgb(177, 178, 178)'}}>
                                    Consultoría digital
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 34 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional, cursor: 'pointer'}}
                                onClick={() => {navigate('/nuestros-servicios/desarrollo-web'); window.scrollTo(0, 0)}}>
                                <img src={icono_dot_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 5 / proporcional, marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Hind, sans-serif',
                                    color: 'rgb(177, 178, 178)'}}>
                                    Páginas web
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 34 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional, cursor: 'pointer'}}
                                onClick={() => {navigate('/nuestros-servicios/desarrollo-ecommerce'); window.scrollTo(0, 0)}}>
                                <img src={icono_dot_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 5 / proporcional, marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Hind, sans-serif',
                                    color: 'rgb(177, 178, 178)'}}>
                                    E-commerce
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 34 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional, cursor: 'pointer'}}
                                onClick={() => {navigate('/nuestros-servicios/aplicion-movil'); window.scrollTo(0, 0)}}>
                                <img src={icono_dot_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 5 / proporcional, marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Hind, sans-serif',
                                    color: 'rgb(177, 178, 178)'}}>
                                    Aplicaciones móviles
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 34 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional, cursor: 'pointer'}}
                                onClick={() => {navigate('/nuestros-servicios/desarrollo-software'); window.scrollTo(0, 0)}}>
                                <img src={icono_dot_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 5 / proporcional, marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Hind, sans-serif',
                                    color: 'rgb(177, 178, 178)'}}>
                                    Software
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 34 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional, cursor: 'pointer'}}
                                onClick={() => {navigate('/nuestros-servicios/marketing-digital'); window.scrollTo(0, 0)}}>
                                <img src={icono_dot_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 5 / proporcional, marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Hind, sans-serif',
                                    color: 'rgb(177, 178, 178)'}}>
                                    Marketing digital
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 34 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional, cursor: 'pointer'}}
                                onClick={() => {navigate('/nuestros-servicios/soporte-tecnico'); window.scrollTo(0, 0)}}>
                                <img src={icono_dot_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 5 / proporcional, marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Hind, sans-serif',
                                    color: 'rgb(177, 178, 178)'}}>
                                    Soporte técnico
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 34 / proporcional, marginTop: 4 / proporcional, marginBottom: 4 / proporcional, cursor: 'pointer'}}
                                onClick={() => {{navigate('/nuestros-servicios/servicios-nube'); window.scrollTo(0, 0)}}}>
                                <img src={icono_dot_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 5 / proporcional, marginRight: 10 / proporcional}}/>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Hind, sans-serif',
                                    color: 'rgb(177, 178, 178)'}}>
                                    Servicio en la nube
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '49%', height: 'auto'}}>
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
                                            fontWeight: 300, border: esuscripcion ? '1px solid red' : ''}}
                                    value={suscripcion}
                                    onChange={(event) => setSuscripcion(event.target.value)}
                                    id='suscripcion'
                                    placeholder='Tu e-mail'/>
                                <div className='' style={{width: 40 / proporcional, height: 40 / proporcional, background: '#000000', cursor: 'pointer'}}
                                    onClick={() => enviar_suscripcion()}>
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