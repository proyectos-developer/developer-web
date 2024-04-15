import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import DominioHosting from './dominiohosting.jsx'
import PaginaWeb from './paginaweb.jsx'
import AplicacionMovil from './aplicacionmovil.jsx'
import Software from './software.jsx'
import MarketingDigital from './marketingdigital.jsx'
import CloudService from './cloudservice.jsx'
import { useNavigate } from 'react-router-dom'
import {correodata} from '../../../redux/slice/correodata.js'
import { correoConstants } from '../../../uri/correo-constants.js'

export default function Resumen({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [fecha, setFecha] = useState('')
    const [cliente, setCliente] = useState ({})

    const {opciones_cotizaciones, cotizacion_domhost, cotizacion_web, cotizacion_app, cotizacion_marketing, cotizacion_software, cotizacion_cloud} = useSelector(({data_reducer}) => data_reducer)
    const {send_cotizacion_web} = useSelector(({correo_data}) => correo_data)
    
    useEffect(() => {
        if (send_cotizacion_web && send_cotizacion_web.success === true && send_cotizacion_web.message){
            navigate ('/cotizacion/enviada')
        }
    }, [send_cotizacion_web])

    useEffect(() =>{
        setFecha(new Date())
        if (cotizacion_domhost[2]){
            setCliente (cotizacion_domhost[2])
        }else if (cotizacion_web [3]){
            setCliente (cotizacion_web[3])
        }else if (cotizacion_app [3]){
            setCliente (cotizacion_app[3])
        }else if (cotizacion_marketing[2]){
            setCliente (cotizacion_marketing[2])
        }else if (cotizacion_software[2]){
            setCliente (cotizacion_software[2])
        }else{
            setCliente (cotizacion_cloud[2])
        }
    }, [])

    const volver = () => {
        if (opciones_cotizaciones.nube){
            navigate('/cotizacion/servicio/cloud-services')
        }else if (opciones_cotizaciones.software){
            navigate('/cotizacion/servicio/software')
        }else if (opciones_cotizaciones.marketing){
            navigate('/cotizacion/servicio/marketing-digital')
        }else if (opciones_cotizaciones.aplicacion){
            navigate('/cotizacion/servicio/aplicacion-movil')
        }else if (opciones_cotizaciones.web){
            navigate('/cotizacion/servicio/aplicacion-movil')
        }else{
            navigate('/cotizacion/servicio/dominio-hosting')
        }
    }

    const enviar_cotizacion = () => {
        const data_cotizacion = {
            opciones_cotizaciones: opciones_cotizaciones,
            cotizacion_domhost: cotizacion_domhost,
            cotizacion_web: cotizacion_web,
            cotizacion_app: cotizacion_app,
            cotizacion_marketing: cotizacion_marketing,
            cotizacion_software: cotizacion_software,
            cotizacion_cloud: cotizacion_cloud    
        }
        dispatch (correodata(correoConstants(data_cotizacion, false).send_cotizacion_web))
    }

    return (
        <div className='' style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-center rounded-top' style={{width: '100%', height: 'auto', border: '1px solid #bdbdbd', padding: 10 / proporcional}}>
                    <p style={{fontSize: 32 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, color: 'rgb(23, 43, 222)', cursor: 'default', fontWeight: 700, 
                            fontFamily: 'Hind, sans-serif'}}>
                        SOLUCIONES TECNOLÓGICAS
                    </p>
                </div>
                <div style={{width: '100%', height: 'auto', padding: 10 / proporcional, border: '1px solid #bdbdbd', borderTop: ''}}>
                    <div className='d-flex justify-content-end' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif'}}>
                            Fecha: <span style={{fontWeight: 700}}>{fecha ? fecha.toDateString() : ''}</span>
                        </p>
                    </div>
                    {
                        cliente.tipo === 'Personal' ? (
                            <div style={{width: '100%', height: 'auto'}}>
                                <div className='rounded' style={{width: '100%', height: 2 / proporcional, marginBottom: 10 / proporcional, background: '#bdbdbd'}}/>
                                <p style={{fontSize: 24 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', cursor: 'default', fontWeight: 800, 
                                        fontFamily: 'Hind, sans-serif', textAlign: 'center'}}>
                                    CONTACTO
                                </p>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    Nombres: <span style={{fontWeight: 700}}>{cliente.nombre}</span>
                                </p>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Teléfono: <span style={{fontWeight: 700}}>{cliente.nro_telefono}</span>
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Correo: <span style={{fontWeight: 700}}>{cliente.correo}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className='rounded' style={{width: '100%', height: 2 / proporcional, marginBottom: 10 / proporcional, background: '#bdbdbd'}}/>
                                <p style={{fontSize: 24 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', cursor: 'default', fontWeight: 800, 
                                        fontFamily: 'Hind, sans-serif', textAlign: 'center'}}>
                                    REDES SOCIALES:
                                </p>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Facebook: <span style={{fontWeight: 700}}>{cliente.link_facebook}</span>
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Instagram: <span style={{fontWeight: 700}}>{cliente.link_instagram}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Twitter (X): <span style={{fontWeight: 700}}>{cliente.link_twitter}</span>
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            TikTok: <span style={{fontWeight: 700}}>{cliente.link_tiktok}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Linkedin: <span style={{fontWeight: 700}}>{cliente.link_linkedin}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : cliente.tipo === 'Negocio' ? (
                            <div style={{width: '100%', height: 'auto'}}>
                                <p style={{fontSize: 24 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', cursor: 'default', fontWeight: 800, 
                                        fontFamily: 'Hind, sans-serif', textAlign: 'center'}}>
                                    DATOS NEGOCIO Y CONTACTO <br/>{cliente.rubro}
                                </p>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Nombre negocio: <span style={{fontWeight: 700}}>{cliente.nombre}</span>
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            R.U.C: <span style={{fontWeight: 700}}>{cliente.nro_ruc}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Teléfono: <span style={{fontWeight: 700}}>{cliente.nro_telefono}</span>
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Correo: <span style={{fontWeight: 700}}>{cliente.correo}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Nombre de contacto: <span style={{fontWeight: 700}}>{cliente.nombre_contacto}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className='rounded' style={{width: '100%', height: 2 / proporcional, marginBottom: 10 / proporcional, background: '#bdbdbd'}}/>
                                <p style={{fontSize: 24 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', cursor: 'default', fontWeight: 800, 
                                        fontFamily: 'Hind, sans-serif', textAlign: 'center'}}>
                                    REDES SOCIALES:
                                </p>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Facebook: <span style={{fontWeight: 700}}>{cliente.link_facebook}</span>
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Instagram: <span style={{fontWeight: 700}}>{cliente.link_instagram}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Twitter (X): <span style={{fontWeight: 700}}>{cliente.link_twitter}</span>
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            TikTok: <span style={{fontWeight: 700}}>{cliente.link_tiktok}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Linkedin: <span style={{fontWeight: 700}}>{cliente.link_linkedin}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )  : cliente.tipo === 'Empresa' ? (
                            <div style={{width: '100%', height: 'auto'}}>
                                <p style={{fontSize: 24 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', cursor: 'pointer', fontWeight: 800, 
                                        fontFamily: 'Hind, sans-serif', textAlign: 'center'}}>
                                    DATOS EMPRESA Y CONTACTO <br/>{cliente.rubro}
                                </p>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Nombre empresa: <span style={{fontWeight: 700}}>{cliente.nombre}</span>
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            R.U.C: <span style={{fontWeight: 700}}>{cliente.nro_ruc}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Teléfono: <span style={{fontWeight: 700}}>{cliente.nro_telefono}</span>
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Correo: <span style={{fontWeight: 700}}>{cliente.correo}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Nombre de contacto: <span style={{fontWeight: 700}}>{cliente.nombre_contacto}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className='rounded' style={{width: '100%', height: 2 / proporcional, marginBottom: 10 / proporcional, background: '#bdbdbd'}}/>
                                <p style={{fontSize: 24 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', cursor: 'pointer', fontWeight: 800, 
                                        fontFamily: 'Hind, sans-serif', textAlign: 'center'}}>
                                    REDES SOCIALES:
                                </p>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Facebook: <span style={{fontWeight: 700}}>{cliente.link_facebook}</span>
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Instagram: <span style={{fontWeight: 700}}>{cliente.link_instagram}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Twitter (X): <span style={{fontWeight: 700}}>{cliente.link_twitter}</span>
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            TikTok: <span style={{fontWeight: 700}}>{cliente.link_tiktok}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Linkedin: <span style={{fontWeight: 700}}>{cliente.link_linkedin}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    }
                </div>
            </div>
            {
                opciones_cotizaciones.dominio ? (
                    <div style={{width: '100%', height: 'auto', border: '1px solid #bdbdbd', borderTop: '', padding: 10 / proporcional, marginBottom: 20 / proporcional}}>
                        <DominioHosting proporcional={proporcional}/>
                    </div>
                ) : null
            }
            {   
                opciones_cotizaciones.web ? (
                    <div style={{width: '100%', height: 'auto', border: '1px solid #bdbdbd', borderTop: '', padding: 10 / proporcional, marginBottom: 20 / proporcional}}>
                        <PaginaWeb proporcional={proporcional}/>
                    </div>
                ) : null
            } 
            {
                opciones_cotizaciones.aplicacion ? (
                    <div style={{width: '100%', height: 'auto', border: '1px solid #bdbdbd', borderTop: '', padding: 10 / proporcional, marginBottom: 20 / proporcional}}>
                    <AplicacionMovil proporcional={proporcional}/>
                    </div>
                ) : null
            }   
            {
                opciones_cotizaciones.marketing ? (
                    <div style={{width: '100%', height: 'auto', border: '1px solid #bdbdbd', borderTop: '', padding: 10 / proporcional, marginBottom: 20 / proporcional}}>
                    <MarketingDigital proporcional={proporcional}/>
                    </div>
                ) : null
            }
            {
                opciones_cotizaciones.software ? (
                    <div style={{width: '100%', height: 'auto', border: '1px solid #bdbdbd', borderTop: '', padding: 10 / proporcional, marginBottom: 20 / proporcional}}>
                    <Software proporcional={proporcional}/>
                    </div>
                ): null
            
            }
            {
                opciones_cotizaciones.nube ? (
                    <div style={{width: '100%', height: 'auto', border: '1px solid #bdbdbd', borderTop: '', padding: 10 / proporcional, marginBottom: 20 / proporcional}}>
                    <CloudService proporcional={proporcional}/>
                    </div>
                ) : null
            }
            <div className='d-flex justify-content-between' style={{width: '100%', height: 50 / proporcional, marginBottom: 20 / proporcional}}>
                <button className='btn' 
                    style={{width: '40%', height: 50 / proporcional, fontSize: 16 / proporcional, color: 'white', background: 'rgb(23, 43, 222)', fontWeight: 600}}
                        onClick={() => volver()}>
                    Volver
                </button>
                <button className='btn' 
                    style={{width: '40%', height: 50 / proporcional, fontSize: 16 / proporcional, color: 'white', background: 'rgb(23, 43, 222)', fontWeight: 600}}
                        onClick={() => enviar_cotizacion()}>
                    Enviar cotización
                </button>
            </div>
        </div>
    )
}