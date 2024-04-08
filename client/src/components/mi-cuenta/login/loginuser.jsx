import React, { useEffect, useState } from 'react'

import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {begindata} from '../../../redux/slice/begindata.js'
import {beginConstants} from '../../../uri/begin-constants.js'

import { set_authenticated } from '../../../redux/actions/dataactions.js'

export default function LoginUser ({proporcional}){

    const navigate = useNavigate()
    const dispatch = useDispatch ()

    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')

    const [respuesta, setrRespuesta] = useState('')
    
    const [eusuario, setEUsuario] = useState('')
    const [epassword, setEPassword] = useState('')

    const [check_remember, setCheckRemember] = useState (false)

    const {login_user} = useSelector (({begin_data}) => begin_data)

    useEffect(() => {
        if (login_user && login_user.user && login_user.success === true){
            window.localStorage.setItem('usuario', login_user.user.user.usuario)
            window.localStorage.setItem('session_id', login_user.user.session_id)
            dispatch(set_authenticated (true))
            dispatch(begindata(beginConstants({}, true, 0).login_user))
            navigate('/')
        }else if (login_user && login_user.message && login_user.success === false){
            setrRespuesta(login_user.message.info)
        }
    }, [login_user])

    const inciar_sesion = () => {
        if (usuario === '' || password === ''){
            setEUsuario(usuario === '' ? true : false)
            setEPassword(password === '' ? true : false)
        }else{
            setEUsuario(false)
            setEPassword(false)
            const data_login = {
                correo: usuario,
                password: password
            }
            dispatch(begindata(beginConstants(data_login, false, 0).login_user))
        }
    }
    
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 55 / proporcional, marginBottom: 15 / proporcional}}>
                <p style={{fontSize: 50 / proporcional, textAlign: 'center', lineHeight: `${55 / proporcional}px`, marginBottom: 0, color: 'rgb(22, 36, 65)', fontWeight: 800, fontFamily: 'Montserrat, sans-serif'}}>
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
                {
                    respuesta !== '' ? (
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind, sans-serif', color: 'red',
                            marginBottom: 10 / proporcional}}>
                            {respuesta}
                        </p>
                    ) : null
                }
                <div style={{width: '100%', height: 'auto', cursor: 'pointer'}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(136, 136, 136)', fontFamily: 'Hind, sans-serif',
                        fontWeight: 400, textAlign: 'end'}}
                        onClick={() => navigate('/mi-cuenta/olvide-contraseña')}>
                        ¿Olvidaste tu contraseña?
                    </p>
                </div>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 56 / proporcional, marginBottom: 20 / proporcional}}>
                        <button className='btn' style={{width: '90%', height: 56 / proporcional, color: 'white', background: '#2d572c', fontWeight: 600}}
                            onClick={() => inciar_sesion()}>
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