import React from 'react'
import { useSelector } from 'react-redux'

import DominioHostingTablet from './dominiohostingtablet.jsx'
import PaginaWebTablet from './paginawebtablet.jsx'
import AplicacionMovilTablet from './aplicacionmoviltablet.jsx'
import SoftwareTablet from './softwaretablet.jsx'
import MarketingDigitalTablet from './marketingdigitaltablet.jsx'
import CloudServiceTablet from './cloudservicetablet.jsx'

export default function ResumenTablet({proporcional}) {

    const {opciones_cotizaciones} = useSelector(({data_reducer}) => data_reducer)

    return (
        <div style={{width: '100%', height: 'auto'}}>
            {
                opciones_cotizaciones.dominio ? (
                    <div style={{width: '100%', height: 'auto'}}>
                        <DominioHostingTablet proporcional={proporcional}/>
                    </div>
                ) : opciones_cotizaciones.web ? (
                    <div style={{width: '100%', height: 'auto'}}>
                    <PaginaWebTablet proporcional={proporcional}/>
                    </div>
                ) : opciones_cotizaciones.aplicacion ? (
                    <div style={{width: '100%', height: 'auto'}}>
                    <AplicacionMovilTablet proporcional={proporcional}/>
                    </div>
                ) : opciones_cotizaciones.software ? (
                    <div style={{width: '100%', height: 'auto'}}>
                    <SoftwareTablet proporcional={proporcional}/>
                    </div>
                ) : opciones_cotizaciones.marketing ? (
                    <div style={{width: '100%', height: 'auto'}}>
                    <MarketingDigitalTablet proporcional={proporcional}/>
                    </div>
                ) : opciones_cotizaciones.nube ? (
                    <div style={{width: '100%', height: 'auto'}}>
                    <CloudServiceTablet proporcional={proporcional}/>
                    </div>
                ) : null
            }
        
        </div>
    )
}