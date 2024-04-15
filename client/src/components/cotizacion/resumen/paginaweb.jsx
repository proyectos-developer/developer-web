import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import icono_check from '../../../assets/iconos/icono_check_blue_96.png'
import icono_cross from '../../../assets/iconos/icono_cross_blue_96.png'

export default function PaginaWeb({proporcional}) {

    const [tipo, setTipo] = useState({})
    const [pestanias, setPestanias] = useState({})
    const [informacion_adicional, setInformacionAdicional] = useState({})

    const {cotizacion_web} = useSelector(({data_reducer}) => data_reducer)

    useEffect(() => {
        setTipo (cotizacion_web[0])
        setPestanias (cotizacion_web[1])
        setInformacionAdicional (cotizacion_web[2])
    }, [])
    
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='d-flex justify-content-center rounded-top' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                <p style={{fontSize: 30 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(23, 43, 222)', cursor: 'default', fontWeight: 700, 
                        fontFamily: 'Hind, sans-serif'}}>
                    COTIZACION PÁGINA WEB
                </p>
            </div>
            <div className='' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                        fontFamily: 'Hind, sans-serif'}}>
                    Tipo de página: <span style={{fontWeight: 700}}>{tipo.tipo_pagina_web}</span>
                </p>
            </div>
            <div className='' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                        fontFamily: 'Hind, sans-serif'}}>
                    Pestañas:
                </p>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                        <img src={pestanias.pestania_nosotros ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Nosotros
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                        <img src={pestanias.pestania_productos ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Productos
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                        <img src={pestanias.pestania_servicios ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Servicios
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                        <img src={pestanias.pestania_fotos ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Fotos
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                        <img src={pestanias.pestania_videos ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Vídeos
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                        <img src={pestanias.pestania_tienda ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Tienda
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                        <img src={pestanias.pestania_carrito ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Carrito
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                        <img src={pestanias.pestania_compras ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Compras
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                        <img src={pestanias.pestania_seguimiento ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Seguimiento
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                        <img src={pestanias.pestania_contacto ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Contacto
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                        <img src={pestanias.pestania_perfil ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Perfil
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                        <img src={pestanias.pestania_favoritos ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Favoritos
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                        <img src={pestanias.pestania_registro ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Registro
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                        <img src={pestanias.pestania_login ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Login
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                        <img src={pestanias.pestania_cotizacion ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Cotización
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                        <img src={pestanias.pestania_pago ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Hind, sans-serif', marginLeft: 10 / proporcional}}>
                            Pago
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '33%', height: 'auto'}}>
                        <img src={pestanias.pestania_administrativa ? icono_check : icono_cross} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
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
                    Informacion adicional: <br/><span style={{fontWeight: 700}}>{informacion_adicional.informacion_adicional}</span>
                </p>
            </div>
        </div>
    )
}
