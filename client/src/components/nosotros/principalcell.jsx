import React from 'react'

import nosotros_principal from '../../assets/images/sobre_nosotros_499.png'

export default function PrincipalCell ({proporcional}){
    return(
        <div style={{width: '100%', height: 600 / proporcional}}>
            <div className='position-relative' style={{width: '100%', height: 600 / proporcional, backgroundImage: `url(${nosotros_principal})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <div className='position-absolute top-0 start-0' 
                    style={{width: '100%', height: 600 / proporcional, background: 'rgba(23, 43, 222, 0.6)'}}/>
                <div className='position-absolute' style={{width: '70%', height: 'auto', left: 20 / proporcional, top: '30%'}}>
                    <p style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 30 / proporcional,
                            textAlign: 'start', color: 'white'}}>
                        Nuestra historia <br/>de<span style={{color: 'rgba(23, 43, 222, 1)'}}> Éxito</span>
                    </p>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind', marginBottom: 30 / proporcional,
                            textAlign: 'start', color: 'white'}}>
                        Con un enfoque en la innovación y la excelencia técnica, fundamos Developer Ideas con el objetivo de ofrecer soluciones tecnológicas de vanguardia que impulsen el éxito de nuestros clientes.
                    </p>
                </div>
            </div>
        </div>
    )
}