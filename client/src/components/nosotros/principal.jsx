import React from 'react'

import nosotros_principal from '../../assets/images/nosotros_principal.png'

export default function Principal ({proporcional}){
    return(
        <div style={{width: '100%', height: 900 / proporcional}}>
            <div className='position-relative' style={{width: '100%', height: 900 / proporcional, backgroundImage: `url(${nosotros_principal})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <div className='position-absolute top-0 start-0' 
                    style={{width: '100%', height: 900 / proporcional, background: 'rgba(190, 194, 197, 0.8)'}}/>
                <div className='position-absolute' style={{width: 650 / proporcional, height: 'auto', left: 300 / proporcional, top: '35%'}}>
                    <p style={{fontSize: 90 / proporcional, lineHeight: `${107 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 30 / proporcional,
                            textAlign: 'start', color: 'white'}}>
                        Nuestra historia <br/>de<span style={{color: 'rgba(23, 43, 222, 1)'}}> Éxito</span>
                    </p>
                    <p style={{fontSize: 22 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind', marginBottom: 30 / proporcional,
                            textAlign: 'start', color: 'white'}}>
                        Lorem ipsum proin gravida velit auctor aliquet. Aenean sollicitu din, lorem auci elit consequat ligula
                        ipsutis niuis sed odio sit amet a sit amet dis parturient montes.
                    </p>
                </div>
            </div>
        </div>
    )
}