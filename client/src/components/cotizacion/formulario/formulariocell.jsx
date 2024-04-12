import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import DominioHostingCell from './dominiohostingcell.jsx'
import PaginasWebCell from './paginaswebcell.jsx'

export default function FormularioCell({proporcional}) {

    const location = useLocation()

    const [servicio, setServicio] = useState('')

    useEffect(() => {
        setServicio(location.pathname.split ('/')[2])
    }, [location.pathname.split ('/')[2]])

    return (
        <div style={{width: '100%', height: 'auto'}}>
            {
                servicio === 'dominio-hosting' ? (
                    <DominioHostingCell proporcional={proporcional}/>
                )  : servicio === 'paginas-web' ? (
                    <PaginasWebCell proporcional={proporcional}/>
                ) : null
            }
        </div>
    )
}
