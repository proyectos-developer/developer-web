import React, { useEffect, useState } from 'react'

import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {begindata} from '../../../redux/slice/begindata.js'
import {beginConstants} from '../../../uri/begin-constants.js'

export default function ForgotPassword ({proporcional}){

    const navigate = useNavigate()
    const dispatch = useDispatch ()

    const [correo, setCorreo] = useState('')
    const [respuesta, setRespuesta] = useState('')
    
    const [ecorreo, setECorreo] = useState('')

    const {send_link_update_password} = useSelector (({begin_data}) => begin_data)

    useEffect(() => {
        if (send_link_update_password && send_link_update_password.message && send_link_update_password.message !== '1' && send_link_update_password.usuario){
            window.localStorage.setItem ('correo', correo)
            dispatch(begindata(beginConstants({}, true, 0).send_link_update_password))
            setRespuesta('')
            navigate('/mi-cuenta/revisar-correo')
        }else if (send_link_update_password && send_link_update_password.message === '1'){
            setRespuesta('Correo ingresado incorrecto')
        }
    }, [send_link_update_password])

    const olvide_contraseña = () => {
        if (correo === ''){
            setECorreo(correo === '' ? true : false)
        }else{
            setECorreo(false)
            const data_login = {
                correo: correo
            }
            dispatch(begindata(beginConstants(data_login, false, 0).send_link_update_password))
        }
    }
    
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 55 / proporcional, marginBottom: 15 / proporcional}}>
                <p style={{fontSize: 50 / proporcional, textAlign: 'center', lineHeight: `${55 / proporcional}px`, marginBottom: 0, color: 'rgb(22, 36, 65)', fontWeight: 800, fontFamily: 'Montserrat, sans-serif'}}>
                    Recupera tu contraseña
                </p>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <div style={{width: '100%', height: 74 / proporcional, marginBottom: 14 / proporcional}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind, sans-serif', color: 'rgb(136, 136, 136)',
                        marginBottom: 0}}>
                        E-mail 
                    </p>
                    <input 
                        type='default'
                        className='form-control'
                        style={{width: '100%', height: 48 / proporcional, border: ecorreo ? '1px solid red' : '1px solid rgb(225, 225, 225)', color: 'rgb(136, 136, 136)', fontFamily: 'Hind, sans-serif',
                                borderRadius: 8 / proporcional}}
                        value={correo}
                        onChange={(event) => setCorreo (event.target.value)}
                        placeholder='Correo electrónico'
                        id='correo'
                    />
                </div>
                {
                    respuesta !== '' ? (
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 20 / proporcional, color: 'red', fontWeight: 800, fontFamily: 'Montserrat, sans-serif'}}>
                            {respuesta}
                        </p>
                    ) : null
                }
                    <div className='d-flex justify-content-end' style={{width: '100%', height: 56 / proporcional, marginBottom: 20 / proporcional}}>
                        <button className='btn' style={{width: '40%', height: 56 / proporcional, color: 'white', background: '#2d572c', fontWeight: 600}}
                            onClick={() => olvide_contraseña()}>
                            Recuperar contraseña
                        </button>
                    </div>
            </div>
        </div>
    )
}