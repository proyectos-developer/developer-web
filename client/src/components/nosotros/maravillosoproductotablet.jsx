import React from "react";

import nosotros_producto from '../../assets/images/productos_calidad_991.png'

export default function MaravillosoProductoTablet ({proporcional}){
    return (
    <div style={{width: '100%', height: 'auto', background: '#30addb'}}>
            <div style={{width: '100%', height: 1000 / proporcional, backgroundImage: `url(${nosotros_producto})`, backgroundPosition: 'center', backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>
                <div className='d-flex jutify-content-center' style={{width: '100%', height: 1000 / proporcional, paddingTop: 600 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                    <div className='' style={{width: '80%', height: 'auto'}}>
                        <p style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat, sans-serif', marginBottom: 17 / proporcional, color: 'rgb(35, 35, 35)'}}>Creamos productos <br/> maravillosos.</p>
                        <div style={{width: 'auto', height: 'auto', marginTop: 20 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind, sans-serif', color: 'rgb(35, 35, 35)', marginBottom: 0}}>
                                En Developer Ideas, creemos que la magia verdadera ocurre cuando la creatividad se combina con la innovación y la dedicación. Estamos comprometidos a seguir desafiando los límites y superando las expectativas a medida que continuamos creanddo productos maravillosos que inspiran, sorprenden y deleitan a todos los que los experimentan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}