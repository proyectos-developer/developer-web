import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import DominioHostingTablet from './dominiohostingtablet.jsx'
import PaginasWebTablet from './paginaswebtablet.jsx'
import AplicacionMovilTablet from './aplicacionmoviltablet.jsx'
import MarketingDigitalTablet from './marketingdigitaltablet.jsx'
import SoftwareTablet from './softwaretablet.jsx'
import CloudServiceTablet from './cloudservicetablet.jsx'

export default function FormularioTablet({proporcional}) {

    const location = useLocation()

    const [servicio, setServicio] = useState('')

    useEffect(() => {
        setServicio(location.pathname.split ('/')[3])
    }, [location.pathname.split ('/')[3]])
    return (
        <div style={{width: '100%', height: 'auto'}}>
            {
                servicio === 'dominio-hosting' ? (
                    <DominioHostingTablet proporcional={proporcional}/>
                )  : servicio === 'paginas-web' ? (
                    <PaginasWebTablet proporcional={proporcional}/>
                )  : servicio === 'aplicacion-movil' ? (
                    <AplicacionMovilTablet proporcional={proporcional}/>
                ) : servicio === 'marketing-digital' ? (
                    <MarketingDigitalTablet proporcional={proporcional}/>
                ) : servicio === 'software' ? (
                    <SoftwareTablet proporcional={proporcional}/>
                ) : (
                    <CloudServiceTablet proporcional={proporcional}/>
                )
            }
        </div>
    )
}
