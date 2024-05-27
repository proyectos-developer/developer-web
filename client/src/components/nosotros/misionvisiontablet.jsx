import React from 'react'

import icono_mision from '../../assets/iconos/icono_mision_96.png'
import icono_vision from '../../assets/iconos/icono_vision_96.png'

export default function MisionVisionTablet ({proporcional}){
    
    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '80%', height: 'auto', background: 'rgba(219, 228, 235, 0.8)', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, 
                        paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '20%', height: 'auto'}}>
                            <img src={icono_mision} style={{width: 64 / proporcional, height: 64 / proporcional}}/>
                        </div>
                        <div className='' style={{width: '80%', height: 'auto'}}>
                            <div style={{width: '100%', height: 40 / proporcional, marginBottom: 20 / proporcional}}>
                                <p style={{fontSize: 35 / proporcional, lineHeight:  `${40 / proporcional}px`, marginBottom: 0, fontFamily: 'Hind, sans-serif', color: 'rgb(22, 36, 65)',
                                    fontWeight: 800}}>
                                    Misión
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto'}}>
                                <p style={{fontSize: 18 / proporcional, lineHeight:  `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Hind, sans-serif', color: 'rgb(136, 136, 136)',
                                    fontWeight: 400}}>
                                    En Developer Ideas, nuestra misión es impulsar el éxito de nuestros clientes a través de soluciones tecnológicas innovadoras y orientadas al futuro. Nos comprometemos a prporcionar productos y servicios de la más alta calidad, diseñados para satisface las necesidades específicas de cada cliente y superar sus expectativas. <br/>
                                    Además, estamos comprometidos con la innovación contiua y el desarrollo de talento, tanto dentro de nuestra organización como en el mundo en general. Creemos en el poder transformador de la tecnología para mejorar la vida de las personas y contribuir al progreso de la sociedad en su conjunto
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '80%', height: 'auto', background: 'rgba(219, 228, 235, 0.8)', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, 
                        paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '20%', height: 'auto'}}>
                            <img src={icono_vision} style={{width: 64 / proporcional, height: 64 / proporcional}}/>
                        </div>
                        <div className='' style={{width: '80%', height: 'auto'}}>
                            <div style={{width: '100%', height: 40 / proporcional, marginBottom: 20 / proporcional}}>
                                <p style={{fontSize: 35 / proporcional, lineHeight:  `${40 / proporcional}px`, marginBottom: 0, fontFamily: 'Hind, sans-serif', color: 'rgb(22, 36, 65)',
                                    fontWeight: 800}}>
                                    Visión
                                </p>
                            </div>
                            <div style={{width: '100%', height: 'auto'}}>
                                <p style={{fontSize: 18 / proporcional, lineHeight:  `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Hind, sans-serif', color: 'rgb(136, 136, 136)',
                                    fontWeight: 400}}>
                                    En Developer Ideas, nuestra visión es ser líderes reconocidos a nivel mundial en la creación y entrega de soluciones tecnológicas innovadoras que transformen la forma en que las empresas operan y prosperan en el mundo digital.<br/>
                                    Nos compremetemos a mantenernos a la vanguardia del cambio tecnológico, buscando constantemente nuevas formas de mejorar y evolucionar nuestras soluciones para satisfacer las demandas cambiantes del mercado y superar las expectativas de nuestros clientes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}