import React, { useState } from 'react'

import MenuSuperior from '../../comun/menusuperior.jsx'

export default function ResumenCotizacionTablet ({proporcional}){

    const [position, setPosition] = useState(0)

    window.onscroll = () => {
        setPosition(window.scrollY)
    }

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='position-relative' style={{width: '100%', height: 'auto', background: 'rgb(23, 43, 222)'}}>
                    <MenuSuperior proporcional={proporcional} position={position}/>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional,
                    paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional}}>
            </div>
        </div>
    )
}