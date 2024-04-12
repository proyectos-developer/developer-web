import React, { useState } from 'react'

import icono_dominio from '../../assets/iconos/icono_cotizacion_domain_96.png'
import icono_web from '../../assets/iconos/icono_cotizacion_web_96.png'
import icono_app from '../../assets/iconos/icono_cotizacion_app_96.png'
import icono_marketing from '../../assets/iconos/icono_cotizacion_marketing_96.png'
import icono_software from '../../assets/iconos/icono_cotizacion_software_96.png'
import icono_cloud from '../../assets/iconos/icono_cotizacion_cloud_96.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { set_opciones_cotizaciones } from '../../redux/actions/dataactions'

import icono_warning from '../../assets/iconos/icono_warning_96.png'

export default function OpcionesTablet({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [seleccion_opcion, setSeleccionOpcion] = useState('')

    const [opcion_dominio, setOpcionDominio] = useState(false)
    const [opcion_web, setOpcionWeb] = useState(false)
    const [opcion_aplicacion, setOpcionAplicacion] = useState(false)
    const [opcion_marketing, setOpcionMarketing] = useState(false)
    const [opcion_software, setOpcionSoftware] = useState(false)
    const [opcion_nube, setOpcionNube] = useState(false)

    const [boton_continuar, setBotonContinuar] = useState (false)
    const [advertencia_seleccion, setAdvertenciaSeleccion] = useState(false)
    const [boton_aceptar, setBotonAceptar] = useState(false)

    const continuar_cotizacion = () => {
        if (!opcion_dominio && !opcion_web && !opcion_aplicacion && !opcion_marketing && !opcion_software && !opcion_nube){
            setAdvertenciaSeleccion(true)
        }else{
            setAdvertenciaSeleccion(false)
            const opciones = {
                dominio: opcion_dominio,
                web: opcion_web,
                aplicacion: opcion_aplicacion,
                marketing: opcion_marketing,
                software: opcion_software,
                nube: opcion_nube
            }
            dispatch(set_opciones_cotizaciones(opciones))
            if (opcion_dominio){
                navigate ('/cotizacion/dominio-hosting')
                window.scrollTo(0, 0)
            }else if (opcion_web){
                navigate ('/cotizacion/paginas-web')
                window.scrollTo(0, 0)
            }else if (opcion_aplicacion){
                navigate ('/cotizacion/aplicacion-movil')
                window.scrollTo(0, 0)
            }else if (opcion_marketing){
                navigate ('/cotizacion/marketing-digital')
                window.scrollTo(0, 0)
            }else if (opcion_software){
                navigate ('/cotizacion/software')
                window.scrollTo(0, 0)
            }else if (opcion_nube){
                navigate ('/cotizacion/cloud-services')
                window.scrollTo(0, 0)
            }
        }
    }

    return (
        <div className='position-relative'
            style={{width: '100%', height: 'auto', paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional,
                background: 'rgba(23, 43, 222, 0.8)'}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                    <div className={`${seleccion_opcion === 'dominio' ? 'rounded border' : ''}`} style={{width: '48%', height: 'auto', borderColor: 'white',
                            background: opcion_dominio ? 'white' : 'transparent', padding: 10 / proporcional}}
                            onClick={() => setOpcionDominio(!opcion_dominio)}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional, cursor: 'pointer'}}
                            onMouseOver={() => setSeleccionOpcion ('dominio')} onMouseLeave={() => setSeleccionOpcion('')}>
                            <img src={icono_dominio} style={{width: seleccion_opcion === 'dominio' ? 128 / proporcional : 96 / proporcional, 
                                        height: seleccion_opcion === 'dominio' ? 128 / proporcional :  96 / proporcional}}/>
                        </div>
                        <div className='' style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 24 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 500, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                    textAlign: 'center', color: opcion_dominio ? '#212121' : 'white', cursor: 'default'}}>
                                Cotiza tu dominio <br/>y hosting
                            </p>
                        </div>
                    </div>
                    <div className={`${seleccion_opcion === 'web' ? 'rounded border' : ''}`} style={{width: '48%', height: 'auto', borderColor: 'white',
                            background: opcion_web ? 'white' : 'transparent', padding: 10 / proporcional}}
                            onClick={() => setOpcionWeb(!opcion_web)}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional, cursor: 'pointer'}}
                            onMouseOver={() => setSeleccionOpcion ('web')} onMouseLeave={() => setSeleccionOpcion('')}>
                            <img src={icono_web} style={{width: seleccion_opcion === 'web' ? 128 / proporcional : 96 / proporcional, 
                                        height: seleccion_opcion === 'web' ? 128 / proporcional :  96 / proporcional}}/>
                        </div>
                        <div className='' style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 24 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 500, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                    textAlign: 'center', color: opcion_web ? '#212121' : 'white', cursor: 'default'}}>
                                Cotiza tu página web o <br/>tu tienda virtual
                            </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                    <div className={`${seleccion_opcion === 'aplicacion' ? 'rounded border' : ''}`} style={{width: '48%', height: 'auto', borderColor: 'white',
                            background: opcion_aplicacion ? 'white' : 'transparent', padding: 10 / proporcional}}
                            onClick={() => setOpcionAplicacion(!opcion_aplicacion)}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional, cursor: 'pointer'}}
                            onMouseOver={() => setSeleccionOpcion ('aplicacion')} onMouseLeave={() => setSeleccionOpcion('')}>
                            <img src={icono_app} style={{width: seleccion_opcion === 'aplicacion' ? 128 / proporcional : 96 / proporcional, 
                                        height: seleccion_opcion === 'aplicacion' ? 128 / proporcional :  96 / proporcional}}/>
                        </div>
                        <div className='' style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 24 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 500, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                    textAlign: 'center', color: opcion_aplicacion ? '#212121' : 'white', cursor: 'default'}}>
                                Cotiza tu <br/>aplicación móvil
                            </p>
                        </div>
                    </div>
                    <div className={`${seleccion_opcion === 'marketing' ? 'rounded border' : ''}`} style={{width: '48%', height: 'auto', borderColor: 'white',
                            background: opcion_marketing ? 'white' : 'transparent', padding: 10 / proporcional}}
                            onClick={() => setOpcionMarketing(!opcion_marketing)}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional, cursor: 'pointer'}}
                            onMouseOver={() => setSeleccionOpcion ('marketing')} onMouseLeave={() => setSeleccionOpcion('')}>
                            <img src={icono_marketing} style={{width: seleccion_opcion === 'marketing' ? 128 / proporcional : 96 / proporcional, 
                                        height: seleccion_opcion === 'marketing' ? 128 / proporcional :  96 / proporcional}}/>
                        </div>
                        <div className='' style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 24 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 500, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                    textAlign: 'center', color: opcion_marketing ? '#212121' : 'white', cursor: 'default'}}>
                                Cotiza un plan en <br/>redes sociales
                            </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                    <div className={`${seleccion_opcion === 'software' ? 'rounded border' : ''}`} style={{width: '48%', height: 'auto', borderColor: 'white',
                            background: opcion_software ? 'white' : 'transparent', padding: 10 / proporcional}}
                            onClick={() => setOpcionSoftware(!opcion_software)}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional, cursor: 'pointer'}}
                            onMouseOver={() => setSeleccionOpcion ('software')} onMouseLeave={() => setSeleccionOpcion('')}>
                            <img src={icono_software} style={{width: seleccion_opcion === 'software' ? 128 / proporcional : 96 / proporcional, 
                                        height: seleccion_opcion === 'software' ? 128 / proporcional :  96 / proporcional}}/>
                        </div>
                        <div className='' style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 24 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 500, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                    textAlign: 'center', color: opcion_software ? '#212121' : 'white', cursor: 'default'}}>
                                Cotiza el software a medida <br/>para tu negocio.
                            </p>
                        </div>
                    </div>
                    <div className={`${seleccion_opcion === 'nube' ? 'rounded border' : ''}`} style={{width: '48%', height: 'auto', borderColor: 'white',
                            background: opcion_nube ? 'white' : 'transparent', padding: 10 / proporcional}}
                            onClick={() => setOpcionNube(!opcion_nube)}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional, cursor: 'pointer'}}
                            onMouseOver={() => setSeleccionOpcion ('nube')} onMouseLeave={() => setSeleccionOpcion('')}>
                            <img src={icono_cloud} style={{width: seleccion_opcion === 'nube' ? 128 / proporcional : 96 / proporcional, 
                                        height: seleccion_opcion === 'nube' ? 128 / proporcional :  96 / proporcional}}/>
                        </div>
                        <div className='' style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 24 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 500, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                    textAlign: 'center', color: opcion_nube ? '#212121' : 'white', cursor: 'default'}}>
                                Cotiza nuestros <br/>servicios en la nube.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                    <button className='btn' style={{width: boton_continuar ? '22%' : '20%', height: 50 / proporcional, border: '1px solid white', 
                            background: boton_continuar ? 'white' : 'transparent', fontSize: 18 / proporcional,
                            fontWeight: 600, color: boton_continuar ? 'rgba(23, 43, 222, 1)' : 'white'}}
                            onClick={() => continuar_cotizacion()}
                            onMouseOver={() => setBotonContinuar(true)} onMouseLeave={() => setBotonContinuar(false)}>
                                Continuar
                    </button>
                </div>
            </div>
            {
                advertencia_seleccion ? (
                    <div className={`position-fixed top-0 start-0 w-100 vh-100`} style={{ display: 'block', zIndex: '99999', background: 'rgba(39, 39, 39, 0.4)' }} id='modal'>
                        <div id='modalcargando' className={`position-fixed top-50 start-50 translate-middle`}
                            style={{background: 'transparent', borderRadius: 4}}>
                            <div style={{width: 500 / proporcional, height: 'auto', background: 'white'}}>
                                <div style={{width: '100%', height: 52 / proporcional, marginBottom: 20 / proporcional}}>
                                    <div className='' style={{width: '100%', height: 50 / proporcional, padding: 10 / proporcional}}>
                                        <div className='d-flex' style={{width: '100%', height: 30 / proporcional}}>
                                            <img src={icono_warning} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 5 / proporcional, marginLeft: 0}}/>
                                            <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 500, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                                    textAlign: 'left', color: 'black', cursor: 'default'}}>
                                                Advertencia
                                            </p>
                                        </div>
                                    </div> 
                                    <div style={{width: '100%', height: 2 / proporcional, background: '#bdbdbd'}}/>
                                </div>
                                <div style={{width: '100%', height: 'auto', padding: 10 / proporcional}}>
                                    <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 500, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                                textAlign: 'left', color: 'black', cursor: 'default'}}>
                                            ¡Debe seleccionar mínimo una opción para poder continuar!
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: '100%', height: 'auto'}}>
                                        <button className='btn' style={{width: '50%', height: 40 / proporcional, background: boton_aceptar ? 'white' : 'rgba(23, 43, 222, 1)', 
                                            color: boton_aceptar ? 'rgba(23, 43, 222, 1)' : 'white', 
                                            border: '1px solid rgba(23, 43, 222, 1)', fontWeight: 600, fontSize: 18 / proporcional}}
                                            onMouseOver={() => setBotonAceptar (true)} onMouseLeave={() => setBotonAceptar(false)}
                                            onClick={() => setAdvertenciaSeleccion(false)}>
                                            ACEPTAR
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}