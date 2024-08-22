import React, { useEffect, useState } from 'react'

import {useDispatch, useSelector} from 'react-redux'

import {proyectosdata} from '../../redux/slice/proyectosdata.js'
import {proyectosConstants} from '../../uri/proyectos-constants.js'

import CardProyectoCell from './cards/proyectocell.jsx'

export default function ProyectosCell ({proporcional}){

    const dispatch = useDispatch()

    const [lista_proyectos, setListaProyectos] = useState([])

    const {get_proyectos} = useSelector(({proyectos_data}) => proyectos_data)

    useEffect (() => {
        dispatch(proyectosdata(proyectosConstants(0, 0, 0, 0, 0, 100, false).get_proyectos))
    }, [])

    useEffect (() => {
        if (get_proyectos && get_proyectos.success === true && get_proyectos.proyectos){
            setListaProyectos (get_proyectos.proyectos)
        }
    }, [get_proyectos])

    const [seleccion_menu, setSeleccionMenu] = useState('todo')

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 36 / proporcional, marginBottom: 25 / proporcional,
                     paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                    <div style={{width: '25%', height: 28 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 5 / proporcional, 
                            fontWeight: seleccion_menu === 'todo' ? 700 : 500,
                             color: seleccion_menu === 'todo' ? '#2d572c': 'rgb(136, 136, 136, 136)',
                            textAlign: 'center', cursor: 'pointer'}} onClick={() => {dispatch(proyectosdata(proyectosConstants(0, 0, false).get_proyectos)); setSeleccionMenu('todo')}}>
                            Todo
                        </p>
                        {
                            seleccion_menu === 'todo' ? (
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                    <div style={{width: '20%', height: 2 / proporcional, background: '#2d572c'}}/>
                                </div>
                            ) : null
                        }
                    </div>
                    <div style={{width: '25%', height: 28 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 5 / proporcional,  
                            fontWeight: seleccion_menu === 'web' ? 700 : 500,
                             color: seleccion_menu === 'web' ? '#2d572c': 'rgb(136, 136, 136, 136)',
                            textAlign: 'center', cursor: 'pointer'}} onClick={() => {dispatch(proyectosdata(proyectosConstants(1, 0, false).get_proyectos)); setSeleccionMenu('web')}}>
                            Web
                        </p>
                        {
                            seleccion_menu === 'web' ? (
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                    <div style={{width: '20%', height: 2 / proporcional, background: '#2d572c'}}/>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 36 / proporcional, marginBottom: 25 / proporcional,
                     paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                    <div style={{width: '25%', height: 28 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 5 / proporcional, fontWeight: 800, 
                            fontWeight: seleccion_menu === 'apps' ? 700 : 500,
                             color: seleccion_menu === 'apps' ? '#2d572c': 'rgb(136, 136, 136, 136)',
                            textAlign: 'center', cursor: 'pointer'}} onClick={() => {dispatch(proyectosdata(proyectosConstants(2, 0, false).get_proyectos)); setSeleccionMenu('apps')}}>
                            Apps
                        </p>
                        {
                            seleccion_menu === 'apps' ? (
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                    <div style={{width: '20%', height: 2 / proporcional, background: '#2d572c'}}/>
                                </div>
                            ) : null
                        }
                    </div>
                    <div style={{width: '25%', height: 28 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 5 / proporcional, fontWeight: 800,
                            fontWeight: seleccion_menu === 'software' ? 700 : 500,
                             color: seleccion_menu === 'software' ? '#2d572c': 'rgb(136, 136, 136, 136)',
                            textAlign: 'center', cursor: 'pointer'}} onClick={() => {dispatch(proyectosdata(proyectosConstants(4, 0, false).get_proyectos)); setSeleccionMenu('software')}}>
                            Software
                        </p>
                        {
                            seleccion_menu === 'software' ? (
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                    <div style={{width: '20%', height: 2 / proporcional, background: '#2d572c'}}/>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 36 / proporcional, marginBottom: 25 / proporcional,
                     paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                    <div style={{width: '25%', height: 28 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 5 / proporcional, fontWeight: 800,
                            fontWeight: seleccion_menu === 'marketing' ? 700 : 500,
                             color: seleccion_menu === 'marketing' ? '#2d572c': 'rgb(136, 136, 136, 136)',
                            textAlign: 'center', cursor: 'pointer'}} onClick={() => {dispatch(proyectosdata(proyectosConstants(3, 0, false).get_proyectos)); setSeleccionMenu('marketing')}}>
                            Marketing
                        </p>
                        {
                            seleccion_menu === 'marketing' ? (
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                    <div style={{width: '20%', height: 2 / proporcional, background: '#2d572c'}}/>
                                </div>
                            ) : null
                        }
                    </div>
                    <div style={{width: '25%', height: 28 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 5 / proporcional, fontWeight: 800,
                            fontWeight: seleccion_menu === 'otros' ? 700 : 500,
                             color: seleccion_menu === 'otros' ? '#2d572c': 'rgb(136, 136, 136, 136)',
                            textAlign: 'center', cursor: 'pointer'}} onClick={() => {dispatch(proyectosdata(proyectosConstants(5, 0, false).get_proyectos)); setSeleccionMenu('otros')}}>
                            Otros
                        </p>
                        {
                            seleccion_menu === 'otros' ? (
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                    <div style={{width: '20%', height: 2 / proporcional, background: '#2d572c'}}/>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
                <div className='rounded-pill' style={{width: '100%', height: 2 / proporcional, background: '#ececec', marginBottom: 25 / proporcional,
                     paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}/>
                {
                    lista_proyectos && lista_proyectos.length > 0 ? ( 
                        lista_proyectos.map ((proyecto, numproy) => {
                            return (
                                <div className='d-flex justify-content-center' style={{width: '100%'}}>
                                    <CardProyectoCell proyecto={proyecto} key={numproy} index={numproy} proporcional={proporcional}/>
                                </div>
                            )
                        })
                    ) : null
                }
                </div>
        </div>
    )
}