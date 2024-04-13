import React from 'react'

import tienda_principal from '../../assets/images/image_cotizacion_499.png'

export default function PrincipalCell ({proporcional}){
    return(
        <div style={{width: '100%', height: 600 / proporcional}}>
            <div className='position-relative' style={{width: '100%', height: 600 / proporcional, backgroundImage: `url(${tienda_principal})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <div className='position-absolute top-0 start-0' 
                    style={{width: '100%', height: 600 / proporcional, background: 'rgba(23, 43, 222, 0.6)'}}/>
                <div className='position-absolute start-50 top-50 translate-middle' style={{width: 459 / proporcional, height: 'auto'}}>
                    <p style={{fontSize: 50 / proporcional, lineHeight: `${60 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 30 / proporcional,
                            textAlign: 'center', color: 'white'}}>
                        Solicita una cotización
                    </p>
                    <p style={{fontSize: 26 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 500, fontFamily: 'Hind', marginBottom: 30 / proporcional,
                            textAlign: 'center', color: 'white'}}>
                        Selecciona el(los) servicio(s) del cual deseas que te coticemos.
                    </p>
                </div>
            </div>
        </div>
    )
}