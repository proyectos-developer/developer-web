import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import icono_warning from '../../../assets/iconos/icono_warning_96.png'

import image_internet from '../../../assets/images/image_internet_600.png'
import image_analisis from '../../../assets/images/image_analisis_600.png'
import image_cloud_computing from '../../../assets/images/image_cloud_computing_600.png'
import image_inteligencia_artificial from '../../../assets/images/image_inteligencia_artificial_600.png'
import image_almacenamiento_nube from '../../../assets/images/image_almacenamiento_nube_600.png'
import image_base_datos from '../../../assets/images/image_base_datos_600.png'
import image_contenedor_orquestacion from '../../../assets/images/image_contenedor_orquestacion_600.png'
import image_redes from '../../../assets/images/image_redes_600.png'
import image_backup from '../../../assets/images/image_backup_600.png'
import { useDispatch, useSelector } from 'react-redux'
import { set_cotizacion_cloud } from '../../../redux/actions/dataactions'

export default function CloudServiceTablet({proporcional}) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [tipo_cloud, setTipoCloud] = useState('')
    const [seleccion_tipo_cloud, setSeleccionTipoCloud] = useState('')

    const [tipo, setTipo] = useState('')
    const [nombre, setNombre] = useState('')
    const [rubro, setRubro] = useState('')
    const [nro_ruc, setNroRuc] = useState('')
    const [nro_telefono, setNroTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const [nombre_contacto, setNombreContacto] = useState ('')

    const [etipo, setETipo] = useState(false)
    const [enombre, setENombre] = useState(false)
    const [erubro, setERubro] = useState(false)
    const [enro_ruc, setENroRuc] = useState(false)
    const [enro_telefono, setENroTelefono] = useState(false)
    const [ecorreo, setECorreo] = useState(false)
    const [enombre_contacto, setENombreContacto] = useState (false)

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
    const [boton_aceptar, setBotonAceptar] = useState (false)

    const [paso, setPaso] = useState (1)

    const [message, setMessage] = useState('')
    const [advertencia_seleccion, setAdvertenciaSeleccion] = useState(false)

    const {opciones_cotizaciones} = useSelector(({data_reducer}) => data_reducer)

    const anterior_paso = () => {
        window.scrollTo(0, 0)
        setPaso(paso - 1)
    }

    const siguiente_paso = () => {
        if (tipo_cloud === '' && paso === 1){
            setAdvertenciaSeleccion(true)
            setMessage('Debe seleccionar el tipo de software que requiere.')
        }else{
            setTipoCloud(tipo_cloud)
            setPaso(paso + 1)
        }
    }

    const volver_opciones = () => {
        if (opciones_cotizaciones.software){
            navigate ('/cotizacion/servicio/software')
        }else if (opciones_cotizaciones.marketing){
            navigate ('/cotizacion/servicio/marketing-digital')
        }else if (opciones_cotizaciones.aplicacion){
            navigate ('/cotizacion/servicio/aplicacion-movil')
        }else{ if (opciones_cotizaciones.web){
            navigate ('/cotizacion/servicio/pagina-web')
        }else if (opciones_cotizaciones.dominio){
            navigate ('/cotizacion/servicio/dominio-hosting')
        }else
            navigate ('/cotizacion')
        }
    }

    const finalizar_pedido = () => {
        if (tipo === 'Personal' && nombre === '' && nro_telefono === '' && correo === ''){
            setENombre(nombre === '' ? true : false)
            setENroTelefono(nro_telefono === '' ? true : false)
            setECorreo(correo === '' ? true : false)
        }else if (tipo === 'Negocio' && nro_telefono === '' && correo === '' && rubro === '' && nombre_contacto === ''){
            setERubro(rubro === '' ? true : false)
            setENroTelefono(nro_telefono === '' ? true : false)
            setECorreo(correo === '' ? true : false)
            setENombreContacto(nombre_contacto === '' ? true : false)
        }else if (tipo === 'Empresa' && nro_telefono === '' && correo === '' && rubro === '' && nombre_contacto === '' && nombre === ''){
            setERubro(rubro === '' ? true : false)
            setENroTelefono(nro_telefono === '' ? true : false)
            setECorreo(correo === '' ? true : false)
            setENombreContacto(nombre_contacto === '' ? true : false)
            setNombre(nombre === '' ? true : false)
        }else if (tipo === ''){
            setETipo(tipo === '' ? true : false)
        }else{
            setETipo(false)
            setENombre(false)
            setERubro(false)
            setENroRuc(false)
            setENroTelefono(false)
            setECorreo(false)
            setENombreContacto(false)

            const data_cotizacion = [
                {tipo_cloud: tipo_cloud},

                {informacion_adicional: informacion_adicional},

                {tipo: tipo,
                 nombre: nombre,
                nro_telefono: nro_telefono,
                correo: correo,
                rubro: rubro,
                nro_ruc: nro_ruc,
                nombre_contacto: nombre_contacto,
                link_facebook: link_facebook,
                link_instagram: link_instagram,
                link_twitter: link_twitter,
                link_linkedin: link_linkedin,
                link_tiktok: link_tiktok}
            ]
            dispatch (set_cotizacion_cloud(data_cotizacion))
            navigate ('/cotizacion/resumen')
            window.scrollTo(0, 0)
        }
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
                        <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                            <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 700, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                    textAlign: 'center', color: '#212121', cursor: 'default'}}>
                                SELECCIONE EL SERVICIO CLOUD SERVICE
                            </p>
                        </div>
                        <div className='' style={{width: '100%', height: 'auto', marginBottom: 75 / proporcional}}>
                            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 75 / proporcional}}>
                                <div className='position-relative' style={{width: '48%', height: 'auto', cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionTipoCloud('computing')} onMouseLeave={() => setSeleccionTipoCloud('')}
                                    onClick={() => setTipoCloud('computing')}>
                                    {
                                        seleccion_tipo_cloud === 'computing' || tipo_cloud === 'computing' ? (
                                            <div className='rounded position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.6)'}}/>
                                        ) : null
                                    }
                                    <img className={`${seleccion_tipo_cloud === 'computing' || tipo_cloud === 'computing' ? 'rounded' : ''}`} 
                                        src={image_cloud_computing} style={{width: '100%', height: '100%', marginBottom: 20 / proporcional}}/>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                            textAlign: 'center', color: 'rgb(23, 43, 222)', cursor: 'default'}}>
                                        Computación en la nube <br/>(Cloud Computing)
                                    </p>
                                </div>
                                <div className='position-relative' style={{width: '48%', height: 'auto', cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionTipoCloud('almacenamiento')} onMouseLeave={() => setSeleccionTipoCloud('')}
                                    onClick={() => setTipoCloud('almacenamiento')}>
                                    {
                                        seleccion_tipo_cloud === 'almacenamiento' || tipo_cloud === 'almacenamiento' ? (
                                            <div className='rounded position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.6)'}}/>
                                        ) : null
                                    }
                                    <img className={`${seleccion_tipo_cloud === 'almacenamiento' || tipo_cloud === 'almacenamiento' ? 'rounded-circle' : ''}`} 
                                        src={image_almacenamiento_nube} style={{width: '100%', height: '100%', marginBottom: 20 / proporcional}}/>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                            textAlign: 'center', color: 'rgb(23, 43, 222)', cursor: 'default'}}>
                                        Almacenamiento en la nube
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 75 / proporcional}}>
                                <div className='position-relative' style={{width: '48%', height: 'auto', cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionTipoCloud('redes')} onMouseLeave={() => setSeleccionTipoCloud('')}
                                    onClick={() => setTipoCloud('redes')}>
                                    {
                                        seleccion_tipo_cloud === 'redes' || tipo_cloud === 'redes' ? (
                                            <div className='rounded position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.6)'}}/>
                                        ) : null
                                    }
                                    <img className={`${seleccion_tipo_cloud === 'redes' || tipo_cloud === 'redes' ? 'rounded-circle' : ''}`} 
                                        src={image_backup} style={{width: '100%', height: '100%', marginBottom: 20 / proporcional}}/>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                            textAlign: 'center', color: 'rgb(23, 43, 222)', cursor: 'default'}}>
                                        Copias de seguridad y <br/>recuperación ante desastres
                                    </p>
                                </div>
                                <div className='position-relative' style={{width: '48%', height: 'auto', cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionTipoCloud('basedatos')} onMouseLeave={() => setSeleccionTipoCloud('')}
                                    onClick={() => setTipoCloud('basedatos')}>
                                    {
                                        seleccion_tipo_cloud === 'basedatos' || tipo_cloud === 'basedatos' ? (
                                            <div className='rounded position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.6)'}}/>
                                        ) : null
                                    }
                                    <img className={`${seleccion_tipo_cloud === 'basedatos' || tipo_cloud === 'basedatos' ? 'rounded-circle' : ''}`} 
                                        src={image_base_datos} style={{width: '100%', height: '100%', marginBottom: 20 / proporcional}}/>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                            textAlign: 'center', color: 'rgb(23, 43, 222)', cursor: 'default'}}>
                                        Servicios de bases de <br/>datos en la nube
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 75 / proporcional}}>
                                <div className='position-relative' style={{width: '48%', height: 'auto', cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionTipoCloud('analisis')} onMouseLeave={() => setSeleccionTipoCloud('')}
                                    onClick={() => setTipoCloud('analisis')}>
                                    {
                                        seleccion_tipo_cloud === 'analisis' || tipo_cloud === 'analisis' ? (
                                            <div className='rounded position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.6)'}}/>
                                        ) : null
                                    }
                                    <img className={`${seleccion_tipo_cloud === 'analisis' || tipo_cloud === 'analisis' ? 'rounded' : ''}`} 
                                        src={image_analisis} style={{width: '100%', height: '100%', marginBottom: 20 / proporcional}}/>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                            textAlign: 'center', color: 'rgb(23, 43, 222)', cursor: 'default'}}>
                                        Servicios de análisis de <br/>datos en la nube
                                    </p>
                                </div>
                                <div className='position-relative' style={{width: '48%', height: 'auto', cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionTipoCloud('inteligencia')} onMouseLeave={() => setSeleccionTipoCloud('')}
                                    onClick={() => setTipoCloud('inteligencia')}>
                                    {
                                        seleccion_tipo_cloud === 'inteligencia' || tipo_cloud === 'inteligencia' ? (
                                            <div className='rounded position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.6)'}}/>
                                        ) : null
                                    }
                                    <img className={`${seleccion_tipo_cloud === 'inteligencia' || tipo_cloud === 'inteligencia' ? 'rounded-circle' : ''}`} 
                                        src={image_inteligencia_artificial} style={{width: '100%', height: '100%', marginBottom: 20 / proporcional}}/>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                            textAlign: 'center', color: 'rgb(23, 43, 222)', cursor: 'default'}}>
                                        Servicios de inteligencia artificial y <br/>machine learning
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 75 / proporcional}}>
                                <div className='position-relative' style={{width: '48%', height: 'auto', cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionTipoCloud('internet')} onMouseLeave={() => setSeleccionTipoCloud('')}
                                    onClick={() => setTipoCloud('internet')}>
                                    {
                                        seleccion_tipo_cloud === 'internet' || tipo_cloud === 'internet' ? (
                                            <div className='rounded position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.6)'}}/>
                                        ) : null
                                    }
                                    <img className={`${seleccion_tipo_cloud === 'internet' || tipo_cloud === 'crm' ? 'rounded' : ''}`} 
                                        src={image_internet} style={{width: '100%', height: '100%', marginBottom: 20 / proporcional}}/>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                            textAlign: 'center', color: 'rgb(23, 43, 222)', cursor: 'default'}}>
                                        Servicios de Internet <br/>de las cosas (IoT):
                                    </p>
                                </div>
                                <div className='position-relative' style={{width: '48%', height: 'auto', cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionTipoCloud('contenedor')} onMouseLeave={() => setSeleccionTipoCloud('')}
                                    onClick={() => setTipoCloud('contenedor')}>
                                    {
                                        seleccion_tipo_cloud === 'contenedor' || tipo_cloud === 'contenedor' ? (
                                            <div className='rounded position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.6)'}}/>
                                        ) : null
                                    }
                                    <img className={`${seleccion_tipo_cloud === 'contenedor' || tipo_cloud === 'contenedor' ? 'rounded-circle' : ''}`} 
                                        src={image_contenedor_orquestacion} style={{width: '100%', height: '100%', marginBottom: 20 / proporcional}}/>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                            textAlign: 'center', color: 'rgb(23, 43, 222)', cursor: 'default'}}>
                                        Servicios de contenedores y <br/>orquestación
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 75 / proporcional}}>
                                <div className='position-relative' style={{width: '48%', height: 'auto', cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionTipoCloud('redes')} onMouseLeave={() => setSeleccionTipoCloud('')}
                                    onClick={() => setTipoCloud('redes')}>
                                    {
                                        seleccion_tipo_cloud === 'redes' || tipo_cloud === 'redes' ? (
                                            <div className='rounded position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.6)'}}/>
                                        ) : null
                                    }
                                    <img className={`${seleccion_tipo_cloud === 'redes' || tipo_cloud === 'redes' ? 'rounded-circle' : ''}`} 
                                        src={image_redes} style={{width: '100%', height: '100%', marginBottom: 20 / proporcional}}/>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                            textAlign: 'center', color: 'rgb(23, 43, 222)', cursor: 'default'}}>
                                        Servicios de redes <br/>en la nube
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
                            <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 700, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                    textAlign: 'center', color: '#212121', cursor: 'default'}}>
                                ¡BRÍNDENOS INFORMACIÓN ADICIONAL DE LO QUE NECESITA!<br/>
                                <span style={{fontSize: 20 / proporcional, fontWeight: 500}}>(REQUERIMIENTOS ADICIONALES)</span>
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                            <textarea
                                type='default'
                                className='form-control'
                                style={{width: '100%', height: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, 
                                    fontWeight: 500, color: '#212121', marginBottom: 20 / proporcional}}
                                value={informacion_adicional}
                                onChange={(event) => setInformacionAdicional(event.target.value)}
                                placeholder='Información adicional'
                                rows={4}/>
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
                )  : paso === 3 ? (
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
                            <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 700, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                    textAlign: 'center', color: '#212121', cursor: 'default'}}>
                                DATOS DE CONTACTO
                            </p>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                            <div style={{width: '100%', height: 'auto'}}>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <div style={{width: '49%', height: 50 / proporcional}}>
                                        <select
                                            id='tipo'
                                            className='form-select'
                                            style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, color: '#212121', fontWeight: 600,
                                                border: etipo ? '1px solid red' : '', borderRadius: 8 / proporcional}}
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
                                            style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, fontWeight: 600, color: '#212121',
                                                border: enombre ? '1px solid red' : '1px solid #efefef', borderRadius: 8 / proporcional}}
                                            id='nombre'
                                            type='default'
                                            placeholder={tipo === 'Personal' ? 'Nombres y apellidos' : tipo === 'Negocio' ? 'Nombre de negocio' : tipo === 'Empresa' ? 'Nombre de la empresa' : ''}/>
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
                                                            style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, color: '#212121', fontWeight: 600,
                                                                border: erubro ? '1px solid red' : '1px solid #efefef', borderRadius: 8 / proporcional}}
                                                            value={rubro}
                                                            onChange={(event) => {event.target.value !== '0' ? setRubro(event.target.value) : setRubro('')}}>
                                                            <option value='0'>{rubro === '' ? 'Seleccionar rubro' : rubro}</option>
                                                            <option value='Tecnología de la información'>Tecnología de la información</option>
                                                            <option value='Servicios Financieros'>Servicios Financieros</option>
                                                            <option value='Salud y Bienestar'>Salud y Bienestar</option>
                                                            <option value='Comercio Minosrista'>Comercio Minosrista</option>
                                                            <option value='Educación'>Educación</option>
                                                            <option value='Aliminentos y Bebidas'>Aliminentos y Bebidas</option>
                                                            <option value='Servicios Profesionales'>Servicios Profesionales</option>
                                                            <option value='Turismo y Hospitalidad'>Turismo y Hospitalidad</option>
                                                            <option value='Construcción y Bienes'>Construcción y Bienes</option>
                                                            <option value='Medios de comuniación y entretenimiento'>Medios de comuniación y entretenimiento</option>
                                                            <option value='Manufactura'>Manufactura</option>
                                                            <option value='Energía y Medio Ambiente'>Energía y Medio Ambiente</option>
                                                            <option value='Transporte y Logística'>Transporte y Logística</option>
                                                            <option value='Moda y Textiles'>Moda y Textiles</option>
                                                            <option value='Telecomunicaciones'>Telecomunicaciones</option>
                                                            <option value='Otro'>Otro</option>
                                                        </select>
                                                    ) : (
                                                        <input  
                                                            disabled={rubro === '' ? true : false}
                                                            className='form-control'
                                                            value={rubro}
                                                            onChange={(event) => setRubro(event.target.value)}
                                                            style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, fontWeight: 600, color: '#212121',
                                                            border: erubro ? '1px solid red' : '1px solid #efefef', borderRadius: 8 / proporcional}}
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
                                                    style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, fontWeight: 600, color: '#212121',
                                                    border: enro_ruc ? '1px solid red' : '1px solid #efefef', borderRadius: 8 / proporcional}}
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
                                            style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, fontWeight: 600, color: '#212121',
                                            border: enro_telefono ? '1px solid red' : '1px solid #efefef', borderRadius: 8 / proporcional}}
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
                                            style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, fontWeight: 600, color: '#212121',
                                            border: ecorreo ? '1px solid red' : '1px solid #efefef', borderRadius: 8 / proporcional}}
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
                                                    style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, fontWeight: 600, color: '#212121',
                                                    border: enombre_contacto ? '1px solid red' : '1px solid #efefef', borderRadius: 8 / proporcional}}
                                                    id='nombre_contacto'
                                                    type='default'
                                                    placeholder='Nombre de la persona de contacto'/>
                                            </div>
                                        </div>
                                    ): null
                    
                                }
                                <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                                    <input
                                        disabled={tipo === '' ? true : false} 
                                        type='url'
                                        className='form-control'
                                        style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`,
                                            fontWeight: 500, color: '#212121', marginBottom: 20 / proporcional}}
                                        id='link_facebook'
                                        value={link_facebook}
                                        onChange={(event) => setLinkFacebook(event.target.value)}
                                        placeholder='Link del facebook'/>
                                    <input
                                        disabled={tipo === '' ? true : false} 
                                        type='url'
                                        className='form-control'
                                        style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`,
                                            fontWeight: 500, color: '#212121', marginBottom: 20 / proporcional}}
                                        id='link_instagram'
                                        value={link_instagram}
                                        onChange={(event) => setLinkInstagram(event.target.value)}
                                        placeholder='Link del instagram'/>
                                    <input
                                        disabled={tipo === '' ? true : false} 
                                        type='url'
                                        className='form-control'
                                        style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`,
                                            fontWeight: 500, color: '#212121', marginBottom: 20 / proporcional}}
                                        id='link_tiktok'
                                        value={link_tiktok}
                                        onChange={(event) => setLinkTiktok(event.target.value)}
                                        placeholder='Link del tiktok'/>
                                    <input
                                        disabled={tipo === '' ? true : false} 
                                        type='url'
                                        className='form-control'
                                        style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`,
                                            fontWeight: 500, color: '#212121', marginBottom: 20 / proporcional}}
                                        id='link_linkedin'
                                        value={link_linkedin}
                                        onChange={(event) => setLinkLinkedin(event.target.value)}
                                        placeholder='Link del linkedin'/>
                                    <input
                                        disabled={tipo === '' ? true : false} 
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
                                        background: boton_anterior ? 'white' : 'rgb(23, 43, 222)', color: boton_anterior ? 'rgb(23, 43, 222)' : 'white', fontSize: 18 / proporcional}}
                                        onMouseOver={() => setBotonAnterior(true)} onMouseLeave={() => setBotonAnterior(false)}
                                        onClick={() => anterior_paso()}>
                                        Volver
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
                                            {message}
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