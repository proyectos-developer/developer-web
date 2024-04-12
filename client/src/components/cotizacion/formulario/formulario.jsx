import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import DominioHosting from './dominiohosting.jsx'
import PaginasWeb from './paginasweb.jsx'

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
                ) : null
            }
        </div>
    )
}

