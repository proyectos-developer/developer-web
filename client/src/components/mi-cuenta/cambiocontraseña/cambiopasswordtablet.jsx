import React, { useEffect, useState } from 'react'

import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {begindata} from '../../../redux/slice/begindata.js'
import {beginConstants} from '../../../uri/begin-constants.js'

export default function CambioPasswordTablet ({proporcional}){

    const navigate = useNavigate()
    const dispatch = useDispatch ()

    const [password, setPassword] = useState('')
    const [verificar_password, setVerificarPassword] = useState('')

    const [mensaje, setMensaje] = useState('')
    
    const [epassword, setEPassword] = useState('')
    const [everificar_password, setEVerificarPassword] = useState('')

    const {update_password} = useSelector (({begin_data}) => begin_data)

    useEffect(() => {
        console.log (update_password)
        if (update_password && update_password.success === true && update_password.user){
            window.localStorage.removeItem ('correo')
            dispatch(begindata(beginConstants({}, true, 0).update_password))
            setMensaje('')
            navigate(`/mi-cuenta/cambio-password/exitoso/${update_password.user.usuario}`)
        }else if (update_password && update_password.message === '0'){
            setMensaje('La nueva contraseña no puede ser la misma a la antigua')
        }else if (update_password && update_password.error){
            setMensaje('Ocurrio un error, intentelo nuevamente')
        }
    }, [update_password])

    const cambiar_contraseña = () => {
        if (password === '' || verificar_password === '' || password !== verificar_password){
            setEPassword(password === '' ? true : false)
            setEVerificarPassword(verificar_password === '' ? true : false)
            setMensaje(password !== verificar_password ? 'Las contraseñas no coinciden' : '')
        }else{
            setEPassword(false)
            setEVerificarPassword(false)
            setMensaje('')
            const data_update = {
                password: password
            }
            dispatch(begindata(beginConstants(data_update, false, location.pathname.split('/')[3]).update_password))
        }
    }
    
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 55 / proporcional, marginBottom: 15 / proporcional}}>
                <p style={{fontSize: 40 / proporcional, textAlign: 'center', lineHeight: `${45 / proporcional}px`, marginBottom: 0, color: 'rgb(22, 36, 65)', fontWeight: 800, fontFamily: 'Montserrat, sans-serif'}}>
                    Ingresa tu nueva contraseña.
                </p>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <div style={{width: '100%', height: 74 / proporcional, marginBottom: 14 / proporcional}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind, sans-serif', color: 'rgb(136, 136, 136)',
                        marginBottom: 0}}>
                        Contraseña
                    </p>
                    <input 
                        type='password'
                        className='form-control'
                        style={{width: '100%', height: 48 / proporcional, border: epassword ? '1px solid red' : '1px solid rgb(225, 225, 225)', color: 'rgb(136, 136, 136)', fontFamily: 'Hind, sans-serif',
                                borderRadius: 8 / proporcional}}
                        value={password}
                        onChange={(event) => setPassword (event.target.value)}
                        placeholder='Contraseña'
                        id='password'
                    />
                </div>
                <div style={{width: '100%', height: 74 / proporcional, marginBottom: 14 / proporcional}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind, sans-serif', color: 'rgb(136, 136, 136)',
                        marginBottom: 0}}>
                        Repetir contraseña
                    </p>
                    <input 
                        type='password'
                        className='form-control'
                        style={{width: '100%', height: 48 / proporcional, border: everificar_password ? '1px solid red' : '1px solid rgb(225, 225, 225)', color: 'rgb(136, 136, 136)', fontFamily: 'Hind, sans-serif',
                                borderRadius: 8 / proporcional}}
                        value={verificar_password}
                        onChange={(event) => setVerificarPassword (event.target.value)}
                        placeholder='Contraseña'
                        id='verificar_password'
                    />
                </div>
                {
                    mensaje !== '' ? (
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 20 / proporcional, color: 'red', fontWeight: 800, fontFamily: 'Montserrat, sans-serif'}}>
                            {mensaje}
                        </p>
                    ) : null
                }
                    <div className='d-flex justify-content-end' style={{width: '100%', height: 56 / proporcional, marginBottom: 20 / proporcional}}>
                        <button className='btn' style={{width: '40%', height: 56 / proporcional, color: 'white', background: '#2d572c', fontWeight: 600}}
                            onClick={() => cambiar_contraseña()}>
                            Actualizar contraseña
                        </button>
                    </div>
            </div>
        </div>
    )
}