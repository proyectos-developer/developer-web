import React, { useState } from 'react'

import home_fondo from '../../assets/images/home_fondo_diseño_1920.png'
import home_diseño from '../../assets/images/home_diseño_760.png'

export default function ImaginacionCell ({proporcional}){

    const [menu_opcion, setMenuOpcion] = useState ('diseñador')

    return (    
        <div style={{width: '100%', height: 1000 / proporcional, backgroundImage: `url(${home_fondo})`, backgroundSize: 'cover', backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat'}}>
            <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingRight: 20 / proporcional, paddingLeft: 20 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <img src={home_diseño} style={{width: '80%', height: '100%'}}/>
                </div>
                <div style={{width: '100%', height: 'auto'}}>
                    <p style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat, sans-serif', marginBottom: 17 / proporcional, color: 'rgb(22, 36, 65)', textAlign: 'center'}}>Diseña la web <br/> de tu imaginación.</p>
                    <div className='d-flex justify-content-center' style={{width: 'auto', height: 60 / proporcional}}>
                        <div style={{width: 'auto', height: 60 / proporcional, marginRight: 31 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: menu_opcion === 'diseñador' ? '#2d572c' : '#212121', 
                                fontWeight: menu_opcion === 'diseñador' ? 700 : 500, fontFamily: 'Hind, sans-serif',
                                cursor: 'pointer'}} onClick={() => setMenuOpcion('diseñador')}>Diseñador</p>
                            {
                                menu_opcion === 'diseñador' ? (
                                    <div style={{width: '100%', height: 3 / proporcional, background: '#2d572c', marginTop: 2/ proporcional}}/>
                                ) : null
                            }
                        </div>
                        <div style={{width: 'auto', height: 60 / proporcional, marginRight: 31 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: menu_opcion === 'arte' ? '#2d572c' : '#212121', 
                                fontWeight: menu_opcion === 'arte' ? 700 : 500, fontFamily: 'Hind, sans-serif',
                                cursor: 'pointer'}} onClick={() => setMenuOpcion('arte')}>Arte</p>
                            {
                                menu_opcion === 'arte' ? (
                                    <div style={{width: '100%', height: 3 / proporcional, background: '#2d572c', marginTop: 2/ proporcional}}/>
                                ) : null
                            }
                        </div>
                        <div style={{width: 'auto', height: 60 / proporcional, marginRight: 31 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: menu_opcion === 'revisiones' ? '#2d572c' : '#212121', 
                                fontWeight: menu_opcion === 'revisiones' ? 700 : 500, fontFamily: 'Hind, sans-serif',
                                cursor: 'pointer'}} onClick={() => setMenuOpcion('revisiones')}>Revisiones</p>
                            {
                                menu_opcion === 'revisiones' ? (
                                    <div style={{width: '100%', height: 3 / proporcional, background: '#2d572c', marginTop: 2/ proporcional}}/>
                                ) : null
                            }
                        </div>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: 'auto', height: 'auto'}}>
                        {
                            menu_opcion === 'diseñador' ? (
                                <div style={{width: '80%', height: 'auto', marginTop: 20 / proporcional, textAlign: 'center'}}>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind, sans-serif', color: 'black', marginBottom: 0}}>
                                        Desde el desarrollo de sitios web hasta la integración de características avanzadas como comercio electrónico, apliaciones web, móviles y sistemas de gestión de contenido, estamos preparados para ofrecerte soluciones a medida que impulsen el crecimiento de tu empresa.
                                    </p>
                                </div>
                            ) : menu_opcion === 'arte' ? (
                                <div style={{width: '80%', height: 'auto', marginTop: 20 / proporcional, textAlign: 'center'}}>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind, sans-serif', color: 'black', marginBottom: 0}}>
                                        En un mundo impulsado por la innovación tecnológica, entiendo la importancia de descartar entre la multitud. Nuestro enfoque se basa en combinar el diseño estético y la experiencia del usuario con las últimas tendencias tecnológicas para ofrecerte un sitio web que no solo sea hermoso, si no también altamente funcional y adaptable a las necesidades de tu negocio.
                                    </p>
                                </div>
                            ) : menu_opcion === 'revisiones' ? (
                                <div style={{width: '80%', height: 'auto', marginTop: 20 / proporcional, textAlign: 'center'}}>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind, sans-serif', color: 'black', marginBottom: 0}}>
                                        Entiendo que la revisión y retroalimentación son elementos esenciales en el proceso de diseño web y aplicaciones móviles. Por eso, nuestro enfoque se centra en trabajar estrechamente contigo para entender tus necesidades y visiones, y luego traducirlas en un diseño web y móvil que refleje verdaderamente la identidad de tu marca y resuene con tu audiencia.
                                    </p>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}