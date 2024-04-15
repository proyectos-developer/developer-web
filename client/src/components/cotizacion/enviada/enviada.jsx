import React from 'react'
import { useNavigate } from 'react-router-dom'

import image_exito from '../../../assets/images/image_cotizacion_enviada.png'

export default function Enviada({proporcional}) {

    const navigate = useNavigate ()

    return (
        <div style={{width:'100%', height: 'auto'}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: '60%', height: 'auto'}}>
                    <img src={image_exito} style={{width: '80%', height: '100%'}}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '38%', height: 'auto'}}>
                    <div style={{width: '100%', height: 'auto', paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional}}>
                        <p style={{fontSize: 40 / proporcional, lineHeight: `${45 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 20 / proporcional,
                            color: 'rgb(23, 43, 222)'}}>
                            ¡Se envío un correo con su pedido de cotización!
                        </p>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 20 / proporcional,
                            color: '#212121'}}>
                            ¡Nos comunicaremos con usted dentro de las 48 horas!
                        </p>
                    </div>
                </div>
            </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                    <button className='btn rounded' 
                        style={{width: '60%', height: 50 / proporcional, fontSize: 18 / proporcional, background: '#2d572c', color: 'white', fontWeight: 600}}
                        onClick={() => {navigate('/'); window.scrollTo(0, 0)}}>
                        Principal</button>
                </div>
        </div>
    )
}