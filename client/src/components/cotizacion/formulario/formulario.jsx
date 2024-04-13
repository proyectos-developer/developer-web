import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import DominioHosting from './dominiohosting.jsx'
import PaginasWeb from './paginasweb.jsx'
import AplicacionMovil from './aplicacionmovil.jsx'
import MarketingDigital from './marketingdigital.jsx'
import Software from './software.jsx'
import CloudService from './cloudservice.jsx'

export default function Formulario({proporcional}) {

    const location = useLocation()

    const [servicio, setServicio] = useState('')

    useEffect(() => {
        setServicio(location.pathname.split ('/')[2])
    }, [location.pathname.split ('/')[2]])

    return (
        <div style={{width: '100%', height: 'auto'}}>
            {
                servicio === 'dominio-hosting' ? (
                    <DominioHosting proporcional={proporcional}/>
                ) : servicio === 'paginas-web' ? (
                    <PaginasWeb proporcional={proporcional}/>
                ) : servicio === 'aplicacion-movil' ? (
                    <AplicacionMovil proporcional={proporcional}/>
                ) : servicio === 'marketing-digital' ? (
                    <MarketingDigital proporcional={proporcional}/>
                )  : servicio === 'software' ? (
                    <Software proporcional={proporcional}/>
                ) : (
                    <CloudService proporcional={proporcional}/>
                )
            }
        </div>
    )
}

