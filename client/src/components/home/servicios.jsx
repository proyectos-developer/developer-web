import React from 'react'

import {useNavigate} from 'react-router-dom'

export default function Servicios ({proporcional}){

    const navigate = useNavigate()
    
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '33.33%', height: 'auto', background: 'rgba(219, 228, 235, 0.8)', paddingTop: 160 / proporcional, paddingBottom: 140 / proporcional, 
                        paddingLeft: 140 / proporcional, paddingRight: 100 / proporcional}}>
                    <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 14 / proporcional}}>
                        <div style={{width: 50 / proporcional, height: 3 / proporcional, background: '#2d572c', marginTop: 13.5 / proporcional, marginBottom: 13.5 / proporcional,
                            marginRight: 10 / proporcional}}/>
                        <p style={{fontSize: 12 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: '#2d572c', fontWeight:800, fontFamily: 'Montserrat, sans-serif'}}>
                            Tecnología
                        </p>
                    </div>
                    <div style={{width: '100%', height: 100 / proporcional, marginBottom: 20 / proporcional}}>
                        <p style={{fontSize: 26 / proporcional, lineHeight:  `${30 / proporcional}px`, marginBottom: 0, fontFamily: 'Hind, sans-serif', color: 'rgb(22, 36, 65)',
                            fontWeight: 800}}>
                            "Creación de soluciones digitales: aplicaciones móviles, web y e-commerce"
                        </p>
                    </div>
                    <div style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight:  `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Hind, sans-serif', color: 'rgb(136, 136, 136)',
                            fontWeight: 400}}>
                            Somos tu socio tecnológico para llevar tus ideas al mundo digital. En Developer Ideas nos especializamos en el desarrollo de aplicaciones móviles, sitios web y plataformas de comercio electrónico, brindando soluciones personalizadas que impulsan el crecimiento de tu negocio.
                        </p>
                    </div>
                    <button className='btn' style={{width: 170 / proporcional, height: 60 / proporcional, background: '#172bde', color: 'white', fontSize: 20 / proporcional,
                        fontWeight: 800, fontFamily: 'Montserrat, sans-serif'}}
                        onClick={() => {navigate('/nuestros-servicios'); window.scrollTo(0, 0)}}>Ver más</button>
                </div>
                <div style={{width: '33.33%', height: 'auto', background: 'rgba(219, 228, 235, 0.4)', paddingTop: 160 / proporcional, paddingBo: 170 / proporcional, 
                        paddingLeft: 140 / proporcional, paddingRight: 100 / proporcional}}>
                    <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 14 / proporcional}}>
                        <div style={{width: 50 / proporcional, height: 3 / proporcional, background: '#2d572c', marginTop: 13.5 / proporcional, marginBottom: 13.5 / proporcional,
                            marginRight: 10 / proporcional}}/>
                        <p style={{fontSize: 12 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: '#2d572c', fontWeight:800, fontFamily: 'Montserrat, sans-serif'}}>
                            Marketing digital
                        </p>
                    </div>
                    <div style={{width: '100%', height: 100 / proporcional, marginBottom: 20 / proporcional}}>
                        <p style={{fontSize: 26 / proporcional, lineHeight:  `${30 / proporcional}px`, marginBottom: 0, fontFamily: 'Hind, sans-serif', color: 'rgb(22, 36, 65)',
                            fontWeight: 800}}>
                            "Potencia tu presencia Online: Soluciones de marketing digital para empresas."
                        </p>
                    </div>
                    <div style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight:  `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Hind, sans-serif', color: 'rgb(136, 136, 136)',
                            fontWeight: 400}}>
                            En la era digital, la visibilidad online es clave para el éxito de cualquier empresa tecnológica. En Developer Ideas, ofrecemos soluciones de marketing digital a medida para impulsar tu presencia en la web y alcanzar tus objetivos comerciales.
                        </p>
                    </div>
                    <button className='btn' style={{width: 170 / proporcional, height: 60 / proporcional, background: '#172bde', color: 'white', fontSize: 20 / proporcional,
                        fontWeight: 800, fontFamily: 'Montserrat, sans-serif'}}
                        onClick={() => {navigate('/nuestros-servicios/marketing-digital'); window.scrollTo(0, 0)}}>Ver más</button>
                </div>
                <div style={{width: '33.33%', height: 'auto', background: 'rgba(219, 228, 235, 0.8)', paddingTop: 160 / proporcional, paddingBo: 170 / proporcional, 
                        paddingLeft: 140 / proporcional, paddingRight: 100 / proporcional}}>
                    <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 14 / proporcional}}>
                        <div style={{width: 50 / proporcional, height: 3 / proporcional, background: '#2d572c', marginTop: 13.5 / proporcional, marginBottom: 13.5 / proporcional,
                            marginRight: 10 / proporcional}}/>
                        <p style={{fontSize: 12 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: '#2d572c', fontWeight:800, fontFamily: 'Montserrat, sans-serif'}}>
                            Soporte técnico
                        </p>
                    </div>
                    <div style={{width: '100%', height: 100 / proporcional, marginBottom: 20 / proporcional}}>
                        <p style={{fontSize: 26 / proporcional, lineHeight:  `${30 / proporcional}px`, marginBottom: 0, fontFamily: 'Hind, sans-serif', color: 'rgb(22, 36, 65)',
                            fontWeight: 800}}>
                            Respaldo tecnológico a tu alcance: servicos de soporte técnico especializado.
                        </p>
                    </div>
                    <div style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight:  `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Hind, sans-serif', color: 'rgb(136, 136, 136)',
                            fontWeight: 400}}>
                            En el cambiante mundo tecnológico acutla, contar con un sólido respaldo técnico es fundamental para mantener el funcionamiento fluido de tu empresa. En Developer Ideas, ofrecemos servicios de soporte técnico especializado diseñados para resolver tus problemas tecnológicos de manera rápida y efectiva.
                        </p>
                    </div>
                    <button className='btn' style={{width: 170 / proporcional, height: 60 / proporcional, background: '#172bde', color: 'white', fontSize: 20 / proporcional,
                        fontWeight: 800, fontFamily: 'Montserrat, sans-serif'}}
                        onClick={() => {navigate('/nuestros-servicios/soporte-tecnico'); window.scrollTo(0, 0)}}>Ver más</button>
                </div>
            </div>
        </div>
    )
}