import React, { useState } from 'react'

import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {begindata} from '../../../redux/slice/begindata.js'
import {beginConstants} from '../../../uri/begin-constants.js'

export default function RegisterUser ({proporcional}){

    const navigate = useNavigate()
    const dispatch = useDispatch ()

    const [nombres_apellidos, setNombresApellidos] = useState ('')
    const [nro_telefono, setNroTelefono] = useState ('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [verificar_password, setVerificarPassword] = useState('')

    const [enombres_apellidos, setENombresApellidos] = useState ('')
    const [enro_telefono, setENroTelefono] = useState ('')
    const [eemail, setEEmail] = useState('')
    const [epassword, setEPassword] = useState('')
    const [everificar_password, setEVerificarPassword] = useState('')

    const registrar_datos = () => {
        if (nombres_apellidos === '' || nro_telefono === '' || email === '' || password === '' || verificar_password === '' || password !== verificar_password){
            setENombresApellidos(nombres_apellidos === '' ? true : false)
            setENroTelefono(nro_telefono === '' ? true : false)
            setEEmail(email === '' ? true : false)
            setEPassword(password === '' || password !== verificar_password ? true : false)
            setEVerificarPassword(verificar_password === '' || password !== verificar_password ? true : false)
        }else{
            setENombresApellidos(false)
            setENroTelefono(false)
            setEEmail(false)
            setEPassword(false)
            setEVerificarPassword(false)
            const data_registro = {
                correo: email,
                password: password,
                nro_telefono: nro_telefono, 
                nombres: nombres_apellidos
            }
            dispatch(begindata(beginConstants(data_registro, false, 0).register_user))
        }
    }    

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 55 / proporcional, marginBottom: 15 / proporcional}}>
                <p style={{fontSize: 50 / proporcional, lineHeight: `${55 / proporcional}px`, textAlign: 'center', marginBottom: 0, color: 'rgb(22, 36, 65)', fontWeight: 800, fontFamily: 'Montserrat, sans-serif'}}>
                    Regístra tus datos
                </p>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <div style={{width: '100%', height: 74 / proporcional, marginBottom: 14 / proporcional}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind, sans-serif', color: 'rgb(136, 136, 136)',
                        marginBottom: 0}}>
                        Nombres y apellidos
                    </p>
                    <input 
                        type='default'
                        className='form-control'
                        style={{width: '100%', height: 48 / proporcional, border: enombres_apellidos ? '1px solid red' : '1px solid rgb(225, 225, 225)', color: 'rgb(136, 136, 136)', fontFamily: 'Hind, sans-serif',
                                borderRadius: 8 / proporcional}}
                        value={nombres_apellidos}
                        onChange={(event) => setNombresApellidos (event.target.value)}
                        placeholder=''
                        id='nombres_apellidos'
                    />
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '47.5%', height: 74 / proporcional, marginBottom: 14 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind, sans-serif', color: 'rgb(136, 136, 136)',
                            marginBottom: 0}}>
                            Correo electrónico
                        </p>
                        <input 
                            type='e-mail'
                            className='form-control'
                            style={{width: '100%', height: 48 / proporcional, border: eemail ? '1px solid red' : '1px solid rgb(225, 225, 225)', color: 'rgb(136, 136, 136)', fontFamily: 'Hind, sans-serif',
                                    borderRadius: 8 / proporcional}}
                            value={email}
                            onChange={(event) => setEmail (event.target.value)}
                            placeholder=''
                            id='e-mail'
                        />
                    </div>
                    <div style={{width: '47.5%', height: 74 / proporcional, marginBottom: 14 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind, sans-serif', color: 'rgb(136, 136, 136)',
                            marginBottom: 0}}>
                            Teléfono
                        </p>
                        <input 
                            type='number'
                            className='form-control'
                            style={{width: '100%', height: 48 / proporcional, border: enro_telefono ? '1px solid red' : '1px solid rgb(225, 225, 225)', color: 'rgb(136, 136, 136)', fontFamily: 'Hind, sans-serif',
                                    borderRadius: 8 / proporcional}}
                            value={nro_telefono}
                            onChange={(event) => setNroTelefono (event.target.value)}
                            placeholder=''
                            id='nro_telefono'
                        />
                    </div>
                </div>
                <div style={{width: '100%', height: 74 / proporcional, marginBottom: 14 / proporcional}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, fontWeight: 400, fontFamily: 'Hind, sans-serif', color: 'rgb(136, 136, 136)',
                        marginBottom: 0}}>
                        Password
                    </p>
                    <input 
                        type='password'
                        className='form-control'
                        style={{width: '100%', height: 48 / proporcional, border: epassword ? '1px solid red' : '1px solid rgb(225, 225, 225)', color: 'rgb(136, 136, 136)', fontFamily: 'Hind, sans-serif',
                                borderRadius: 8 / proporcional}}
                        value={password}
                        onChange={(event) => setPassword (event.target.value)}
                        placeholder=''
                        id='password'
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
                        style={{width: '100%', height: 48 / proporcional, border: everificar_password ? '1px solid red' : '1px solid rgb(225, 225, 225)', color: 'rgb(136, 136, 136)', fontFamily: 'Hind, sans-serif',
                                borderRadius: 8 / proporcional}}
                        value={verificar_password}
                        onChange={(event) => setVerificarPassword (event.target.value)}
                        placeholder=''
                        id='verificar_password'
                    />
                </div>
                <div style={{width: '100%', height: 'auto', cursor: 'pointer'}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(136, 136, 136)', fontFamily: 'Hind, sans-serif',
                        fontWeight: 400, textAlign: 'end'}}>
                        ¿Ya tienes un cuenta? <span style={{fontSize: 20 / proporcional, textDecoration: 'underline', cursor: 'pointer'}}
                        onClick={() => navigate('/mi-cuenta/login')}>ingresa aquí</span>
                    </p>
                </div>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 56 / proporcional}}>
                        <button className='btn' style={{width: '90%', height: 56 / proporcional, color: 'white', background: '#2d572c', fontWeight: 600}}
                            onClick={() => registrar_datos ()}>
                            Registrarse
                        </button>
                    </div>
            </div>
        </div>
    )
}