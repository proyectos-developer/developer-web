import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

export default function LoginUserCell ({proporcional}){

    const navigate = useNavigate()

    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')

    const [check_remember, setCheckRemember] = useState (false)
    
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 55 / proporcional, marginBottom: 15 / proporcional}}>
                <p style={{fontSize: 40 / proporcional, textAlign: 'center', lineHeight: `${45 / proporcional}px`, marginBottom: 0, color: 'rgb(22, 36, 65)', fontWeight: 800, fontFamily: 'Montserrat, sans-serif'}}>
                    Inicia sesión
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
                <div style={{width: '100%', height: 'auto', cursor: 'pointer'}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(136, 136, 136)', fontFamily: 'Hind, sans-serif',
                        fontWeight: 400, textAlign: 'end'}}>
                        ¿Olvidaste tu contraseña?
                    </p>
                </div>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 56 / proporcional, marginBottom: 20 / proporcional}}>
                        <button className='btn' style={{width: '90%', height: 56 / proporcional, color: 'white', background: '#2d572c', fontWeight: 600}}>
                            Iniciar sesión
                        </button>
                    </div>
                <div style={{width: '100%', height: 'auto', cursor: 'pointer'}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, color: 'rgb(136, 136, 136)', fontFamily: 'Hind, sans-serif',
                        fontWeight: 400, textAlign: 'center'}}>
                        ¿No tienes un cuenta? <span style={{fontSize: 20 / proporcional, textDecoration: 'underline', cursor: 'pointer'}}
                        onClick={() => navigate('/mi-cuenta/registro')}>Regístrate aquí</span>
                    </p>
                </div>
            </div>
        </div>
    )
}