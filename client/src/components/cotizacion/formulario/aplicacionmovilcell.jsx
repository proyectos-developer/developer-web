import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import icono_box from '../../../assets/iconos/icono_box_96.png'
import icono_check_box from '../../../assets/iconos/icono_check_box_96.png'

import icono_warning from '../../../assets/iconos/icono_warning_96.png'

import image_app_personal from '../../../assets/images/image_app_personal_600.png'
import image_app_empresarial from '../../../assets/images/image_app_empresarial_600.png'
import image_app_ecommerce from '../../../assets/images/image_app_ecommerce_600.png'
import image_app_transporte from '../../../assets/images/image_app_transporte_600.png'
import image_app_almacen from '../../../assets/images/image_app_almacen_600.png'
import image_app_delivery from '../../../assets/images/image_app_delivery_600.png'
import image_app_social from '../../../assets/images/image_app_social_600.png'
import image_app_deportes from '../../../assets/images/image_app_deportes_600.png'
import image_app_otro from '../../../assets/images/image_app_otro_600.png'
import { useDispatch, useSelector } from 'react-redux'
import { set_cotizacion_app } from '../../../redux/actions/dataactions'

export default function AplicacionMovilCell({proporcional}) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [tipo_aplicacion, setTipoAplicacion] = useState('')
    const [seleccion_tipo_aplicacion, setSeleccionTipoAplicacion] = useState('')

    const [pantalla_login, setPantallaLogin] = useState(false)
    const [pantalla_registro, setPantallaRegistro] = useState(false)
    const [pantalla_presentacion, setPantallaPresentacion] = useState(false)
    const [pantalla_perfil, setPantallaPerfil] = useState(false)
    const [pantalla_productos, setPantallaProductos] = useState(false)
    const [pantalla_carrito, setPantallaCarrito] = useState(false)
    const [pantalla_pago, setPantallaPago] = useState(false)
    const [pantalla_ubicacion, setPantallaUbicacion] = useState(false)
    const [pantalla_localizacion, setPantallaLocalizacion] = useState(false)
    const [pantalla_categorias, setPantallaCategorias] = useState(false)
    const [pantalla_comentarios, setPantallaComentarios] = useState(false)
    const [pantalla_galeria, setPantallaGaleria] = useState(false)
    const [pantalla_chat, setPantallaChat] = useState(false)
    const [pantalla_estadisticas, setPantallaEstadisticas] = useState(false)
    const [pantalla_anuncios, setPantallaAnuncios] = useState(false)
    const [pantalla_informativa, setPantallaInformativa] = useState (false)
    const [pantalla_calendario, setPantallaCalendario] = useState (false)
    const [pantalla_agenda, setPantallaAgenda] = useState (false)
    const [pantalla_favoritos, setPantallaFavoritos] = useState (false)
    const [pantalla_otro, setPantallaOtro] = useState(false)
    
    const [tipo, setTipo] = useState('')
    const [nombre, setNombre] = useState('')
    const [rubro, setRubro] = useState('')
    const [nro_ruc, setNroRuc] = useState('')
    const [nro_telefono, setNroTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const [nombre_contacto, setNombreContacto] = useState ('')

    const [message, setMessage] = useState('')
    const [advertencia_seleccion, setAdvertenciaSeleccion] = useState(false)

    const [etipo, setETipo] = useState (false)
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

    const [boton_aceptar, setBotonAceptar] = useState(false)
    const [boton_volver, setBotonVolver] = useState (false)
    const [boton_siguiente, setBotonSiguiente] = useState (false)
    const [boton_anterior, setBotonAnterior] = useState (false)
    const [boton_finalizar, setBotonFinalizar] = useState (false)

    const [paso, setPaso] = useState (1)

    const {opciones_cotizaciones} = useSelector(({data_reducer}) => data_reducer)

    const paso_anterior = () => {
        window.scrollTo(0, 0)
        setPaso(paso - 1)
    }

    const siguiente_paso = () => {
        if (tipo_aplicacion === '' && paso === 1){
            setAdvertenciaSeleccion(true)
            setMessage('Debe seleccionar un tipo de aplicación móvil')
        }else if (paso === 2){
            let cuenta = pantalla_login ? 1 : 0 + pantalla_registro ? 1 : 0 + pantalla_presentacion ? 1 : 0 + pantalla_perfil ? 1 : 0 + pantalla_productos ? 1 : 0 + pantalla_carrito ? 1 : 0 + pantalla_pago
                ? 1 : 0 + pantalla_ubicacion ? 1 : 0 + pantalla_localizacion ? 1 : 0 + pantalla_categorias ? 1 : 0 + pantalla_comentarios ? 1 : 0 + pantalla_galeria ? 1 : 0 + pantalla_chat ? 1 : 0 + pantalla_estadisticas
                ? 1 : 0 + pantalla_anuncios ? 1 : 0 + pantalla_informativa ? 1 : 0 + pantalla_calendario ? 1 : 0 + pantalla_agenda ? 1 : 0 + pantalla_favoritos ? 1 : 0 + pantalla_otro
            if (cuenta === 0){
                setAdvertenciaSeleccion(true)
                setMessage('Debe elegir al menos una pantalla')
            }else{
                setPaso (paso + 1)
            }
        }else if (paso === 3 && (opciones_cotizaciones.software || opciones_cotizaciones.marketing || opciones_cotizaciones.nube)){
            const data_cotizacion = [
                {tipo_aplicacion: tipo_aplicacion},

                {pantalla_login: pantalla_login, 
                 pantalla_registro: pantalla_registro,
                pantalla_presentacion: pantalla_presentacion,
                pantalla_perfil: pantalla_perfil,
                pantalla_productos: pantalla_productos,
                pantalla_carrito: pantalla_carrito,
                pantalla_pago: pantalla_pago,
                pantalla_ubicacion: pantalla_ubicacion,
                pantalla_localizacion: pantalla_localizacion,
                pantalla_categorias: pantalla_categorias,
                pantalla_comentarios: pantalla_comentarios,
                pantalla_galeria: pantalla_galeria,
                pantalla_chat: pantalla_chat,
                pantalla_estadisticas: pantalla_estadisticas,
                pantalla_anuncios: pantalla_anuncios,
                pantalla_informativa: pantalla_informativa,
                pantalla_calendario: pantalla_calendario,
                pantalla_agenda: pantalla_agenda,
                pantalla_favoritos: pantalla_favoritos,
                pantalla_otro: pantalla_otro},

                {informacion_adicional: informacion_adicional},
            ]
            dispatch (set_cotizacion_app(data_cotizacion))
            if((opciones_cotizaciones.software || opciones_cotizaciones.marketing || opciones_cotizaciones.nube)){
                navigate (`/cotizacion/servicio/${opciones_cotizaciones.marketing ? 'marketing-digital' : opciones_cotizaciones.software ? 'software' : 'cloud-services'}`)
            }else{
                navigate ('/cotizacion/resumen')
            }
            window.scrollTo(0, 0)
        }else{
            setTipoAplicacion(tipo_aplicacion)
            setPaso(paso + 1)
        }
    }

    const volver_opciones = () => {
        if (opciones_cotizaciones.web){
            navigate ('/cotizacion/servicio/pagina-web')
        }else if (opciones_cotizaciones.dominio){
            navigate ('/cotizacion/servicio/dominio-hosting')
        }else{
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
                {tipo_aplicacion: tipo_aplicacion},

                {pantalla_login: pantalla_login, 
                 pantalla_registro: pantalla_registro,
                pantalla_presentacion: pantalla_presentacion,
                pantalla_perfil: pantalla_perfil,
                pantalla_productos: pantalla_productos,
                pantalla_carrito: pantalla_carrito,
                pantalla_pago: pantalla_pago,
                pantalla_ubicacion: pantalla_ubicacion,
                pantalla_localizacion: pantalla_localizacion,
                pantalla_categorias: pantalla_categorias,
                pantalla_comentarios: pantalla_comentarios,
                pantalla_galeria: pantalla_galeria,
                pantalla_chat: pantalla_chat,
                pantalla_estadisticas: pantalla_estadisticas,
                pantalla_anuncios: pantalla_anuncios,
                pantalla_informativa: pantalla_informativa,
                pantalla_calendario: pantalla_calendario,
                pantalla_agenda: pantalla_agenda,
                pantalla_favoritos: pantalla_favoritos,
                pantalla_otro: pantalla_otro},

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
            dispatch (set_cotizacion_app(data_cotizacion))
            navigate ('/cotizacion/resumen')
            window.scrollTo(0, 0)
        }
    }

    return (
        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
            {
                paso === 1 ? (
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                background: paso === 1 ? 'rgb(23, 43, 222)' :  'white'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                        textAlign: 'center', color: paso === 1 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                    1
                                </p>
                            </div>
                            <div style={{width: 50 / proporcional, height: 4 / proporcional, background: 'rgb(23, 43, 222)', marginTop: 60 / proporcional, marginBottom: 60 / proporcional}}/>
                            <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                background: paso === 2 ? 'rgb(23, 43, 222)' :  'white'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                        textAlign: 'center', color: paso === 2 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                    2
                                </p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                            <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                background: paso === 3 ? 'rgb(23, 43, 222)' :  'white'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                        textAlign: 'center', color: paso === 3 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                    3
                                </p>
                            </div>
                            {
                                (
                                    opciones_cotizaciones.software || opciones_cotizaciones.marketing || opciones_cotizaciones.nube) ? (
                                    null
                                ) : (
                                    <div style={{width: 150 / proporcional, height: 4 / proporcional, background: 'rgb(23, 43, 222)', marginTop: 60 / proporcional, marginBottom: 60 / proporcional}}/>
                                )
                            }
                            {
                                (
                                    opciones_cotizaciones.software || opciones_cotizaciones.marketing || opciones_cotizaciones.nube) ? (
                                    null
                                ) : (
                                    <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                        background: paso === 4 ? 'rgb(23, 43, 222)' :  'white'}}>
                                        <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                                textAlign: 'center', color: paso === 4 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                            4
                                        </p>
                                    </div>
                                )
                            }
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                            <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 700, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                    textAlign: 'center', color: '#212121', cursor: 'default'}}>
                                ¡SELECCIONE EL TIPO DE APLICACIÓN MÓVIL QUE DESEA!
                            </p>
                        </div>
                        <div className='' style={{width: '100%', height: 'auto', marginBottom: 75 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 75 / proporcional}}>
                                <div className='position-relative' style={{width: '90%', height: 'auto', cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionTipoAplicacion('personal')} onMouseLeave={() => setSeleccionTipoAplicacion('')}
                                    onClick={() => setTipoAplicacion('personal')}>
                                    {
                                        seleccion_tipo_aplicacion === 'personal' || tipo_aplicacion === 'personal' ? (
                                            <div className='rounded position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.6)'}}/>
                                        ) : null
                                    }
                                    <img className={`${seleccion_tipo_aplicacion === 'personal' || tipo_aplicacion === 'personal' ? 'rounded' : ''}`} 
                                        src={image_app_personal} style={{width: '100%', height: '100%', marginBottom: 20 / proporcional}}/>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                            textAlign: 'center', color: 'rgb(23, 43, 222)', cursor: 'default'}}>
                                        Aplicación móvil <br/>personal
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 75 / proporcional}}>
                                <div className='position-relative' style={{width: '90%', height: 'auto', cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionTipoAplicacion('empresa')} onMouseLeave={() => setSeleccionTipoAplicacion('')}
                                    onClick={() => setTipoAplicacion('empresa')}>
                                    {
                                        seleccion_tipo_aplicacion === 'empresa' || tipo_aplicacion === 'empresa' ? (
                                            <div className='rounded position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.6)'}}/>
                                        ) : null
                                    }
                                    <img className={`${seleccion_tipo_aplicacion === 'empresa' || tipo_aplicacion === 'empresa' ? 'rounded' : ''}`} 
                                        src={image_app_empresarial} style={{width: '100%', height: '100%', marginBottom: 20 / proporcional}}/>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                            textAlign: 'center', color: 'rgb(23, 43, 222)', cursor: 'default'}}>
                                        Aplicación móvil <br/>empresarial
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 75 / proporcional}}>
                                <div className='position-relative' style={{width: '90%', height: 'auto', cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionTipoAplicacion('ecommerce')} onMouseLeave={() => setSeleccionTipoAplicacion('')}
                                    onClick={() => setTipoAplicacion('ecommerce')}>
                                    {
                                        seleccion_tipo_aplicacion === 'ecommerce' || tipo_aplicacion === 'ecommerce' ? (
                                            <div className='rounded position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.6)'}}/>
                                        ) : null
                                    }
                                    <img className={`${seleccion_tipo_aplicacion === 'ecommerce' || tipo_aplicacion === 'ecommerce' ? 'rounded' : ''}`} 
                                        src={image_app_ecommerce} style={{width: '100%', height: '100%', marginBottom: 20 / proporcional}}/>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                            textAlign: 'center', color: 'rgb(23, 43, 222)', cursor: 'default'}}>
                                        Aplicación móvil <br/>ecommerce
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 75 / proporcional}}>
                                <div className='position-relative' style={{width: '90%', height: 'auto', cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionTipoAplicacion('transporte')} onMouseLeave={() => setSeleccionTipoAplicacion('')}
                                    onClick={() => setTipoAplicacion('transporte')}>
                                    {
                                        seleccion_tipo_aplicacion === 'transporte' || tipo_aplicacion === 'transporte' ? (
                                            <div className='rounded position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.6)'}}/>
                                        ) : null
                                    }
                                    <img className={`${seleccion_tipo_aplicacion === 'transporte' || tipo_aplicacion === 'transporte' ? 'rounded-circle' : ''}`} 
                                        src={image_app_transporte} style={{width: '100%', height: '100%', marginBottom: 20 / proporcional}}/>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                            textAlign: 'center', color: 'rgb(23, 43, 222)', cursor: 'default'}}>
                                        Aplicación móvil <br/>transporte
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 75 / proporcional}}>
                                <div className='position-relative' style={{width: '90%', height: 'auto', cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionTipoAplicacion('delivery')} onMouseLeave={() => setSeleccionTipoAplicacion('')}
                                    onClick={() => setTipoAplicacion('delivery')}>
                                    {
                                        seleccion_tipo_aplicacion === 'delivery' || tipo_aplicacion === 'delivery' ? (
                                            <div className='rounded position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.6)'}}/>
                                        ) : null
                                    }
                                    <img className={`${seleccion_tipo_aplicacion === 'delivery' || tipo_aplicacion === 'delivery' ? 'rounded-circle' : ''}`} 
                                        src={image_app_delivery} style={{width: '100%', height: '100%', marginBottom: 20 / proporcional}}/>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                            textAlign: 'center', color: 'rgb(23, 43, 222)', cursor: 'default'}}>
                                        Aplicación móvil <br/>delivery
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 75 / proporcional}}>
                                <div className='position-relative' style={{width: '90%', height: 'auto', cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionTipoAplicacion('almacen')} onMouseLeave={() => setSeleccionTipoAplicacion('')}
                                    onClick={() => setTipoAplicacion('almacen')}>
                                    {
                                        seleccion_tipo_aplicacion === 'almacen' || tipo_aplicacion === 'almacen' ? (
                                            <div className='rounded position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.6)'}}/>
                                        ) : null
                                    }
                                    <img className={`${seleccion_tipo_aplicacion === 'almacen' || tipo_aplicacion === 'almacen' ? 'rounded-circle' : ''}`} 
                                        src={image_app_almacen} style={{width: '100%', height: '100%', marginBottom: 20 / proporcional}}/>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                            textAlign: 'center', color: 'rgb(23, 43, 222)', cursor: 'default'}}>
                                        Aplicación móvil <br/>almacén
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 75 / proporcional}}>
                                <div className='position-relative' style={{width: '90%', height: 'auto', cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionTipoAplicacion('social')} onMouseLeave={() => setSeleccionTipoAplicacion('')}
                                    onClick={() => setTipoAplicacion('social')}>
                                    {
                                        seleccion_tipo_aplicacion === 'social' || tipo_aplicacion === 'social' ? (
                                            <div className='rounded position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.6)'}}/>
                                        ) : null
                                    }
                                    <img className={`${seleccion_tipo_aplicacion === 'social' || tipo_aplicacion === 'social' ? 'rounded-circle' : ''}`} 
                                        src={image_app_social} style={{width: '100%', height: '100%', marginBottom: 20 / proporcional}}/>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                            textAlign: 'center', color: 'rgb(23, 43, 222)', cursor: 'default'}}>
                                        Aplicación móvil <br/>social
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 75 / proporcional}}>
                                <div className='position-relative' style={{width: '90%', height: 'auto', cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionTipoAplicacion('delivery')} onMouseLeave={() => setSeleccionTipoAplicacion('')}
                                    onClick={() => setTipoAplicacion('delivery')}>
                                    {
                                        seleccion_tipo_aplicacion === 'delivery' || tipo_aplicacion === 'delivery' ? (
                                            <div className='rounded position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.6)'}}/>
                                        ) : null
                                    }
                                    <img className={`${seleccion_tipo_aplicacion === 'delivery' || tipo_aplicacion === 'delivery' ? 'rounded-circle' : ''}`} 
                                        src={image_app_deportes} style={{width: '100%', height: '100%', marginBottom: 20 / proporcional}}/>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                            textAlign: 'center', color: 'rgb(23, 43, 222)', cursor: 'default'}}>
                                        Aplicación móvil <br/>deportes
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 75 / proporcional}}>
                                <div className='position-relative' style={{width: '90%', height: 'auto', cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionTipoAplicacion('otro')} onMouseLeave={() => setSeleccionTipoAplicacion('')}
                                    onClick={() => setTipoAplicacion('otro')}>
                                    {
                                        seleccion_tipo_aplicacion === 'otro' || tipo_aplicacion === 'otro' ? (
                                            <div className='rounded position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.6)'}}/>
                                        ) : null
                                    }
                                    <img className={`${seleccion_tipo_aplicacion === 'otro' || tipo_aplicacion === 'otro' ? 'rounded-circle' : ''}`} 
                                        src={image_app_otro} style={{width: '100%', height: '100%', marginBottom: 20 / proporcional}}/>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                            textAlign: 'center', color: 'rgb(23, 43, 222)', cursor: 'default'}}>
                                        Aplicación móvil <br/>otro
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 50 / proporcional, marginBottom: 20 / proporcional}}>
                            <button className='btn' style={{width: '90%', height: 50 / proporcional, border: '1px solid rgb(23, 43, 222)', fontWeight: 600,
                                background: boton_volver ? 'white' : 'rgb(23, 43, 222)', color: boton_volver ? 'rgb(23, 43, 222)' : 'white', fontSize: 18 / proporcional}}
                                onMouseOver={() => setBotonVolver(true)} onMouseLeave={() => setBotonVolver(false)}
                                onClick={() => volver_opciones()}>
                                Volver
                            </button>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 50 / proporcional}}>
                            <button className='btn' style={{width: '90%', height: 50 / proporcional, border: '1px solid rgb(23, 43, 222)', fontWeight: 600,
                                background: boton_siguiente ? 'white' : 'rgb(23, 43, 222)', color: boton_siguiente ? 'rgb(23, 43, 222)' : 'white', fontSize: 18 / proporcional}}
                                onMouseOver={() => setBotonSiguiente(true)} onMouseLeave={() => setBotonSiguiente(false)}
                                onClick={() => siguiente_paso()}>
                                Siguiente
                            </button>
                        </div>
                    </div>
                ) : paso === 2 ? (
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                background: paso === 1 ? 'rgb(23, 43, 222)' :  'white'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                        textAlign: 'center', color: paso === 1 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                    1
                                </p>
                            </div>
                            <div style={{width: 50 / proporcional, height: 4 / proporcional, background: 'rgb(23, 43, 222)', marginTop: 60 / proporcional, marginBottom: 60 / proporcional}}/>
                            <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                background: paso === 2 ? 'rgb(23, 43, 222)' :  'white'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                        textAlign: 'center', color: paso === 2 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                    2
                                </p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                            <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                background: paso === 3 ? 'rgb(23, 43, 222)' :  'white'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                        textAlign: 'center', color: paso === 3 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                    3
                                </p>
                            </div>
                            {
                                (
                                    opciones_cotizaciones.software || opciones_cotizaciones.marketing || opciones_cotizaciones.nube) ? (
                                    null
                                ) : (
                                    <div style={{width: 150 / proporcional, height: 4 / proporcional, background: 'rgb(23, 43, 222)', marginTop: 60 / proporcional, marginBottom: 60 / proporcional}}/>
                                )
                            }
                            {
                                (
                                    opciones_cotizaciones.software || opciones_cotizaciones.marketing || opciones_cotizaciones.nube) ? (
                                    null
                                ) : (
                                    <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                        background: paso === 4 ? 'rgb(23, 43, 222)' :  'white'}}>
                                        <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                                textAlign: 'center', color: paso === 4 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                            4
                                        </p>
                                    </div>
                                )
                            }
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                            <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 700, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                    textAlign: 'center', color: '#212121', cursor: 'default'}}>
                                ¡SELECCIONE LAS PANTALLAS QUE CONTENDRÁ SU APLICACIÓN MÓVIL!
                            </p>
                        </div>
                        <div className='' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                    onClick={() => setPantallaLogin(!pantalla_login)}>    
                                    <img src={pantalla_login ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                        marginRight: 10 / proporcional}}/>

                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                            textAlign: 'left', color: 'black', cursor: 'default'}}>
                                        Pantalla inicio sesión
                                    </p>
                                </div>      
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                    onClick={() => setPantallaRegistro(!pantalla_registro)}>    
                                    <img src={pantalla_registro ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                        marginRight: 10 / proporcional}}/>

                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                            textAlign: 'left', color: 'black', cursor: 'default'}}>
                                        Pantalla de registro
                                    </p>
                                </div>   
                            </div>      
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                    onClick={() => setPantallaPerfil(!pantalla_perfil)}>    
                                    <img src={pantalla_perfil ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                        marginRight: 10 / proporcional}}/>

                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                            textAlign: 'left', color: 'black', cursor: 'default'}}>
                                        Pantalla de perfil usuario
                                    </p>
                                </div>         
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                    onClick={() => setPantallaProductos(!pantalla_productos)}>    
                                    <img src={pantalla_productos ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                        marginRight: 10 / proporcional}}/>

                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                            textAlign: 'left', color: 'black', cursor: 'default'}}>
                                        Pantalla productos
                                    </p>
                                </div>     
                            </div>      
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                    onClick={() => setPantallaCarrito(!pantalla_carrito)}>    
                                    <img src={pantalla_carrito ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                        marginRight: 10 / proporcional}}/>

                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                            textAlign: 'left', color: 'black', cursor: 'default'}}>
                                        Pantalla carrito compras
                                    </p>
                                </div>      
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>   
                                <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                    onClick={() => setPantallaPago(!pantalla_pago)}>    
                                    <img src={pantalla_pago ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                        marginRight: 10 / proporcional}}/>

                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                            textAlign: 'left', color: 'black', cursor: 'default'}}>
                                        Pantalla de pago
                                    </p>
                                </div>   
                            </div>  
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                    onClick={() => setPantallaUbicacion(!pantalla_ubicacion)}>    
                                    <img src={pantalla_ubicacion ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                        marginRight: 10 / proporcional}}/>

                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                            textAlign: 'left', color: 'black', cursor: 'default'}}>
                                        Pantalla de ubicación usuario
                                    </p>
                                </div>     
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>                        
                                <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                    onClick={() => setPantallaLocalizacion(!pantalla_localizacion)}>    
                                    <img src={pantalla_localizacion ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                        marginRight: 10 / proporcional}}/>

                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                            textAlign: 'left', color: 'black', cursor: 'default'}}>
                                        Pantalla de geolocalización
                                    </p>
                                </div>    
                            </div>      
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>   
                                <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                    onClick={() => setPantallaCategorias(!pantalla_categorias)}>    
                                    <img src={pantalla_categorias ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                        marginRight: 10 / proporcional}}/>

                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                            textAlign: 'left', color: 'black', cursor: 'default'}}>
                                        Pantalla de categorías
                                    </p>
                                </div>     
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                    onClick={() => setPantallaComentarios(!pantalla_comentarios)}>    
                                    <img src={pantalla_comentarios ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                        marginRight: 10 / proporcional}}/>

                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                            textAlign: 'left', color: 'black', cursor: 'default'}}>
                                        Pantalla de comentarios
                                    </p>
                                </div>  
                            </div>      
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>  
                                <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                    onClick={() => setPantallaGaleria(!pantalla_galeria)}>    
                                    <img src={pantalla_galeria ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                        marginRight: 10 / proporcional}}/>

                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                            textAlign: 'left', color: 'black', cursor: 'default'}}>
                                        Pantalla de galería de fotos/vídeos
                                    </p>
                                </div>      
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}> 
                                <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                    onClick={() => setPantallaChat(!pantalla_chat)}>    
                                    <img src={pantalla_chat ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                        marginRight: 10 / proporcional}}/>

                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                            textAlign: 'left', color: 'black', cursor: 'default'}}>
                                        Pantalla de chat
                                    </p>
                                </div>   
                            </div>  
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                    onClick={() => setPantallaEstadisticas(!pantalla_estadisticas)}>    
                                    <img src={pantalla_estadisticas ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                        marginRight: 10 / proporcional}}/>

                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                            textAlign: 'left', color: 'black', cursor: 'default'}}>
                                        Pantalla de estadísticas
                                    </p>
                                </div>       
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                    onClick={() => setPantallaAnuncios(!pantalla_anuncios)}>    
                                    <img src={pantalla_anuncios ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                        marginRight: 10 / proporcional}}/>

                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                            textAlign: 'left', color: 'black', cursor: 'default'}}>
                                        Pantalla de anuncios
                                    </p>
                                </div>    
                            </div>      
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}> 
                                <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                    onClick={() => setPantallaFavoritos(!pantalla_favoritos)}>    
                                    <img src={pantalla_favoritos ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                        marginRight: 10 / proporcional}}/>

                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                            textAlign: 'left', color: 'black', cursor: 'default'}}>
                                        Pantalla de favoritos
                                    </p>
                                </div>      
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                    onClick={() => setPantallaCalendario(!pantalla_calendario)}>    
                                    <img src={pantalla_calendario ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                        marginRight: 10 / proporcional}}/>

                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                            textAlign: 'left', color: 'black', cursor: 'default'}}>
                                        Pantalla de calendario
                                    </p>
                                </div>   
                            </div>      
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>  
                                <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                    onClick={() => setPantallaAgenda(!pantalla_agenda)}>    
                                    <img src={pantalla_agenda ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                        marginRight: 10 / proporcional}}/>

                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                            textAlign: 'left', color: 'black', cursor: 'default'}}>
                                        Pantalla agenda
                                    </p>
                                </div>     
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>   
                                <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                    onClick={() => setPantallaInformativa(!pantalla_informativa)}>    
                                    <img src={pantalla_informativa ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                        marginRight: 10 / proporcional}}/>

                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                            textAlign: 'left', color: 'black', cursor: 'default'}}>
                                        Pantalla informativa
                                    </p>
                                </div>   
                            </div>    
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                    onClick={() => setPantallaPresentacion(!pantalla_presentacion)}>    
                                    <img src={pantalla_presentacion ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                        marginRight: 10 / proporcional}}/>

                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                            textAlign: 'left', color: 'black', cursor: 'default'}}>
                                        Pantalla presentación (principal)
                                    </p>
                                </div>      
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                    onClick={() => setPantallaOtro(!pantalla_otro)}>    
                                    <img src={pantalla_otro ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                        marginRight: 10 / proporcional}}/>

                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                            textAlign: 'left', color: 'black', cursor: 'default'}}>
                                        Otra
                                    </p>
                                </div>    
                            </div>   
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 50 / proporcional, marginBottom: 20 / proporcional}}>
                            <button className='btn' style={{width: '90%', height: 50 / proporcional, border: '1px solid rgb(23, 43, 222)', fontWeight: 600,
                                background: boton_volver ? 'white' : 'rgb(23, 43, 222)', color: boton_volver ? 'rgb(23, 43, 222)' : 'white', fontSize: 18 / proporcional}}
                                onMouseOver={() => setBotonVolver(true)} onMouseLeave={() => setBotonVolver(false)}
                                onClick={() => paso_anterior()}>
                                Volver
                            </button>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 50 / proporcional}}>
                            <button className='btn' style={{width: '90%', height: 50 / proporcional, border: '1px solid rgb(23, 43, 222)', fontWeight: 600,
                                background: boton_siguiente ? 'white' : 'rgb(23, 43, 222)', color: boton_siguiente ? 'rgb(23, 43, 222)' : 'white', fontSize: 18 / proporcional}}
                                onMouseOver={() => setBotonSiguiente(true)} onMouseLeave={() => setBotonSiguiente(false)}
                                onClick={() => siguiente_paso()}>
                                Siguiente
                            </button>
                        </div>
                    </div>
                ) : paso === 3 ? (
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                background: paso === 1 ? 'rgb(23, 43, 222)' :  'white'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                        textAlign: 'center', color: paso === 1 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                    1
                                </p>
                            </div>
                            <div style={{width: 50 / proporcional, height: 4 / proporcional, background: 'rgb(23, 43, 222)', marginTop: 60 / proporcional, marginBottom: 60 / proporcional}}/>
                            <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                background: paso === 2 ? 'rgb(23, 43, 222)' :  'white'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                        textAlign: 'center', color: paso === 2 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                    2
                                </p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                            <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                background: paso === 3 ? 'rgb(23, 43, 222)' :  'white'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                        textAlign: 'center', color: paso === 3 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                    3
                                </p>
                            </div>
                            {
                                (
                                    opciones_cotizaciones.software || opciones_cotizaciones.marketing || opciones_cotizaciones.nube) ? (
                                    null
                                ) : (
                                    <div style={{width: 150 / proporcional, height: 4 / proporcional, background: 'rgb(23, 43, 222)', marginTop: 60 / proporcional, marginBottom: 60 / proporcional}}/>
                                )
                            }
                            {
                                (
                                    opciones_cotizaciones.software || opciones_cotizaciones.marketing || opciones_cotizaciones.nube) ? (
                                    null
                                ) : (
                                    <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                        background: paso === 4 ? 'rgb(23, 43, 222)' :  'white'}}>
                                        <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                                textAlign: 'center', color: paso === 4 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                            4
                                        </p>
                                    </div>
                                )
                            }
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
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 50 / proporcional, marginBottom: 20 / proporcional}}>
                            <button className='btn' style={{width: '90%', height: 50 / proporcional, border: '1px solid rgb(23, 43, 222)', fontWeight: 600,
                                background: boton_volver ? 'white' : 'rgb(23, 43, 222)', color: boton_volver ? 'rgb(23, 43, 222)' : 'white', fontSize: 18 / proporcional}}
                                onMouseOver={() => setBotonVolver(true)} onMouseLeave={() => setBotonVolver(false)}
                                onClick={() => paso_anterior()}>
                                Volver
                            </button>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 50 / proporcional}}>
                            <button className='btn' style={{width: '90%', height: 50 / proporcional, border: '1px solid rgb(23, 43, 222)', fontWeight: 600,
                                background: boton_siguiente ? 'white' : 'rgb(23, 43, 222)', color: boton_siguiente ? 'rgb(23, 43, 222)' : 'white', fontSize: 18 / proporcional}}
                                onMouseOver={() => setBotonSiguiente(true)} onMouseLeave={() => setBotonSiguiente(false)}
                                onClick={() => siguiente_paso()}>
                                Siguiente
                            </button>
                        </div>
                    </div>
                )  : paso === 4 ? (
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                            <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                background: paso === 1 ? 'rgb(23, 43, 222)' :  'white'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                        textAlign: 'center', color: paso === 1 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                    1
                                </p>
                            </div>
                            <div style={{width: 50 / proporcional, height: 4 / proporcional, background: 'rgb(23, 43, 222)', marginTop: 60 / proporcional, marginBottom: 60 / proporcional}}/>
                            <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                background: paso === 2 ? 'rgb(23, 43, 222)' :  'white'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                        textAlign: 'center', color: paso === 2 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                    2
                                </p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                            <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                background: paso === 3 ? 'rgb(23, 43, 222)' :  'white'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                        textAlign: 'center', color: paso === 3 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                    3
                                </p>
                            </div>
                            {
                                (
                                    opciones_cotizaciones.software || opciones_cotizaciones.marketing || opciones_cotizaciones.nube) ? (
                                    null
                                ) : (
                                    <div style={{width: 150 / proporcional, height: 4 / proporcional, background: 'rgb(23, 43, 222)', marginTop: 60 / proporcional, marginBottom: 60 / proporcional}}/>
                                )
                            }
                            {
                                (
                                    opciones_cotizaciones.software || opciones_cotizaciones.marketing || opciones_cotizaciones.nube) ? (
                                    null
                                ) : (
                                    <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                        background: paso === 4 ? 'rgb(23, 43, 222)' :  'white'}}>
                                        <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                                textAlign: 'center', color: paso === 4 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                            4
                                        </p>
                                    </div>
                                )
                            }
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                            <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 700, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                    textAlign: 'center', color: '#212121', cursor: 'default'}}>
                                DATOS DE CONTACTO
                            </p>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                            <div style={{width: '100%', height: 'auto'}}>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <div style={{width: '90%', height: 50 / proporcional}}>
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
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <div style={{width: '90%', height: 50 / proporcional}}>
                                        <input  
                                            disabled={tipo === '' ? true : false}
                                            className='form-control'
                                            value={nombre}
                                            onChange={(event) => setNombre(event.target.value)}
                                            style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, fontWeight: 600, color: '#212121',
                                                border: enombre ? '1px solid red': ''}}
                                            id='nombre'
                                            type='default'
                                            placeholder={tipo === 'Personal' ? 'Nombres y apellidos' : tipo === 'Negocio' ? 'Nombre de negocio' : tipo === 'Empresa' ? 'Nombre de la empresa' : ''}/>
                                    </div>
                                </div>
                                {
                                    tipo !== 'Personal' && tipo !== '' && tipo !== '0' ? (
                                        <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                                <div style={{width: '90%', height: 50 / proporcional}}>
                                                    {
                                                        tipo !== 'Otro' ? (
                                                            <select
                                                                className='form-select'
                                                                style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, color: '#212121', fontWeight: 600,
                                                                border: erubro ? '1px solid red': ''}}
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
                                                                style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, fontWeight: 600, color: '#212121',
                                                                border: erubro ? '1px solid red': ''}}
                                                                id='rubro'
                                                                type='default'
                                                                placeholder='Rubro'/>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                                <div style={{width: '90%', height: 50 / proporcional}}>
                                                    <input  
                                                        className='form-control'
                                                        value={nro_ruc}
                                                        onChange={(event) => setNroRuc(event.target.value)}
                                                        style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, fontWeight: 600, color: '#212121',
                                                        border: enro_ruc ? '1px solid red': ''}}
                                                        id='nro_ruc'
                                                        type='number'
                                                        placeholder='Número de R.U.C'/>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null
                                }
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <div style={{width: '90%', height: 50 / proporcional}}>
                                        <input  
                                            disabled={(tipo !== '0' && tipo !== '') ? false : true}
                                            className='form-control'
                                            value={nro_telefono}
                                            onChange={(event) => setNroTelefono(event.target.value)}
                                            style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, fontWeight: 600, color: '#212121',
                                            border: enro_telefono ? '1px solid red': ''}}
                                            id='nro_telefono'
                                            type='number'
                                            placeholder='Número de teléfono'/>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <div style={{width: '90%', height: 50 / proporcional}}>
                                        <input  
                                            disabled={(tipo !== '0' && tipo !== '') ? false : true}
                                            className='form-control'
                                            value={correo}
                                            onChange={(event) => setCorreo(event.target.value)}
                                            style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, fontWeight: 600, color: '#212121',
                                            border: ecorreo ? '1px solid red': ''}}
                                            id='correo'
                                            type='default'
                                            placeholder='Correo electrónico'/>
                                    </div>
                                </div>
                                {
                                    tipo !== 'Personal' && tipo !== '' && tipo !== '0' ? (
                                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                            <div style={{width: '90%', height: 50 / proporcional}}>
                                                <input  
                                                    className='form-control'
                                                    value={nombre_contacto}
                                                    onChange={(event) => setNombreContacto(event.target.value)}
                                                    style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, fontWeight: 600, color: '#212121',
                                                    border: enombre_contacto ? '1px solid red': ''}}
                                                    id='nombre_contacto'
                                                    type='default'
                                                    placeholder='Nombre de la persona de contacto'/>
                                            </div>
                                        </div>
                                    ): null
                    
                                }
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                    <input 
                                        type='url'
                                        className='form-control'
                                        style={{width: '90%', height: 50 / proporcional, fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`,
                                            fontWeight: 500, color: '#212121', marginBottom: 20 / proporcional}}
                                        id='link_facebook'
                                        value={link_facebook}
                                        onChange={(event) => setLinkFacebook(event.target.value)}
                                        placeholder='Link del facebook'/>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                    <input 
                                        type='url'
                                        className='form-control'
                                        style={{width: '90%', height: 50 / proporcional, fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`,
                                            fontWeight: 500, color: '#212121', marginBottom: 20 / proporcional}}
                                        id='link_instagram'
                                        value={link_instagram}
                                        onChange={(event) => setLinkInstagram(event.target.value)}
                                        placeholder='Link del instagram'/>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                    <input 
                                        type='url'
                                        className='form-control'
                                        style={{width: '90%', height: 50 / proporcional, fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`,
                                            fontWeight: 500, color: '#212121', marginBottom: 20 / proporcional}}
                                        id='link_tiktok'
                                        value={link_tiktok}
                                        onChange={(event) => setLinkTiktok(event.target.value)}
                                        placeholder='Link del tiktok'/>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                    <input 
                                        type='url'
                                        className='form-control'
                                        style={{width: '90%', height: 50 / proporcional, fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`,
                                            fontWeight: 500, color: '#212121', marginBottom: 20 / proporcional}}
                                        id='link_linkedin'
                                        value={link_linkedin}
                                        onChange={(event) => setLinkLinkedin(event.target.value)}
                                        placeholder='Link del linkedin'/>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                    <input 
                                        type='url'
                                        className='form-control'
                                        style={{width: '90%', height: 50 / proporcional, fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`,
                                            fontWeight: 500, color: '#212121', marginBottom: 20 / proporcional}}
                                        id='link_twitter'
                                        value={link_twitter}
                                        onChange={(event) => setLinkTwitter(event.target.value)}
                                        placeholder='Link del twitter (X)'/>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 50 / proporcional, marginBottom: 20 / proporcional}}>
                                    <button className='btn' style={{width: '90%', height: 50 / proporcional, border: '1px solid rgb(23, 43, 222)', fontWeight: 600,
                                        background: boton_anterior ? 'white' : 'rgb(23, 43, 222)', color: boton_anterior ? 'rgb(23, 43, 222)' : 'white', fontSize: 18 / proporcional}}
                                        onMouseOver={() => setBotonAnterior(true)} onMouseLeave={() => setBotonAnterior(false)}
                                        onClick={() => paso_anterior()}>
                                        Volver
                                    </button>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 50 / proporcional}}>
                                    <button className='btn' style={{width: '90%', height: 50 / proporcional, border: '1px solid rgb(23, 43, 222)', fontWeight: 600,
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