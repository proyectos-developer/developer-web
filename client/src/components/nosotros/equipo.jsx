import React from 'react'

import image_equipo_diseñadores from '../../assets/images/image_equipo_diseñadores_350.png'
import image_equipo_programadores from '../../assets/images/image_equipo_programadores_350.png'
import image_equipo_marketing_digital from '../../assets/images/image_equipo_marketing_digital_350.png'

export default function Equipo ({proporcional}){

    return (
        <div style={{width: '100%', height: 'auto', background: 'rgba(219, 228, 235, 1)'}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div style={{width: '100%', height: 'auto', paddingLeft: 540 / proporcional, paddingRight: 540 / proporcional, paddingTop: 160 / proporcional, paddingBottom: 80 / proporcional}}>
                    <div style={{width: '100%', height: 'auto'}}>
                        <p style={{fontSize: 50 / proporcional, lineHeight: `${55 / proporcional}px`, marginBottom: 0, fontWeight: 800, fontFamily: 'Montserrat, sans-serif',
                            textAlign: 'center', marginBottom: 31 / proporcional}}>
                            Equipo de expertos
                        </p>
                        <p style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Hind, sans-serif',
                            textAlign: 'center', marginBottom: 31 / proporcional, color: 'rgb(136, 136, 136)'}}>
                            Está dedicado a ofrecer soluciones digitales de alta calidad que impulsen el éxito de nuestros clientes. Estamos comprometidos con la innovación, la excelencia y la satisfacción del cliente, y estamos listos para enfrentar cualquier desafío que  se nos presente con entusiasmo y determinación.
                        </p>
                    </div>                    
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', paddingLeft: 300 / proporcional, paddingRight: 300 / proporcional,
                        paddingBottom: 90 / proporcional}}>
                    <div style={{width: '33%', height: 'auto', padding: 10 / proporcional}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={image_equipo_diseñadores} style={{width: '90%'}}/>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 600, color: '#2d572c', marginBottom: 10 / proporcional, fontFamily: 'Montserrat, sans-serif'}}>
                                Diseñadores
                            </p>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, color: 'rgb(136, 136, 136)', marginBottom: 17 / proporcional, fontFamily: 'Hind, sans-serif'}}>
                                Nuestro equipo de diseñadores está dedicado a ofrecer soluciones visuales de alta calidad que inspiren, cautiven y deleiten a nuestros clientes y sus audiencias. Estamos comprometidos con la excelencia en el diseño y estamos emocionados de enfrentar cualquier desafío creativo que se nos presente.
                            </p>
                        </div>
                    </div>
                    <div style={{width: '33%', height: 'auto', padding: 10 / proporcional}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={image_equipo_programadores} style={{width: '90%'}}/>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 600, color: '#2d572c', marginBottom: 10 / proporcional, fontFamily: 'Montserrat, sans-serif'}}>
                                Programadores
                            </p>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, color: 'rgb(136, 136, 136)', marginBottom: 17 / proporcional, fontFamily: 'Hind, sans-serif'}}>
                                Está comprometido con la excelencia en el desarrollo de software, aplicaciones, páginas web y emocionados de enfrentar cualquier desafío técnico que se nos presente. Estamos dedicados a ofrecer soluciones digitales de primera clase que ayuden a nuestros clientes a alcanzar sus metas y a tener éxito en el mundo digital.
                            </p>
                        </div>
                    </div>
                    <div style={{width: '33%', height: 'auto', padding: 10 / proporcional}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={image_equipo_marketing_digital} style={{width: '90%'}}/>
                        </div>
                        <div style={{width: '100%', height: 'auto'}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 600, color: '#2d572c', marginBottom: 10 / proporcional, fontFamily: 'Montserrat, sans-serif'}}>
                                Marketing digital
                            </p>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, color: 'rgb(136, 136, 136)', marginBottom: 17 / proporcional, fontFamily: 'Hind, sans-serif'}}>
                                Está comprometido con el éxito de nuestros clientes y emocionado de enfrentar cualquier desafío que se nos presente en el siempre cambiante munndo del marketing digital. estamos dedicados a ofrecer soluciones efectivas y resultados medibles que impulsen el crecimiento y la prosperidad de nuestros clientes en el mundo digital
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}