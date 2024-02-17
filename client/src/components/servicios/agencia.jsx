import React from 'react'

export default function Agencia ({proporcional}){

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div style={{width: '100%', height: 'auto', paddingLeft: 540 / proporcional, paddingRight: 540 / proporcional, paddingTop: 160 / proporcional, paddingBottom: 80 / proporcional}}>
                    <div style={{width: '100%', height: 'auto'}}>
                        <p style={{fontSize: 50 / proporcional, lineHeight: `${55 / proporcional}px`, marginBottom: 0, fontWeight: 800, fontFamily: 'Montserrat, sans-serif',
                            textAlign: 'center', marginBottom: 31 / proporcional}}>
                            Agencia digital
                        </p>
                        <p style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Hind, sans-serif',
                            textAlign: 'center', marginBottom: 31 / proporcional, color: 'rgb(136, 136, 136)'}}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibhie euismod tincidut ut laoreet dolore magna aliquam erat volupat.
                        </p>
                    </div>                    
                </div>
                <div className='' style={{width: '100%', height: 'auto', paddingLeft: 300 / proporcional, paddingRight: 300 / proporcional,
                        paddingBottom: 90 / proporcional}}>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                        <div className='d-flex justify-content-between' style={{width: '49.5%', height: 'auto'}}>
                            <div style={{width: '49.5%', height: 305 / proporcional, background: '#dbe4eb'}}>

                            </div>
                            <div style={{width: '49.5%', height: 305 / proporcional, background: '#dbe4eb'}}>

                            </div>
                        </div>
                        <div style={{width: '49.5%', height: 305 / proporcional, background: '#dbe4eb'}}>

                        </div>
                    </div>                    
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 30 / proporcional}}>
                        <div style={{width: '49.5%', height: 305 / proporcional, background: '#dbe4eb'}}>

                        </div>
                        <div className='d-flex justify-content-between' style={{width: '49.5%', height: 'auto'}}>
                            <div style={{width: '49.5%', height: 305 / proporcional, background: '#dbe4eb'}}>

                            </div>
                            <div style={{width: '49.5%', height: 305 / proporcional, background: '#dbe4eb'}}>

                            </div>
                        </div>
                    </div>                    
                </div>                    
            </div>                    
        </div>

    )
}