import React from 'react'

import cuenta_principal from '../../../assets/images/image_cuenta_991.png'

export default function PrincipalTablet ({proporcional}){
    
    return (
        <div style={{width: '100%', height: 800 / proporcional}}>
            <div className='position-relative' style={{width: '100%', height: 800 / proporcional, backgroundImage: `url(${cuenta_principal})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <div className='position-absolute top-0 start-0' 
                    style={{width: '100%', height: 800 / proporcional, background: 'rgba(23, 43, 222, 0.6)'}}/>
                <div className='position-absolute start-50 top-50 translate-middle' style={{width: 800 / proporcional, height: 'auto'}}>
                    <p style={{fontSize: 90 / proporcional, lineHeight: `${107 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 30 / proporcional,
                            textAlign: 'center', color: 'white'}}>
                        Mi Cuenta
                    </p>
                    <p style={{fontSize: 22 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind', marginBottom: 30 / proporcional,
                            textAlign: 'center', color: 'white'}}>
                        Si eres nuevo en Web Soluciones Tecnológicas, te invitamos a registrarte para disfrutar de nuestros servicios y beneficios. ¡Es rápido y fácil!<br/>
                    </p>
                </div>
            </div>
        </div>
    )
}