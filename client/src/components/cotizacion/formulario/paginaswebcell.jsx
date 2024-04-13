import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import icono_box from '../../../assets/iconos/icono_box_96.png'
import icono_check_box from '../../../assets/iconos/icono_check_box_96.png'

export default function PaginasWebCell({proporcional}) {

    const navigate = useNavigate()

    const [tipo_pagina_web, setTipoPaginaWeb] = useState('')
    const [etipo_pagina_web, setETipoPaginaWeb] = useState('')

    const [pestania_nosotros, setPestaniaNosotros] = useState(false)
    const [pestania_servicios, setPestaniaServicios] = useState(false)
    const [pestania_productos, setPestaniaProductos] = useState(false)
    const [pestania_fotos, setPestaniaFotos] = useState(false)
    const [pestania_videos, setPestaniaVideos] = useState(false)
    const [pestania_contacto, setPestaniaContacto] = useState(false)
    const [pestania_cotizacion, setPestaniaCotizacion] = useState(false)
    const [pestania_tienda, setPestaniaTienda] = useState(false)
    const [pestania_carrito, setPestaniaCarrito] = useState(false)
    const [pestania_pago, setPestaniaPago] = useState(false)
    const [pestania_seguimiento, setPestaniaSeguimiento] = useState(false)
    const [pestania_registro, setPestaniaRegistro] = useState(false)
    const [pestania_login, setPestanialogin] = useState(false)
    const [pestania_perfil, setPestaniaPerfil] = useState(false)
    const [pestania_favoritos, setPestaniaFavoritos] = useState(false)
    const [pestania_compras, setPestaniaCompras] = useState(false)
    const [pestania_administrativa, setPestaniaAdministrativa] = useState(false)
    
    const [tipo, setTipo] = useState('')
    const [nombre, setNombre] = useState('')
    const [rubro, setRubro] = useState('')
    const [nro_ruc, setNroRuc] = useState('')
    const [nro_telefono, setNroTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const [nombre_contacto, setNombreContacto] = useState ('')

    const [boton_volver, setBotonVolver] = useState (false)
    const [boton_siguiente, setBotonSiguiente] = useState (false)
    const [boton_anterior, setBotonAnterior] = useState (false)
    const [boton_finalizar, setBotonFinalizar] = useState (false)

    const [paso, setPaso] = useState (1)

    const paso_anterior = () => {
        setPaso(1)
    }

    const siguiente_paso = () => {
        if (tipo_pagina_web === ''){
            setETipoPaginaWeb(tipo_pagina_web === '' ? true : false)
        }else{
            setETipoPaginaWeb(false)
            setPaso(2)
        }
    }

    const volver_opciones = () => {
        navigate ('/cotizacion')
    }

    return (
        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
            {
                paso === 1 ? (
                    <div style={{width: '80%', height: 'auto'}}>
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
                            <div style={{width: 50 / proporcional, height: 4 / proporcional, background: 'rgb(23, 43, 222)', marginTop: 60 / proporcional, marginBottom: 60 / proporcional}}/>
                            <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                background: paso === 3 ? 'rgb(23, 43, 222)' :  'white'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                        textAlign: 'center', color: paso === 3 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                    3
                                </p>
                            </div>
                        </div>
                        <div className='' style={{width: '100%', height: 'auto', marginBottom: 75 / proporcional}}>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 75 / proporcional}}>
                                <div className='position-relative' style={{width: '90%', height: 'auto', cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionTipoPagina('web')} onMouseLeave={() => setSeleccionTipoPagina('')}
                                    onClick={() => setTipoPaginaWeb('web')}>
                                    {
                                        seleccion_tipo_pagina === 'web' || tipo_pagina_web === 'web' ? (
                                            <div className='rounded position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.6)'}}/>
                                        ) : null
                                    }
                                    <img className={`${seleccion_tipo_pagina === 'web' || tipo_pagina_web === 'web' ? 'rounded' : ''}`} 
                                        src={image_cotizacion_web} style={{width: '100%', height: '100%', marginBottom: 20 / proporcional}}/>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                            textAlign: 'center', color: 'rgb(23, 43, 222)', cursor: 'default'}}>
                                        Página web <br/>simple
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 75 / proporcional}}>
                                <div className='position-relative' style={{width: '90%', height: 'auto', cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionTipoPagina('landing')} onMouseLeave={() => setSeleccionTipoPagina('')}
                                    onClick={() => setTipoPaginaWeb('landing')}>
                                    {
                                        seleccion_tipo_pagina === 'landing' || tipo_pagina_web === 'landing' ? (
                                            <div className='rounded position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.6)'}}/>
                                        ) : null
                                    }
                                    <img className={`${seleccion_tipo_pagina === 'landing' || tipo_pagina_web === 'landing' ? 'rounded' : ''}`} 
                                        src={image_cotizacion_landing} style={{width: '100%', height: '100%', marginBottom: 20 / proporcional}}/>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                            textAlign: 'center', color: 'rgb(23, 43, 222)', cursor: 'default'}}>
                                        Landing page
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 75 / proporcional}}>
                                <div className='position-relative' style={{width: '90%', height: 'auto', cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionTipoPagina('empresa')} onMouseLeave={() => setSeleccionTipoPagina('')}
                                    onClick={() => setTipoPaginaWeb('empresa')}>
                                    {
                                        seleccion_tipo_pagina === 'empresa' || tipo_pagina_web === 'empresa' ? (
                                            <div className='rounded position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.6)'}}/>
                                        ) : null
                                    }
                                    <img className={`${seleccion_tipo_pagina === 'empresa' || tipo_pagina_web === 'empresa' ? 'rounded' : ''}`} 
                                        src={image_cotizacion_web_empresa} style={{width: '100%', height: '100%', marginBottom: 20 / proporcional}}/>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                            textAlign: 'center', color: 'rgb(23, 43, 222)', cursor: 'default'}}>
                                        Página web <br/>empresarial
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 75 / proporcional}}>
                                <div className='position-relative' style={{width: '90%', height: 'auto', cursor: 'pointer'}}
                                    onMouseOver={() => setSeleccionTipoPagina('ecommerce')} onMouseLeave={() => setSeleccionTipoPagina('')}
                                    onClick={() => setTipoPaginaWeb('ecommerce')}>
                                    {
                                        seleccion_tipo_pagina === 'ecommerce' || tipo_pagina_web === 'ecommerce' ? (
                                            <div className='rounded position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.6)'}}/>
                                        ) : null
                                    }
                                    <img className={`${seleccion_tipo_pagina === 'ecommerce' || tipo_pagina_web === 'ecommerce' ? 'rounded-circle' : ''}`} 
                                        src={image_cotizacion_web_ecommerce} style={{width: '100%', height: '100%', marginBottom: 20 / proporcional}}/>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                            textAlign: 'center', color: 'rgb(23, 43, 222)', cursor: 'default'}}>
                                        Página web <br/>e-commerce
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
                    <div style={{width: '80%', height: 'auto'}}>
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
                            <div style={{width: 50 / proporcional, height: 4 / proporcional, background: 'rgb(23, 43, 222)', marginTop: 60 / proporcional, marginBottom: 60 / proporcional}}/>
                            <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                background: paso === 3 ? 'rgb(23, 43, 222)' :  'white'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                        textAlign: 'center', color: paso === 3 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                    3
                                </p>
                            </div>
                        </div>
                        <div className='' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                            <div className='' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                        onClick={() => setPestaniaNosotros(!pestania_nosotros)}>    
                                        <img src={pestania_nosotros ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                            marginRight: 10 / proporcional}}/>

                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                                textAlign: 'left', color: 'black', cursor: 'default'}}>
                                            Nosotros
                                        </p>
                                    </div>  
                                </div>      
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                        onClick={() => setPestaniaServicios(!pestania_servicios)}>    
                                        <img src={pestania_servicios ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                            marginRight: 10 / proporcional}}/>

                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                                textAlign: 'left', color: 'black', cursor: 'default'}}>
                                            Servicios
                                        </p>
                                    </div> 
                                </div> 
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>     
                                    <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                        onClick={() => setPestaniaProductos(!pestania_productos)}>    
                                        <img src={pestania_productos ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                            marginRight: 10 / proporcional}}/>

                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                                textAlign: 'left', color: 'black', cursor: 'default'}}>
                                            Productos
                                        </p>
                                    </div> 
                                </div>      
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>    
                                    <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                        onClick={() => setPestaniaFotos(!pestania_fotos)}>    
                                        <img src={pestania_fotos ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                            marginRight: 10 / proporcional}}/>

                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                                textAlign: 'left', color: 'black', cursor: 'default'}}>
                                            Galería de fotos
                                        </p>
                                    </div>     
                                </div>  
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                        onClick={() => setPestaniaVideos(!pestania_videos)}>    
                                        <img src={pestania_videos ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                            marginRight: 10 / proporcional}}/>

                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                                textAlign: 'left', color: 'black', cursor: 'default'}}>
                                            Galería de vídeos
                                        </p>
                                    </div>      
                                </div>      
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                        onClick={() => setPestaniaContacto(!pestania_contacto)}>    
                                        <img src={pestania_contacto ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                            marginRight: 10 / proporcional}}/>

                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                                textAlign: 'left', color: 'black', cursor: 'default'}}>
                                            Contácto
                                        </p>
                                    </div>   
                                </div>  
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                        onClick={() => setPestaniaCotizacion(!pestania_cotizacion)}>    
                                        <img src={pestania_cotizacion ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                            marginRight: 10 / proporcional}}/>

                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                                textAlign: 'left', color: 'black', cursor: 'default'}}>
                                            Cotización
                                        </p>
                                    </div> 
                                </div>      
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>                         
                                    <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                        onClick={() => setPestaniaTienda(!pestania_tienda)}>    
                                        <img src={pestania_tienda ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                            marginRight: 10 / proporcional}}/>

                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                                textAlign: 'left', color: 'black', cursor: 'default'}}>
                                            Tienda
                                        </p>
                                    </div>       
                                </div>  
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                        onClick={() => setPestaniaCarrito(!pestania_carrito)}>    
                                        <img src={pestania_carrito ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                            marginRight: 10 / proporcional}}/>

                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                                textAlign: 'left', color: 'black', cursor: 'default'}}>
                                            Carrito
                                        </p>
                                    </div>   
                                </div>      
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                        onClick={() => setPestaniaPago(!pestania_pago)}>    
                                        <img src={pestania_pago ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                            marginRight: 10 / proporcional}}/>

                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                                textAlign: 'left', color: 'black', cursor: 'default'}}>
                                            Pasarela de pago
                                        </p>
                                    </div>    
                                </div>  
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                        onClick={() => setPestaniaSeguimiento(!pestania_seguimiento)}>    
                                        <img src={pestania_seguimiento ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                            marginRight: 10 / proporcional}}/>

                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                                textAlign: 'left', color: 'black', cursor: 'default'}}>
                                            Seguimiento del pedido
                                        </p>
                                    </div>   
                                </div>      
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}> 
                                    <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                        onClick={() => setPestaniaRegistro(!pestania_registro)}>    
                                        <img src={pestania_registro ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                            marginRight: 10 / proporcional}}/>

                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                                textAlign: 'left', color: 'black', cursor: 'default'}}>
                                            Registro de usuario
                                        </p>
                                    </div>   
                                </div>  
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                        onClick={() => setPestaniaLogin(!pestania_login)}>    
                                        <img src={pestania_login ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                            marginRight: 10 / proporcional}}/>

                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                                textAlign: 'left', color: 'black', cursor: 'default'}}>
                                            Inicio de sesión de usuario
                                        </p>
                                    </div> 
                                </div>      
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>   
                                    <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                        onClick={() => setPestaniaPerfil(!pestania_perfil)}>    
                                        <img src={pestania_perfil ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                            marginRight: 10 / proporcional}}/>

                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                                textAlign: 'left', color: 'black', cursor: 'default'}}>
                                            Perfil de usuario
                                        </p>
                                    </div> 
                                </div>  
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>   
                                    <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                        onClick={() => setPestaniaFavoritos(!pestania_favoritos)}>    
                                        <img src={pestania_favoritos ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                            marginRight: 10 / proporcional}}/>

                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                                textAlign: 'left', color: 'black', cursor: 'default'}}>
                                            Lista de favoritos
                                        </p>
                                    </div>   
                                </div>      
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                        onClick={() => setPestaniaCompras(!pestania_compras)}>    
                                        <img src={pestania_compras ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                            marginRight: 10 / proporcional}}/>

                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                                textAlign: 'left', color: 'black', cursor: 'default'}}>
                                            Compras realizadas
                                        </p>
                                    </div>    
                                </div>  
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <div className='d-flex' style={{width: '90%', height: 24 / proporcional, cursor: 'pointer'}}
                                        onClick={() => setPestaniaAdministrativa(!pestania_administrativa)}>    
                                        <img src={pestania_administrativa ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 2 / proporcional,
                                            marginRight: 10 / proporcional}}/>

                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 600, fontFamily: '', marginBottom: 0 / proporcional,
                                                textAlign: 'left', color: 'black', cursor: 'default'}}>
                                            ¿Desea contar con una página administrativa? (estadisticas, clientes, productos, compras)
                                        </p>
                                    </div>    
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
                            <div style={{width: 50 / proporcional, height: 4 / proporcional, background: 'rgb(23, 43, 222)', marginTop: 60 / proporcional, marginBottom: 60 / proporcional}}/>
                            <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                background: paso === 2 ? 'rgb(23, 43, 222)' :  'white'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                        textAlign: 'center', color: paso === 2 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                    2
                                </p>
                            </div>
                            <div style={{width: 50 / proporcional, height: 4 / proporcional, background: 'rgb(23, 43, 222)', marginTop: 60 / proporcional, marginBottom: 60 / proporcional}}/>
                            <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                background: paso === 3 ? 'rgb(23, 43, 222)' :  'white'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                        textAlign: 'center', color: paso === 3 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                    3
                                </p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                            <div style={{width: '100%', height: 'auto'}}>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <div style={{width: '90%', height: 50 / proporcional}}>
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
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <div style={{width: '90%', height: 50 / proporcional}}>
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
                                        <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                                <div style={{width: '90%', height: 50 / proporcional}}>
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
                                            </div>
                                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                                <div style={{width: '90%', height: 50 / proporcional}}>
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
                                            style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, fontWeight: 600, color: '#212121'}}
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
                                            style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, fontWeight: 600, color: '#212121'}}
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
                                                    style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, fontWeight: 600, color: '#212121'}}
                                                    id='nombre_contacto'
                                                    type='default'
                                                    placeholder='Nombre de la persona de contacto'/>
                                            </div>
                                        </div>
                                    ): null
                    
                                }
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 50 / proporcional, marginBottom: 20 / proporcional}}>
                                    <button className='btn' style={{width: '90%', height: 50 / proporcional, border: '1px solid rgb(23, 43, 222)', fontWeight: 600,
                                        background: boton_anterior ? 'white' : 'rgb(23, 43, 222)', color: boton_anterior ? 'rgb(23, 43, 222)' : 'white', fontSize: 18 / proporcional}}
                                        onMouseOver={() => setBotonAnterior(true)} onMouseLeave={() => setBotonAnterior(false)}
                                        onClick={() => paso_anterior()}>
                                        Anterior
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
        </div>
    )
}