import React from 'react'

import tienda_principal from '../../assets/images/image_tienda_499.png'

export default function PrincipalCell ({proporcional}){
    return(
        <div style={{width: '100%', height: 600 / proporcional}}>
            <div className='position-relative' style={{width: '100%', height: 600 / proporcional, backgroundImage: `url(${tienda_principal})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <div className='position-absolute top-0 start-0' 
                    style={{width: '100%', height: 600 / proporcional, background: 'rgba(23, 43, 222, 0.6)'}}/>
                <div className='position-absolute start-50 top-50 translate-middle' style={{width: 459 / proporcional, height: 'auto'}}>
                    <p style={{fontSize: 50 / proporcional, lineHeight: `${60 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 30 / proporcional,
                            textAlign: 'center', color: 'white'}}>
                        Tienda Digital en Construcción
                    </p>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Hind', marginBottom: 30 / proporcional,
                            textAlign: 'center', color: 'white'}}>
                        ¡Estamos emocionados de anunciar que estamos trabajando en nuestra nueva tienda digital! En Web Soluciones Tecnológicas, nos esforzamos por brindarte las mejores soluciones tecnológicas para tu negocio, y una tienda en línea es parte fundamental de esa misión. Estamos dedicando tiempo y recursos para crear una experiencia de compra en línea fácil, segura y conveniente para ti.
                    </p>
                </div>
            </div>
        </div>
    )
}