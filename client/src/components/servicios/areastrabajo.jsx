import React, { useState } from 'react'

import {useNavigate} from 'react-router-dom'

import servicios_software from '../../assets/images/servicios_software_280.png'
import servicios_web from '../../assets/images/servicios_web_280.png'
import servicios_moviles from '../../assets/images/servicios_moviles_280.png'
import servicios_consultoria from '../../assets/images/servicios_consultoria_280.png'
import servicios_ecommerce from '../../assets/images/servicios_ecommerce_280.png'
import servicios_soporte from '../../assets/images/servicios_soporte_280.png'
import servicios_marketing from '../../assets/images/servicios_marketing_280.png'
import servicios_cloud from '../../assets/images/servicios_cloud_280.png'

export default function AreasTrabajo ({proporcional}){

    const navigate = useNavigate()

    const [seleccion_servicio, setSeleccionServicio] = useState ('')

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 170 / proporcional, paddingBottom: 120 / proporcional, paddingLeft: 300 / proporcional, paddingRight: 300 / proporcional,
                    background: '#dbe4eb'}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <div className='position-relative' style={{width: '33%', height: 'auto'}} 
                        onMouseOver={() => setSeleccionServicio('consultoria')} onMouseLeave={() => setSeleccionServicio('')}>
                    <div style={{width: '100%', height: 'auto', cursor: 'pointer'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 280 / proporcional}}>
                            <div className='rounded-circle' style={{width: 280 / proporcional, height: 280 / proporcional}}>
                                <img className='rounded-circle' src={servicios_consultoria} style={{width: 280 / proporcional, height: 280 / proporcional}}/>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                            <p style={{fontSize: 22 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 800,
                                    color: 'rgb(22, 36, 65)', textAlign: 'center'}}>
                                Consultoría digital
                            </p>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 400,
                                    color: 'rgb(117, 117, 117)', textAlign: 'center'}}>
                                Nuestro equipo de expertos en consultoría digital está aquí para ayudarte a navegar por el mundo digital y aprovechar al máximo las oportunidades que ofrece. Ya sea que estés buscando mejorar tu presencia en línea, optimizar tus procesos comerciales o implementar nuevas tecnologías, estamos aquí para ayudarte a convertir tus objetivos digitales en realidad.
                            </p>
                        </div>
                    </div>
                    {
                        seleccion_servicio === 'consultoria' ? (
                            <div className='position-absolute start-0 top-0 shadow rounded' style={{width: '100%', height: '100%', background: 'rgba(23, 43, 222, 0.8)'}}>
                                <div className='position-absolute start-50 top-50 translate-middle' style={{width: '100%', height: 'auto'}}> 
                                    <div style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 400,
                                                color: 'white'}}>
                                            Nos enorgullece ofrecer soluciones personalizadas que se adapten perfectamente a las necesidades y objetivos únicos de tu negocio. Trabajamos en estrecha colaboración contigo para entender tu negocio, tu mercado objetivo y tus desafíos, y desarrollamos una estrategia de consultoría digital que te ayude a alcanzar el éxito.
                                        </p>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 400,
                                                color: 'white'}}>
                                            Desde la auditoría de tu presencia en línea hasta la creación de una estrategia digital integral, nos esforzamos por ofrecer recomendaciones claras y prácticas que te ayuden a alcanzar tus metas comerciales. Utilizamos las últimas tecnologías y mejores prácticas en consultoría digital para garantizar que estés bien posicionado para competir en el mercado digital actual.
                                        </p>
                                        <div style={{width: '100%', height: 'auto'}}>
                                            <button className='btn border-0' style={{width: '30%', height: 30 / proporcional, fontSize: 16 / proporcional, color: 'white',
                                                background: 'transparent', fontWeight: 600, marginBottom: 5 / proporcional, textAlign: 'left'}}
                                                onClick={() => {navigate ('/nuestros-servicios/consultoria-digital'); window.scrollTo(0, 0)}}>Ver más</button>
                                            <div className='rounded' style={{width: '20%', height: 2 / proporcional, background: 'white'}}/>
                                        </div>  
                                    </div>  
                                </div>  
                            </div>  
                        ) : null
                    }
                </div>
                <div className='position-relative' style={{width: '33%', height: 'auto'}} 
                        onMouseOver={() => setSeleccionServicio('web')} onMouseLeave={() => setSeleccionServicio('')}>
                    <div style={{width: '100%', height: 'auto', cursor: 'pointer'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 280 / proporcional}}>
                            <div className='rounded-circle' style={{width: 280 / proporcional, height: 280 / proporcional}}>
                                <img className='rounded-circle' src={servicios_web} style={{width: 280 / proporcional, height: 280 / proporcional}}/>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                            <p style={{fontSize: 22 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 800,
                                    color: 'rgb(22, 36, 65)', textAlign: 'center'}}>
                                Desarrollo web
                            </p>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 400,
                                    color: 'rgb(117, 117, 117)', textAlign: 'center'}}>
                                Nuestro equipo de expertos en desarrollo web combina creatividad, experiencia técnica y atención al detalle para crear sitios web personalizados que destacan en el competitivo panorama digital. Ya sea que necesites un sitio web corporativo, una tienda en línea, una plataforma de comercio electrónico o una aplicación web, estamos aquí para convertir tus ideas en realidad.
                            </p>
                        </div>
                    </div>
                    {
                        seleccion_servicio === 'web' ? (
                            <div className='position-absolute start-0 top-0 shadow rounded' style={{width: '100%', height: '100%', background: 'rgba(23, 43, 222, 0.8)'}}>
                                <div className='position-absolute start-50 top-50 translate-middle' style={{width: '100%', height: 'auto'}}> 
                                    <div style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 400,
                                                color: 'white'}}>
                                            Nos enorgullece ofrecer un enfoque centrado en el cliente en todo lo que hacemos. Trabajamos en estrecha colaboración contigo para comprender tus necesidades y objetivos comerciales, y desarrollar una estrategia de desarrollo web que se alinee perfectamente con tus metas y valores.
                                        </p>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 400,
                                                color: 'white'}}>
                                            Desde el diseño visual hasta la funcionalidad del sitio, nos esforzamos por ofrecer una experiencia de usuario excepcional en cada paso del camino. Utilizamos las últimas tecnologías y prácticas de desarrollo web para garantizar que tu sitio no solo sea atractivo y fácil de usar, sino también rápido, seguro y optimizado para SEO.<br/>
                                        </p>
                                        <div style={{width: '100%', height: 'auto'}}>
                                            <button className='btn border-0' style={{width: '30%', height: 30 / proporcional, fontSize: 16 / proporcional, color: 'white',
                                                background: 'transparent', fontWeight: 600, marginBottom: 5 / proporcional, textAlign: 'left'}}
                                                onClick={() => {navigate ('/nuestros-servicios/desarrollo-web'); window.scrollTo(0, 0)}}>Ver más</button>
                                            <div className='rounded' style={{width: '20%', height: 2 / proporcional, background: 'white'}}/>
                                        </div>  
                                </div>  
                                </div>  
                            </div>  
                        ) : null
                    }
                </div>
                <div className='position-relative' style={{width: '33%', height: 'auto'}} 
                        onMouseOver={() => setSeleccionServicio('ecommerce')} onMouseLeave={() => setSeleccionServicio('')}>
                    <div style={{width: '100%', height: 'auto', cursor: 'pointer'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 280 / proporcional}}>
                            <div className='rounded-circle' style={{width: 280 / proporcional, height: 280 / proporcional}}>
                                <img className='rounded-circle' src={servicios_ecommerce} style={{width: 280 / proporcional, height: 280 / proporcional}}/>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                            <p style={{fontSize: 22 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 800,
                                    color: 'rgb(22, 36, 65)', textAlign: 'center'}}>
                                Desarrollo de comercio electrónico (ecommerce)
                            </p>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 400,
                                    color: 'rgb(117, 117, 117)', textAlign: 'center'}}>
                                En un mundo donde las compras en línea son cada vez más comunes, tener una plataforma de comercio electrónico sólida y efectiva es fundamental para el éxito de tu negocio. En Developer Ideas, entendemos la importancia de una experiencia de compra en línea sin problemas y atractiva para tus clientes.
                            </p>
                        </div>
                    </div>
                    {
                        seleccion_servicio === 'ecommerce' ? (
                            <div className='position-absolute start-0 top-0 shadow rounded' style={{width: '100%', height: '100%', background: 'rgba(23, 43, 222, 0.8)'}}>
                                <div className='position-absolute start-50 top-50 translate-middle' style={{width: '100%', height: 'auto'}}> 
                                    <div style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 400,
                                                color: 'white'}}>
                                            Nuestro equipo de expertos en desarrollo de comercio electrónico está aquí para ayudarte a llevar tu negocio al siguiente nivel. Ya sea que estés empezando desde cero o buscando mejorar una tienda en línea existente, estamos aquí para convertir tus ideas en una plataforma de comercio electrónico exitosa y altamente rentable.
                                        </p>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, fontWeight: 400,
                                                color: 'white'}}>
                                            Nos enorgullece ofrecer soluciones personalizadas que se adapten perfectamente a las necesidades y objetivos únicos de tu negocio. Trabajamos en estrecha colaboración contigo para entender tus productos, tu mercado objetivo y tus metas comerciales, y desarrollamos una estrategia de comercio electrónico que te ayude a alcanzar el éxito.
                                        </p>
                                        <div style={{width: '100%', height: 'auto'}}>
                                            <button className='btn border-0' style={{width: '30%', height: 30 / proporcional, fontSize: 16 / proporcional, color: 'white',
                                                background: 'transparent', fontWeight: 600, marginBottom: 5 / proporcional, textAlign: 'left'}}
                                                onClick={() => {navigate ('/nuestros-servicios/desarrollo-ecommerce'); window.scrollTo(0, 0)}}>Ver más</button>
                                            <div className='rounded' style={{width: '20%', height: 2 / proporcional, background: 'white'}}/>
                                        </div>
                                    </div>  
                                </div>  
                            </div>  
                        ) : null
                    }
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <div className='position-relative' style={{width: '33%', height: 'auto'}} 
                        onMouseOver={() => setSeleccionServicio('moviles')} onMouseLeave={() => setSeleccionServicio('')}>
                    <div style={{width: '100%', height: 'auto', cursor: 'pointer'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 280 / proporcional}}>
                            <div className='rounded-circle' style={{width: 280 / proporcional, height: 280 / proporcional}}>
                                <img className='rounded-circle' src={servicios_moviles} style={{width: 280 / proporcional, height: 280 / proporcional}}/>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                            <p style={{fontSize: 22 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 800,
                                    color: 'rgb(22, 36, 65)', textAlign: 'center'}}>
                                Desarrollo aplicaciones móviles
                            </p>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 400,
                                    color: 'rgb(117, 117, 117)', textAlign: 'center'}}>
                                En un mundo cada vez más móvil, tener una aplicación móvil sólida y efectiva es fundamental para el éxito de tu negocio. En Developer Ideas, comprendemos la importancia de una experiencia de usuario móvil atractiva y funcional para tus clientes.
                            </p>
                        </div>
                    </div>
                    {
                        seleccion_servicio === 'moviles' ? (
                            <div className='position-absolute start-0 top-0 shadow rounded' style={{width: '100%', height: '100%', background: 'rgba(23, 43, 222, 0.8)'}}>
                                <div className='position-absolute start-50 top-50 translate-middle' style={{width: '100%', height: 'auto'}}> 
                                    <div style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 400,
                                                color: 'white'}}>
                                            Nuestro equipo de expertos en desarrollo de aplicaciones móviles está aquí para ayudarte a llevar tu negocio al siguiente nivel. Ya sea que estés buscando desarrollar una aplicación desde cero o mejorar una aplicación móvil existente, estamos aquí para convertir tus ideas en una aplicación móvil exitosa y altamente rentable.
                                        </p>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 400,
                                                color: 'white'}}>
                                            Nos enorgullece ofrecer soluciones personalizadas que se adapten perfectamente a las necesidades y objetivos únicos de tu negocio. Trabajamos en estrecha colaboración contigo para entender tus productos, tu mercado objetivo y tus metas comerciales, y desarrollamos una estrategia de desarrollo de aplicaciones móviles que te ayude a alcanzar el éxito.
                                        </p>
                                        <div style={{width: '100%', height: 'auto'}}>
                                            <button className='btn border-0' style={{width: '30%', height: 30 / proporcional, fontSize: 16 / proporcional, color: 'white',
                                                background: 'transparent', fontWeight: 600, marginBottom: 5 / proporcional, textAlign: 'left'}}
                                                onClick={() => {navigate ('/nuestros-servicios/aplicacion-movil'); window.scrollTo(0, 0)}}>Ver más</button>
                                            <div className='rounded' style={{width: '20%', height: 2 / proporcional, background: 'white'}}/>
                                        </div> 
                                    </div>  
                                </div>  
                            </div>  
                        ) : null
                    }
                </div>
                <div className='position-relative' style={{width: '33%', height: 'auto'}} 
                        onMouseOver={() => setSeleccionServicio('software')} onMouseLeave={() => setSeleccionServicio('')}>
                    <div style={{width: '100%', height: 'auto', cursor: 'pointer'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 280 / proporcional}}>
                            <div className='rounded-circle' style={{width: 280 / proporcional, height: 280 / proporcional}}>
                                <img className='rounded-circle' src={servicios_software} style={{width: 280 / proporcional, height: 280 / proporcional}}/>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                            <p style={{fontSize: 22 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 800,
                                    color: 'rgb(22, 36, 65)', textAlign: 'center'}}>
                                Desarrollo software
                            </p>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 400,
                                    color: 'rgb(117, 117, 117)', textAlign: 'center'}}>
                                En un mundo cada vez más impulsado por la tecnología, tener software sólido y efectivo es fundamental para el éxito de tu negocio. En Developer Ideas, entendemos la importancia de tener software que sea confiable, escalable y adaptable a tus necesidades comerciales únicas.
                            </p>
                        </div>
                    </div>
                    {
                        seleccion_servicio === 'software' ? (
                            <div className='position-absolute start-0 top-0 shadow rounded' style={{width: '100%', height: '100%', background: 'rgba(23, 43, 222, 0.8)'}}>
                                <div className='position-absolute start-50 top-50 translate-middle' style={{width: '100%', height: 'auto'}}> 
                                    <div style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 400,
                                                color: 'white'}}>
                                            Nuestro equipo de expertos en desarrollo de software está aquí para ayudarte a llevar tu negocio al siguiente nivel. Ya sea que estés buscando desarrollar un sistema de gestión empresarial personalizado, una aplicación de escritorio o una plataforma de software como servicio (SaaS), estamos aquí para convertir tus ideas en una realidad digital exitosa y altamente rentable.
                                        </p>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 400,
                                                color: 'white'}}>
                                            Desde la arquitectura del software hasta la funcionalidad del producto final, nos esforzamos por ofrecer una experiencia de usuario excepcional en cada paso del proceso de uso del software. Utilizamos las últimas tecnologías y prácticas de desarrollo de software para garantizar que tu software sea fácil de usar, seguro y compatible con una amplia gama de dispositivos y sistemas operativos.
                                        </p>
                                        <div style={{width: '100%', height: 'auto'}}>
                                            <button className='btn border-0' style={{width: '30%', height: 30 / proporcional, fontSize: 16 / proporcional, color: 'white',
                                                background: 'transparent', fontWeight: 600, marginBottom: 5 / proporcional, textAlign: 'left'}}
                                                onClick={() => {navigate ('/nuestros-servicios/desarrollo-software'); window.scrollTo(0, 0)}}>Ver más</button>
                                            <div className='rounded' style={{width: '20%', height: 2 / proporcional, background: 'white'}}/>
                                        </div> 
                                    </div>  
                                </div>  
                            </div>  
                        ) : null
                    }
                </div>
                <div className='position-relative' style={{width: '33%', height: 'auto'}} 
                        onMouseOver={() => setSeleccionServicio('marketing')} onMouseLeave={() => setSeleccionServicio('')}>
                    <div style={{width: '100%', height: 'auto', cursor: 'pointer'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 280 / proporcional}}>
                            <div className='rounded-circle' style={{width: 280 / proporcional, height: 280 / proporcional}}>
                                <img className='rounded-circle' src={servicios_marketing} style={{width: 280 / proporcional, height: 280 / proporcional}}/>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                            <p style={{fontSize: 22 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 800,
                                    color: 'rgb(22, 36, 65)', textAlign: 'center'}}>
                                Marketing digital
                            </p>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 400,
                                    color: 'rgb(117, 117, 117)', textAlign: 'center'}}>
                                En un mundo cada vez más digitalizado, tener una estrategia de marketing efectiva es fundamental para el éxito de tu negocio. En [Nombre de la Empresa], entendemos la importancia de llegar a tu audiencia objetivo de manera efectiva y maximizar el retorno de tu inversión en marketing.
                            </p>
                        </div>
                    </div>
                    {
                        seleccion_servicio === 'marketing' ? (
                            <div className='position-absolute start-0 top-0 shadow rounded' style={{width: '100%', height: '100%', background: 'rgba(23, 43, 222, 0.8)'}}>
                                <div className='position-absolute start-50 top-50 translate-middle' style={{width: '100%', height: 'auto'}}> 
                                    <div style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 400,
                                                color: 'white'}}>
                                            Nuestro equipo de expertos en marketing digital está aquí para ayudarte a llevar tu negocio al siguiente nivel. Ya sea que estés buscando mejorar tu presencia en línea, aumentar tus ventas o mejorar la participación de tu audiencia, estamos aquí para convertir tus objetivos de marketing en realidad.
                                        </p>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 400,
                                                color: 'white'}}>
                                            Desde la optimización de motores de búsqueda hasta la publicidad en redes sociales y más allá, nos esforzamos por ofrecer una estrategia de marketing integral que te ayude a destacarte en el competitivo panorama digital. Utilizamos las últimas tecnologías y mejores prácticas de marketing digital para garantizar que tu mensaje llegue a las personas adecuadas en el momento adecuado.
                                        </p>
                                        <div style={{width: '100%', height: 'auto'}}>
                                            <button className='btn border-0' style={{width: '30%', height: 30 / proporcional, fontSize: 16 / proporcional, color: 'white',
                                                background: 'transparent', fontWeight: 600, marginBottom: 5 / proporcional, textAlign: 'left'}}
                                                onClick={() => {navigate ('/nuestros-servicios/marketing-digital'); window.scrollTo(0, 0)}}>Ver más</button>
                                            <div className='rounded' style={{width: '20%', height: 2 / proporcional, background: 'white'}}/>
                                        </div> 
                                    </div>  
                                </div>  
                            </div>  
                        ) : null
                    }
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <div className='position-relative' style={{width: '33%', height: 'auto'}} 
                        onMouseOver={() => setSeleccionServicio('soporte')} onMouseLeave={() => setSeleccionServicio('')}>
                    <div style={{width: '100%', height: 'auto', cursor: 'pointer'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 280 / proporcional}}>
                            <div className='rounded-circle' style={{width: 280 / proporcional, height: 280 / proporcional}}>
                                <img className='rounded-circle' src={servicios_soporte} style={{width: 280 / proporcional, height: 280 / proporcional}}/>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                            <p style={{fontSize: 22 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 800,
                                    color: 'rgb(22, 36, 65)', textAlign: 'center'}}>
                                Soporte Técnico
                            </p>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 400,
                                    color: 'rgb(117, 117, 117)', textAlign: 'center'}}>
                                Nuestro equipo de soporte técnico altamente calificado está aquí para brindarte el apoyo que necesitas para mantener tu negocio en funcionamiento. Ya sea que enfrentes problemas con hardware, software, redes o seguridad, estamos aquí para ofrecerte soluciones rápidas y efectivas que minimicen el tiempo de inactividad y maximicen la productividad.
                            </p>
                        </div>
                    </div>
                    {
                        seleccion_servicio === 'soporte' ? (
                            <div className='position-absolute start-0 top-0 shadow rounded' style={{width: '100%', height: '100%', background: 'rgba(23, 43, 222, 0.8)'}}>
                                <div className='position-absolute start-50 top-50 translate-middle' style={{width: '100%', height: 'auto'}}> 
                                    <div style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 400,
                                                color: 'white'}}>
                                            Nos enorgullece ofrecer un enfoque centrado en el cliente en todo lo que hacemos. Trabajamos en estrecha colaboración contigo para comprender tus necesidades específicas y desarrollar soluciones personalizadas que se adapten perfectamente a tu negocio. Ya sea que necesites soporte técnico en sitio, remoto o por teléfono, estamos aquí para brindarte la ayuda que necesitas cuando la necesitas.
                                        </p>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 400,
                                                color: 'white'}}>
                                            Desde la resolución de problemas técnicos cotidianos hasta la implementación de soluciones de seguridad avanzadas, nos esforzamos por ofrecer un servicio excepcional en cada interacción. Nuestro objetivo es ofrecerte la tranquilidad y la seguridad que necesitas para poder concentrarte en lo que mejor sabes hacer: hacer crecer tu negocio.
                                        </p>
                                        <div style={{width: '100%', height: 'auto'}}>
                                            <button className='btn border-0' style={{width: '30%', height: 30 / proporcional, fontSize: 16 / proporcional, color: 'white',
                                                background: 'transparent', fontWeight: 600, marginBottom: 5 / proporcional, textAlign: 'left'}}
                                                onClick={() => {navigate ('/nuestros-servicios/soporte-tecnico'); window.scrollTo(0, 0)}}>Ver más</button>
                                            <div className='rounded' style={{width: '20%', height: 2 / proporcional, background: 'white'}}/>
                                        </div> 
                                    </div>  
                                </div>  
                            </div>  
                        ) : null
                    }
                </div>
                <div className='position-relative' style={{width: '33%', height: 'auto'}} 
                        onMouseOver={() => setSeleccionServicio('cloud')} onMouseLeave={() => setSeleccionServicio('')}>
                    <div style={{width: '100%', height: 'auto', cursor: 'pointer'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 280 / proporcional}}>
                            <div className='rounded-circle' style={{width: 280 / proporcional, height: 280 / proporcional}}>
                                <img className='rounded-circle' src={servicios_cloud} style={{width: 280 / proporcional, height: 280 / proporcional}}/>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                            <p style={{fontSize: 22 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 800,
                                    color: 'rgb(22, 36, 65)', textAlign: 'center'}}>
                                Colud services (en la nube)
                            </p>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, fontWeight: 400,
                                    color: 'rgb(117, 117, 117)', textAlign: 'center'}}>
                                En un mundo cada vez más conectado y dinámico, la tecnología en la nube se ha convertido en un pilar fundamental para empresas de todos los tamaños y sectores. En [Nombre de la Empresa], entendemos la importancia de aprovechar al máximo el potencial de la nube para impulsar la innovación, mejorar la eficiencia y aumentar la escalabilidad de tu negocio.
                            </p>
                        </div>
                    </div>
                    {
                        seleccion_servicio === 'cloud' ? (
                            <div className='position-absolute start-0 top-0 shadow rounded' style={{width: '100%', height: '100%', background: 'rgba(23, 43, 222, 0.8)'}}>
                                <div className='position-absolute start-50 top-50 translate-middle' style={{width: '100%', height: 'auto'}}> 
                                    <div style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 400,
                                                color: 'white'}}>
                                            Nuestros servicios en la nube están diseñados para proporcionarte la flexibilidad y la agilidad que necesitas para alcanzar tus objetivos comerciales. Desde el almacenamiento y la copia de seguridad hasta la infraestructura como servicio (IaaS) y el software como servicio (SaaS), ofrecemos soluciones completas que se adaptan a tus necesidades específicas y te permiten crecer sin límites.
                                        </p>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, fontWeight: 400,
                                                color: 'white'}}>
                                            Desde la consultoría inicial hasta la implementación y el soporte continuo, nos esforzamos por ofrecer un servicio excepcional en cada interacción. Nuestro objetivo es ofrecerte la tranquilidad y la seguridad que necesitas para poder concentrarte en lo que mejor sabes hacer: hacer crecer tu negocio.
                                        </p>
                                        <div style={{width: '100%', height: 'auto'}}>
                                            <button className='btn border-0' style={{width: '30%', height: 30 / proporcional, fontSize: 16 / proporcional, color: 'white',
                                                background: 'transparent', fontWeight: 600, marginBottom: 5 / proporcional, textAlign: 'left'}}
                                                onClick={() => {navigate ('/nuestros-servicios/servicios-nube'); window.scrollTo(0, 0)}}>Ver más</button>
                                            <div className='rounded' style={{width: '20%', height: 2 / proporcional, background: 'white'}}/>
                                        </div> 
                                    </div>  
                                </div>  
                            </div>  
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
} 