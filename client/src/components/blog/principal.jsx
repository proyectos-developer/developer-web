import React from 'react'

import blog_principal from '../../assets/images/image_blog_1920.png'

export default function Principal ({proporcional}){
    return(
        <div style={{width: '100%', height: 900 / proporcional}}>
            <div className='position-relative' style={{width: '100%', height: 900 / proporcional, backgroundImage: `url(${blog_principal})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <div className='position-absolute top-0 start-0' 
                    style={{width: '100%', height: 900 / proporcional, background: 'rgba(23, 43, 222, 0.6)'}}/>
                <div className='position-absolute start-50 top-50 translate-middle' style={{width: 800 / proporcional, height: 'auto'}}>
                    <p style={{fontSize: 90 / proporcional, lineHeight: `${107 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 30 / proporcional,
                            textAlign: 'center', color: 'white'}}>
                        Blog en Construcción
                    </p>
                    <p style={{fontSize: 26 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 500, fontFamily: 'Hind', marginBottom: 30 / proporcional,
                            textAlign: 'center', color: 'white'}}>
                        ¡Estamos emocionados de anunciar que estamos trabajando en nuestro nuevo blog! En Web Soluciones Tecnológicas, creemos en compartir conocimientos y brindar recursos útiles a nuestra comunidad. Por eso, estamos construyendo un espacio en línea donde podrás encontrar artículos, guías, consejos y noticias relacionadas con la tecnología, el diseño web, el marketing digital y mucho más.
                    </p>
                </div>
            </div>
        </div>
    )
}