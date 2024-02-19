import React from 'react'

export default function Map ({proporcional}){
    
    return (
        <div style={{width: '100%', height: 500 / proporcional}}>
            <div style={{width: '100%', height: 500 / proporcional, background: '#dbe4eb'}}>
                
            </div>
        </div>
    )
}