import React from "react";

import nosotros_producto from '../../assets/images/nosotros_producto.png'

export default function MaravillosoProducto ({proporcional}){
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 615 / proporcional, backgroundImage: `url(${nosotros_producto})`, backgroundPosition: 'center', backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>
                <div style={{width: '100%', height: 700 / proporcional, paddingTop: 190 / proporcional, paddingBottom: 170 / proporcional, paddingLeft: 260 / proporcional}}>
                    <div className='position-relative' 
                        style={{width: 'auto', height: 'auto'}}>
                        <div className='position-absolute start-0' style={{width: '35%', height: 'auto', top: '20%'}}>
                            <p style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat, sans-serif', marginBottom: 17 / proporcional, color: 'rgb(22, 36, 65)'}}>Creamos productos <br/> maravillosos.</p>
                            <div style={{width: 'auto', height: 'auto', marginTop: 20 / proporcional}}>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind, sans-serif', color: 'rgb(136, 136, 136)', marginBottom: 0}}>
                                    En Developer Ideas, creemos que la magia verdadera ocurre cuando la creatividad se combina con la innovación y la dedicación. Estamos comprometidos a seguir desafiando los límites y superando las expectativas a medida que continuamos creanddo productos maravillosos que inspiran, sorprenden y deleitan a todos los que los experimentan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}