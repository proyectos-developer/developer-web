import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import DominioHostingTablet from './dominiohostingtablet.jsx'
import PaginasWebTablet from './paginaswebtablet.jsx'

export default function FormularioTablet({proporcional}) {

    const location = useLocation()

    const [servicio, setServicio] = useState('')

    useEffect(() => {
        setServicio(location.pathname.split ('/')[2])
    }, [location.pathname.split ('/')[2]])

    return (
        <div style={{width: '100%', height: 'auto'}}>
            {
                servicio === 'dominio-hosting' ? (
                    <DominioHostingTablet proporcional={proporcional}/>
                )  : servicio === 'paginas-web' ? (
                    <PaginasWebTablet proporcional={proporcional}/>
                ) : null
            }
        </div>
    )
}
