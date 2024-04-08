import React, { useEffect, useState } from 'react'

import {useDispatch, useSelector} from 'react-redux'

import {correodata} from '../../redux/slice/correodata.js'
import {correoConstants} from '../../uri/correo-constants.js'

export default function FormularioCell ({proporcional}){

    const dispatch = useDispatch()

    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [nro_telefono, setNroTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [respuesta, setRespuesta] = useState('')

    const [enombres, setENombres] = useState('')
    const [enro_telefono, setENroTelefono] = useState('')
    const [eemail, setEEmail] = useState('')
    const [emensaje, setEMensaje] = useState('')

    const {send_mensaje_web} = useSelector(({correo_data}) => correo_data)

    useEffect(() => {
        if (send_mensaje_web && send_mensaje_web.message){
            dispatch(correodata(correoConstants(0, true).send_mensaje_web))
            console.log ('mensaje enviado')
        }
    }, [send_mensaje_web])

    const enviar_mensaje_web = () => {
        if (nombres === '' || nro_telefono === '' || email === '' || mensaje === ''){
            setENombres(nombres === '' ? true : false)
            setENroTelefono(nro_telefono === '' ? true : false)
            setEEmail(email === '' ? true : false)
            setEMensaje(mensaje === '' ? true : false)
        }else{
            setENombres(false)
            setENroTelefono(false)
            setEEmail(false)
            setEMensaje(false)
            const data_mensje = {
                nombres: nombres,
                apellidos: apellidos,
                telefono: nro_telefono,
                correo: email,
                mensaje: mensaje
            }
            setRespuesta('¡Mensaje enviado con éxito!')
            dispatch(correodata(correoConstants(data_mensje, false).send_mensaje_web))
        }
    }
    
    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
            <div style={{width: '100%', height: 'auto'}}>
                <p style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, fontWeight: 800, color: 'rgb(22, 36, 65)', marginBottom: 31 / proporcional, fontFamily: 'Montserrat, sans, serif'}}>
                    Déjenos un comentario
                </p>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 50 / proporcional, marginBottom: 20 / proporcional}}>
                    <div style={{width: '90%', height: 50 / proporcional}}>
                        <input
                            type='default'
                            className='form-control'
                            style={{width:'100%', height: 50 / proporcional, background: '#dbe4eb', fontSize: 18 / proporcional, color: 'rgb(136, 136, 136)', fontWeight: 400, 
                                border: enombres ? '1px solid red' : '1px solid #efefef'}}
                            value={nombres}
                            onChange={(event) => setNombres(event.target.value)}
                            placeholder='Nombres'
                            id='nombres'/>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 50 / proporcional, marginBottom: 20 / proporcional}}>
                    <div style={{width: '90%', height: 50 / proporcional}}>
                        <input
                            type='default'
                            className='form-control'
                            style={{width:'100%', height: 50 / proporcional, background: '#dbe4eb', fontSize: 18 / proporcional, color: 'rgb(136, 136, 136)', fontWeight: 400, 
                                border: '1px solid #efefef'}}
                            value={apellidos}
                            onChange={(event) => setApellidos(event.target.value)}
                            placeholder='Apellidos'
                            id='apellidos'/>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 50 / proporcional, marginBottom: 20 / proporcional}}>
                    <div style={{width: '90%', height: 50 / proporcional}}>
                        <input
                            type='number'
                            className='form-control'
                            style={{width:'100%', height: 50 / proporcional, background: '#dbe4eb', fontSize: 18 / proporcional, color: 'rgb(136, 136, 136)', fontWeight: 400, 
                                border: enro_telefono ? '1px solid red' : '1px solid #efefef'}}
                            value={nro_telefono}
                            onChange={(event) => setNroTelefono(event.target.value)}
                            placeholder='Número de teléfono'
                            id='nro_telefono'/>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 50 / proporcional, marginBottom: 20 / proporcional}}>
                    <div style={{width: '90%', height: 50 / proporcional}}>
                        <input
                            type='e-mail'
                            className='form-control'
                            style={{width:'100%', height: 50 / proporcional, background: '#dbe4eb', fontSize: 18 / proporcional, color: 'rgb(136, 136, 136)', fontWeight: 400, 
                                border: eemail ? '1px solid red' : '1px solid #efefef'}}
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder='email'
                            id='email'/>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <div style={{width: '90%', height: 'auto'}}>
                        <textarea
                            type='default'
                            className='form-control'
                            style={{width:'100%', height: 104 / proporcional, background: '#dbe4eb', fontSize: 18 / proporcional, color: 'rgb(136, 136, 136)', fontWeight: 400, 
                                border: emensaje ? '1px solid red' : '1px solid #efefef'}}
                            rows={3}
                            value={mensaje}
                            onChange={(event) => setMensaje(event.target.value)}
                            placeholder='Mensaje'
                            id='mensaje'/>
                    </div>
                </div>
                {
                    respuesta !== '' ? ( 
                        <div className='d-flex justify-content-center' style={{width: '90%', height: 60 / proporcional}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${60 / proporcional}px`, textAlign: 'center', fontWeight: 800, color: '#212121', marginBottom: 0 / proporcional, fontFamily: 'Montserrat, sans, serif'}}>
                                {respuesta}
                            </p>
                        </div>
                    ) : null
                }
                <div className='d-flex justify-content-center' style={{width: '100%', height: 60 / proporcional}}>
                    <button className='btn' style={{width: '90%', fontSize: 18 / proporcional, color: 'white', background: '#172bde', color: 'white', fontWeight: 600,
                            fontFamily: 'Montserrat, sans-serif'}}
                            onClick={() => enviar_mensaje_web()}>
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    )
}