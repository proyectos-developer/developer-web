import React from 'react'
import { useSelector } from 'react-redux'

import DominioHostingCell from './dominiohostingcell.jsx'
import PaginaWebCell from './paginawebcell.jsx'
import AplicacionMovilCell from './aplicacionmovilcell.jsx'
import SoftwareCell from './softwarecell.jsx'
import MarketingDigitalCell from './marketingdigitalcell.jsx'
import CloudServiceCell from './cloudservicecell.jsx'

export default function ResumenCell({proporcional}) {

    const {opciones_cotizaciones} = useSelector(({data_reducer}) => data_reducer)

    return (
        <div style={{width: '100%', height: 'auto'}}>
            {
                opciones_cotizaciones.dominio ? (
                    <div style={{width: '100%', height: 'auto'}}>
                        <DominioHostingCell proporcional={proporcional}/>
                    </div>
                ) : opciones_cotizaciones.web ? (
                    <div style={{width: '100%', height: 'auto'}}>
                    <PaginaWebCell proporcional={proporcional}/>
                    </div>
                ) : opciones_cotizaciones.aplicacion ? (
                    <div style={{width: '100%', height: 'auto'}}>
                    <AplicacionMovilCell proporcional={proporcional}/>
                    </div>
                ) : opciones_cotizaciones.software ? (
                    <div style={{width: '100%', height: 'auto'}}>
                    <SoftwareCell proporcional={proporcional}/>
                    </div>
                ) : opciones_cotizaciones.marketing ? (
                    <div style={{width: '100%', height: 'auto'}}>
                    <MarketingDigitalCell proporcional={proporcional}/>
                    </div>
                ) : opciones_cotizaciones.nube ? (
                    <div style={{width: '100%', height: 'auto'}}>
                    <CloudServiceCell proporcional={proporcional}/>
                    </div>
                ) : null
            }
        
        </div>
    )
}