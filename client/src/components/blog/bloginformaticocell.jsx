import React, { useState } from "react"

import icono_right from '../../assets/iconos/icono_right_green_96.png'
import icono_heart from '../../assets/iconos/icono_heart_green_96.png'
import icono_coment from '../../assets/iconos/icono_coment_green_96.png'
import icono_clip from '../../assets/iconos/icono_clip_white_96.png'

import icono_right_two from '../../assets/iconos/icono_right_two_96.png'
import icono_left_two from '../../assets/iconos/icono_left_two_96.png'

import icono_search from '../../assets/iconos/icono_search_black_96.png'

export default function BlogInformaticoCell ({proporcional}){

    const [search, setSearch] = useState('')

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto', paddingRight: 300 / proporcional, paddingLeft: 300 / proporcional, paddingTop: 130 / proporcional, paddingBottom: 130 / proporcional}}>
                <div className="d-flex justify-content-between" style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '76%', height: 'auto'}}>
                        <div style={{width: '100%', height: 'auto', marginBottom: 27 / proporcional}}>
                            <div style={{width: '100%', height: 650 / proporcional, background: '#dbe4eb', marginBottom: 27 / proporcional}}/>
                            <div style={{width: '100%', height: 'auto'}}>
                                <div className='d-flex justify-content-start' style={{width: '100%',  height: 26 / proporcional, marginBottom: 9 / proporcional}}>
                                    <div className='rounded' style={{width: 150 / proporcional, height: 26 / proporcional, background: '#2d572c'}}>
                                        <p style={{fontSize: 12 / proporcional, textAlign: 'center', lineHeight: `${26 / proporcional}px`, color: 'white', fontFamily: 'Montserrat, sans-serif',
                                                fontWeight: 600, color: 'white'}}>
                                            Febrero 18, 2024
                                        </p>
                                    </div>
                                </div>
                                <div style={{width: '100%', height: 'auto', marginBottom: 22 / proporcional}}>
                                    <p style={{fontSize:  40 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0, fontWeight: 800, fontFamily: 'Montserrat, sans-serif',
                                        color: 'rgb(22, 36, 65)'}}>
                                        Nuevas aplicaciones - Ideas Frescas
                                    </p>
                                </div>
                                <div style={{width: '100%', height: 'auto', marginBottom: 25 / proporcional}}>
                                    <p style={{fontSize:  18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Hind, sans-serif',
                                        color: 'rgb(136, 136, 136)'}}>
                                        Lorem ipsum dolor asmet, conse ctetuer adipiscing elit, sed diam nonum nibhie euismod. Facilisis at vero eros et accumsan et iusto odio dignissim qui
                                        blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nami liber tempor cum soluta nobis elefifend option congue nihil imperdiet doming id qudo mazim placerat facer possim...
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 60 / proporcional}}>
                                <did className='d-flex' style={{width: '100%', height: 60 / proporcional}}>
                                    <div className='d-flex justify-content-start' style={{width: '50%'}}>
                                        <img src={icono_coment} style={{width: 18 / proporcional, height: 18 / proporcional, marginTop: 21 / proporcional, marginBottom: 21 / proporcional,
                                                marginRight: 10 / proporcional}}/>
                                        <p style={{fontSize: 14 / proporcional, lineHeight: `${60 / proporcional}px`, fontFamily: 'Montserrat, sans-serif', fontWeight:700, color: 'rgb(22, 36, 65)',
                                                marginRight: 10 / proporcional}}>
                                            Comentarios
                                        </p>
                                        <img src={icono_heart} style={{width: 18 / proporcional, height: 18 / proporcional, marginTop: 21 / proporcional, marginBottom: 21 / proporcional,
                                                marginRight: 10 / proporcional}}/>
                                        <p style={{fontSize: 14 / proporcional, lineHeight: `${60 / proporcional}px`, fontFamily: 'Montserrat, sans-serif', fontWeight:700, color: 'rgb(22, 36, 65)',
                                                marginRight: 10 / proporcional}}>
                                            LIKE(S)
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: '50%', height: 60 / proporcional, paddingTop: 18 / proporcional, paddingBottom: 18 / proporcional,
                                            cursor: 'pointer'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 800, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', 
                                            color: 'rgb(136, 136, 136)', marginRight: 10 / proporcional}}>
                                            Ver más
                                        </p>
                                        <img src={icono_right} style={{width: 24 / proporcional, height: 24 / proporcional}}/>
                                    </div>
                                </did>
                            </div>
                            <div className="position-relative" style={{width: '100%', height: 305 / proporcional, background: '#172bde', marginBottom: 55 / proporcional}}>
                                <div className="position-absolute top-50 start-50 translate-middle" style={{width: 800 / proporcional, height: 'auto'}}>
                                    <div className="d-flex justify-content-center" style={{width: 800 / proporcional, height: 'auto'}}>
                                        <img src={icono_clip} style={{width: 40 / proporcional, height: 40 / proporcional, marginBottom: 15 / proporcional}}/>
                                    </div>
                                    <div className="d-flex justify-content-center" style={{width: 800 / proporcional, height: 'auto'}}>
                                        <p style={{fontSize: 25 / proporcional, fontWeight: 400, lineHeight: `${26 / proporcional}px`, fontFamily: 'Hind, sans-serif', color: 'white',
                                            textAlign: 'center'}}>
                                            Data Breaches in Healthcare Continue <br/> To be serious Issue
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 27 / proporcional}}>
                            <div style={{width: '100%', height: 650 / proporcional, background: '#dbe4eb', marginBottom: 27 / proporcional}}/>
                            <div style={{width: '100%', height: 'auto'}}>
                                <div className='d-flex justify-content-start' style={{width: '100%',  height: 26 / proporcional, marginBottom: 9 / proporcional}}>
                                    <div className='rounded' style={{width: 150 / proporcional, height: 26 / proporcional, background: '#2d572c'}}>
                                        <p style={{fontSize: 12 / proporcional, textAlign: 'center', lineHeight: `${26 / proporcional}px`, color: 'white', fontFamily: 'Montserrat, sans-serif',
                                                fontWeight: 600, color: 'white'}}>
                                            Febrero 18, 2024
                                        </p>
                                    </div>
                                </div>
                                <div style={{width: '100%', height: 'auto', marginBottom: 22 / proporcional}}>
                                    <p style={{fontSize:  40 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0, fontWeight: 800, fontFamily: 'Montserrat, sans-serif',
                                        color: 'rgb(22, 36, 65)'}}>
                                        Entrevista con CEO
                                    </p>
                                </div>
                                <div style={{width: '100%', height: 'auto', marginBottom: 25 / proporcional}}>
                                    <p style={{fontSize:  18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontWeight: 400, fontFamily: 'Hind, sans-serif',
                                        color: 'rgb(136, 136, 136)'}}>
                                        Lorem ipsum dolor asmet, conse ctetuer adipiscing elit, sed diam nonum nibhie euismod. Facilisis at vero eros et accumsan et iusto odio dignissim qui
                                        blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nami liber tempor cum soluta nobis elefifend option congue nihil imperdiet doming id qudo mazim placerat facer possim...
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 60 / proporcional}}>
                                <did className='d-flex' style={{width: '100%', height: 60 / proporcional}}>
                                    <div className='d-flex justify-content-start' style={{width: '50%'}}>
                                        <img src={icono_coment} style={{width: 18 / proporcional, height: 18 / proporcional, marginTop: 21 / proporcional, marginBottom: 21 / proporcional,
                                                marginRight: 10 / proporcional}}/>
                                        <p style={{fontSize: 14 / proporcional, lineHeight: `${60 / proporcional}px`, fontFamily: 'Montserrat, sans-serif', fontWeight:700, color: 'rgb(22, 36, 65)',
                                                marginRight: 10 / proporcional}}>
                                            Comentarios
                                        </p>
                                        <img src={icono_heart} style={{width: 18 / proporcional, height: 18 / proporcional, marginTop: 21 / proporcional, marginBottom: 21 / proporcional,
                                                marginRight: 10 / proporcional}}/>
                                        <p style={{fontSize: 14 / proporcional, lineHeight: `${60 / proporcional}px`, fontFamily: 'Montserrat, sans-serif', fontWeight:700, color: 'rgb(22, 36, 65)',
                                                marginRight: 10 / proporcional}}>
                                            LIKE(S)
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-end' style={{width: '50%', height: 60 / proporcional, paddingTop: 18 / proporcional, paddingBottom: 18 / proporcional,
                                            cursor: 'pointer'}}>
                                        <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 800, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', 
                                            color: 'rgb(136, 136, 136)', marginRight: 10 / proporcional}}>
                                            Ver más
                                        </p>
                                        <img src={icono_right} style={{width: 24 / proporcional, height: 24 / proporcional}}/>
                                    </div>
                                </did>
                            </div>
                            <div className="position-relative" style={{width: '100%', height: 305 / proporcional, background: '#172bde', marginBottom: 55 / proporcional}}>
                                <div className="position-absolute top-50 start-50 translate-middle" style={{width: 800 / proporcional, height: 'auto'}}>
                                    <div className="d-flex justify-content-center" style={{width: 800 / proporcional, height: 'auto'}}>
                                    </div>
                                    <div className="d-flex justify-content-start" style={{width: 800 / proporcional, height: 'auto'}}>
                                        <p style={{fontSize: 25 / proporcional, fontWeight: 400, lineHeight: `${26 / proporcional}px`, fontFamily: 'Hind, sans-serif', color: 'white',
                                            textAlign: 'left'}}>
                                            "Stopping Krack Attack increase your<br/> Net visibility"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center" style={{width: '100%', height: 30 / proporcional}}>
                            <div style={{width: 20 / proporcional, height: 30 / proporcional}}>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: '#2d572c', marginBottom: 0, textAlign: 'center',
                                    fontFamily: 'Hind, sans-serif', fontWeight: 400, cursor: 'pointer'}}>
                                    1
                                </p>
                            </div>
                            <div style={{width: 20 / proporcional, height: 30 / proporcional}}>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: 'rgb(22, 36, 65)', marginBottom: 0, textAlign: 'center',
                                    fontFamily: 'Hind, sans-serif', fontWeight: 400, cursor: 'pointer'}}>
                                    2
                                </p>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: 50 / proporcional, height: 30 / proporcional}}>
                                <img src={icono_right_two} style={{width: 30 / proporcional, height: 30 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '22%', height: 'auto'}}>
                        <div style={{width: '100%', height: 'auto', marginBottom: 35 / proporcional}}>
                            <div style={{width: 189 / proporcional, height: 189 / proporcional, marginBottom: 20 / proporcional}}>
                                <div style={{width: '100%', height: 189 / proporcional, background: '#dbe4eb'}}/>
                            </div>
                            <div style={{width: '100%', height: 'auto'}}>
                                <p style={{fontSize: 24 / proporcional, lineHeight: `${28 / proporcional}px`, color: 'rgb(22, 36, 65)', fontWeight: 800, fontFamily: 'Montserrat, sans-serif'}}>
                                    Michael Bauer
                                </p>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(170, 170, 170)', fontWeight: 400, fontFamily: 'Hind, sans-serif'}}>
                                    Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diamis onum nibhie vixtus euismod.
                                </p>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 35 / proporcional}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(22, 36, 65)',
                                fontWeight: 800, marginBottom: 17 / proporcional}}>
                                Categorías de post
                            </p>
                            <div style={{width: '100%', height: 'auto'}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(28, 52, 103)',
                                    fontWeight: 600, marginBottom: 17 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional}}>
                                    Inspiration (10)
                                </p>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(28, 52, 103)',
                                    fontWeight: 600, marginBottom: 17 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional}}>
                                    Lifestyle (2)
                                </p>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(28, 52, 103)',
                                    fontWeight: 600, marginBottom: 17 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional}}>
                                    News (4)
                                </p>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(28, 52, 103)',
                                    fontWeight: 600, marginBottom: 17 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional}}>
                                    Fotografía (12)
                                </p>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 35 / proporcional}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(22, 36, 65)',
                                fontWeight: 800, marginBottom: 17 / proporcional}}>
                                Noticias recientes
                            </p>
                            <div style={{width: '100%', height: 'auto'}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(28, 52, 103)',
                                    fontWeight: 400, marginBottom: 17 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional}}>
                                    Good Measures of success
                                </p>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(28, 52, 103)',
                                    fontWeight: 400, marginBottom: 17 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional}}>
                                    10 Successful French Media
                                </p>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(28, 52, 103)',
                                    fontWeight: 400, marginBottom: 17 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional}}>
                                    10 Biggest Tech Fun Jobs
                                </p>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(28, 52, 103)',
                                    fontWeight: 400, marginBottom: 17 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional}}>
                                    How To Become Tech Expert
                                </p>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 35 / proporcional}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(22, 36, 65)',
                                fontWeight: 800, marginBottom: 17 / proporcional}}>
                                Tags
                            </p>
                            <div style={{width: '100%', height: 'auto'}}>
                                <div className="d-flex justify-content-between" style={{width: '100%', height: 60 / proporcional, marginBottom: 2 / proporcional}}>
                                    <div className='rounded' 
                                        style={{width: '49%', height: 60 / proporcional, background: '#dbe4eb', paddingTop: 17 / proporcional, paddingBottom: 17 / proporcional}}>
                                        <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(28, 52, 103)',
                                            fontWeight: 400, marginBottom: 17 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional, textAlign: 'center'}}>
                                            APPLE
                                        </p>
                                    </div>
                                    <div className='rounded' 
                                        style={{width: '49%', height: 60 / proporcional, background: '#dbe4eb', paddingTop: 17 / proporcional, paddingBottom: 17 / proporcional}}>
                                        <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(28, 52, 103)',
                                            fontWeight: 400, marginBottom: 17 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional, textAlign: 'center'}}>
                                            APPS
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between" style={{width: '100%', height: 60 / proporcional, marginBottom: 2 / proporcional}}>
                                    <div className='rounded' 
                                        style={{width: '49%', height: 60 / proporcional, background: '#dbe4eb', paddingTop: 17 / proporcional, paddingBottom: 17 / proporcional}}>
                                        <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(28, 52, 103)',
                                            fontWeight: 400, marginBottom: 17 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional, textAlign: 'center'}}>
                                            BUSINESS
                                        </p>
                                    </div>
                                    <div className='rounded' 
                                        style={{width: '49%', height: 60 / proporcional, background: '#dbe4eb', paddingTop: 17 / proporcional, paddingBottom: 17 / proporcional}}>
                                        <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(28, 52, 103)',
                                            fontWeight: 400, marginBottom: 17 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional, textAlign: 'center'}}>
                                            DESIGN
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between" style={{width: '100%', height: 60 / proporcional, marginBottom: 2 / proporcional}}>
                                    <div className='rounded' 
                                        style={{width: '70%', height: 60 / proporcional, background: '#dbe4eb', paddingTop: 17 / proporcional, paddingBottom: 17 / proporcional}}>
                                        <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(28, 52, 103)',
                                            fontWeight: 400, marginBottom: 17 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional, textAlign: 'center'}}>
                                            PHOTOGRAPHY
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between" style={{width: '100%', height: 60 / proporcional, marginBottom: 2 / proporcional}}>
                                    <div className='rounded' 
                                        style={{width: '49%', height: 60 / proporcional, background: '#dbe4eb', paddingTop: 17 / proporcional, paddingBottom: 17 / proporcional}}>
                                        <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(28, 52, 103)',
                                            fontWeight: 400, marginBottom: 17 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional, textAlign: 'center'}}>
                                            SCIENCE
                                        </p>
                                    </div>
                                    <div className='rounded' 
                                        style={{width: '49%', height: 60 / proporcional, background: '#dbe4eb', paddingTop: 17 / proporcional, paddingBottom: 17 / proporcional}}>
                                        <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(28, 52, 103)',
                                            fontWeight: 400, marginBottom: 17 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional, textAlign: 'center'}}>
                                            TECH
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 35 / proporcional, marginBottom: 65 / proporcional}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0, fontFamily: 'Montserrat, sans-serif', color: 'rgb(22, 36, 65)',
                                fontWeight: 800, marginBottom: 17 / proporcional}}>
                                Instagram
                            </p>
                            <div style={{width: '100%', height: 'auto'}}>
                                <div className="d-flex justify-content-between" style={{width: '100%', height: 'auto', marginBottom: 6 / proporcional}}>
                                    <div style={{width: '24%', height: 70 / proporcional, background: '#bde4eb'}}/>
                                    <div style={{width: '24%', height: 70 / proporcional, background: '#bde4eb'}}/>
                                    <div style={{width: '24%', height: 70 / proporcional, background: '#bde4eb'}}/>
                                    <div style={{width: '24%', height: 70 / proporcional, background: '#bde4eb'}}/>
                                </div>
                                <div className="d-flex justify-content-between" style={{width: '100%', height: 'auto', marginBottom: 6 / proporcional}}>
                                    <div style={{width: '24%', height: 70 / proporcional, background: '#bde4eb'}}/>
                                    <div style={{width: '24%', height: 70 / proporcional, background: '#bde4eb'}}/>
                                    <div style={{width: '24%', height: 70 / proporcional, background: '#bde4eb'}}/>
                                    <div style={{width: '24%', height: 70 / proporcional, background: '#bde4eb'}}/>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex rounded" style={{width: 300 / proporcional, height: 60 / proporcional, background: '#f6f6f6'}}>
                            <input 
                                type='default'
                                id='search'
                                className="form-control border-0"
                                style={{width: 250 / proporcional, height: 60 / proporcional, fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`,
                                    color: '#888888', background: '#f6f6f6'}}
                                value={search}
                                onChange={(event) => setSearch (event.target.value)}
                                placeholder='Buscar...'
                            />
                            <div style={{width: 50 / proporcional, height: 50 / proporcional}}>
                                <img src={icono_search} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 13 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}