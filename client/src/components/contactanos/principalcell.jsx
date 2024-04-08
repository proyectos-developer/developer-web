import React from 'react'

import contacto_principal from '../../assets/images/image_contactanos_499.png'

export default function PrincipalCell ({proporcional}){
    return(
        <div style={{width: '100%', height: 600 / proporcional}}>
            <div className='position-relative' style={{width: '100%', height: 600 / proporcional, backgroundImage: `url(${contacto_principal})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <div className='position-absolute top-0 start-0' 
                    style={{width: '100%', height: 600 / proporcional, background: 'rgba(23, 43, 222, 0.6)'}}/>
                <div className='position-absolute' style={{width: 450 / proporcional, height: 'auto', left: 20 / proporcional, top: '30%'}}>
                    <p style={{fontSize: 50 / proporcional, lineHeight: `${60 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 30 / proporcional,
                            textAlign: 'start', color: 'white'}}>
                        Sería grandioso <br/>Reunirnos
                    </p>
                    <p style={{fontSize: 22 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind', marginBottom: 30 / proporcional,
                            textAlign: 'start', color: 'white'}}>
                        Te invitamos a completar el formulario de contacto a continuación. Un miembro de nuestro equipo se pondrá en contacto contigo lo antes posible para atender tus consultas y proporcionarte la información que necesitas.
                    </p>
                </div>
            </div>
        </div>
    )
}