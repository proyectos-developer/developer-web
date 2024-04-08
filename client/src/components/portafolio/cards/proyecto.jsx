import React, { useState } from 'react'

export default function CardProyecto({proporcional, proyecto, key, index}) {

    const [seleccion_proyecto, setSeleccionProyecto] = useState('')

    return (
        <div style={{width: '24%',  height: 'auto', cursor: 'pointer'}} onMouseOver={() => setSeleccionProyecto (proyecto.id)} 
            onMouseLeave={() => setSeleccionProyecto('')}>
            <div className='position-relative' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional, background: '#dbe4eb'}}>
                <img className='rounded' src={proyecto.url_imagen} style={{width: '100%', height: '100%'}}/>
                {
                    seleccion_proyecto === proyecto.id ? (
                        <div className='position-absolute top-0 start-0 rounded' style={{width: '100%', height: '100%', background: 'rgba(45, 87, 44, 0.8)'}}>
                            <div className='position-absolute top-50 start-50 rounded translate-middle' style={{width: 'auto', height: 'auto'}}>
                                <p style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 13 / proporcional, fontWeight: 800, color: 'white',
                                        textAlign: 'center', fontFamily: 'Montserrat, sans-serif'}}>
                                    {proyecto.nombre_proyecto}
                                </p>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 600, color: 'white',
                                        textAlign: 'center', fontFamily: 'Hind, sans-serif'}}>
                                    {proyecto.tipo_proyecto}
                                </p>
                            </div>
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}
