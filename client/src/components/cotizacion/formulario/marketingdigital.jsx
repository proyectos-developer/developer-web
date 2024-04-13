import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import image_busqueda_seo from '../../../assets/images/image_busqueda_seo_600.png'
import image_busqueda_sem from '../../../assets/images/image_busqueda_sem_600.png'
import image_marketing_contenido from '../../../assets/images/image_marketing_contenido_600.png'
import image_redes_sociales from '../../../assets/images/image_redes_sociales_600.png'
import image_email_marketing from '../../../assets/images/image_email_marketing_600.png'
import image_analitica_seguimiento from '../../../assets/images/image_analitica_seguimiento_600.png'

export default function MarketingDigital({proporcional}) {

    const navigate = useNavigate()

    const [tipo_marketing, setTipoMarketing] = useState('')
    const [seleccion_marketing, setSeleccionMarketing] = useState('')

    const [tipo, setTipo] = useState('')
    const [nombre, setNombre] = useState('')
    const [rubro, setRubro] = useState('')
    const [nro_ruc, setNroRuc] = useState('')
    const [nro_telefono, setNroTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const [nombre_contacto, setNombreContacto] = useState ('')

    const [informacion_adicional, setInformacionAdicional] = useState ('')
    const [link_facebook, setLinkFacebook] = useState ('')
    const [link_instagram, setLinkInstagram] = useState ('')
    const [link_tiktok, setLinkTiktok] = useState ('')
    const [link_linkedin, setLinkLinkedin] = useState ('')
    const [link_twitter, setLinkTwitter] = useState ('')

    const [boton_volver, setBotonVolver] = useState (false)
    const [boton_siguiente, setBotonSiguiente] = useState (false)
    const [boton_anterior, setBotonAnterior] = useState (false)
    const [boton_finalizar, setBotonFinalizar] = useState (false)

    const [paso, setPaso] = useState (1)

    const anterior_paso = () => {
        setPaso(paso - 1)
    }

    const siguiente_paso = () => {
        setPaso(paso + 1)
    }

    const volver_opciones = () => {
        navigate ('/cotizacion')
    }

    return (
        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
            {
                paso === 1 ? (
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                            <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                background: paso === 1 ? 'rgb(23, 43, 222)' :  'white'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                        textAlign: 'center', color: paso === 1 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                    1
                                </p>
                            </div>
                            <div style={{width: 200 / proporcional, height: 4 / proporcional, background: 'rgb(23, 43, 222)', marginTop: 60 / proporcional, marginBottom: 60 / proporcional}}/>
                            <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                background: paso === 2 ? 'rgb(23, 43, 222)' :  'white'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                        textAlign: 'center', color: paso === 2 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                    2
                                </p>
                            </div>
                            <div style={{width: 200 / proporcional, height: 4 / proporcional, background: 'rgb(23, 43, 222)', marginTop: 60 / proporcional, marginBottom: 60 / proporcional}}/>
                            <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                background: paso === 2 ? 'rgb(23, 43, 222)' :  'white'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                        textAlign: 'center', color: paso === 2 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                    3
                                </p>
                            </div>
                        </div>
                        <div className='' style={{width: '100%', height: 'auto', marginBottom: 75 / proporcional}}>
                            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 75 / proporcional}}>
                                <div className='position-relative' style={{width: '32%', height: 'auto', cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionMarketing('seo')} onMouseLeave={() => setSeleccionMarketing('')}
                                    onClick={() => setTipoMarketing('seo')}>
                                    {
                                        seleccion_marketing === 'seo' || tipo_marketing === 'seo' ? (
                                            <div className='rounded position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.6)'}}/>
                                        ) : null
                                    }
                                    <img className={`${seleccion_marketing === 'seo' || tipo_marketing === 'seo' ? 'rounded' : ''}`} 
                                        src={image_busqueda_seo} style={{width: '100%', height: '100%', marginBottom: 20 / proporcional}}/>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                            textAlign: 'center', color: 'rgb(23, 43, 222)', cursor: 'default'}}>
                                        Optimizacion motores de búsqueda <br/> (SEO)
                                    </p>
                                </div>
                                <div className='position-relative' style={{width: '32%', height: 'auto', cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionMarketing('sem')} onMouseLeave={() => setSeleccionMarketing('')}
                                    onClick={() => setTipoMarketing('sem')}>
                                    {
                                        seleccion_marketing === 'sem' || tipo_marketing === 'sem' ? (
                                            <div className='rounded position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.6)'}}/>
                                        ) : null
                                    }
                                    <img className={`${seleccion_marketing === 'sem' || tipo_marketing === 'sem' ? 'rounded' : ''}`} 
                                        src={image_busqueda_sem} style={{width: '100%', height: '100%', marginBottom: 20 / proporcional}}/>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                            textAlign: 'center', color: 'rgb(23, 43, 222)', cursor: 'default'}}>
                                        Publicidad motores de búsqueda <br/> (SEM)
                                    </p>
                                </div>
                                <div className='position-relative' style={{width: '32%', height: 'auto', cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionMarketing('contenido')} onMouseLeave={() => setSeleccionMarketing('')}
                                    onClick={() => setTipoMarketing('contenido')}>
                                    {
                                        seleccion_marketing === 'contenido' || tipo_marketing === 'contenido' ? (
                                            <div className='rounded position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.6)'}}/>
                                        ) : null
                                    }
                                    <img className={`${seleccion_marketing === 'contenido' || tipo_marketing === 'contenido' ? 'rounded' : ''}`} 
                                        src={image_marketing_contenido} style={{width: '100%', height: '100%', marginBottom: 20 / proporcional}}/>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                            textAlign: 'center', color: 'rgb(23, 43, 222)', cursor: 'default'}}>
                                        Marketing de contenido
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 75 / proporcional}}>
                                <div className='position-relative' style={{width: '32%', height: 'auto', cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionMarketing('redes')} onMouseLeave={() => setSeleccionMarketing('')}
                                    onClick={() => setTipoMarketing('redes')}>
                                    {
                                        seleccion_marketing === 'redes' || tipo_marketing === 'redes' ? (
                                            <div className='rounded position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.6)'}}/>
                                        ) : null
                                    }
                                    <img className={`${seleccion_marketing === 'redes' || tipo_marketing === 'redes' ? 'rounded-circle' : ''}`} 
                                        src={image_redes_sociales} style={{width: '100%', height: '100%', marginBottom: 20 / proporcional}}/>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                            textAlign: 'center', color: 'rgb(23, 43, 222)', cursor: 'default'}}>
                                        Redes sociales
                                    </p>
                                </div>
                                <div className='position-relative' style={{width: '32%', height: 'auto', cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionMarketing('email')} onMouseLeave={() => setSeleccionMarketing('')}
                                    onClick={() => setTipoMarketing('email')}>
                                    {
                                        seleccion_marketing === 'email' || tipo_marketing === 'email' ? (
                                            <div className='rounded position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.6)'}}/>
                                        ) : null
                                    }
                                    <img className={`${seleccion_marketing === 'email' || tipo_marketing === 'email' ? 'rounded-circle' : ''}`} 
                                        src={image_email_marketing} style={{width: '100%', height: '100%', marginBottom: 20 / proporcional}}/>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                            textAlign: 'center', color: 'rgb(23, 43, 222)', cursor: 'default'}}>
                                        Email marketing
                                    </p>
                                </div>
                                <div className='position-relative' style={{width: '32%', height: 'auto', cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionMarketing('analitica')} onMouseLeave={() => setSeleccionMarketing('')}
                                    onClick={() => setTipoMarketing('analitica')}>
                                    {
                                        seleccion_marketing === 'analitica' || tipo_marketing === 'analitica' ? (
                                            <div className='rounded position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.6)'}}/>
                                        ) : null
                                    }
                                    <img className={`${seleccion_marketing === 'analitica' || tipo_marketing === 'analitica' ? 'rounded-circle' : ''}`} 
                                        src={image_analitica_seguimiento} style={{width: '100%', height: '100%', marginBottom: 20 / proporcional}}/>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                            textAlign: 'center', color: 'rgb(23, 43, 222)', cursor: 'default'}}>
                                        Analítica y seguimiento
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between' style={{width: '100%', height: 50 / proporcional}}>
                            <button className='btn' style={{width: '20%', height: 50 / proporcional, border: '1px solid rgb(23, 43, 222)', fontWeight: 600,
                                background: boton_volver ? 'white' : 'rgb(23, 43, 222)', color: boton_volver ? 'rgb(23, 43, 222)' : 'white', fontSize: 18 / proporcional}}
                                onMouseOver={() => setBotonVolver(true)} onMouseLeave={() => setBotonVolver(false)}
                                onClick={() => volver_opciones()}>
                                Volver
                            </button>
                            <button className='btn' style={{width: '20%', height: 50 / proporcional, border: '1px solid rgb(23, 43, 222)', fontWeight: 600,
                                background: boton_siguiente ? 'white' : 'rgb(23, 43, 222)', color: boton_siguiente ? 'rgb(23, 43, 222)' : 'white', fontSize: 18 / proporcional}}
                                onMouseOver={() => setBotonSiguiente(true)} onMouseLeave={() => setBotonSiguiente(false)}
                                onClick={() => siguiente_paso()}>
                                Siguiente
                            </button>
                        </div>
                    </div>
                ) : paso === 2 ? (
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                            <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                background: paso === 1 ? 'rgb(23, 43, 222)' :  'white'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                        textAlign: 'center', color: paso === 1 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                    1
                                </p>
                            </div>
                            <div style={{width: 200 / proporcional, height: 4 / proporcional, background: 'rgb(23, 43, 222)', marginTop: 60 / proporcional, marginBottom: 60 / proporcional}}/>
                            <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                background: paso === 2 ? 'rgb(23, 43, 222)' :  'white'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                        textAlign: 'center', color: paso === 2 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                    2
                                </p>
                            </div>
                            <div style={{width: 200 / proporcional, height: 4 / proporcional, background: 'rgb(23, 43, 222)', marginTop: 60 / proporcional, marginBottom: 60 / proporcional}}/>
                            <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                background: paso === 3 ? 'rgb(23, 43, 222)' :  'white'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                        textAlign: 'center', color: paso === 3 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                    3
                                </p>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                            <textarea
                                type='default'
                                className='form-control'
                                style={{width: '100%', height: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, 
                                    fontWeight: 500, color: '#212121', marginBottom: 20 / proporcional}}
                                value={informacion_adicional}
                                onChange={(event) => setInformacionAdicional(event.target.vallue)}
                                placeholder='Información adicional'
                                rows={4}/>
                            <input 
                                type='url'
                                className='form-control'
                                style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`,
                                    fontWeight: 500, color: '#212121', marginBottom: 20 / proporcional}}
                                id='link_facebook'
                                value={link_facebook}
                                onChange={(event) => setLinkFacebook(event.target.value)}
                                placeholder='Link del facebook'/>
                            <input 
                                type='url'
                                className='form-control'
                                style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`,
                                    fontWeight: 500, color: '#212121', marginBottom: 20 / proporcional}}
                                id='link_instagram'
                                value={link_instagram}
                                onChange={(event) => setLinkInstagram(event.target.value)}
                                placeholder='Link del instagram'/>
                            <input 
                                type='url'
                                className='form-control'
                                style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`,
                                    fontWeight: 500, color: '#212121', marginBottom: 20 / proporcional}}
                                id='link_tiktok'
                                value={link_tiktok}
                                onChange={(event) => setLinkTiktok(event.target.value)}
                                placeholder='Link del tiktok'/>
                            <input 
                                type='url'
                                className='form-control'
                                style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`,
                                    fontWeight: 500, color: '#212121', marginBottom: 20 / proporcional}}
                                id='link_linkedin'
                                value={link_linkedin}
                                onChange={(event) => setLinkLinkedin(event.target.value)}
                                placeholder='Link del linkedin'/>
                            <input 
                                type='url'
                                className='form-control'
                                style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`,
                                    fontWeight: 500, color: '#212121', marginBottom: 20 / proporcional}}
                                id='link_twitter'
                                value={link_twitter}
                                onChange={(event) => setLinkTwitter(event.target.value)}
                                placeholder='Link del twitter (X)'/>
                        </div>
                        <div className='d-flex justify-content-between' style={{width: '100%', height: 50 / proporcional}}>
                            <button className='btn' style={{width: '20%', height: 50 / proporcional, border: '1px solid rgb(23, 43, 222)', fontWeight: 600,
                                background: boton_volver ? 'white' : 'rgb(23, 43, 222)', color: boton_volver ? 'rgb(23, 43, 222)' : 'white', fontSize: 18 / proporcional}}
                                onMouseOver={() => setBotonVolver(true)} onMouseLeave={() => setBotonVolver(false)}
                                onClick={() => anterior_paso()}>
                                Volver
                            </button>
                            <button className='btn' style={{width: '20%', height: 50 / proporcional, border: '1px solid rgb(23, 43, 222)', fontWeight: 600,
                                background: boton_siguiente ? 'white' : 'rgb(23, 43, 222)', color: boton_siguiente ? 'rgb(23, 43, 222)' : 'white', fontSize: 18 / proporcional}}
                                onMouseOver={() => setBotonSiguiente(true)} onMouseLeave={() => setBotonSiguiente(false)}
                                onClick={() => siguiente_paso()}>
                                Siguiente
                            </button>
                        </div>
                    </div>
                ) : paso === 3 ? (
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                            <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                background: paso === 1 ? 'rgb(23, 43, 222)' :  'white'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                        textAlign: 'center', color: paso === 1 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                    1
                                </p>
                            </div>
                            <div style={{width: 200 / proporcional, height: 4 / proporcional, background: 'rgb(23, 43, 222)', marginTop: 60 / proporcional, marginBottom: 60 / proporcional}}/>
                            <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                background: paso === 2 ? 'rgb(23, 43, 222)' :  'white'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                        textAlign: 'center', color: paso === 2 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                    2
                                </p>
                            </div>
                            <div style={{width: 200 / proporcional, height: 4 / proporcional, background: 'rgb(23, 43, 222)', marginTop: 60 / proporcional, marginBottom: 60 / proporcional}}/>
                            <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                background: paso === 2 ? 'rgb(23, 43, 222)' :  'white'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                        textAlign: 'center', color: paso === 2 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                    3
                                </p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 75 / proporcional}}>
                            <div style={{width: '100%', height: 'auto'}}>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <div style={{width: '49%', height: 50 / proporcional}}>
                                        <select
                                            id='tipo'
                                            className='form-select'
                                            style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, color: '#212121', fontWeight: 600}}
                                            value={tipo}
                                            onChange={(event) => {event.target.value !== '0' ? setTipo(event.target.value) : setTipo('')}}>
                                            <option value='0'>{tipo === '' ? 'Seleccionar tipo' : tipo}</option>
                                            <option value='Personal'>Personal</option>
                                            <option value='Negocio'>Negocio</option>
                                            <option value='Empresa'>Empresa</option>
                                        </select>
                                    </div>
                                    <div style={{width: '49%', height: 50 / proporcional}}>
                                        <input  
                                            disabled={tipo === '' ? true : false}
                                            className='form-control'
                                            value={nombre}
                                            onChange={(event) => setNombre(event.target.value)}
                                            style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, fontWeight: 600, color: '#212121'}}
                                            id='nombre'
                                            type='default'
                                            placeholder={tipo === 'Personal' ? 'Nombres y apellidos' : tipo === 'negocio' ? 'Nombre de negocio' : tipo === 'Empresa' ? 'Nombre de la empresa' : ''}/>
                                    </div>
                                </div>
                                {
                                    tipo !== 'Personal' && tipo !== '' && tipo !== '0' ? (
                                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                            <div style={{width: '49%', height: 50 / proporcional}}>
                                                {
                                                    tipo !== 'Otro' ? (
                                                        <select
                                                            className='form-select'
                                                            style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, color: '#212121', fontWeight: 600}}
                                                            value={rubro}
                                                            onChange={(event) => {event.target.value !== '0' ? setRubro(event.target.value) : setRubro('')}}>
                                                            <option value='0'>{rubro === '' ? 'Seleccionar rubro' : rubro}</option>
                                                            <option value='Tecnología de la información'>Tecnología de la información</option>
                                                            <option value='Servicios Financieros'>Servicios Financieros</option>
                                                            <option value='Salud y Bienestar'>Salud y Bienestar</option>
                                                            <option value='Comercio Minosrista'>Comercio Minosrista</option>
                                                            <option value='Educación'>'Educación'</option>
                                                            <option value='Aliminentos y Bebidas'>'Aliminentos y Bebidas'</option>
                                                            <option value='Servicios Profesionales'>'Servicios Profesionales'</option>
                                                            <option value='Turismo y Hospitalidad'>'Turismo y Hospitalidad'</option>
                                                            <option value='Construcción y Bienes'>'Construcción y Bienes'</option>
                                                            <option value='Medios de comuniación y entretenimiento'>'Medios de comuniación y entretenimiento'</option>
                                                            <option value='Manufactura'>'Manufactura'</option>
                                                            <option value='Energía y Medio Ambiente'>'Energía y Medio Ambiente'</option>
                                                            <option value='Transporte y Logística'>'Transporte y Logística'</option>
                                                            <option value='Moda y Textiles'>'Moda y Textiles'</option>
                                                            <option value='Telecomunicaciones'>'Telecomunicaciones'</option>
                                                            <option value='Otro'>Otro</option>
                                                        </select>
                                                    ) : (
                                                        <input  
                                                            disabled={rubro === '' ? true : false}
                                                            className='form-control'
                                                            value={rubro}
                                                            onChange={(event) => setRubro(event.target.value)}
                                                            style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, fontWeight: 600, color: '#212121'}}
                                                            id='rubro'
                                                            type='default'
                                                            placeholder='Rubro'/>
                                                    )
                                                }
                                            </div>
                                            <div style={{width: '49%', height: 50 / proporcional}}>
                                                <input  
                                                    className='form-control'
                                                    value={nro_ruc}
                                                    onChange={(event) => setNroRuc(event.target.value)}
                                                    style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, fontWeight: 600, color: '#212121'}}
                                                    id='nro_ruc'
                                                    type='number'
                                                    placeholder='Número de R.U.C'/>
                                            </div>
                                        </div>
                                    ) : null
                                }
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <div style={{width: '49%', height: 50 / proporcional}}>
                                        <input  
                                            disabled={(tipo !== '0' && tipo !== '') ? false : true}
                                            className='form-control'
                                            value={nro_telefono}
                                            onChange={(event) => setNroTelefono(event.target.value)}
                                            style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, fontWeight: 600, color: '#212121'}}
                                            id='nro_telefono'
                                            type='number'
                                            placeholder='Número de teléfono'/>
                                    </div>
                                    <div style={{width: '49%', height: 50 / proporcional}}>
                                        <input  
                                            disabled={(tipo !== '0' && tipo !== '') ? false : true}
                                            className='form-control'
                                            value={correo}
                                            onChange={(event) => setCorreo(event.target.value)}
                                            style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, fontWeight: 600, color: '#212121'}}
                                            id='correo'
                                            type='default'
                                            placeholder='Correo electrónico'/>
                                    </div>
                                </div>
                                {
                                    tipo !== 'Personal' && tipo !== '' && tipo !== '0' ? (
                                        <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                            <div style={{width: '49%', height: 50 / proporcional}}>
                                                <input  
                                                    className='form-control'
                                                    value={nombre_contacto}
                                                    onChange={(event) => setNombreContacto(event.target.value)}
                                                    style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, fontWeight: 600, color: '#212121'}}
                                                    id='nombre_contacto'
                                                    type='default'
                                                    placeholder='Nombre de la persona de contacto'/>
                                            </div>
                                        </div>
                                    ): null
                    
                                }
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 50 / proporcional}}>
                                    <button className='btn' style={{width: '20%', height: 50 / proporcional, border: '1px solid rgb(23, 43, 222)', fontWeight: 600,
                                        background: boton_anterior ? 'white' : 'rgb(23, 43, 222)', color: boton_anterior ? 'rgb(23, 43, 222)' : 'white', fontSize: 18 / proporcional}}
                                        onMouseOver={() => setBotonAnterior(true)} onMouseLeave={() => setBotonAnterior(false)}
                                        onClick={() => anterior_paso()}>
                                        Anterior
                                    </button>
                                    <button className='btn' style={{width: '20%', height: 50 / proporcional, border: '1px solid rgb(23, 43, 222)', fontWeight: 600,
                                        background: boton_finalizar ? 'white' : 'rgb(23, 43, 222)', color: boton_finalizar ? 'rgb(23, 43, 222)' : 'white', fontSize: 18 / proporcional}}
                                        onMouseOver={() => setBotonFinalizar(true)} onMouseLeave={() => setBotonFinalizar(false)}
                                        onClick={() => finalizar_pedido()}>
                                        Finalizar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}