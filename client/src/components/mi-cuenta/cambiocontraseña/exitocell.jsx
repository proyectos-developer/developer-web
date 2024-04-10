import React from 'react'
import { useNavigate } from 'react-router-dom'

import image_exito from '../../../assets/images/registro_exitoso_400.jpg'

export default function ExitoCell({proporcional}) {

    const navigate = useNavigate ()

    return (
        <div style={{width:'100%', height: 'auto'}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <img src={image_exito} style={{width: '80%', height: '100%'}}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '100%', height: 'auto', paddingTop: 45.5 / proporcional, paddingBottom: 45.5 / proporcional}}>
                        <p style={{fontSize: 40 / proporcional, textAlign: 'center', lineHeight: `${45 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 20 / proporcional,
                            color: 'rgb(23, 43, 222)'}}>
                            ¡Cambio de contraseña!
                        </p>
                        <p style={{fontSize: 18 / proporcional, textAlign: 'center', lineHeight: `${22 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 20 / proporcional,
                            color: '#212121'}}>
                            ¡Exitoso!
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                    <button className='btn rounded' 
                        style={{width: '60%', height: 50 / proporcional, fontSize: 18 / proporcional, background: '#2d572c', color: 'white', fontWeight: 600}}
                        onClick={() => {navigate('/mi-cuenta/login'); window.scrollTo(0, 0)}}>
                        Iniciar sesión</button>
                </div>
        </div>
    )
}