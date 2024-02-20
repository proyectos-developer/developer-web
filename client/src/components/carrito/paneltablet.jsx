import React, { useState } from 'react'

export default function CarritoComprasTablet ({proporcional}){

    const [position, setPosition] = useState(0)

    window.onscroll = () => {
        setPosition(window.scrollY)
    }

    return (
        <div style={{width: '100%', height: 'auto'}}>

        </div>
    )
}