import React, { useState } from 'react'

export default function Formulario ({proporcional}){

    const [nombres, setNombres] = useState('')
    const [nro_telefono, setNroTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [mensaje, setMensaje] = useState('')

    const [enombres, setENombres] = useState('')
    const [enro_telefono, setENroTelefono] = useState('')
    const [eemail, setEEmil] = useState('')
    const [emensaje, setEMensaje] = useState('')
    
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto'}}>
                <p style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, fontWeight: 800, color: 'rgb(22, 36, 65)', marginBottom: 31 / proporcional, fontFamily: 'Montserrat, sans, serif'}}>
                    Déjenos un comentario
                </p>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 50 / proporcional, marginBottom: 20 / proporcional}}>
                    <div style={{width: '49%', height: 50 / proporcional}}>
                        <input
                            type='default'
                            className='form-control border-0'
                            style={{width:'100%', height: 50 / proporcional, background: '#dbe4eb', fontSize: 18 / proporcional, color: 'rgb(136, 136, 136)', fontWeight: 400, 
                                }}
                            value={nombres}
                            onChange={(event) => setNombres(event.target.value)}
                            placeholder='Nombres'
                            id='nombres'/>
                    </div>
                    <div style={{width: '49%', height: 50 / proporcional}}>
                        <input
                            type='number'
                            className='form-control border-0'
                            style={{width:'100%', height: 50 / proporcional, background: '#dbe4eb', fontSize: 18 / proporcional, color: 'rgb(136, 136, 136)', fontWeight: 400, 
                                }}
                            value={nro_telefono}
                            onChange={(event) => setNroTelefono(event.target.value)}
                            placeholder='Número de teléfono'
                            id='nro_telefono'/>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 50 / proporcional, marginBottom: 20 / proporcional}}>
                    <div style={{width: '100%', height: 50 / proporcional}}>
                        <input
                            type='e-mail'
                            className='form-control border-0'
                            style={{width:'100%', height: 50 / proporcional, background: '#dbe4eb', fontSize: 18 / proporcional, color: 'rgb(136, 136, 136)', fontWeight: 400, 
                                }}
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder='email'
                            id='email'/>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 104 / proporcional, marginBottom: 20 / proporcional}}>
                    <div style={{width: '100%', height: 50 / proporcional}}>
                        <textarea
                            type='default'
                            className='form-control border-0'
                            style={{width:'100%', height: 104 / proporcional, background: '#dbe4eb', fontSize: 18 / proporcional, color: 'rgb(136, 136, 136)', fontWeight: 400, 
                                }}
                            rows={3}
                            value={mensaje}
                            onChange={(event) => setMensaje(event.target.value)}
                            placeholder='Mensaje'
                            id='mensaje'/>
                    </div>
                </div>
                <div className='d-flex justify-content-end' style={{width: '100%', height: 60 / proporcional}}>
                    <button className='btn' style={{width: 200 / proporcional, fontSize: 18 / proporcional, color: 'white', background: '#172bde', color: 'white', fontWeight: 600,
                            fontFamily: 'Montserrat, sans-serif'}}>
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    )
}