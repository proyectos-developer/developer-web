import React from 'react'

import ReactPlayer from 'react-player'

import video_restaurante from '../../assets/videos/video_restaurante.mp4'
import video_transporte from '../../assets/videos/video_transporte.mp4'
import video_ferreteria from '../../assets/videos/video_ferreteria.mp4'
import video_agencia from '../../assets/videos/video_agencia.mp4'
import video_veterinaria from '../../assets/videos/video_veterinaria.mp4'
import video_comfisa from '../../assets/videos/video_comfisa.mp4'
import video_farcon from '../../assets/videos/video_farcon.mp4'
import video_hospital from '../../assets/videos/video_hospital.mp4'

export default function VideosTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '100%', height: 400 / proporcional}}>
                    <ReactPlayer
                        className=''
                        url= {video_hospital}
                        width='100%'
                        height={400 / proporcional}
                        style={{background: '#efefef'}}
                        playing={true}
                        loop={true}/>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '100%', height: 400 / proporcional}}>
                    <ReactPlayer
                        className=''
                        url= {video_restaurante}
                        width='100%'
                        height={400 / proporcional}
                        style={{background: '#efefef'}}
                        playing={true}
                        loop={true}/>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '100%', height: 400 / proporcional}}>
                    <ReactPlayer
                        className=''
                        url= {video_transporte}
                        width='100%'
                        height={400 / proporcional}
                        style={{background: '#efefef'}}
                        playing={true}
                        loop={true}/>
                </div>
        
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '100%', height: 400 / proporcional}}>
                    <ReactPlayer
                        className=''
                        url= {video_ferreteria}
                        width='100%'
                        height={400 / proporcional}
                        style={{background: '#efefef'}}
                        playing={true}
                        loop={true}/>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '100%', height: 400 / proporcional}}>
                    <ReactPlayer
                        className=''
                        url= {video_agencia}
                        width='100%'
                        height={400 / proporcional}
                        style={{background: '#efefef'}}
                        playing={true}
                        loop={true}/>
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '100%', height: 400 / proporcional}}>
                    <ReactPlayer
                        className=''
                        url= {video_veterinaria}
                        width='100%'
                        height={400 / proporcional}
                        style={{background: '#efefef'}}
                        playing={true}
                        loop={true}/>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '100%', height: 400 / proporcional}}>
                    <ReactPlayer
                        className=''
                        url= {video_farcon}
                        width='100%'
                        height={400 / proporcional}
                        style={{background: '#efefef'}}
                        playing={true}
                        loop={true}/>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '100%', height: 400 / proporcional}}>
                    <ReactPlayer
                        className=''
                        url= {video_comfisa}
                        width='100%'
                        height={400 / proporcional}
                        style={{background: '#efefef'}}
                        playing={true}
                        loop={true}/>
                </div>
            </div>
        </div>
    )
}
