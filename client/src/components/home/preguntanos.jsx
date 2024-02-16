import React from 'react'

import home_contact from '../../assets/images/home_contact_us.png'
import home_question from '../../assets/images/home_pregunta.png'

export default function Preguntanos ({proporcional}){
    return (
        <div style={{width: '100%', height: 600 / proporcional, backgroundImage: `url(${home_question})`,
                backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div className='d-flex' style={{width: '100%', height: 600 / proporcional, paddingLeft: 220 / proporcional, paddingRight: 220 / proporcional,
                 background: 'rgba(23, 43, 222, 0.6)', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: '50%', height: 500 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional,
                    paddingLeft: 135 / proporcional, paddingRight: 135 / proporcional}}>
                    <div className='rounded-circle' style={{width: 470 / proporcional, height: 470 / proporcional, border: '10px solid #dbe4eb'}}>
                        <img className='rounded-circle' src={home_contact} style={{width: 440 / proporcional, height: 440 / proporcional}}/>
                    </div>
                </div>
                <div className='position-relative' style={{width: '50%', height: 500 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional,
                        paddingLeft: 100 / proporcional, paddingRight: 350 / proporcional}}>
                    <div className='position-absolute start-0' style={{width: '100%', height: 'auto', top: '30%'}}>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat, sans-serif', marginBottom: 0,
                                color: 'white', marginBottom: 21 / proporcional}}>
                                ¿Tiene una pregunta?
                            </p>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind, sans-serif', marginBottom: 0,
                                color: 'white', marginBottom: 32 / proporcional}}>
                                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. <br/> Nulla consequat massa quis enim. Donnec pode justo, fringilla vel,<br/> aliquet nec, vulputate eget, arcu.
                            </p>
                            <button className='border-0 rounded' style={{width: 180 / proporcional, height: 60 / proporcional, background: 'white', fontSize: 18 / proporcional,
                                color: '#dbe4eb', fontWeight: 800}}>Ver más</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}