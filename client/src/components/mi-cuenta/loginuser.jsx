import React, { useState } from 'react'

import icono_check_box from '../../assets/iconos/icono_check_box_black_96.png'
import icono_box from '../../assets/iconos/icono_box_black_96.png'

export default function LoginUser ({proporcional}){

    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')

    const [check_remember, setCheckRemember] = useState (false)
    
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 55 / proporcional, marginBottom: 15 / proporcional}}>
                <p style={{fontSize: 50 / proporcional, lineHeight: `${55 / proporcional}px`, marginBottom: 0, color: 'rgb(22, 36, 65)', fontWeight: 800, fontFamily: 'Montserrat, sans-serif'}}>
                    Login
                </p>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <div style={{width: '100%', height: 74 / proporcional, marginBottom: 14 / proporcional}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind, sans-serif', color: 'rgb(136, 136, 136)',
                        marginBottom: 0}}>
                        E-mail o número teléfono
                    </p>
                    <input 
                        type='default'
                        className='form-control'
                        style={{width: '100%', height: 48 / proporcional, border: '1px solid rgb(225, 225, 225)', color: 'rgb(136, 136, 136)', fontFamily: 'Hind, sans-serif',
                                borderRadius: 8 / proporcional}}
                        value={usuario}
                        onChange={(event) => setUsuario (event.target.value)}
                        placeholder=''
                        id='usuario'
                    />
                </div>
                <div style={{width: '100%', height: 74 / proporcional, marginBottom: 14 / proporcional}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind, sans-serif', color: 'rgb(136, 136, 136)',
                        marginBottom: 0}}>
                        Password
                    </p>
                    <input 
                        type='password'
                        className='form-control'
                        style={{width: '100%', height: 48 / proporcional, border: '1px solid rgb(225, 225, 225)', color: 'rgb(136, 136, 136)', fontFamily: 'Hind, sans-serif',
                                borderRadius: 8 / proporcional}}
                        value={password}
                        onChange={(event) => setPassword (event.target.value)}
                        placeholder=''
                        id='password'
                    />
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 56 / proporcional, marginBottom: 15 / proporcional}}>
                    <div className='d-flex justify-content-start' style={{width: '50%', height: 56 / proporcional, cursor: 'pointer'}} onClick={() => setCheckRemember(!check_remember)}>
                        <img src={check_remember ? icono_check_box : icono_box} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 18 / proporcional,
                            marginLeft: 0 / proporcional}}/>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${56 / proporcional}px`, marginBottom: 0, color: 'rgb(136, 136, 136)', fontFamily: 'Hind, sans-serif',
                            fontWeight: 400}}>
                            Recuerda mis datos
                        </p>
                    </div>
                    <div className='d-flex justify-content-start' style={{width: '50%', height: 56 / proporcional}}>
                        <button className='btn' style={{width: '100%', height: 56 / proporcional, color: 'white', background: '#2d572c', fontWeight: 600}}>
                            Iniciar sesión
                        </button>
                    </div>
                </div>
                <div style={{width: '100%', height: 'auto', cursor: 'pointer'}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: 'rgb(136, 136, 136)', fontFamily: 'Hind, sans-serif',
                        fontWeight: 400}}>
                        ¿Olvidaste tu contraseña?
                    </p>
                </div>
            </div>
        </div>
    )
}