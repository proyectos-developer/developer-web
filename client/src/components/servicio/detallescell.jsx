import React, { useState } from 'react'

import MenuSuperiorCell from '../comun/menusuperiorcell.jsx'
import PrincipalCell from './principalcell.jsx'
import ServicioCell from './serviciocell.jsx'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { set_opciones_cotizaciones } from '../../redux/actions/dataactions.js'

export default function DetallesServicio({proporcional}){

    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [position, setPosition] = useState(0)

    window.onscroll = () => {
        setPosition(window.scrollY)
    }

    const cotiza_aqui = (servicio) => {
        console.log (servicio)
        const opciones = {
            dominio: false,
            web: servicio === 'desarrollo-web' || servicio === 'desarrollo-ecommerce' ? true : false,
            aplicacion: servicio === 'aplicacion-movil' ? true : false,
            marketing: servicio === 'marketing-digital' ? true : false,
            software: servicio === 'desarrollo-software' ? true : false,
            nube: servicio === 'servicios-nube' ? true : false
        }
        dispatch(set_opciones_cotizaciones(opciones))
        if (opciones.web){
            navigate ('/cotizacion/servicio/paginas-web')
            window.scrollTo(0, 0)
        }else if (opciones.aplicacion){
            navigate ('/cotizacion/servicio/aplicacion-movil')
            window.scrollTo(0, 0)
        }else if (opciones.marketing){
            navigate ('/cotizacion/servicio/marketing-digital')
            window.scrollTo(0, 0)
        }else if (opciones.software){
            navigate ('/cotizacion/servicio/software')
            window.scrollTo(0, 0)
        }else if (opciones.nube){
            navigate ('/cotizacion/servicio/cloud-services')
            window.scrollTo(0, 0)
        }
    }
    
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 600 / proporcional}}>
                <div className={`position-fixed top-0 start-0 ${position > 600 / proporcional ? 'shadow' : ''}`} style={{width: '100%', height: 'auto', zIndex: 99999,
                        background: position > 600 / proporcional ? 'white' : 'transparent'}}>
                    <MenuSuperiorCell proporcional={proporcional} position={position}/>
                </div>
                <div className='position-absolute top-0 start-0' style={{width: '100%', height: 600 / proporcional, zIndex: 9}}>
                    <PrincipalCell proporcional={proporcional}/>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto', paddingBottom: 50 / proporcional}}>
                <ServicioCell proporcional={proporcional}/>
            {
                location.pathname.split ('/')[2] === 'consultoria-digital' || location.pathname.split ('/')[2] === 'soporte-tecnico' ? (
                    null
                ) : (
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                            <button className='btn border-0' style={{width: '90%', height: 50 / proporcional, fontSize: 16 / proporcional, color: 'white',
                                background: 'rgb(22, 43, 222)', fontWeight: 600, marginBottom: 5 / proporcional, textAlign: 'center'}}
                                onClick={() => {cotiza_aqui(location.pathname.split('/')[2])}}>Cotiza aquí</button>
                    </div>
                )
            }
            </div>
        </div>
    )
}