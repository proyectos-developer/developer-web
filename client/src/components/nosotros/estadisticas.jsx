import React from 'react'

export default function Estadisticas ({proporcional}){

    return (
        <div style={{width: '100%', height: 'auto', background: '#dbe4eb'}}>
            <div style={{width: '100%', height: 'auto', paddingLeft: 300 / proporcional, paddingRight: 300 / proporcional}}>
                <div style={{width: '100%', height: 'auto', paddingTop: 130 / proporcional, paddingBottom: 130 / proporcional}}>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '24%', height: 'auto'}}>
                            <div className='justify-content-center d-flex' style={{width: '100%', height: 200 / proporcional}}>
                                <div className='position-relative rounded-circle' style={{width: 200 / proporcional, height: 200 / proporcional, background: 'black'}}>
                                    <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                                        <p style={{fontSize: 55 / proporcional, lineHeight: `${55 / proporcional}px`, marginBottom: 9 / proporcional, fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: 'white', textAlign: 'center'}}>
                                            169
                                        </p>
                                        <p style={{fontSize: 12 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, fontFamily: 'Montserrat, sans-serif', fontWeight: 800, color: 'white', textAlign: 'center'}}>
                                            Proyectos
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{width: '24%', height: 'auto'}}>
                            <div className='justify-content-center d-flex' style={{width: '100%', height: 200 / proporcional}}>
                                <div className='position-relative rounded-circle' style={{width: 200 / proporcional, height: 200 / proporcional, background: 'black'}}>
                                    <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                                        <p style={{fontSize: 55 / proporcional, lineHeight: `${55 / proporcional}px`, marginBottom: 9 / proporcional, fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: 'white', textAlign: 'center'}}>
                                            501
                                        </p>
                                        <p style={{fontSize: 12 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, fontFamily: 'Montserrat, sans-serif', fontWeight: 800, color: 'white', textAlign: 'center'}}>
                                            Trabajos
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{width: '24%', height: 'auto'}}>
                            <div className='justify-content-center d-flex' style={{width: '100%', height: 200 / proporcional}}>
                                <div className='position-relative rounded-circle' style={{width: 200 / proporcional, height: 200 / proporcional, background: 'black'}}>
                                    <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                                        <p style={{fontSize: 55 / proporcional, lineHeight: `${55 / proporcional}px`, marginBottom: 9 / proporcional, fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: 'white', textAlign: 'center'}}>
                                            384
                                        </p>
                                        <p style={{fontSize: 12 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, fontFamily: 'Montserrat, sans-serif', fontWeight: 800, color: 'white', textAlign: 'center'}}>
                                            Modelos
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{width: '24%', height: 'auto'}}>
                            <div className='justify-content-center d-flex' style={{width: '100%', height: 200 / proporcional}}>
                                <div className='position-relative rounded-circle' style={{width: 200 / proporcional, height: 200 / proporcional, background: 'black'}}>
                                    <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                                        <p style={{fontSize: 55 / proporcional, lineHeight: `${55 / proporcional}px`, marginBottom: 9 / proporcional, fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: 'white', textAlign: 'center'}}>
                                            212
                                        </p>
                                        <p style={{fontSize: 12 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, fontFamily: 'Montserrat, sans-serif', fontWeight: 800, color: 'white', textAlign: 'center'}}>
                                            Webs
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}