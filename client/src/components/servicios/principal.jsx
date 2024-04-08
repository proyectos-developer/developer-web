import React from 'react'

import servicios_principal from '../../assets/images/nuestros_servicios_1920.png'

export default function Principal ({proporcional}){

    return (
        <div style={{width: '100%', height: 900 / proporcional}}>
            <div className='position-relative' style={{width: '100%', height: 900 / proporcional, backgroundImage: `url(${servicios_principal})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <div className='position-absolute top-0 start-0' 
                    style={{width: '100%', height: 900 / proporcional, background: 'rgba(23, 43, 222, 0.4)'}}/>
                <div className='position-absolute top-50 start-50 translate-middle' style={{width: 1200 / proporcional, height: 'auto'}}>
                    <p style={{fontSize: 90 / proporcional, lineHeight: `${107 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 30 / proporcional,
                            textAlign: 'center', color: 'white'}}>
                            Nuestros Servicios Tecnológicos
                    </p>
                    <p style={{fontSize: 22 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind', marginBottom: 30 / proporcional,
                            textAlign: 'center', color: 'white'}}>
                            En Developer Ideas, nos enorgullece ofrecer una amplia gama de servicios tecnológicos diseñados para satisfacer las necesidades específicas de su empresa y potenciar su éxito en el mundo digital
                    </p>
                </div>
            </div>
        </div>
    )
}