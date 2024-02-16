import React from 'react'
import { Outlet } from 'react-router-dom'

import FooterPrincipal from './comun/footerprincipal.jsx'

export default function GlobalPanel ({proporcional}){
    return (
        <div style={{width: '100%', height: '100%'}}>
            <Outlet/>
            <FooterPrincipal proporcional={proporcional}/>
        </div>
    )
}