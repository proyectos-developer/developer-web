import React from 'react'

import icono_innovacion from '../../assets/iconos/icono_innovacion_96.png'
import icono_calidad from '../../assets/iconos/icono_calidad_96.png'
import icono_integridad from '../../assets/iconos/icono_integridad_96.png'
import icono_colaboracion from '../../assets/iconos/icono_colaboracion_96.png'
import icono_orientacion from '../../assets/iconos/icono_orientacion_96.png'
import icono_responsabilidad from '../../assets/iconos/icono_responsabilidad_96.png'
import icono_aprendizaje from '../../assets/iconos/icono_aprendizaje_96.png'
import icono_flexibilidad from '../../assets/iconos/icono_flexibilidad_96.png'
import icono_empoderamiento from '../../assets/iconos/icono_empoderamiento_96.png'
import icono_diversidad from '../../assets/iconos/icono_diversidad_96.png'

export default function Valores({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional, paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                    <div style={{width: '20%', height: 'auto', borderRight: '1px dashed rgba(23, 43, 222, 1)'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={icono_innovacion} style={{width: 96 / proporcional, height: 96 / proporcional}}/>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight:  `${22 / proporcional}px`, marginBottom: 20 / proporcional, fontFamily: 'Hind, sans-serif', color: 'rgb(23, 43, 222)',
                                fontWeight: 600, textAlign: 'center'}}>
                                Innovación
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', padding: 5 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight:  `${20 / proporcional}px`, marginBottom: 0, fontFamily: 'Hind, sans-serif', color: 'rgb(136, 136, 136)',
                                fontWeight: 400, textAlign: 'center'}}>
                                Nos esforzamos por ser líderes en la adopción de nuevas tecnologías para ofrecer soluciones creativas e innovadoras a nuestros clientes.
                            </p>
                        </div>
                    </div>
                    <div style={{width: '20%', height: 'auto', borderRight: '1px dashed rgba(23, 43, 222, 1)'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={icono_calidad} style={{width: 96 / proporcional, height: 96 / proporcional}}/>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight:  `${22 / proporcional}px`, marginBottom: 20 / proporcional, fontFamily: 'Hind, sans-serif', color: 'rgb(23, 43, 222)',
                                fontWeight: 600, textAlign: 'center'}}>
                                Calidad
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', padding: 5 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight:  `${20 / proporcional}px`, marginBottom: 0, fontFamily: 'Hind, sans-serif', color: 'rgb(136, 136, 136)',
                                fontWeight: 400, textAlign: 'center'}}>
                                Nos compremetemos a ofrecer productos y servicios de la más alta calidad, cenrándoos en la excelencia en cada aspecto de nuestro trabajo.
                            </p>
                        </div>
                    </div>
                    <div style={{width: '20%', height: 'auto', borderRight: '1px dashed rgba(23, 43, 222, 1)'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={icono_integridad} style={{width: 96 / proporcional, height: 96 / proporcional}}/>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight:  `${22 / proporcional}px`, marginBottom: 20 / proporcional, fontFamily: 'Hind, sans-serif', color: 'rgb(23, 43, 222)',
                                fontWeight: 600, textAlign: 'center'}}>
                                Integridad
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', padding: 5 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight:  `${20 / proporcional}px`, marginBottom: 0, fontFamily: 'Hind, sans-serif', color: 'rgb(136, 136, 136)',
                                fontWeight: 400, textAlign: 'center'}}>
                                Operamos con honestidad, transparencia y ética en todas nuestras interacciones, manteniendo la confianza y el respeto de nuestros clientes, empleados y socios.
                            </p>
                        </div>
                    </div>
                    <div style={{width: '20%', height: 'auto', borderRight: '1px dashed rgba(23, 43, 222, 1)'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={icono_colaboracion} style={{width: 96 / proporcional, height: 96 / proporcional}}/>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight:  `${22 / proporcional}px`, marginBottom: 20 / proporcional, fontFamily: 'Hind, sans-serif', color: 'rgb(23, 43, 222)',
                                fontWeight: 600, textAlign: 'center'}}>
                                Colabración
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', padding: 5 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight:  `${20 / proporcional}px`, marginBottom: 0, fontFamily: 'Hind, sans-serif', color: 'rgb(136, 136, 136)',
                                fontWeight: 400, textAlign: 'center'}}>
                                Valoramos el trabajo en equipo y la colaboración, reconociendo que juntos podemos lograr ás que individualmente.
                            </p>
                        </div>
                    </div>
                    <div style={{width: '20%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={icono_orientacion} style={{width: 96 / proporcional, height: 96 / proporcional}}/>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight:  `${22 / proporcional}px`, marginBottom: 20 / proporcional, fontFamily: 'Hind, sans-serif', color: 'rgb(23, 43, 222)',
                                fontWeight: 600, textAlign: 'center'}}>
                                Orientación al cliente
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', padding: 5 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight:  `${20 / proporcional}px`, marginBottom: 0, fontFamily: 'Hind, sans-serif', color: 'rgb(136, 136, 136)',
                                fontWeight: 400, textAlign: 'center'}}>
                                Ponemos las necesidades y objetivos de nuestros clientes en el centro de todo lo que hacemos, binrdando un servicio excepcional y soluciones personalizadas que superen sus expectativas.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                    <div style={{width: '20%', height: 'auto', borderRight: '1px dashed rgba(23, 43, 222, 1)'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={icono_responsabilidad} style={{width: 96 / proporcional, height: 96 / proporcional}}/>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight:  `${22 / proporcional}px`, marginBottom: 20 / proporcional, fontFamily: 'Hind, sans-serif', color: 'rgb(23, 43, 222)',
                                fontWeight: 600, textAlign: 'center'}}>
                                Responsabilidad social y ambiental
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', padding: 5 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight:  `${20 / proporcional}px`, marginBottom: 0, fontFamily: 'Hind, sans-serif', color: 'rgb(136, 136, 136)',
                                fontWeight: 400, textAlign: 'center'}}>
                                Nos comprometemos a ser buenos ciudadanos corporativos, contribuyendo positivamente a nuestras comunidades y minimizando nuestro impacto en el medio ambiente
                            </p>
                        </div>
                    </div>
                    <div style={{width: '20%', height: 'auto', borderRight: '1px dashed rgba(23, 43, 222, 1)'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={icono_aprendizaje} style={{width: 96 / proporcional, height: 96 / proporcional}}/>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight:  `${22 / proporcional}px`, marginBottom: 20 / proporcional, fontFamily: 'Hind, sans-serif', color: 'rgb(23, 43, 222)',
                                fontWeight: 600, textAlign: 'center'}}>
                                Aprendizaje continuo
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', padding: 5 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight:  `${20 / proporcional}px`, marginBottom: 0, fontFamily: 'Hind, sans-serif', color: 'rgb(136, 136, 136)',
                                fontWeight: 400, textAlign: 'center'}}>
                                Foomentamos un ambiente de aprendizaje y desarrollo personal y profesional donde nuestros empeados puedan crecer, innovar y alcanzar su máximo potencial.
                            </p>
                        </div>
                    </div>
                    <div style={{width: '20%', height: 'auto', borderRight: '1px dashed rgba(23, 43, 222, 1)'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={icono_flexibilidad} style={{width: 96 / proporcional, height: 96 / proporcional}}/>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight:  `${22 / proporcional}px`, marginBottom: 20 / proporcional, fontFamily: 'Hind, sans-serif', color: 'rgb(23, 43, 222)',
                                fontWeight: 600, textAlign: 'center'}}>
                                Flexibilidad
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', padding: 5 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight:  `${20 / proporcional}px`, marginBottom: 0, fontFamily: 'Hind, sans-serif', color: 'rgb(136, 136, 136)',
                                fontWeight: 400, textAlign: 'center'}}>
                                Nos adaptamos rápidamente a los cambios del mercado y las necesidades de nuestros clientes, siendo ágiles y flexibles en nuestra forma de trabajar y pensar.
                            </p>
                        </div>
                    </div>
                    <div style={{width: '20%', height: 'auto', borderRight: '1px dashed rgba(23, 43, 222, 1)'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={icono_empoderamiento} style={{width: 96 / proporcional, height: 96 / proporcional}}/>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight:  `${22 / proporcional}px`, marginBottom: 20 / proporcional, fontFamily: 'Hind, sans-serif', color: 'rgb(23, 43, 222)',
                                fontWeight: 600, textAlign: 'center'}}>
                                Empoderamiento
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', padding: 5 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight:  `${20 / proporcional}px`, marginBottom: 0, fontFamily: 'Hind, sans-serif', color: 'rgb(136, 136, 136)',
                                fontWeight: 400, textAlign: 'center'}}>
                                Fomentamos un ambiente de confianza y empoderamiento, donde nuestros empleados se sientan capacitados para tomar decisiones y asumir responsabilidades.
                            </p>
                        </div>
                    </div>
                    <div style={{width: '20%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={icono_diversidad} style={{width: 96 / proporcional, height: 96 / proporcional}}/>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight:  `${22 / proporcional}px`, marginBottom: 20 / proporcional, fontFamily: 'Hind, sans-serif', color: 'rgb(23, 43, 222)',
                                fontWeight: 600, textAlign: 'center'}}>
                                Diversidad e inclusión
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', padding: 5 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight:  `${20 / proporcional}px`, marginBottom: 0, fontFamily: 'Hind, sans-serif', color: 'rgb(136, 136, 136)',
                                fontWeight: 400, textAlign: 'center'}}>
                                Valoramos y respetamos la diversidad de ideas, experiencias y perspectivas, creando un ambiente inclusivo donde todas las voces sean escuchadas y valoradas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}