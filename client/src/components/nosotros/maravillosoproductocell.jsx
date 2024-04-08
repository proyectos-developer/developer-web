import React from "react";

import nosotros_producto from '../../assets/images/productos_calidad_499.png'

export default function MaravillosoProductoCell ({proporcional}){
    return (
    <div style={{width: '100%', height: 'auto', background: '#30addb'}}>
            <div style={{width: '100%', height: 600 / proporcional, backgroundImage: `url(${nosotros_producto})`, backgroundPosition: 'center', backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>
                <div className='d-flex jutify-content-center' style={{width: '100%', height: 600 / proporcional, paddingTop: 370 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                    <div className='' style={{width: '100%', height: 'auto'}}>
                        <p style={{fontSize: 30 / proporcional, lineHeight: `${35 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat, sans-serif', marginBottom: 17 / proporcional, color: 'rgb(35, 35, 35)'
                            , textAlign: 'center'}}>Creamos productos <br/> maravillosos.</p>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind, sans-serif', color: 'rgb(35, 35, 35)', marginBottom: 0, textAlign: 'center'}}>
                            En Developer Ideas, creemos que la magia verdadera ocurre cuando la creatividad se combina con la innovación y la dedicación. Estamos comprometidos a seguir desafiando los límites y superando las expectativas a medida que continuamos creanddo productos maravillosos que inspiran, sorprenden y deleitan a todos los que los experimentan.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}