import React from 'react'

import home_contact from '../../assets/images/home_contact_us_459.jpg'
import home_fondo_contact from '../../assets/images/home_fondo_contact_499.png'

export default function PreguntanosTablet ({proporcional}){
    return (
        <div style={{width: '100%', height: 1000 / proporcional, backgroundImage: `url(${home_fondo_contact})`,
                backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, background: 'rgba(189, 189, 189, 0.6)'}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                    <img className='rounded-circle' src={home_contact} style={{width: 400 / proporcional, height: 400 / proporcional}}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 600 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional,
                        paddingTop: 100 / proporcional}}>
                    <div className='' style={{width: '50%', height: 'auto'}}>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat, sans-serif', marginBottom: 0,
                                color: 'rgb(23, 43, 222)', marginBottom: 21 / proporcional, textAlign: 'center'}}>
                                ¿Tiene una pregunta?
                            </p>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 500, fontFamily: 'Hind, sans-serif', marginBottom: 0,
                                color: '#212121', marginBottom: 32 / proporcional, textAlign: 'center'}}>
                                ¿Cuál es tu pregunta sobre soluciones tecnológicas? Por favor, descríbela para que pueda brindarte la mejor respuesta posible.
                            </p>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 60 / proporcional}}>
                                <button className='border-0 rounded' style={{width: 180 / proporcional, height: 60 / proporcional, background: 'white', fontSize: 18 / proporcional,
                                    color: 'rgb(23, 43, 222)', fontWeight: 800}}>Ver más</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}