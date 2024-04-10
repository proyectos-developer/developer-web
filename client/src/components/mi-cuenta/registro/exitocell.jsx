import React from 'react'
import { useNavigate } from 'react-router-dom'

import image_exito from '../../../assets/images/registro_exitoso_400.jpg'

export default function ExitoCell({proporcional}) {

    const navigate = useNavigate ()

    return (
        <div style={{width:'100%', height: 'auto'}}>
            <div className='' style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                    <img src={image_exito} style={{width: '100%', height: '100%'}}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <div style={{width: '100%', height: 'auto', paddingTop: 45.5 / proporcional, paddingBottom: 45.5 / proporcional}}>
                        <p style={{fontSize: 40 / proporcional, lineHeight: `${45 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 20 / proporcional,
                            color: 'rgb(23, 43, 222)', textAlign: 'center'}}>
                            ¡Registro exitoso!
                        </p>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 20 / proporcional,
                            color: '#212121', textAlign: 'center'}}>
                            ¡Sus datos fueron registrados exitosamente, recibira ofertas de nuestros productos y servicios pronto!
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                    <button className='btn rounded' 
                        style={{width: '90%', height: 50 / proporcional, fontSize: 18 / proporcional, background: '#2d572c', color: 'white', fontWeight: 600}}
                        onClick={() => {navigate('/'); window.scrollTo(0, 0)}}>
                        Página principal</button>
                </div>
            </div>
        </div>
    )
}