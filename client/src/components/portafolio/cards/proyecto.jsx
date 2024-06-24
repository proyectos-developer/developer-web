import React, { useEffect, useState } from 'react'
import { constantes } from '../../../uri/constantes'
import axios from 'axios'

import icono_ampliar from '../../../assets/iconos/icono_ampliar_black_v1_96.png'

export default function CardProyecto({proporcional, proyecto, key, index, position}) {

    const [seleccion_proyecto, setSeleccionProyecto] = useState('')
    const [nombre_tipo, setNombreTipo] = useState('')

    const [boton_ver, setBotonVer] = useState(false)
    const [boton_cerrar, setBotonCerrar] = useState(false)

    useEffect(() => {
        axios.get(`${constantes().url_principal[0].url}/tipo_proyecto/${proyecto.tipo_proyecto}`)
            .then ((res) => {
                setNombreTipo(res.data.tipo_proyecto.nombre)
            }).catch ((err) => {

            })
    }, [])

    return (
        <div style={{width: '25%',  height: 'auto', cursor: 'pointer'}}>
            <div className='position-relative' style={{width: '100%', height: 'auto', background: '#dbe4eb'}}>
                <img className='position-absolute'
                    src={icono_ampliar} style={{width: 32 / proporcional, height: 32 / proporcional, top: 20 / proporcional, right: 20 / proporcional, cursor: 'pointer'}} 
                    onClick={() => setSeleccionProyecto(proyecto.id)}/>
                <img className='rounded' src={proyecto.url_imagen} style={{width: '100%', height: '100%'}}/>
            </div>
                {
                    seleccion_proyecto === proyecto.id ? (
                        <div className='position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgba(189, 189, 189, 0.6)', zIndex: 999999,
                            marginTop: position > 900 ? -150 / proporcional : 0  
                        }}>
                            <div className='position-fixed top-50 start-50 rounded translate-middle' style={{width: '80%', height: '80%', background: 'white'}}>
                                <div className='position-relative d-flex' style={{width: '100%', height: '100%'}}>
                                    <img src={proyecto.url_imagen_1300} style={{width: '50%', height: '100%'}}/>
                                    <div className='position-absolute' style={{width: '50%', height: 'auto', top: '30%', right: '2%'}}>
                                        <p style={{fontSize: 30 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 16 / proporcional, fontWeight: 800, color: 'black',
                                                textAlign: 'center', fontFamily: 'Montserrat, sans-serif', color: 'rgb(23, 42, 222)'}}>
                                            {proyecto.nombre_proyecto}
                                        </p>
                                        <p style={{fontSize: 26 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 16 / proporcional, fontWeight: 800, color: 'black',
                                                textAlign: 'left', fontFamily: 'Montserrat, sans-serif'}}>
                                            <span style={{fontSize: 20 / proporcional, fontWeight: 400, color: 'rgb(23, 42, 222)'}}>Tipo proyecto:</span> {nombre_tipo}
                                        </p>
                                        <p style={{fontSize: 26 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 16 / proporcional, fontWeight: 800, color: 'black',
                                                textAlign: 'left', fontFamily: 'Montserrat, sans-serif'}}>
                                            <span style={{fontSize: 20 / proporcional, fontWeight: 400, color: 'rgb(23, 42, 222)'}}>Cliente:</span> {proyecto.cliente}
                                        </p>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 400, color: 'black',
                                                textAlign: 'left', fontFamily: 'Hind, sans-serif'}}>
                                            {proyecto.descripcion}
                                        </p>
                                        <div className='d-flex justify-content-between' style={{width: '50%', height: 'auto'}}>
                                            <div className={boton_ver ? 'rounded shadow-lg' : 'rounded'} style={{width: '48%', height: 40 / proporcional, border: '1px solid rgb(23, 42, 222)'}}
                                                onMouseOver={() => setBotonVer(true)} onMouseLeave={() => setBotonVer(false)}>
                                                <p style={{cursor: 'pointer', fontSize: 18 / proporcional, lineHeight: `${38 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 600, 
                                                        color: 'rgb(23, 42, 222)', textAlign: 'center', fontFamily: 'Hind, sans-serif'}}>
                                                    <a target='_blank' href={proyecto.url_contenido}  style={{textDecoration: 'none'}}>Ver demo</a>
                                                </p>
                                            </div>
                                            <div className={boton_cerrar ? 'rounded shadow-lg' : 'rounded'} style={{width: '48%', height: 40 / proporcional, border: '1px solid rgb(23, 42, 222)'}}
                                                onMouseOver={() => setBotonCerrar(true)} onMouseLeave={() => setBotonCerrar(false)}
                                                onClick={() => setSeleccionProyecto('')}>
                                                <p style={{cursor: 'pointer', fontSize: 18 / proporcional, lineHeight: `${38 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 600, 
                                                        color: 'rgb(23, 42, 222)', textAlign: 'center', fontFamily: 'Hind, sans-serif'}}>
                                                    Cerrar
                                                </p>
                                            </div>
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
