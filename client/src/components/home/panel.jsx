import React from 'react'

import MenuSuperior from '../comun/menusuperior.jsx'

export default function Home ({proporcional}){
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='' style={{width: '100%', height: 700 / proporcional}}>
                <MenuSuperior proporcional={proporcional}/>
            </div>
        </div>
    )
}