import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'

import image_exito from '../../assets/images/image_suscripcion_600.png'

export default function Exito({proporcional}) {

    const navigate = useNavigate ()

    const {message_suscripcion} = useSelector (({data_reducer}) => data_reducer)

    return (
        <div style={{width:'60%', height: 'auto'}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: '60%', height: 'auto'}}>
                    <img src={image_exito} style={{width: '80%', height: '100%'}}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '38%', height: 'auto'}}>
                    <div style={{width: '100%', height: 'auto', paddingTop: 45.5 / proporcional, paddingBottom: 45.5 / proporcional}}>
                        <p style={{fontSize: 40 / proporcional, lineHeight: `${45 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 20 / proporcional,
                            color: 'rgb(23, 43, 222)'}}>
                            ¡Suscripcion exitosa!
                        </p>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 20 / proporcional,
                            color: '#212121'}}>
                            {message_suscripcion.message.message}
                        </p>
                    </div>
                </div>
            </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                    <button className='btn rounded' 
                        style={{width: '60%', height: 50 / proporcional, fontSize: 18 / proporcional, background: '#2d572c', color: 'white', fontWeight: 600}}
                        onClick={() => {navigate('/'); window.scrollTo(0, 0)}}>
                        Página principal</button>
                </div>
        </div>
    )
}