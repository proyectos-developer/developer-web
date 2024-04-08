import React from 'react'

import portafolio_principal from '../../assets/images/nuestro_portafolio_499.png'

export default function PrincipalCell ({proporcional}){
    return(
        <div style={{width: '100%', height: 600 / proporcional}}>
            <div className='position-relative' style={{width: '100%', height: 600 / proporcional, backgroundImage: `url(${portafolio_principal})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <div className='position-absolute top-0 start-0' 
                    style={{width: '100%', height: 600 / proporcional, background: 'rgba(23, 42, 222, 0.4)'}}/>
                <div className='position-absolute start-50 top-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                    <p style={{fontSize: 60 / proporcional, lineHeight: `${70 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 30 / proporcional,
                            textAlign: 'center', color: 'white'}}>
                        Nuestro portafolio
                    </p>
                    <p style={{fontSize: 22 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind', marginBottom: 30 / proporcional,
                            textAlign: 'center', color: 'white'}}>
                        "Portafolio de Soluciones Tecnológicas Web: Impulsando tu Presencia Digital"
                    </p>
                </div>
            </div>
        </div>
    )
}