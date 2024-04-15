import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import icono_check from '../../../assets/iconos/icono_check_blue_96.png'
import icono_cross from '../../../assets/iconos/icono_cross_blue_96.png'

export default function AplicacionMovilCell({proporcional}) {

    const [tipo, setTipo] = useState({})
    const [pantallas, setPantallas] = useState({})
    const [informacion_adicional, setInformacionAdicional] = useState({})

    const {cotizacion_app} = useSelector(({data_reducer}) => data_reducer)

    useEffect(() => {
        setTipo (cotizacion_app[0])
        setPantallas (cotizacion_app[1])
        setInformacionAdicional (cotizacion_app[2])
    }, [])
    
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='d-flex justify-content-center rounded-top' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                <p style={{fontSize: 30 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(23, 43, 222)', cursor: 'default', fontWeight: 700, 
                        fontFamily: 'Hind, sans-serif'}}>
                    COTIZACION APLICACIÓN MÓVIL
                </p>
            </div>
            <div className='' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                        fontFamily: 'Hind, sans-serif'}}>
                    Tipo de aplicación: <span style={{fontWeight: 700}}>{tipo.tipo_aplicacion}</span>
                </p>
            </div>
            <div className='' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                        fontFamily: 'Hind, sans-serif'}}>
                    Pantallas:
                </p>
                <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <div className='d-flex' style={{width: '90%', height: 'auto'}}>
                        <img src={pantallas.pantalla_login ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Login
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <div className='d-flex' style={{width: '90%', height: 'auto'}}>
                        <img src={pantallas.pantalla_registro ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Registro
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <div className='d-flex' style={{width: '90%', height: 'auto'}}>
                        <img src={pantallas.pantalla_perfil ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Perfil
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <div className='d-flex' style={{width: '90%', height: 'auto'}}>
                        <img src={pantallas.pantalla_presentacion ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Presentación
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <div className='d-flex' style={{width: '90%', height: 'auto'}}>
                        <img src={pantallas.pantalla_anuncios ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Anuncios
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <div className='d-flex' style={{width: '90%', height: 'auto'}}>
                        <img src={pantallas.pantalla_productos ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Productos
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <div className='d-flex' style={{width: '90%', height: 'auto'}}>
                        <img src={pantallas.pantalla_carrito ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Carrito
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <div className='d-flex' style={{width: '90%', height: 'auto'}}>
                        <img src={pantallas.pantalla_favoritos ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Favoritos
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <div className='d-flex' style={{width: '90%', height: 'auto'}}>
                        <img src={pantallas.pantalla_comentarios ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Comentarios
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <div className='d-flex' style={{width: '90%', height: 'auto'}}>
                        <img src={pantallas.pantalla_categorias ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Categorías
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <div className='d-flex' style={{width: '90%', height: 'auto'}}>
                        <img src={pantallas.pantalla_calendario ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Calendario
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <div className='d-flex' style={{width: '90%', height: 'auto'}}>
                        <img src={pantallas.pantalla_agenda ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Agenda
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <div className='d-flex' style={{width: '90%', height: 'auto'}}>
                        <img src={pantallas.pantalla_estadisticas ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Estadísticas
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <div className='d-flex' style={{width: '90%', height: 'auto'}}>
                        <img src={pantallas.pantalla_chat ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Chat
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <div className='d-flex' style={{width: '90%', height: 'auto'}}>
                        <img src={pantallas.pantalla_galeria ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Galería
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <div className='d-flex' style={{width: '90%', height: 'auto'}}>
                        <img src={pantallas.pantalla_informativa ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Informativa
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <div className='d-flex' style={{width: '90%', height: 'auto'}}>
                        <img src={pantallas.pantalla_ubicacion ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Ubicación
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <div className='d-flex' style={{width: '90%', height: 'auto'}}>
                        <img src={pantallas.pantalla_localizacion ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Geolocalizacion
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <div className='d-flex' style={{width: '90%', height: 'auto'}}>
                        <img src={pantallas.pantalla_pago ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Pago
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <div className='d-flex' style={{width: '90%', height: 'auto'}}>
                        <img src={pantallas.pantalla_otro ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Otro
                        </p>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                        fontFamily: 'Hind, sans-serif'}}>
                    Informacion adicional: <br/><span style={{fontWeight: 700}}>{informacion_adicional.informacion_adicional}</span>
                </p>
            </div>
        </div>
    )
}
