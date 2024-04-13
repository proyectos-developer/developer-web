import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import image_dominio from '../../../assets/images/image_cotizacion_dominio_600.png'
import image_hosting from '../../../assets/images/image_cotizacion_hosting_600.png'

export default function DominioHosting({proporcional}) {

    const navigate = useNavigate()

    const [tipo, setTipo] = useState ('')
    const [nombre, setNombre] = useState('')
    const [rubro, setRubro] = useState('')
    const [nro_ruc, setNroRuc] = useState('')
    const [nro_telefono, setNroTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const [nombre_contacto, setNombreContacto] = useState ('')

    const [boton_anterior, setBotonAnterior] = useState (false)
    const [boton_finalizar, setBotonFinalizar] = useState (false)

    const [paso, setPaso] = useState (1)

    const [tipo_dominio, setTipoDominio] = useState('')
    const [tipo_hosting, setTipoHosting] = useState('')

    const [etipo_dominio, setETipoDominio] = useState('')
    const [etipo_hosting, setETipoHosting] = useState('')

    const [boton_siguiente, setBotonSiguiente] = useState (false)
    const [boton_volver, setBotonVolver] = useState (false)

    const paso_anterior = () => {
        document.getElementById('tipo').value = '0'
        setTipo('')
        setPaso(1)
    }

    const siguiente_paso = () => {
        if (tipo_dominio === '' || tipo_hosting === ''){
            setETipoDominio(tipo_dominio === '' ? true : false)
            setETipoHosting(tipo_hosting === '' ? true : false)
        }else{
            setETipoDominio(false)
            setETipoHosting(false)
            setPaso(2)
        }
    }

    const volver_opciones = () => {
        navigate ('/cotizacion')
    }

    return (
        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
            {
                paso === 1 ? (
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                            <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                background: paso === 1 ? 'rgb(23, 43, 222)' :  'white'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                        textAlign: 'center', color: paso === 1 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                    1
                                </p>
                            </div>
                            <div style={{width: 200 / proporcional, height: 4 / proporcional, background: 'rgb(23, 43, 222)', marginTop: 60 / proporcional, marginBottom: 60 / proporcional}}/>
                            <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                background: paso === 2 ? 'rgb(23, 43, 222)' :  'white'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                        textAlign: 'center', color: paso === 2 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                    2
                                </p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                            <div className='d-flex' style={{width: '49%', height: 'auto'}}>
                                <div className='' style={{width: '40%', height: 'auto'}}>
                                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                        <img src={image_dominio} style={{width: '100%', height: '100%'}}/>
                                    </div>
                                </div>
                                <div className='' style={{width: '60%', height: 'auto'}}>
                                    <div style={{width: '100%', height: 'auto', marginTop: 20 / proporcional}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${25 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                                textAlign: 'center', color: 'black', cursor: 'default', marginBottom: 20 / proporcional}}>
                                            ¿QUÉ EXTENSIÓN DE <br/>DOMINIO DESEA TENER?
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                        <select 
                                            className='form-select'
                                            style={{width: '80%',  height: 50 / proporcional, fontSize: 18 / proporcional,
                                            border: etipo_dominio ? '2px solid red' : '1px solid #bdbdbd'}}
                                            value={tipo_dominio}
                                            onChange={(event) => {event.target.value !== '0' ? setTipoDominio(event.target.value) : setTipoDominio('')}}>
                                            <option value='0'>{tipo_dominio === '' ? 'Seleccionar extensión' : tipo_dominio}</option>
                                            <option value='.org'>.org</option>
                                            <option value='.net'>.net</option>
                                            <option value='.com'>.com</option>
                                            <option value='.pe'>.pe</option>
                                            <option value='.com'>.com</option>
                                            <option value='.info'>.info</option>
                                            <option value='.edu'>.edu</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '2%', height: 'auto'}}>
                                <div style={{width: 2 / proporcional, height: 'auto', background: 'rgb(23, 44, 222)'}}/>
                            </div>
                            <div className='' style={{width: '49%', height: 'auto'}}>
                                <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                                    <div className='' style={{width: '40%', height: 'auto'}}>
                                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                            <img src={image_hosting} style={{width: '100%', height: '100%'}}/>
                                        </div>
                                    </div>
                                    <div className='' style={{width: '60%', height: 'auto'}}>
                                        <div style={{width: '100%', height: 'auto', marginTop: 20 / proporcional}}>
                                            <p style={{fontSize: 20 / proporcional, lineHeight: `${25 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                                    textAlign: 'center', color: 'black', cursor: 'default', marginBottom: 20 / proporcional}}>
                                                ¿QUÉ TIPO DE <br/>HOSTING DESEA TENER?
                                            </p>
                                        </div>
                                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                            <select 
                                                className='form-select'
                                                style={{width: '80%',  height: 50 / proporcional, fontSize: 18 / proporcional,
                                                border: etipo_hosting ? '2px solid red' : '1px solid #bdbdbd'}}
                                                value={tipo_hosting}
                                                onChange={(event) => {event.target.value !== '0' ? setTipoHosting(event.target.value) : setTipoHosting('')}}>
                                                <option value='0'>{tipo_hosting === '' ? 'Seleccionar tipo hosting' : tipo_hosting}</option>
                                                <option value='Dedicado'>Dedicado (Normal)</option>
                                                <option value='VPS'>VPS</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${25 / proporcional}px`, fontWeight: 600, marginBottom: 0 / proporcional,
                                            textAlign: 'left', color: 'black', cursor: 'default', marginBottom: 20 / proporcional}}>
                                        (•) Ambos tipos cuentan con panel de control para crear correos, página web, wordpress, etc.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between' style={{width: '100%', height: 50 / proporcional}}>
                            <button className='btn' style={{width: '20%', height: 50 / proporcional, border: '1px solid rgb(23, 43, 222)', fontWeight: 600,
                                background: boton_volver ? 'white' : 'rgb(23, 43, 222)', color: boton_volver ? 'rgb(23, 43, 222)' : 'white', fontSize: 18 / proporcional}}
                                onMouseOver={() => setBotonVolver(true)} onMouseLeave={() => setBotonVolver(false)}
                                onClick={() => volver_opciones()}>
                                Volver
                            </button>
                            <button className='btn' style={{width: '20%', height: 50 / proporcional, border: '1px solid rgb(23, 43, 222)', fontWeight: 600,
                                background: boton_siguiente ? 'white' : 'rgb(23, 43, 222)', color: boton_siguiente ? 'rgb(23, 43, 222)' : 'white', fontSize: 18 / proporcional}}
                                onMouseOver={() => setBotonSiguiente(true)} onMouseLeave={() => setBotonSiguiente(false)}
                                onClick={() => siguiente_paso()}>
                                Siguiente
                            </button>
                        </div>
                    </div>
                ) : paso === 2 ? (
                    <div style={{width: '80%', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                            <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                background: paso === 1 ? 'rgb(23, 43, 222)' :  'white'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                        textAlign: 'center', color: paso === 1 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                    1
                                </p>
                            </div>
                            <div style={{width: 200 / proporcional, height: 4 / proporcional, background: 'rgb(23, 43, 222)', marginTop: 60 / proporcional, marginBottom: 60 / proporcional}}/>
                            <div className='rounded-circle' style={{width: 120 / proporcional, height: 120 / proporcional, border: '4px solid rgb(23, 43, 222)',
                                background: paso === 2 ? 'rgb(23, 43, 222)' :  'white'}}>
                                <p style={{fontSize: 80 / proporcional, lineHeight: `${116 / proporcional}px`, fontWeight: 800, fontFamily: 'Hind', marginBottom: 0 / proporcional,
                                        textAlign: 'center', color: paso === 2 ? 'white' : 'rgb(23, 43, 222)', cursor: 'default'}}>
                                    2
                                </p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                            <div style={{width: '100%', height: 'auto'}}>
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <div style={{width: '49%', height: 50 / proporcional}}>
                                        <select
                                            id='tipo'
                                            className='form-select'
                                            style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, color: '#212121', fontWeight: 600}}
                                            value={tipo}
                                            onChange={(event) => {event.target.value !== '0' ? setTipo(event.target.value) : setTipo('')}}>
                                            <option value='0'>{tipo === '' ? 'Seleccionar tipo' : tipo}</option>
                                            <option value='Personal'>Personal</option>
                                            <option value='Negocio'>Negocio</option>
                                            <option value='Empresa'>Empresa</option>
                                        </select>
                                    </div>
                                    <div style={{width: '49%', height: 50 / proporcional}}>
                                        <input  
                                            disabled={tipo === '' ? true : false}
                                            className='form-control'
                                            value={nombre}
                                            onChange={(event) => setNombre(event.target.value)}
                                            style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, fontWeight: 600, color: '#212121'}}
                                            id='nombre'
                                            type='default'
                                            placeholder={tipo === 'Personal' ? 'Nombres y apellidos' : tipo === 'negocio' ? 'Nombre de negocio' : tipo === 'Empresa' ? 'Nombre de la empresa' : ''}/>
                                    </div>
                                </div>
                                {
                                    tipo !== 'Personal' && tipo !== '' && tipo !== '0' ? (
                                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                            <div style={{width: '49%', height: 50 / proporcional}}>
                                                {
                                                    tipo !== 'Otro' ? (
                                                        <select
                                                            className='form-select'
                                                            style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, color: '#212121', fontWeight: 600}}
                                                            value={rubro}
                                                            onChange={(event) => {event.target.value !== '0' ? setRubro(event.target.value) : setRubro('')}}>
                                                            <option value='0'>{rubro === '' ? 'Seleccionar rubro' : rubro}</option>
                                                            <option value='Tecnología de la información'>Tecnología de la información</option>
                                                            <option value='Servicios Financieros'>Servicios Financieros</option>
                                                            <option value='Salud y Bienestar'>Salud y Bienestar</option>
                                                            <option value='Comercio Minosrista'>Comercio Minosrista</option>
                                                            <option value='Educación'>'Educación'</option>
                                                            <option value='Aliminentos y Bebidas'>'Aliminentos y Bebidas'</option>
                                                            <option value='Servicios Profesionales'>'Servicios Profesionales'</option>
                                                            <option value='Turismo y Hospitalidad'>'Turismo y Hospitalidad'</option>
                                                            <option value='Construcción y Bienes'>'Construcción y Bienes'</option>
                                                            <option value='Medios de comuniación y entretenimiento'>'Medios de comuniación y entretenimiento'</option>
                                                            <option value='Manufactura'>'Manufactura'</option>
                                                            <option value='Energía y Medio Ambiente'>'Energía y Medio Ambiente'</option>
                                                            <option value='Transporte y Logística'>'Transporte y Logística'</option>
                                                            <option value='Moda y Textiles'>'Moda y Textiles'</option>
                                                            <option value='Telecomunicaciones'>'Telecomunicaciones'</option>
                                                            <option value='Otro'>Otro</option>
                                                        </select>
                                                    ) : (
                                                        <input  
                                                            disabled={rubro === '' ? true : false}
                                                            className='form-control'
                                                            value={rubro}
                                                            onChange={(event) => setRubro(event.target.value)}
                                                            style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, fontWeight: 600, color: '#212121'}}
                                                            id='rubro'
                                                            type='default'
                                                            placeholder='Rubro'/>
                                                    )
                                                }
                                            </div>
                                            <div style={{width: '49%', height: 50 / proporcional}}>
                                                <input  
                                                    className='form-control'
                                                    value={nro_ruc}
                                                    onChange={(event) => setNroRuc(event.target.value)}
                                                    style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, fontWeight: 600, color: '#212121'}}
                                                    id='nro_ruc'
                                                    type='number'
                                                    placeholder='Número de R.U.C'/>
                                            </div>
                                        </div>
                                    ) : null
                                }
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                    <div style={{width: '49%', height: 50 / proporcional}}>
                                        <input  
                                            disabled={(tipo !== '0' && tipo !== '') ? false : true}
                                            className='form-control'
                                            value={nro_telefono}
                                            onChange={(event) => setNroTelefono(event.target.value)}
                                            style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, fontWeight: 600, color: '#212121'}}
                                            id='nro_telefono'
                                            type='number'
                                            placeholder='Número de teléfono'/>
                                    </div>
                                    <div style={{width: '49%', height: 50 / proporcional}}>
                                        <input  
                                            disabled={(tipo !== '0' && tipo !== '') ? false : true}
                                            className='form-control'
                                            value={correo}
                                            onChange={(event) => setCorreo(event.target.value)}
                                            style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, fontWeight: 600, color: '#212121'}}
                                            id='correo'
                                            type='default'
                                            placeholder='Correo electrónico'/>
                                    </div>
                                </div>
                                {
                                    tipo !== 'Personal' && tipo !== '' && tipo !== '0' ? (
                                        <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                            <div style={{width: '49%', height: 50 / proporcional}}>
                                                <input  
                                                    className='form-control'
                                                    value={nombre_contacto}
                                                    onChange={(event) => setNombreContacto(event.target.value)}
                                                    style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, fontWeight: 600, color: '#212121'}}
                                                    id='nombre_contacto'
                                                    type='default'
                                                    placeholder='Nombre de la persona de contacto'/>
                                            </div>
                                        </div>
                                    ): null
                    
                                }
                                <div className='d-flex justify-content-between' style={{width: '100%', height: 50 / proporcional}}>
                                    <button className='btn' style={{width: '20%', height: 50 / proporcional, border: '1px solid rgb(23, 43, 222)', fontWeight: 600,
                                        background: boton_anterior ? 'white' : 'rgb(23, 43, 222)', color: boton_anterior ? 'rgb(23, 43, 222)' : 'white', fontSize: 18 / proporcional}}
                                        onMouseOver={() => setBotonAnterior(true)} onMouseLeave={() => setBotonAnterior(false)}
                                        onClick={() => paso_anterior()}>
                                        Anterior
                                    </button>
                                    <button className='btn' style={{width: '20%', height: 50 / proporcional, border: '1px solid rgb(23, 43, 222)', fontWeight: 600,
                                        background: boton_finalizar ? 'white' : 'rgb(23, 43, 222)', color: boton_finalizar ? 'rgb(23, 43, 222)' : 'white', fontSize: 18 / proporcional}}
                                        onMouseOver={() => setBotonFinalizar(true)} onMouseLeave={() => setBotonFinalizar(false)}
                                        onClick={() => finalizar_pedido()}>
                                        Finalizar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}