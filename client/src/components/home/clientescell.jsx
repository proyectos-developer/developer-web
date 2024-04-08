import React from 'react'

export default function ClientesCell ({proporcional}){
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 350 / proporcional, backtround: 'rgb(219, 228, 238)'}}>
                <div id='carouselHomeClientes' className='carousel slide' style={{width: '100%', height: 350 / proporcional}}>
                    <div className='carousel-inner' style={{width: '100%', height: 350 / proporcional}}>
                        <div className='d-flex carousel-item active' style={{width: '100%', height: 350 / proporcional}} data-bs-interval='3000'>
                            <div style={{width: '50%', height: 350 / proporcional, paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional, 
                                background: 'rgba(219, 228, 238, 0.8)'}}/>
                            <div style={{width: '50%', height: 350 / proporcional, paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional, 
                                background: 'rgba(219, 228, 238, 0.4)'}}/>
                        </div>
                        <div className='d-flex carousel-item' style={{width: '100%', height: 350 / proporcional}} data-bs-interval='3000'>
                            <div style={{width: '50%', height: 350 / proporcional, paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional, 
                                background: 'rgba(219, 228, 238, 0.8)'}}/>
                            <div style={{width: '50%', height: 350 / proporcional, paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional, 
                                background: 'rgba(219, 228, 238, 0.8)'}}/>
                        </div>
                        <div className='d-flex carousel-item ' style={{width: '100%', height: 350 / proporcional}} data-bs-interval='3000'>
                            <div style={{width: '50%', height: 350 / proporcional, paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional, 
                                background: 'rgba(219, 228, 238, 0.4)'}}/>
                            <div style={{width: '50%', height: 350 / proporcional, paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional, 
                                background: 'rgba(219, 228, 238, 0.8)'}}/>
                        </div>
                        <div className='d-flex carousel-item ' style={{width: '100%', height: 350 / proporcional}} data-bs-interval='3000'>
                            <div style={{width: '50%', height: 350 / proporcional, paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional, 
                                background: 'rgba(219, 228, 238, 0.8)'}}/>
                            <div style={{width: '50%', height: 350 / proporcional, paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional, 
                                background: 'rgba(219, 228, 238, 0.4)'}}/>
                        </div>
                        <div className='d-flex carousel-item ' style={{width: '100%', height: 350 / proporcional}} data-bs-interval='3000'>
                            <div style={{width: '50%', height: 350 / proporcional, paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional, 
                                background: 'rgba(219, 228, 238, 0.8)'}}/>
                            <div style={{width: '50%', height: 350 / proporcional, paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional, 
                                background: 'rgba(219, 228, 238, 0.8)'}}/>
                        </div>
                        <div className='d-flex carousel-item ' style={{width: '100%', height: 350 / proporcional}} data-bs-interval='3000'>
                            <div style={{width: '50%', height: 350 / proporcional, paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional, 
                                background: 'rgba(219, 228, 238, 0.4)'}}/>
                            <div style={{width: '50%', height: 350 / proporcional, paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional, 
                                background: 'rgba(219, 228, 238, 0.8)'}}/>
                        </div>
                        <div className='d-flex carousel-item ' style={{width: '100%', height: 350 / proporcional}} data-bs-interval='3000'>
                            <div style={{width: '50%', height: 350 / proporcional, paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional, 
                                background: 'rgba(219, 228, 238, 0.8)'}}/>
                            <div style={{width: '50%', height: 350 / proporcional, paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional, 
                                background: 'rgba(219, 228, 238, 0.4)'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}