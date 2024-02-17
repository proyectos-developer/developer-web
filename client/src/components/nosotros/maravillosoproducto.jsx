import React from "react";

import nosotros_producto from '../../assets/images/nosotros_producto.png'

export default function MaravillosoProducto ({proporcional}){
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: 1920 / proporcional, height: 615 / proporcional, backgroundImage: `url(${nosotros_producto})`, backgroundPosition: 'center', backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>
                <div style={{width: 850 / proporcional, height: 700 / proporcional, paddingTop: 190 / proporcional, paddingBottom: 170 / proporcional, paddingLeft: 260 / proporcional}}>
                    <div className='position-relative' 
                        style={{width: 'auto', height: 'auto'}}>
                        <div className='position-absolute start-0' style={{width: 'auto', height: 'auto', top: '20%'}}>
                            <p style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat, sans-serif', marginBottom: 17 / proporcional, color: 'rgb(22, 36, 65)'}}>Creamos productos <br/> maravillosos.</p>
                            <div style={{width: 'auto', height: 'auto'}}>
                                <div className='d-flex' style={{width: 'auto', height: 60 / proporcional}}>
                                    <div style={{width: 'auto', height: 60 / proporcional, marginRight: 31 / proporcional}}>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: '#2d572c', fontWeight: 700, fontFamily: 'Hind, sans-serif'}}>Diseñador</p>
                                        <div style={{width: '100%', height: 3 / proporcional, background: '#2d572c', marginTop: 2/ proporcional}}/>
                                    </div>
                                    <div style={{width: 'auto', height: 60 / proporcional, marginRight: 31 / proporcional}}>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: '#bdbdbd', fontWeight: 700, fontFamily: 'Hind, sans-serif'}}>Arte</p>
                                    </div>
                                    <div style={{width: 'auto', height: 60 / proporcional, marginRight: 31 / proporcional}}>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: '#bdbdbd', fontWeight: 700, fontFamily: 'Hind, sans-serif'}}>Revisiones</p>
                                    </div>
                                </div>
                            </div>
                            <div style={{width: 'auto', height: 'auto', marginTop: 20 / proporcional}}>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind, sans-serif', color: 'rgb(136, 136, 136)', marginBottom: 0}}>
                                    Lorem ipsum dolor sit amet, conse, ctetuer adipiscing elit, sed diam nonum hibhie euismod. Facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}