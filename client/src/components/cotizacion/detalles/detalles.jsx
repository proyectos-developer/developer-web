import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {cotizaciondata} from '../../../redux/slice/cotizaciondata'
import { cotizacionConstants } from '../../../uri/cotizacion-constants'
import { useLocation } from 'react-router-dom'

export default function Detalles({proporcional}) {
    
    const dispatch = useDispatch()
    const location = useLocation ()

    const [cotizacion, setCotizacion] = useState({})

    const {get_cotizacion} = useSelector(({cotizacion_data}) => cotizacion_data)

    useEffect (() => {
        dispatch (cotizaciondata(cotizacionConstants({}, false, location.pathname.split ('/')[2], location.pathname.split('/')[3]).get_cotizacion))  
    }, [])

    useEffect(() => {
      if (get_cotizacion && get_cotizacion.success === true && get_cotizacion.cotizacion){
        console.log ('get', get_cotizacion.cotizacion)
        setCotizacion(get_cotizacion.cotizacion)
      }
    }, [get_cotizacion])

    return (
      <div className='' style={{width: '100%', height: 'auto'}}>
          {
            cotizacion && cotizacion.nro_cotizacion ? (
              <div style={{width: '100%', height: 'auto'}}>
                  <div className='d-flex justify-content-center rounded-top' style={{width: '100%', height: 'auto', border: '1px solid #bdbdbd', padding: 10 / proporcional}}>
                      <p style={{fontSize: 32 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0, color: 'rgb(23, 43, 222)', cursor: 'default', fontWeight: 700, 
                              fontFamily: 'Hind, sans-serif'}}>
                          SOLUCIONES TECNOLÓGICAS
                      </p>
                  </div>
                  <div style={{width: '100%', height: 'auto', padding: 10 / proporcional, border: '1px solid #bdbdbd', borderTop: ''}}>
                      <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                          <div className='d-flex justify-content-start' style={{width: '50%', height: 'auto'}}>
                              <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                      fontFamily: 'Hind, sans-serif'}}>
                                  Nro cotización: <span style={{fontWeight: 700}}>{cotizacion.nro_cotizacion}</span>
                              </p>
                          </div>
                          <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                              <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                      fontFamily: 'Hind, sans-serif'}}>
                                  Fecha: <span style={{fontWeight: 700}}>{cotizacion.fecha.split('T')[0]}</span>
                              </p>
                          </div>
                      </div>
                    {
                        cotizacion.tipo_negocio === 'Personal' ? (
                            <div style={{width: '100%', height: 'auto'}}>
                                <div className='rounded' style={{width: '100%', height: 2 / proporcional, marginBottom: 10 / proporcional, background: '#bdbdbd'}}/>
                                <p style={{fontSize: 24 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', cursor: 'default', fontWeight: 800, 
                                        fontFamily: 'Hind, sans-serif', textAlign: 'center'}}>
                                    CONTACTO
                                </p>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    Nombres: <span style={{fontWeight: 700}}>{cotizacion.nombre}</span>
                                </p>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Teléfono: <span style={{fontWeight: 700}}>{cotizacion.nro_telefono}</span>
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Correo: <span style={{fontWeight: 700}}>{cotizacion.correo}</span>
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
                                            Facebook: <span style={{fontWeight: 700}}>{cotizacion.link_facebook}</span>
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Instagram: <span style={{fontWeight: 700}}>{cotizacion.link_instagram}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Twitter (X): <span style={{fontWeight: 700}}>{cotizacion.link_twitter}</span>
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            TikTok: <span style={{fontWeight: 700}}>{cotizacion.link_tiktok}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Linkedin: <span style={{fontWeight: 700}}>{cotizacion.link_linkedin}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : cotizacion.tipo_negocio === 'Negocio' ? (
                            <div style={{width: '100%', height: 'auto'}}>
                                <p style={{fontSize: 24 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', cursor: 'default', fontWeight: 800, 
                                        fontFamily: 'Hind, sans-serif', textAlign: 'center'}}>
                                    DATOS NEGOCIO Y CONTACTO <br/>{cotizacion.rubro}
                                </p>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Nombre negocio: <span style={{fontWeight: 700}}>{cotizacion.nombre}</span>
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            R.U.C: <span style={{fontWeight: 700}}>{cotizacion.nro_ruc}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Teléfono: <span style={{fontWeight: 700}}>{cotizacion.nro_telefono}</span>
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Correo: <span style={{fontWeight: 700}}>{cotizacion.correo}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Nombre de contacto: <span style={{fontWeight: 700}}>{cotizacion.nombre_contacto}</span>
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
                                            Facebook: <span style={{fontWeight: 700}}>{cotizacion.link_facebook}</span>
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Instagram: <span style={{fontWeight: 700}}>{cotizacion.link_instagram}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Twitter (X): <span style={{fontWeight: 700}}>{cotizacion.link_twitter}</span>
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            TikTok: <span style={{fontWeight: 700}}>{cotizacion.link_tiktok}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Linkedin: <span style={{fontWeight: 700}}>{cotizacion.link_linkedin}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )  : cotizacion.tipo_negocio === 'Empresa' ? (
                            <div style={{width: '100%', height: 'auto'}}>
                                <p style={{fontSize: 24 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', cursor: 'pointer', fontWeight: 800, 
                                        fontFamily: 'Hind, sans-serif', textAlign: 'center'}}>
                                    DATOS EMPRESA Y CONTACTO <br/>{cotizacion.rubro}
                                </p>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Nombre empresa: <span style={{fontWeight: 700}}>{cotizacion.nombre}</span>
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            R.U.C: <span style={{fontWeight: 700}}>{cotizacion.nro_ruc}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Teléfono: <span style={{fontWeight: 700}}>{cotizacion.nro_telefono}</span>
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Correo: <span style={{fontWeight: 700}}>{cotizacion.correo}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Nombre de contacto: <span style={{fontWeight: 700}}>{cotizacion.nombre_contacto}</span>
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
                                            Facebook: <span style={{fontWeight: 700}}>{cotizacion.link_facebook}</span>
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Instagram: <span style={{fontWeight: 700}}>{cotizacion.link_instagram}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Twitter (X): <span style={{fontWeight: 700}}>{cotizacion.link_twitter}</span>
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            TikTok: <span style={{fontWeight: 700}}>{cotizacion.link_tiktok}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '50%', height: 'auto'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'pointer', fontWeight: 500, 
                                                fontFamily: 'Hind, sans-serif'}}>
                                            Linkedin: <span style={{fontWeight: 700}}>{cotizacion.link_linkedin}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    }
                    {
                      cotizacion.cotizacion_domhost ? (
                        <div style={{width: '100%', height: 'auto', borderTop: '1px solid #bdbdbd', marginBottom: 20 / proporcional, paddingTop: 10 / proporcional}}>
                            <div className='d-flex justify-content-center rounded-top' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                <p style={{fontSize: 30 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(23, 43, 222)', cursor: 'default', fontWeight: 700, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    COTIZACION DOMINIO Y HOSTING
                                </p>
                            </div>
                            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                <div style={{width: '50%', height: 'auto'}}>
                                    <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                            fontFamily: 'Hind, sans-serif'}}>
                                        Extensión del dominio: <span style={{fontWeight: 700}}>{cotizacion.tipo_dominio}</span>
                                    </p>
                                </div>
                                <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                                    <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                            fontFamily: 'Hind, sans-serif'}}>
                                        Tipo de hosting: <span style={{fontWeight: 700}}>{cotizacion.tipo_hosting}</span>
                                    </p>
                                </div>
                            </div>
                            <div style={{width: '100%', height: 'auto'}}>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                        fontFamily: 'Hind, sans-serif'}}>
                                    Informacion adicional: <br/><span style={{fontWeight: 700}}>{cotizacion.informacion_domhost}</span>
                                </p>
                            </div>
                        </div>
                      ) : null
                    }
                    {
                      cotizacion.cotizacion_web ? (
                        <div style={{width: '100%', height: 'auto', borderTop: '1px solid #bdbdbd', marginBottom: 20 / proporcional, paddingTop: 10 / proporcional}}>
                          <div className='d-flex justify-content-center rounded-top' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                              <p style={{fontSize: 30 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(23, 43, 222)', cursor: 'default', fontWeight: 700, 
                                      fontFamily: 'Hind, sans-serif'}}>
                                  COTIZACION PÁGINA WEB
                              </p>
                          </div>
                          <div className='' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                              <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                      fontFamily: 'Hind, sans-serif'}}>
                                  Tipo de página: <span style={{fontWeight: 700}}>{cotizacion.tipo_web}</span>
                              </p>
                          </div>
                          <div className='' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                              <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                      fontFamily: 'Hind, sans-serif'}}>
                                  Pestañas:
                              </p>
                              <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pestania_nosotros ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Nosotros
                                      </p>
                                  </div>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pestania_productos ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Productos
                                      </p>
                                  </div>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pestania_servicios ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Servicios
                                      </p>
                                  </div>
                              </div>
                              <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pestania_fotos ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Fotos
                                      </p>
                                  </div>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pestania_videos ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Vídeos
                                      </p>
                                  </div>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pestania_tienda ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Tienda
                                      </p>
                                  </div>
                              </div>
                              <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pestania_carrito ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Carrito
                                      </p>
                                  </div>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pestania_compras ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Compras
                                      </p>
                                  </div>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pestania_seguimiento ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Seguimiento
                                      </p>
                                  </div>
                              </div>
                              <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pestania_contacto ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Contacto
                                      </p>
                                  </div>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pestania_perfil ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Perfil
                                      </p>
                                  </div>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pestania_favoritos ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Favoritos
                                      </p>
                                  </div>
                              </div>
                              <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pestania_registro ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Registro
                                      </p>
                                  </div>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pestania_login ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Login
                                      </p>
                                  </div>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pestania_cotizacion ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Cotización
                                      </p>
                                  </div>
                              </div>
                              <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pestania_pago ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Pago
                                      </p>
                                  </div>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pestania_administrativa ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Administrativa
                                      </p>
                                  </div>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                  </div>
                              </div>
                          </div>
                          <div style={{width: '100%', height: 'auto'}}>
                              <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                      fontFamily: 'Hind, sans-serif'}}>
                                  Informacion adicional: <br/><span style={{fontWeight: 700}}>{cotizacion.informacion_web}</span>
                              </p>
                          </div>
                        </div>
                      ) : null
                    }
                    {
                      cotizacion.cotizacion_app ? (
                        <div style={{width: '100%', height: 'auto', borderTop: '1px solid #bdbdbd', marginBottom: 20 / proporcional, paddingTop: 10 / proporcional}}>
                          <div className='d-flex justify-content-center rounded-top' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                              <p style={{fontSize: 30 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(23, 43, 222)', cursor: 'default', fontWeight: 700, 
                                      fontFamily: 'Hind, sans-serif'}}>
                                  COTIZACION APLICACIÓN MÓVIL
                              </p>
                          </div>
                          <div className='' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                              <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                      fontFamily: 'Hind, sans-serif'}}>
                                  Tipo de aplicación: <span style={{fontWeight: 700}}>{cotizacion.tipo_aplicacion}</span>
                              </p>
                          </div>
                          <div className='' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                              <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                      fontFamily: 'Hind, sans-serif'}}>
                                  Pantallas:
                              </p>
                              <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pantalla_login ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Login
                                      </p>
                                  </div>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pantalla_registro ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Registro
                                      </p>
                                  </div>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pantalla_perfil ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Perfil
                                      </p>
                                  </div>
                              </div>
                              <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pantalla_presentacion ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Presentación
                                      </p>
                                  </div>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pantalla_anuncios ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Anuncios
                                      </p>
                                  </div>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pantalla_productos ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Productos
                                      </p>
                                  </div>
                              </div>
                              <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pantalla_carrito ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Carrito
                                      </p>
                                  </div>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pantalla_favoritos ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Favoritos
                                      </p>
                                  </div>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pantalla_comentarios ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Comentarios
                                      </p>
                                  </div>
                              </div>
                              <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pantalla_categorias ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Categorías
                                      </p>
                                  </div>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pantalla_calendario ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Calendario
                                      </p>
                                  </div>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pantalla_agenda ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Agenda
                                      </p>
                                  </div>
                              </div>
                              <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pantalla_estadisticas ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Estadísticas
                                      </p>
                                  </div>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pantalla_chat ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Chat
                                      </p>
                                  </div>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pantalla_galeria ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Galería
                                      </p>
                                  </div>
                              </div>
                              <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pantalla_informativa ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Informativa
                                      </p>
                                  </div>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pantalla_ubicacion ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Ubicación
                                      </p>
                                  </div>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pantalla_localizacion ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Geolocalizacion
                                      </p>
                                  </div>
                              </div>
                              <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pantalla_pago ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Pago
                                      </p>
                                  </div>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                      <img src={cotizacion.pantalla_otro ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                                      <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                              fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                                          Otro
                                      </p>
                                  </div>
                                  <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                                  </div>
                              </div>
                          </div>
                          <div style={{width: '100%', height: 'auto'}}>
                              <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                      fontFamily: 'Hind, sans-serif'}}>
                                  Informacion adicional: <br/><span style={{fontWeight: 700}}>{cotizacion.informacion_app}</span>
                              </p>
                          </div>
                        </div>
                      ) : null
                    }
                    {
                      cotizacion.cotizacion_marketing ? (
                        <div style={{width: '100%', height: 'auto', borderTop: '1px solid #bdbdbd', marginBottom: 20 / proporcional, paddingTop: 10 / proporcional}}>
                          <div className='d-flex justify-content-center rounded-top' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                              <p style={{fontSize: 30 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(23, 43, 222)', cursor: 'default', fontWeight: 700, 
                                      fontFamily: 'Hind, sans-serif'}}>
                                  COTIZACION MARKETING DIGITAL
                              </p>
                          </div>
                          <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                              <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                      fontFamily: 'Hind, sans-serif'}}>
                                  Tipo de servicio: <span style={{fontWeight: 700}}>{cotizacion.tipo_marketing}</span>
                              </p>
                          </div>
                          <div style={{width: '100%', height: 'auto'}}>
                              <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                      fontFamily: 'Hind, sans-serif'}}>
                                  Informacion adicional: <br/><span style={{fontWeight: 700}}>{cotizacion.informacion_marketing}</span>
                              </p>
                          </div>
                        </div>
                      ) : null
                    }
                    {
                      cotizacion.cotizacion_software ? (
                        <div style={{width: '100%', height: 'auto', borderTop: '1px solid #bdbdbd', marginBottom: 20 / proporcional, paddingTop: 10 / proporcional}}>
                          <div className='d-flex justify-content-center rounded-top' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                              <p style={{fontSize: 30 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(23, 43, 222)', cursor: 'default', fontWeight: 700, 
                                      fontFamily: 'Hind, sans-serif'}}>
                                  COTIZACION SOFTWARE
                              </p>
                          </div>
                          <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                              <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                      fontFamily: 'Hind, sans-serif'}}>
                                  Tipo de servicio: <span style={{fontWeight: 700}}>{cotizacion.tipo_software}</span>
                              </p>
                          </div>
                          <div style={{width: '100%', height: 'auto'}}>
                              <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                      fontFamily: 'Hind, sans-serif'}}>
                                  Informacion adicional: <br/><span style={{fontWeight: 700}}>{cotizacion.informacion_software}</span>
                              </p>
                          </div>
                        </div>
                      ) : null
                    }
                    {
                      cotizacion.cotizacion_cloud ? (
                        <div style={{width: '100%', height: 'auto', borderTop: '1px solid #bdbdbd', marginBottom: 20 / proporcional, paddingTop: 10 / proporcional}}>
                          <div className='d-flex justify-content-center rounded-top' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                              <p style={{fontSize: 30 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(23, 43, 222)', cursor: 'default', fontWeight: 700, 
                                      fontFamily: 'Hind, sans-serif'}}>
                                  COTIZACION CLOUD SERVICES
                              </p>
                          </div>
                          <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                              <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                      fontFamily: 'Hind, sans-serif'}}>
                                  Tipo de servicio: <span style={{fontWeight: 700}}>{cotizacion.tipo_cloud}</span>
                              </p>
                          </div>
                          <div style={{width: '100%', height: 'auto'}}>
                              <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                                      fontFamily: 'Hind, sans-serif'}}>
                                  Informacion adicional: <br/><span style={{fontWeight: 700}}>{cotizacion.informacion_cloud}</span>
                              </p>
                          </div>
                        </div>
                      ) : null
                    }
                  </div>
              </div>
            ) : null
          }
        </div>
    )
}