import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function SoftwareCell({proporcional}) {

    const [tipo, setTipo] = useState({})
    const [informacion_adicional, setInformacionAdicional] = useState({})

    const {cotizacion_software} = useSelector(({data_reducer}) => data_reducer)

    useEffect(() => {
        setTipo (cotizacion_software[0])
        setInformacionAdicional (cotizacion_software[1])
    }, [])
    
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='d-flex justify-content-center rounded-top' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                <p style={{fontSize: 30 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(23, 43, 222)', cursor: 'default', fontWeight: 700, 
                        fontFamily: 'Hind, sans-serif'}}>
                    COTIZACION SOFTWARE
                </p>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                        fontFamily: 'Hind, sans-serif'}}>
                    Tipo de servicio: <span style={{fontWeight: 700}}>{tipo.tipo_software}</span>
                </p>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0, color: 'black', cursor: 'default', fontWeight: 500, 
                        fontFamily: 'Hind, sans-serif'}}>
                    Informacion adicional: <br/><span style={{fontWeight: 700}}>{informacion_adicional.informacion_adicional}</span>
                </p>
            </div>
        </div>
    )
}