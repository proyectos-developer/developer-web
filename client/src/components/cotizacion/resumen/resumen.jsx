import React from 'react'
import { useSelector } from 'react-redux'

import DominioHosting from './dominiohosting.jsx'
import PaginaWeb from './paginaweb.jsx'
import AplicacionMovil from './aplicacionmovil.jsx'
import Software from './software.jsx'
import MarketingDigital from './marketingdigital.jsx'
import CloudService from './cloudservice.jsx'

export default function Resumen({proporcional}) {

    const {opciones_cotizaciones} = useSelector(({data_reducer}) => data_reducer)

    return (
        <div style={{width: '100%', height: 'auto'}}>
            {
                opciones_cotizaciones.dominio ? (
                    <div style={{width: '100%', height: 'auto'}}>
                        <DominioHosting proporcional={proporcional}/>
                    </div>
                ) : opciones_cotizaciones.web ? (
                    <div style={{width: '100%', height: 'auto'}}>
                    <PaginaWeb proporcional={proporcional}/>
                    </div>
                ) : opciones_cotizaciones.aplicacion ? (
                    <div style={{width: '100%', height: 'auto'}}>
                    <AplicacionMovil proporcional={proporcional}/>
                    </div>
                ) : opciones_cotizaciones.software ? (
                    <div style={{width: '100%', height: 'auto'}}>
                    <Software proporcional={proporcional}/>
                    </div>
                ) : opciones_cotizaciones.marketing ? (
                    <div style={{width: '100%', height: 'auto'}}>
                    <MarketingDigital proporcional={proporcional}/>
                    </div>
                ) : opciones_cotizaciones.nube ? (
                    <div style={{width: '100%', height: 'auto'}}>
                    <CloudService proporcional={proporcional}/>
                    </div>
                ) : null
            }
        
        </div>
    )
}