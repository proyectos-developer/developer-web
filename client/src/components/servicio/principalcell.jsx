import React, { useEffect, useState } from 'react'

import {useLocation} from 'react-router-dom'

import image_consultoria_digital from '../../assets/images/image_consultoria_digital_499.png'
import image_diseño_web from '../../assets/images/image_diseño_web_499.png'
import image_aplicacion_movil from '../../assets/images/image_aplicacion_movil_499.png'
import image_desarrollo_ecommerce from '../../assets/images/image_desarrollo_ecommerce_499.png'
import image_desarrollo_software from '../../assets/images/image_desarrollo_software_499.png'
import image_marketing_digital from '../../assets/images/image_marketing_digital_499.png'
import image_soporte_tecnico from '../../assets/images/image_soporte_tecnico_499.png'
import image_cloud from '../../assets/images/image_cloud_499.png'

export default function PrincipalCell({proporcional}) {

    const location = useLocation ()

    const [servicio, setServicio] = useState('')

    useEffect(() => {
        setServicio(location.pathname.split('/')[2])
    }, [location.pathname.split('/')[2]])

    return (
        <div style={{width: '100%', height: 600 / proporcional}}>
            <div className='position-relative' style={{width: '100%', height: 600 / proporcional, backgroundImage: `url(${
                servicio === 'consultoria-digital' ? image_consultoria_digital : servicio === 'desarrollo-web' ? image_diseño_web :
                servicio === 'aplicacion-movil' ? image_aplicacion_movil : servicio === 'desarrollo-ecommerce' ? image_desarrollo_ecommerce : 
                servicio === 'desarrollo-software' ? image_desarrollo_software : servicio === 'marketing-digital' ? image_marketing_digital : 
                servicio === 'soporte-tecnico' ? image_soporte_tecnico : servicio === 'servicios-nube' ? image_cloud : ''
            })`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <div className='position-absolute top-0 start-0' 
                    style={{width: '100%', height: 600 / proporcional, background: 'rgba(23, 43, 222, 0.6)'}}/>
                <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                    <p style={{fontSize: 50 / proporcional, lineHeight: `${60 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 30 / proporcional,
                            textAlign: 'center', color: 'white'}}>
                        {
                            servicio === 'consultoria-digital' ? 'CONSULTORÍA DIGITAL' : servicio === 'desarrollo-web' ? 'DESARROLLO PÁGINAS WEB' :
                            servicio === 'aplicacion-movil' ? 'DESARROLLO APLICACIONES MÓVILES' : servicio === 'desarrollo-ecommerce' ? 'DESARROLLO E-COMMERCE' : 
                            servicio === 'desarrollo-software' ? 'DESARROLLO SOFTWARE A MEDIDA' : servicio === 'marketing-digital' ? 'MARKETING DIGITAL' :
                            servicio === 'soporte-tecnico' ? 'SOPORTE TÉCNICO' : servicio === 'servicios-nube' ? 'SERVICIOS CLOUD' : ''
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}