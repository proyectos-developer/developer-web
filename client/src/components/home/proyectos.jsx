import React from 'react'

export default function Proyectos ({proporcional}){

    return (
        <div style={{width: '100%', height: 480 / proporcional}}>
            <div id='carouselHomeProyectos' className='carousel slide' data-bs-ride='carousel'>
                <div className='carousel-inner'>
                    <div className='carousel-item active' data-bs-interval='3000'>
                        <div className='d-flex' style={{width: '100%', height: 480 / proporcional}}>
                            <div className='position-relative' style={{width: '25%', height: 480 / proporcional}}>

                            </div>
                            <div className='position-relative' style={{width: '25%', height: 480 / proporcional}}>

                            </div>
                            <div className='position-relative' style={{width: '25%', height: 480 / proporcional}}>

                            </div>
                            <div className='position-relative' style={{width: '25%', height: 480 / proporcional}}>

                            </div>
                        </div>
                    </div>
                    <div className='carousel-item' data-bs-interval='3000'>
                        <div className='d-flex' style={{width: '100%', height: 480 / proporcional}}>
                            <div className='position-relative' style={{width: '25%', height: 480 / proporcional}}>

                            </div>
                            <div className='position-relative' style={{width: '25%', height: 480 / proporcional}}>

                            </div>
                            <div className='position-relative' style={{width: '25%', height: 480 / proporcional}}>

                            </div>
                            <div className='position-relative' style={{width: '25%', height: 480 / proporcional}}>

                            </div>
                        </div>
                    </div>
                    <div className='carousel-item' data-bs-interval='3000'>
                        <div className='d-flex' style={{width: '100%', height: 480 / proporcional}}>
                            <div className='position-relative' style={{width: '25%', height: 480 / proporcional}}>

                            </div>
                            <div className='position-relative' style={{width: '25%', height: 480 / proporcional}}>

                            </div>
                            <div className='position-relative' style={{width: '25%', height: 480 / proporcional}}>

                            </div>
                            <div className='position-relative' style={{width: '25%', height: 480 / proporcional}}>

                            </div>
                        </div>
                    </div>
                </div>
                <button className='carousel-control-prev' type='button' data-bs-target='#carouselHomeProyectos' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'/>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button className='carousel-control-next' type='button' data-bs-target='#carouselHomeProyectos' data-bs-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'/>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>
        </div>
    )
}