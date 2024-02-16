import React from 'react'

import image_00 from '../../assets/images/home_slider_image_00.png'
import image_01 from '../../assets/images/home_slider_image_01.png'
import image_02 from '../../assets/images/home_slider_image_02.png'
import image_03 from '../../assets/images/home_slider_image_03.png'

export default function SliderHome ({proporcional}){

    return (
        <div style={{width: '100%', height: 900 / proporcional}}>
            <div id='carouselHome' className='carousel slide'>
                <div className='carousel-indicators'>
                    <button type='button' data-bs-target='#carouselHome' data-bs-slide-to='0' className='active' aria-label='Side 1'/>
                    <button type='button' data-bs-target='#carouselHome' data-bs-slide-to='1' aria-label='Side 2'/>
                    <button type='button' data-bs-target='#carouselHome' data-bs-slide-to='2' aria-label='Side 3'/>
                    <button type='button' data-bs-target='#carouselHome' data-bs-slide-to='3' aria-label='Side 4'/>
                </div>
                <div className='carousel-inner'>
                    <div className='carousel-item active' data-bs-interval='3000'>
                        <div className='position-relative' style={{width: '100%', height: 900 / proporcional, backgroundImage: `url(${image_00})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                            <div className='position-absolute top-0 start-0' 
                                    style={{width: '100%', height: 900 / proporcional, background: 'rgba(23, 43, 222, 0.2)'}}/>
                            <div className='position-absolute top-50 start-50 translate-middle' style={{width: '100%', height: 'auto'}}>
                                <p style={{fontSize: 90 / proporcional, lineHeight: `${107 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 30 / proporcional,
                                        textAlign: 'center', color: 'white'}}>
                                    Crea Una Experiencia Única
                                </p>
                                <p style={{fontSize: 22 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind', marginBottom: 30 / proporcional,
                                        textAlign: 'center', color: 'white'}}>
                                    Lorem ipsum proin gravida velit auctor aliquet. Aenean sollicitu din, lorem auci elit consequat ligula <br/>
                                    ipsutis niuis sed odio sit amet a sit amet dis parturient montes.
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
                    <div className='carousel-item' data-bs-interval='3000'>
                        <div className='position-relative' style={{width: '100%', height: 900 / proporcional, backgroundImage: `url(${image_02})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                            <div className='position-absolute top-0 start-0' 
                                    style={{width: '100%', height: 900 / proporcional, background: 'rgba(23, 43, 222, 0.2)'}}/>
                            <div className='position-absolute top-50 start-50 translate-middle' style={{width: '100%', height: 'auto'}}>
                                <p style={{fontSize: 90 / proporcional, lineHeight: `${107 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 30 / proporcional,
                                        textAlign: 'center', color: 'white'}}>
                                    Dar Nueva Vida a lo Digital
                                </p>
                                <p style={{fontSize: 22 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind', marginBottom: 30 / proporcional,
                                        textAlign: 'center', color: 'white'}}>
                                    Lorem ipsum proin gravida velit auctor aliquet. Aenean sollicitu din, lorem auci elit consequat ligula <br/>
                                    ipsutis niuis sed odio sit amet a sit amet dis parturient montes.
                                </p>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 60 / proporcional}}>
                                    <button className='btn' style={{width: 180 / proporcional, height: 60 / proporcional, fontSize: 20 / proporcional, fontWeight: 400,
                                        color: 'white', background: '#172bde', marginRight: 20 / proporcional}}>Ver más</button>
                                    <button className='btn' style={{width: 180 / proporcional, height: 60 / proporcional, fontSize: 20 / proporcional, fontWeight: 400,
                                        color: '#172bde', background: 'white', marginLeft: 20 / proporcional}}>Contactárnos</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='carousel-item' data-bs-interval='3000'>
                        <div className='position-relative' style={{width: '100%', height: 900 / proporcional, backgroundImage: `url(${image_03})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                            <div className='position-absolute top-0 start-0' 
                                    style={{width: '100%', height: 900 / proporcional, background: 'rgba(23, 43, 222, 0.2)'}}/>
                            <div className='position-absolute top-50 start-50 translate-middle' style={{width: '100%', height: 'auto'}}>
                                <p style={{fontSize: 90 / proporcional, lineHeight: `${107 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 30 / proporcional,
                                        textAlign: 'center', color: 'white'}}>
                                    Un Colectivo de Innovadores
                                </p>
                                <p style={{fontSize: 22 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind', marginBottom: 30 / proporcional,
                                        textAlign: 'center', color: 'white'}}>
                                    Lorem ipsum proin gravida velit auctor aliquet. Aenean sollicitu din, lorem auci elit consequat ligula <br/>
                                    ipsutis niuis sed odio sit amet a sit amet dis parturient montes.
                                </p>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 60 / proporcional}}>
                                    <button className='btn' style={{width: 180 / proporcional, height: 60 / proporcional, fontSize: 20 / proporcional, fontWeight: 400,
                                        color: 'white', background: '#172bde', marginRight: 20 / proporcional}}>Ver más</button>
                                    <button className='btn' style={{width: 180 / proporcional, height: 60 / proporcional, fontSize: 20 / proporcional, fontWeight: 400,
                                        color: '#172bde', background: 'white', marginLeft: 20 / proporcional}}>Contactárnos</button>
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