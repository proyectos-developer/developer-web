import React from 'react'

import icono_design from '../../assets/iconos/icono_diseño_white_128.png'
import icono_marcas from '../../assets/iconos/icono_marca_white_128.png'
import icono_configuracion from '../../assets/iconos/icono_configuracion_white_128.png'
import icono_digital from '../../assets/iconos/icono_digital_white_128.png'

export default function AreasTrabajoTablet ({proporcional}){

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <div className='animate__animated animate__fadeInTopLeft' style={{width: '48%', height: 'auto'}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                        <div className='rounded-circle' style={{width: 115 / proporcional, height: 115 / proporcional, background: '#172bde', marginBottom: 23 / proporcional}}>
                            <img src={icono_design} style={{width: 48 / proporcional, height: 48 / proporcional, margin: 33.5 / proporcional}}/>
                        </div>
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <p style={{fontSize: 22 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 20 / proporcional, marginTop: 9 / proporcional, fontWeight: 800,
                                color: 'rgb(22, 36, 65)', textAlign: 'center'}}>
                            Diseño
                        </p>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 400,
                                color: 'rgb(117, 117, 117)', textAlign: 'center'}}>
                            Súmergete en nuestro mundo de diseño, donde la revolución digital es la musa que guía cada línea de código y cada detalle estético. Desde interfaces intuitivas hasta experiencias de usuario envolventes. Únete a nosotros mientras navevamos por las corrientes de la transofrmación digital, creando experiencias que inspiran, conectan y trascienden los límites de lo convencional.
                        </p>
                    </div>
                </div>
                <div className='animate__animated animate__fadeInRightBig' style={{width: '48%', height: 'auto'}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                        <div className='rounded-circle' style={{width: 115 / proporcional, height: 115 / proporcional, background: '#172bde', marginBottom: 23 / proporcional}}>
                            <img src={icono_marcas} style={{width: 48 / proporcional, height: 48 / proporcional, margin: 33.5 / proporcional}}/>
                        </div>
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <p style={{fontSize: 22 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 20 / proporcional, marginTop: 9 / proporcional, fontWeight: 800,
                                color: 'rgb(22, 36, 65)', textAlign: 'center'}}>
                            Marca
                        </p>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 400,
                                color: 'rgb(117, 117, 117)', textAlign: 'center'}}>
                            Buebvebudi a nuestra plataforma donde la identidad digital toma forma y se proyectia hacia el mañana. Desde la conceptualización hasta la implementación, estamos modelando marcas que trascienden lo convencional, abrazando la revolución digitl en cada paso del camino.
                        </p>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div className='animate__animated animate__fadeInLeftBig' style={{width: '48%', height: 'auto'}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                        <div className='rounded-circle' style={{width: 115 / proporcional, height: 115 / proporcional, background: '#172bde', marginBottom: 23 / proporcional}}>
                            <img src={icono_configuracion} style={{width: 48 / proporcional, height: 48 / proporcional, margin: 33.5 / proporcional}}/>
                        </div>
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <p style={{fontSize: 22 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 20 / proporcional, marginTop: 9 / proporcional, fontWeight: 800,
                                color: 'rgb(22, 36, 65)', textAlign: 'center'}}>
                            Gestión
                        </p>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 400,
                                color: 'rgb(117, 117, 117)', textAlign: 'center'}}>
                            Adéntrate en nuestra plataforma de gestión digital, donde la eficiencia, la agilidad y la innovación se fusionan para impulsar el éxito en la era digital. Desde la gestión de proyectos hasta la administración de recursos, estamos liderando el camino hacia prácticas de gestión ágiles y centradas en los datos que maximizan el rendimiento organizacional.
                        </p>
                    </div>
                </div>
                <div className='animate__animated animate__fadeInBottomLeft' style={{width: '48%', height: 'auto'}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                        <div className='rounded-circle' style={{width: 115 / proporcional, height: 115 / proporcional, background: '#172bde', marginBottom: 23 / proporcional}}>
                            <img src={icono_digital} style={{width: 48 / proporcional, height: 48 / proporcional, margin: 33.5 / proporcional}}/>
                        </div>
                    </div>
                    <div style={{width: '100%', height: 'auto'}}>
                        <p style={{fontSize: 22 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 20 / proporcional, marginTop: 9 / proporcional, fontWeight: 800,
                                color: 'rgb(22, 36, 65)', textAlign: 'center'}}>
                            Digital
                        </p>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 400,
                                color: 'rgb(117, 117, 117)', textAlign: 'center'}}>
                            La innovación y la creatividad convergen para crear experiencias únicas en línea. Desde la conectividad instantánea hasta la personalización sin límites, estamos transformando la forma en que interactuamos con el mundo digital. Únete a nosotros en este viaje de descubrimiento mientras exploramos las infnitas posibilidades y oportunidades que ofrece el universo digital en constante evolución.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
} 