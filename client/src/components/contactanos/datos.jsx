import React from 'react'

import icono_location from '../../assets/iconos/icono_location_green_96.png'
import icono_email from '../../assets/iconos/icono_email_green_96.png'
import icono_phone from '../../assets/iconos/icono_phone_green_96.png'

export default function Datos ({proporcional}){

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto'}}>
                <p style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, fontWeight: 800, color: 'rgb(22, 36, 65)', marginBottom: 31 / proporcional, fontFamily: 'Montserrat, sans, serif'}}>
                    ¿Quiénes somos?
                </p>
                <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 800, color: '#888888', marginBottom: 31 / proporcional, fontFamily: 'Hind, sans, serif'}}>
                    En Developer Ideas, nos apasiona conectar con nuestros clientes y brindarles el soporte personalizado que necesitan. Ya sea que tengas preguntas, comentarios o estés interesado en nuestros servicios, estamos aquí para ayudarte. No dudes en ponerte en contacto con nosotros a través de cualquiera de los siguientes medios:
                </p>
                <div className='d-flex' style={{width: '100%', height: 34 / proporcional, marginBottom: 10 / proporcional}}>
                    <img src={icono_location} style={{width: 34 / proporcional, height: 34 / proporcional, marginRight: 10 / proporcional}}/>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, color: 'rgb(136, 136, 136)', fontWeight: 400, 
                            fontFamily: 'Hind, sans-serif'}}>
                        Lima, Miraflores
                    </p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 34 / proporcional, marginBottom: 10 / proporcional}}>
                    <img src={icono_phone} style={{width: 34 / proporcional, height: 34 / proporcional, marginRight: 10 / proporcional}}/>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, color: 'rgb(136, 136, 136)', fontWeight: 400, 
                            fontFamily: 'Hind, sans-serif'}}>
                        +51 968 169 584
                    </p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 34 / proporcional, marginBottom: 10 / proporcional}}>
                    <img src={icono_email} style={{width: 34 / proporcional, height: 34 / proporcional, marginRight: 10 / proporcional}}/>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, color: 'rgb(136, 136, 136)', fontWeight: 400, 
                            fontFamily: 'Hind, sans-serif'}}>
                        proyectos@developer-ideas.com
                    </p>
                </div>
            </div>
        </div>
    )
}