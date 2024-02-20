import React from 'react'

import carrito_principal from '../../assets/images/carrito_principal.png'

export default function Principal ({proporcional}){
    return(
        <div style={{width: '100%', height: 900 / proporcional}}>
            <div className='position-relative' style={{width: '100%', height: 900 / proporcional, backgroundImage: `url(${carrito_principal})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <div className='position-absolute top-0 start-0' 
                    style={{width: '100%', height: 900 / proporcional, background: 'rgba(23, 43, 222, 0.6)'}}/>
                <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                    <p style={{fontSize: 90 / proporcional, lineHeight: `${107 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 30 / proporcional,
                            textAlign: 'center', color: 'white'}}>
                        PRODUCTO DE PRIMERA TECNOLOGÍA
                    </p>
                    <p style={{fontSize: 22 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind', marginBottom: 30 / proporcional,
                            textAlign: 'center', color: 'white'}}>
                        Lorem ipsum proin gravida velit auctor aliquet. Aenean sollicitu din, lorem auci elit consequat ligula
                        ipsutis niuis sed odio sit amet a sit amet dis parturient montes.
                    </p>
                </div>
            </div>
        </div>
    )
}