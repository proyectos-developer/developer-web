import React from 'react'

import image_00 from '../../assets/images/home_00.png'
import image_01 from '../../assets/images/home_01.png'
import image_02 from '../../assets/images/home_02.png'
import image_03 from '../../assets/images/home_03.png'
import image_04 from '../../assets/images/home_04.png'

export default function SliderHome ({proporcional}){

    return (
        <div style={{width: '100%', height: 900 / proporcional}}>
            <div id='carouselHome' className='carousel slide'>
                <div className='carousel-indicators'>
                    <button type='button' data-bs-target='#carouselHome' data-bs-slide-to='0' className='active' aria-label='Side 1'/>
                    <button type='button' data-bs-target='#carouselHome' data-bs-slide-to='1' aria-label='Side 2'/>
                    <button type='button' data-bs-target='#carouselHome' data-bs-slide-to='2' aria-label='Side 3'/>
                    <button type='button' data-bs-target='#carouselHome' data-bs-slide-to='3' aria-label='Side 4'/>
                    <button type='button' data-bs-target='#carouselHome' data-bs-slide-to='4' aria-label='Side 5'/>
                </div>
                <div className='carousel-inner'>
                    <div className='carousel-item active' data-bs-interval='3500'>
                        <div className='position-relative animate__animated animate__backInLeft' style={{width: '100%', height: 900 / proporcional, backgroundImage: `url(${image_00})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                            <div className='position-absolute top-0 start-0' 
                                    style={{width: '100%', height: 900 / proporcional, background: 'rgba(23, 43, 222, 0.6'}}/>
                            <div className='position-absolute top-50 start-50 translate-middle' style={{width: '80%', height: 'auto'}}>
                                <div className='animate__animated animate__jackInTheBox' style={{width: '100%', height: 'auto'}}>
                                    <p style={{fontSize: 70 / proporcional, lineHeight: `${80 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 30 / proporcional,
                                            textAlign: 'center', color: 'white'}}>
                                        "Descubre la transformación digital: <br/>Transformando el  Mundo con innovación"
                                    </p>
                                    <p style={{fontSize: 24 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind', marginBottom: 30 / proporcional,
                                            textAlign: 'center', color: 'white'}}>
                                        Explora el cambio radical que está redefiniendo nuestra sociedad y como la tecnología esta liderando el camino hacia un futuro conectado y eficiente. Únete a la revolución digital y se parte del cambio.
                                    </p>
                                    <div className='d-flex justify-content-center' style={{width: '100%', height: 60 / proporcional}}>
                                        <button className='btn' style={{width: 180 / proporcional, height: 60 / proporcional, fontSize: 20 / proporcional, fontWeight: 400,
                                            color: 'white', background: '#172bde', marginRight: 20 / proporcional}}>Ver más</button>
                                        <button className='btn' style={{width: 180 / proporcional, height: 60 / proporcional, fontSize: 20 / proporcional, fontWeight: 400,
                                            color: '#172bde', background: 'white', marginLeft: 20 / proporcional}}>Contáctanos</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='carousel-item' data-bs-interval='3500'>
                        <div className='position-relative animate__animated animate__bounceInLeft' style={{width: '100%', height: 900 / proporcional, backgroundImage: `url(${image_01})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                            <div className='position-absolute top-0 start-0' 
                                    style={{width: '100%', height: 900 / proporcional, background: 'rgba(23, 43, 222, 0.6'}}/>
                            <div className='position-absolute top-50 start-50 translate-middle' style={{width: '80%', height: 'auto'}}>
                                <div className='animate__animated animate__slideInDown' style={{width: '100%', height: 'auto'}}>
                                    <p style={{fontSize: 70 / proporcional, lineHeight: `${80 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 30 / proporcional,
                                            textAlign: 'center', color: 'white'}}>
                                        "Conectando el Mundo: <br/>La era digital en tu pantalla"
                                    </p>
                                    <p style={{fontSize: 24 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind', marginBottom: 30 / proporcional,
                                            textAlign: 'center', color: 'white'}}>
                                        Sumérgete en la era digital y descubre cómo la tecnología está creando un mundo mas interconectado que nunca. Desde la inteligencia artificial hasta la realidad virtual, estamos transformando la manera en que vivimos, trabajamos y nos comunicamos.
                                    </p>
                                    <div className='d-flex justify-content-center' style={{width: '100%', height: 60 / proporcional}}>
                                        <button className='btn' style={{width: 180 / proporcional, height: 60 / proporcional, fontSize: 20 / proporcional, fontWeight: 400,
                                            color: 'white', background: '#172bde', marginRight: 20 / proporcional}}>Ver más</button>
                                        <button className='btn' style={{width: 180 / proporcional, height: 60 / proporcional, fontSize: 20 / proporcional, fontWeight: 400,
                                            color: '#172bde', background: 'white', marginLeft: 20 / proporcional}}>Contáctanos</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='carousel-item' data-bs-interval='3500'>
                        <div className='position-relative animate__animated animate__fadeIn' style={{width: '100%', height: 900 / proporcional, backgroundImage: `url(${image_02})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                            <div className='position-absolute top-0 start-0' 
                                    style={{width: '100%', height: 900 / proporcional, background: 'rgba(23, 43, 222, 0.6'}}/>
                            <div className='position-absolute top-50 start-50 translate-middle' style={{width: '80%', height: 'auto'}}>
                                <div className='animate__animated animate__slideInUp' style={{width: '100%', height: 'auto'}}>
                                    <p style={{fontSize: 70 / proporcional, lineHeight: `${80 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 30 / proporcional,
                                            textAlign: 'center', color: 'white'}}>
                                        "Innovación sin límites: <br/>navegando la revolución digital"
                                    </p>
                                    <p style={{fontSize: 24 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind', marginBottom: 30 / proporcional,
                                            textAlign: 'center', color: 'white'}}>
                                        Explora las infinitas posibilidades de la innovación en la era digital. Desde la automatización hasta la Internet de las cosas, eestamos impulsando el progreo y cambiando la forma en que interactuamos con el mundo que nos rodea.
                                    </p>
                                    <div className='d-flex justify-content-center' style={{width: '100%', height: 60 / proporcional}}>
                                        <button className='btn' style={{width: 180 / proporcional, height: 60 / proporcional, fontSize: 20 / proporcional, fontWeight: 400,
                                            color: 'white', background: '#172bde', marginRight: 20 / proporcional}}>Ver más</button>
                                        <button className='btn' style={{width: 180 / proporcional, height: 60 / proporcional, fontSize: 20 / proporcional, fontWeight: 400,
                                            color: '#172bde', background: 'white', marginLeft: 20 / proporcional}}>Contáctanos</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='carousel-item' data-bs-interval='3500'>
                        <div className='position-relative animate__animated animate__flipInX' style={{width: '100%', height: 900 / proporcional, backgroundImage: `url(${image_03})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                            <div className='position-absolute top-0 start-0' 
                                    style={{width: '100%', height: 900 / proporcional, background: 'rgba(23, 43, 222, 0.6'}}/>
                            <div className='position-absolute top-50 start-50 translate-middle' style={{width: '80%', height: 'auto'}}>
                                <div className='animate__animated animate__flipInY' style={{width: '100%', height: 'auto'}}>
                                    <p style={{fontSize: 70 / proporcional, lineHeight: `${80 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 30 / proporcional,
                                            textAlign: 'center', color: 'white'}}>
                                        "Desccubre el futuro hoy: <br/>revolución digital en tiempo real"
                                    </p>
                                    <p style={{fontSize: 24 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind', marginBottom: 30 / proporcional,
                                            textAlign: 'center', color: 'white'}}>
                                        Únete a nosotros mientras exploramos cómo la revolución digital está dando forma al mañana. Desde la computación en la nube hasta la ciberseguridad, estamos construyendo un futuro más inteligente y seguro, hoy mismo.
                                    </p>
                                    <div className='d-flex justify-content-center' style={{width: '100%', height: 60 / proporcional}}>
                                        <button className='btn' style={{width: 180 / proporcional, height: 60 / proporcional, fontSize: 20 / proporcional, fontWeight: 400,
                                            color: 'white', background: '#172bde', marginRight: 20 / proporcional}}>Ver más</button>
                                        <button className='btn' style={{width: 180 / proporcional, height: 60 / proporcional, fontSize: 20 / proporcional, fontWeight: 400,
                                            color: '#172bde', background: 'white', marginLeft: 20 / proporcional}}>Contáctanos</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='carousel-item' data-bs-interval='3500'>
                        <div className='position-relative animate__animated animate__zoomIn' style={{width: '100%', height: 900 / proporcional, backgroundImage: `url(${image_04})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                            <div className='position-absolute top-0 start-0' 
                                    style={{width: '100%', height: 900 / proporcional, background: 'rgba(23, 43, 222, 0.6'}}/>
                            <div className='position-absolute top-50 start-50 translate-middle' style={{width: '80%', height: 'auto'}}>
                                <div className='animate__animated animate__lightSpeedInLeft' style={{width: '100%', height: 'auto'}}>
                                    <p style={{fontSize: 70 / proporcional, lineHeight: `${80 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 30 / proporcional,
                                            textAlign: 'center', color: 'white'}}>
                                        "Transformando el mundo: <br/>la revolución digital a tu alance"
                                    </p>
                                    <p style={{fontSize: 24 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind', marginBottom: 30 / proporcional,
                                            textAlign: 'center', color: 'white'}}>
                                        Descubre cómo la tecnología está transformando cada aspecto de nuestras vidas. Desde la educación hasta la salud, estamos abriendo nuevas puertas hacia un mundo más eficiente, sostenible e inclusivo gracias a la revolución digital.
                                    </p>
                                    <div className='d-flex justify-content-center' style={{width: '100%', height: 60 / proporcional}}>
                                        <button className='btn' style={{width: 180 / proporcional, height: 60 / proporcional, fontSize: 20 / proporcional, fontWeight: 400,
                                            color: 'white', background: '#172bde', marginRight: 20 / proporcional}}>Ver más</button>
                                        <button className='btn' style={{width: 180 / proporcional, height: 60 / proporcional, fontSize: 20 / proporcional, fontWeight: 400,
                                            color: '#172bde', background: 'white', marginLeft: 20 / proporcional}}>Contáctanos</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='carousel-control-prev' type='button' data-bs-target='#carouselHome' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'/>
                    <span className='visually-hidden' aria-hidden='true'>Previous</span>
                </button>
                <button className='carousel-control-next' type='button' data-bs-target='#carouselHome' data-bs-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'/>
                    <span className='visually-hidden' aria-hidden='true'>Next</span>
                </button>
            </div>
        </div>
    )
}