import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import DominioHostingCell from './dominiohostingcell.jsx'
import PaginaWebCell from './paginawebcell.jsx'
import AplicacionMovilCell from './aplicacionmovilcell.jsx'
import SoftwareCell from './softwarecell.jsx'
import MarketingDigitalCell from './marketingdigitalcell.jsx'
import CloudServiceCell from './cloudservicecell.jsx'
import { useNavigate } from 'react-router-dom'
import {correodata} from '../../../redux/slice/correodata.js'
import { correoConstants } from '../../../uri/correo-constants.js'
import {cotizaciondata} from '../../../redux/slice/cotizaciondata.js'
import { cotizacionConstants } from '../../../uri/cotizacion-constants.js'

export default function ResumenCell({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [fecha, setFecha] = useState('')
    const [cliente, setCliente] = useState ({})
    const [nro_cotizacion, setNroCotizacion] = useState ('')

    const {opciones_cotizaciones, cotizacion_domhost, cotizacion_web, cotizacion_app, cotizacion_marketing, cotizacion_software, cotizacion_cloud} = useSelector(({data_reducer}) => data_reducer)
    const {send_cotizacion_web} = useSelector(({correo_data}) => correo_data)
    const {get_nro_cotizaciones} = useSelector(({cotizacion_data}) => cotizacion_data)

    useEffect (() => {
        if (get_nro_cotizaciones && get_nro_cotizaciones.nro_cotizaciones && get_nro_cotizaciones.success === true){
            let nro_cotizaciones = get_nro_cotizaciones.nro_cotizaciones + 1
            setNroCotizacion(`${nro_cotizaciones < 10 ? `0000${nro_cotizaciones}` : nro_cotizaciones < 100 ? `000${nro_cotizaciones}` : nro_cotizaciones < 1000 ? `00${nro_cotizaciones}` :
                    nro_cotizaciones < 10000 ? `0${nro_cotizaciones}` : `${nro_cotizaciones}`}`)
        }
    }, [get_nro_cotizaciones])
    
    useEffect(() => {
        if (send_cotizacion_web && send_cotizacion_web.success === true && send_cotizacion_web.message && send_cotizacion_web.cotizacion){
            dispatch (correodata(correoConstants({}, true).send_cotizacion_web))
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
        dispatch(cotizaciondata(cotizacionConstants({}, false, 0, 0).get_nro_cotizaciones))
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
            nro_cotizacion: nro_cotizacion,
            fecha: fecha,

            cotizacion_domhost: opciones_cotizaciones.dominio,
            cotizacion_web: opciones_cotizaciones.web,
            cotizacion_app: opciones_cotizaciones.aplicacion,
            cotizacion_marketing: opciones_cotizaciones.marketing,
            cotizacion_software: opciones_cotizaciones.software,
            cotizacion_cloud: opciones_cotizaciones.nube,

            tipo_negocio: cliente.tipo,
            nombres: cliente.nombre,
            rubro: cliente.rubro,
            nro_ruc: cliente.nro_ruc,
            nro_telefono: cliente.nro_telefono,
            correo: cliente.correo,
            nombre_contacto: cliente.nombre_contacto,

            tipo_dominio: cotizacion_domhost[0] ? cotizacion_domhost[0].tipo_dominio : '',
            tipo_hosting: cotizacion_domhost[0] ? cotizacion_domhost[0].tipo_hosting : '',
            informacion_domhost: cotizacion_domhost[1] ? cotizacion_domhost[1].informacion_adicional : '',

            tipo_web: cotizacion_web[0] ? cotizacion_web[0].tipo_pagina_web : '',
            pestania_nosotros: cotizacion_web[1] ? cotizacion_web[1].pestania_nosotros : '',
            pestania_servicios: cotizacion_web[1] ? cotizacion_web[1].pestania_servicios : '',
            pestania_productos: cotizacion_web[1] ? cotizacion_web[1].pestania_productos : '',
            pestania_fotos: cotizacion_web[1] ? cotizacion_web[1].pestania_fotos : '',
            pestania_videos: cotizacion_web[1] ? cotizacion_web[1].pestania_videos : '',
            pestania_contacto: cotizacion_web[1] ? cotizacion_web[1].pestania_contacto : '',
            pestania_cotizacion: cotizacion_web[1] ? cotizacion_web[1].pestania_cotizacion : '',
            pestania_tienda: cotizacion_web[1] ? cotizacion_web[1].pestania_tienda : '',
            pestania_carrito: cotizacion_web[1] ? cotizacion_web[1].pestania_carrito : '',
            pestania_pago: cotizacion_web[1] ? cotizacion_web[1].pestania_pago : '',
            pestania_seguimiento: cotizacion_web[1] ? cotizacion_web[1].pestania_seguimiento : '',
            pestania_registro: cotizacion_web[1] ? cotizacion_web[1].pestania_registro : '',
            pestania_login: cotizacion_web[1] ? cotizacion_web[1].pestania_login : '',
            pestania_perfil: cotizacion_web[1] ? cotizacion_web[1].pestania_perfil : '',
            pestania_favoritos: cotizacion_web[1] ? cotizacion_web[1].pestania_favoritos : '',
            pestania_compras: cotizacion_web[1] ? cotizacion_web[1].pestania_compras : '',
            pestania_administracion: cotizacion_web[1] ? cotizacion_web[1].pestania_administrativa : '',
            informacion_web: cotizacion_web[2] ? cotizacion_web[2].informacion_adicional : '',

            tipo_aplicacion: cotizacion_app[0] ? cotizacion_app[0].tipo_aplicacion : '',
            pantalla_productos: cotizacion_app[1] ? cotizacion_app[1].pantalla_productos : '',
            pantalla_calendario: cotizacion_app[1] ? cotizacion_app[1].pantalla_calendario : '',
            pantalla_agenda: cotizacion_app[1] ? cotizacion_app[1].pantalla_agenda : '',
            pantalla_favoritos: cotizacion_app[1] ? cotizacion_app[1].pantalla_favoritos : '',
            pantalla_otro: cotizacion_app[1] ? cotizacion_app[1].pantalla_otro : '',
            pantalla_carrito: cotizacion_app[1] ? cotizacion_app[1].pantalla_carrito : '',
            pantalla_pago: cotizacion_app[1] ? cotizacion_app[1].pantalla_pago : '',
            pantalla_informativa: cotizacion_app[1] ? cotizacion_app[1].pantalla_informativa : '',
            pantalla_anuncios: cotizacion_app[1] ? cotizacion_app[1].pantalla_anuncios : '',
            pantalla_registro: cotizacion_app[1] ? cotizacion_app[1].pantalla_registro : '',
            pantalla_login: cotizacion_app[1] ? cotizacion_app[1].pantalla_login : '',
            pantalla_perfil: cotizacion_app[1] ? cotizacion_app[1].pantalla_perfil : '',
            pantalla_estadisticas: cotizacion_app[1] ? cotizacion_app[1].pantalla_estadisticas : '',
            pantalla_presentacion: cotizacion_app[1] ? cotizacion_app[1].pantalla_presentacion : '',
            pantalla_ubicacion: cotizacion_app[1] ? cotizacion_app[1].pantalla_ubicacion : '',
            pantalla_localizacion: cotizacion_app[1] ? cotizacion_app[1].pantalla_localizacion : '',
            pantalla_categorias: cotizacion_app[1] ? cotizacion_app[1].pantalla_categorias : '',
            pantalla_comentarios: cotizacion_app[1] ? cotizacion_app[1].pantalla_comentarios : '',
            pantalla_galeria: cotizacion_app[1] ? cotizacion_app[1].pantalla_galeria : '',
            pantalla_chat: cotizacion_app[1] ? cotizacion_app[1].pantalla_chat : '',
            informacion_aplicacion: cotizacion_app[2] ? cotizacion_app[2].informacion_adicional : '',

            tipo_marketing: cotizacion_marketing[0] ? cotizacion_marketing[0].tipo_marketing : '',
            informacion_marketing: cotizacion_marketing[1] ? cotizacion_marketing[1].informacion_adicional : '',

            tipo_software: cotizacion_software[0] ? cotizacion_software[0].tipo_software : '',
            informacion_software: cotizacion_software[1] ? cotizacion_software[1].informacion_adicional : '',

            tipo_cloud: cotizacion_cloud[0] ? cotizacion_cloud[0].tipo_cloud : '',
            informacion_cloud: cotizacion_cloud[1] ? cotizacion_cloud[1].informacion_adicional : ''
        }
        dispatch (correodata(correoConstants(data_cotizacion, false).send_cotizacion_web))
    }

    return (
        <div className='' style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-center rounded-top' style={{width: '100%', height: 'auto', border: '1px solid #bdbdbd', padding: 10 / proporcional}}>
                    <p style={{fontSize: 28 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 10, color: 'rgb(23, 43, 222)', cursor: 'pointer', fontWeight: 700, 
                            fontFamily: 'Hind, sans-serif'}}>
                        SOLUCIONES TECNOLÓGICAS
                    </p>
                </div>
                <div style={{width: '100%', height: 'auto', padding: 10 / proporcional, border: '1px solid #bdbdbd', borderTop: ''}}>
                    <div className='' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif'}}>
                            Nro cotización: <span style={{fontWeight: 700}}>{nro_cotizacion}</span>
                        </p>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif'}}>
                            Fecha: <span style={{fontWeight: 700}}>{fecha ? fecha.toDateString() : ''}</span>
                        </p>
                    </div>
                    <div className='rounded' style={{width: '100%', height: 2 / proporcional, marginBottom: 10 / proporcional, background: '#bdbdbd'}}/>
                    {
                        cliente.tipo === 'Personal' ? (
                            <div style={{width: '100%', height: 'auto'}}>
                                <p style={{fontSize: 22 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', cursor: 'pointer', fontWeight: 800, 
                                        fontFamily: 'Hind, sans-serif', textAlign: 'center'}}>
                                    CONTACTO
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    Nombres: <span style={{fontWeight: 700}}>{cliente.nombre}</span>
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    Teléfono: <span style={{fontWeight: 700}}>{cliente.nro_telefono}</span>
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    Correo: <span style={{fontWeight: 700}}>{cliente.correo}</span>
                                </p>
                                <div className='rounded' style={{width: '100%', height: 2 / proporcional, marginBottom: 10 / proporcional, background: '#bdbdbd'}}/>
                                <p style={{fontSize: 22 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', cursor: 'pointer', fontWeight: 800, 
                                        fontFamily: 'Hind, sans-serif', textAlign: 'center'}}>
                                    REDES SOCIALES:
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    Facebook: <span style={{fontWeight: 700}}>{cliente.link_facebook}</span>
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    Instagram: <span style={{fontWeight: 700}}>{cliente.instagram}</span>
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    Twitter (X): <span style={{fontWeight: 700}}>{cliente.link_twitter}</span>
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    TikTok: <span style={{fontWeight: 700}}>{cliente.link_tiktok}</span>
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    Linkedin: <span style={{fontWeight: 700}}>{cliente.link_linkedin}</span>
                                </p>
                            </div>
                        ) : cliente.tipo === 'Negocio' ? (
                            <div style={{width: '100%', height: 'auto'}}>
                                <div className='rounded' style={{width: '100%', height: 2 / proporcional, marginBottom: 10 / proporcional, background: '#bdbdbd'}}/>
                                <p style={{fontSize: 22 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', cursor: 'pointer', fontWeight: 800, 
                                        fontFamily: 'Hind, sans-serif', textAlign: 'center'}}>
                                    DATOS NEGOCIO Y CONTACTO <br/>{cliente.rubro}
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    Nombre negocio: <span style={{fontWeight: 700}}>{cliente.nombre}</span>
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    R.U.C: <span style={{fontWeight: 700}}>{cliente.nro_ruc}</span>
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    Teléfono: <span style={{fontWeight: 700}}>{cliente.nro_telefono}</span>
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    Correo: <span style={{fontWeight: 700}}>{cliente.correo}</span>
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    Nombre de contacto: <span style={{fontWeight: 700}}>{cliente.nombre_contacto}</span>
                                </p>
                                <div className='rounded' style={{width: '100%', height: 2 / proporcional, marginBottom: 10 / proporcional, background: '#bdbdbd'}}/>
                                <p style={{fontSize: 22 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', cursor: 'pointer', fontWeight: 800, 
                                        fontFamily: 'Hind, sans-serif', textAlign: 'center'}}>
                                    REDES SOCIALES:
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    Facebook: <span style={{fontWeight: 700}}>{cliente.link_facebook}</span>
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    Instagram: <span style={{fontWeight: 700}}>{cliente.instagram}</span>
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    Twitter (X): <span style={{fontWeight: 700}}>{cliente.link_twitter}</span>
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    TikTok: <span style={{fontWeight: 700}}>{cliente.link_tiktok}</span>
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    Linkedin: <span style={{fontWeight: 700}}>{cliente.link_linkedin}</span>
                                </p>
                            </div>
                        )  : cliente.tipo === 'Empresa' ? (
                            <div style={{width: '100%', height: 'auto'}}>
                                <div className='rounded' style={{width: '100%', height: 2 / proporcional, marginBottom: 10 / proporcional, background: '#bdbdbd'}}/>
                                <p style={{fontSize: 22 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', cursor: 'pointer', fontWeight: 800, 
                                        fontFamily: 'Hind, sans-serif', textAlign: 'center'}}>
                                    DATOS EMPRESA Y CONTACTO <br/>{cliente.rubro}
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    Nombre empresa: <span style={{fontWeight: 700}}>{cliente.nombre}</span>
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    R.U.C: <span style={{fontWeight: 700}}>{cliente.nro_ruc}</span>
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    Teléfono: <span style={{fontWeight: 700}}>{cliente.nro_telefono}</span>
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    Correo: <span style={{fontWeight: 700}}>{cliente.correo}</span>
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    Nombre de contacto: <span style={{fontWeight: 700}}>{cliente.nombre_contacto}</span>
                                </p>
                                <div className='rounded' style={{width: '100%', height: 2 / proporcional, marginBottom: 10 / proporcional, background: '#bdbdbd'}}/>
                                <p style={{fontSize: 22 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', cursor: 'pointer', fontWeight: 800, 
                                        fontFamily: 'Hind, sans-serif', textAlign: 'center'}}>
                                    REDES SOCIALES:
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    Facebook: <span style={{fontWeight: 700}}>{cliente.link_facebook}</span>
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    Instagram: <span style={{fontWeight: 700}}>{cliente.instagram}</span>
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    Twitter (X): <span style={{fontWeight: 700}}>{cliente.link_twitter}</span>
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    TikTok: <span style={{fontWeight: 700}}>{cliente.link_tiktok}</span>
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    Linkedin: <span style={{fontWeight: 700}}>{cliente.link_linkedin}</span>
                                </p>
                            </div>
                        ) : null
                    }
                </div>
            </div>
            {
                opciones_cotizaciones.dominio ? (
                    <div style={{width: '100%', height: 'auto', border: '1px solid #bdbdbd', borderTop: '', padding: 10 / proporcional, marginBottom: 20 / proporcional}}>
                        <DominioHostingCell proporcional={proporcional}/>
                    </div>
                ) : null
            }
            {   
                opciones_cotizaciones.web ? (
                    <div style={{width: '100%', height: 'auto', border: '1px solid #bdbdbd', borderTop: '', padding: 10 / proporcional, marginBottom: 20 / proporcional}}>
                    <PaginaWebCell proporcional={proporcional}/>
                    </div>
                ) : null
                
            } 
            {
                opciones_cotizaciones.aplicacion ? (
                    <div style={{width: '100%', height: 'auto', border: '1px solid #bdbdbd', borderTop: '', padding: 10 / proporcional, marginBottom: 20 / proporcional}}>
                    <AplicacionMovilCell proporcional={proporcional}/>
                    </div>
                ) : null
            }   
            {
                opciones_cotizaciones.marketing ? (
                    <div style={{width: '100%', height: 'auto', border: '1px solid #bdbdbd', borderTop: '', padding: 10 / proporcional, marginBottom: 20 / proporcional}}>
                    <MarketingDigitalCell proporcional={proporcional}/>
                    </div>
                ) : null
            }
            {
                opciones_cotizaciones.software ? (
                    <div style={{width: '100%', height: 'auto', border: '1px solid #bdbdbd', borderTop: '', padding: 10 / proporcional, marginBottom: 20 / proporcional}}>
                    <SoftwareCell proporcional={proporcional}/>
                    </div>
                ): null
            
            }
            {
                opciones_cotizaciones.nube ? (
                    <div style={{width: '100%', height: 'auto', border: '1px solid #bdbdbd', borderTop: '', padding: 10 / proporcional, marginBottom: 20 / proporcional}}>
                    <CloudServiceCell proporcional={proporcional}/>
                    </div>
                ) : null
            }
            <div className='d-flex justify-content-center' style={{width: '100%', height: 50 / proporcional, marginBottom: 20 / proporcional}}>
                <button className='btn' 
                    style={{width: '90%', height: 50 / proporcional, fontSize: 16 / proporcional, color: 'white', background: 'rgb(23, 43, 222)', fontWeight: 600}}
                        onClick={() => volver()}>
                    Volver
                </button>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 50 / proporcional}}>
                <button className='btn' 
                    style={{width: '90%', height: 50 / proporcional, fontSize: 16 / proporcional, color: 'white', background: 'rgb(23, 43, 222)', fontWeight: 600}}
                        onClick={() => enviar_cotizacion()}>
                    Enviar cotización
                </button>
            </div>
        </div>
    )
}