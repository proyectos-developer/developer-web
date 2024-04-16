import React, { useEffect, useState } from 'react'

import {useLocation} from 'react-router-dom'

import image_consultoria_digital from '../../assets/images/vector_consultoria_digital_600.png'
import image_diseño_web from '../../assets/images/vector_desarrollo_web_600.png'
import image_aplicacion_movil from '../../assets/images/vector_aplicacion_movil_600.png'
import image_desarrollo_ecommerce from '../../assets/images/vector_desarrollo_ecommerce_600.png'
import image_desarrollo_software from '../../assets/images/vector_desarrollo_software_600.png'
import image_marketing_digital from '../../assets/images/vector_marketing_digital_600.png'
import image_soporte_tecnico from '../../assets/images/vector_soporte_tecnico_600.png'
import image_cloud from '../../assets/images/vector_cloud_600.png'

export default function ServicioTablet({proporcional}) {

    const location = useLocation ()

    const [servicio, setServicio] = useState('')

    useEffect(() => {
        setServicio(location.pathname.split('/')[2])
    }, [location.pathname.split('/')[2]])

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 120 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 60 / proporcional,
                paddingRight: 60 / proporcional}}>
            <div style={{width: '100%', height: 'auto'}}>
                {
                    servicio === 'desarrollo-web' ? (
                        <div style={{width: '100%', height: 'auto'}}>
                            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <div style={{width: '49%', height: 'auto'}}>
                                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                        <img className='' src={image_diseño_web} style={{width: '90%', height: '90%', borderRadius: 8 / proporcional}}/>                                            
                                    </div>
                                </div>
                                <div style={{width: '49%', height: '100%'}}>
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 20 / proporcional,
                                                textAlign: '', color: '#212121'}}>
                                            Desarrollamos tu página web
                                        </p>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                                textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                            ¡Bienvenido a Developer Ideas! Somos tu socio confiable en el mundo digital, especializados en ofrecer soluciones tecnológicas innovadoras y servicios de desarrollo web de primera clase.<br/>
                                        </p>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                                textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                            En un mundo cada vez más digitalizado, la presencia en línea es crucial para el éxito de cualquier negocio. En Developer Ideas, comprendemos la importancia de tener un sitio web profesional, atractivo y funcional que refleje la identidad de tu marca y<br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                <div style={{width: '98%', height: 'auto', marginLeft: '2%'}}>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        atraiga a tu audiencia objetivo.<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        Nuestro equipo de expertos en desarrollo web combina creatividad, experiencia técnica y atención al detalle para crear sitios web personalizados que destacan en el competitivo panorama digital. Ya sea que necesites un sitio web corporativo, una tienda en línea, una plataforma de comercio electrónico o una aplicación web, estamos aquí para convertir tus ideas en realidad.<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        Nos enorgullece ofrecer un enfoque centrado en el cliente en todo lo que hacemos. Trabajamos en estrecha colaboración contigo<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        para comprender tus necesidades y objetivos comerciales, y desarrollar una estrategia de desarrollo web que se alinee perfectamente con tus metas y valores.<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                                Desde el diseño visual hasta la funcionalidad del sitio, nos esforzamos por ofrecer una experiencia de usuario excepcional en cada paso del camino. Utilizamos las últimas tecnologías y prácticas de desarrollo web para garantizar que tu sitio no solo sea atractivo y fácil de usar, sino también rápido, seguro y optimizado para SEO.<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        En Developer Ideas, estamos comprometidos con tu éxito en línea. Ya sea que estés lanzando un nuevo negocio o buscando mejorar tu presencia en línea existente, estamos aquí para ayudarte a alcanzar tus objetivos. ¡Contáctanos hoy mismo para empezar tu viaje hacia un sitio web espectacular y efectivo!<br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : servicio === 'desarrollo-ecommerce' ? (
                        <div style={{width: '100%', height: 'auto'}}>
                            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <div style={{width: '49%', height: 'auto'}}>
                                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                        <img className='' src={image_desarrollo_ecommerce} style={{width: '90%', height: '90%', borderRadius: 8 / proporcional}}/>                                            
                                    </div>
                                </div>
                                <div style={{width: '49%', height: '100%'}}>
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 20 / proporcional,
                                                textAlign: '', color: '#212121'}}>
                                            Desarrollo comercio electrónico <br/>(e-commerce)
                                        </p>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                                textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>¡Bienvenido a Developer Ideas! Somos tu socio confiable en el mundo digital, especializados en ofrecer soluciones tecnológicas innovadoras y servicios de desarrollo de comercio electrónico de primer nivel.<br/>
                                        </p>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                                textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>En un mundo donde las compras en línea son cada vez más comunes, tener una plataforma de comercio electrónico sólida y<br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                <div style={{width: '98%', height: 'auto', marginLeft: '2%'}}>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>efectiva es fundamental para el éxito de tu negocio. En Developer Ideas, entendemos la importancia de una experiencia de compra en línea sin problemas y atractiva para tus clientes.<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>Nuestro equipo de expertos en desarrollo de comercio electrónico está aquí para ayudarte a llevar tu negocio al siguiente nivel. Ya sea que estés empezando desde cero o buscando mejorar una tienda en línea existente, estamos aquí para convertir tus ideas en una plataforma de comercio electrónico exitosa y altamente rentable.<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        Nos enorgullece ofrecer soluciones personalizadas que se adapten perfectamente a las necesidades y objetivos únicos de<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        tu negocio. Trabajamos en estrecha colaboración contigo para entender tus productos, tu mercado objetivo y tus metas comerciales, y desarrollamos una estrategia de comercio electrónico que te ayude a alcanzar el éxito.<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        Desde el diseño visual hasta la funcionalidad del sitio, nos esforzamos por ofrecer una experiencia de usuario excepcional en cada paso del proceso de compra. Utilizamos las últimas tecnologías y prácticas de desarrollo de comercio electrónico para garantizar que tu tienda en línea sea fácil de usar, segura y optimizada para SEO.<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        En Developer Ideas, estamos comprometidos con tu éxito en el mundo del comercio electrónico. Ya sea que estés vendiendo productos físicos o digitales, estamos aquí para ayudarte a maximizar tus ventas y hacer crecer tu negocio en línea. ¡Contáctanos hoy mismo para empezar tu viaje hacia un comercio electrónico exitoso y lucrativo!<br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : servicio === 'aplicacion-movil' ? (
                        <div style={{width: '100%', height: 'auto'}}>
                            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <div style={{width: '49%', height: 'auto'}}>
                                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                        <img className='' src={image_aplicacion_movil} style={{width: '90%', height: '90%', borderRadius: 8 / proporcional}}/>                                            
                                    </div>
                                </div>
                                <div style={{width: '49%', height: '100%'}}>
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 20 / proporcional,
                                                textAlign: '', color: '#212121'}}>
                                            Desarrollamos tu aplicación móvil.
                                        </p>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                                textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                            ¡Bienvenido a Developer Ideas! Somos tu socio confiable en el mundo digital, especializados en ofrecer soluciones tecnológicas innovadoras y servicios de desarrollo de aplicaciones móviles de primer nivel.<br/>
                                        </p>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                                textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                            En un mundo cada vez más móvil, tener una aplicación móvil sólida y efectiva es fundamental para el éxito de tu negocio. En Developer Ideas, comprendemos la importancia de una experiencia de usuario móvil atractiva y funcional para tus clientes.<br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                <div style={{width: '98%', height: 'auto', marginLeft: '2%'}}>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        Nuestro equipo de expertos en desarrollo de aplicaciones móviles está aquí para ayudarte a llevar tu negocio al siguiente nivel. Ya sea que estés buscando desarrollar una aplicación desde cero o mejorar una aplicación móvil existente, estamos aquí para convertir tus ideas en una aplicación móvil exitosa y altamente rentable.<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        Nos enorgullece ofrecer soluciones personalizadas que se adapten perfectamente a las necesidades y objetivos únicos de <br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        tu negocio. Trabajamos en estrecha colaboración contigo para entender tus productos, tu mercado objetivo y tus metas comerciales, y desarrollamos una estrategia de desarrollo de aplicaciones móviles que te ayude a alcanzar el éxito.<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        Desde el diseño visual hasta la funcionalidad de la aplicación, nos esforzamos por ofrecer una experiencia de usuario excepcional en cada paso del proceso de uso de la aplicación. Utilizamos las últimas tecnologías y prácticas de desarrollo de aplicaciones móviles para garantizar que tu aplicación sea fácil de usar, segura y compatible con una amplia gama de dispositivos móviles.<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        En Developer Ideas, estamos comprometidos con tu éxito en el mundo de las aplicaciones móviles. Ya sea que estés desarrollando una aplicación para iOS, Android o ambas plataformas, estamos aquí para ayudarte a maximizar tu alcance y hacer crecer tu negocio en el mercado móvil. ¡Contáctanos hoy mismo para empezar tu viaje hacia una aplicación móvil exitosa y lucrativa!<br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : servicio === 'desarrollo-software' ? (
                        <div style={{width: '100%', height: 'auto'}}>
                            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <div style={{width: '49%', height: 'auto'}}>
                                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                        <img className='' src={image_desarrollo_software} style={{width: '90%', height: '90%', borderRadius: 8 / proporcional}}/>                                            
                                    </div>
                                </div>
                                <div style={{width: '49%', height: '100%'}}>
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 20 / proporcional,
                                                textAlign: '', color: '#212121'}}>
                                            Desarrollamos el software que necesitas.
                                        </p>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                                textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                            ¡Bienvenido a Developer Ideas! Somos tu socio confiable en el mundo digital, especializados en ofrecer soluciones tecnológicas innovadoras y servicios de desarrollo de software de primer nivel.<br/>
                                        </p>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                                textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                            En un mundo cada vez más impulsado por la tecnología, tener software sólido y efectivo es fundamental para el éxito de tu negocio. En Developer Ideas, entendemos la importancia de tener software que sea confiable, escalable y adaptable a tus necesidades comerciales únicas.<br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                <div style={{width: '98%', height: 'auto', marginLeft: '2%'}}>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        Nuestro equipo de expertos en desarrollo de software está aquí para ayudarte a llevar tu negocio al siguiente nivel. Ya sea que estés buscando desarrollar un sistema de gestión empresarial personalizado, una aplicación de escritorio o una plataforma de software como servicio (SaaS), estamos aquí para convertir tus ideas en una realidad digital exitosa y altamente rentable.<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        Nos enorgullece ofrecer soluciones personalizadas que se adapten perfectamente a las necesidades y objetivos únicos de tu negocio. Trabajamos en estrecha colaboración contigo para entender tus procesos comerciales, tus desafíos y tus metas, y<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        desarrollamos una estrategia de desarrollo de software que te ayude a alcanzar el éxito.<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        Desde la arquitectura del software hasta la funcionalidad del producto final, nos esforzamos por ofrecer una experiencia de usuario excepcional en cada paso del proceso de uso del software. Utilizamos las últimas tecnologías y prácticas de desarrollo de software para garantizar que tu software sea fácil de usar, seguro y compatible con una amplia gama de dispositivos y sistemas operativos.<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        En Developer Ideas, estamos comprometidos con tu éxito en el mundo del desarrollo de software. Ya sea que necesites una solución empresarial a gran escala o una aplicación de software personalizada, estamos aquí para ayudarte a maximizar la eficiencia, reducir los costos y hacer crecer tu negocio en el mundo digital. ¡Contáctanos hoy mismo para empezar tu viaje hacia un software exitoso y lucrativo!<br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : servicio === 'marketing-digital' ? (
                        <div style={{width: '100%', height: 'auto'}}>
                            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <div style={{width: '49%', height: 'auto'}}>
                                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                        <img className='' src={image_marketing_digital} style={{width: '90%', height: '90%', borderRadius: 8 / proporcional}}/>                                            
                                    </div>
                                </div>
                                <div style={{width: '49%', height: '100%'}}>
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 20 / proporcional,
                                                textAlign: '', color: '#212121'}}>
                                            Marketing digital.
                                        </p>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                                textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                            ¡Bienvenido a Developer Ideas! Somos tu socio confiable en el mundo digital, especializados en ofrecer soluciones tecnológicas innovadoras y servicios de marketing digital de primer nivel.<br/>
                                        </p>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                                textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                            En un mundo cada vez más digitalizado, tener una estrategia de marketing efectiva es fundamental para el éxito de tu negocio. En Developer Ideas, entendemos la importancia de llegar a tu audiencia objetivo de manera efectiva y maximizar el retorno de tu inversión en marketing.<br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                <div style={{width: '98%', height: 'auto', marginLeft: '2%'}}>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        Nuestro equipo de expertos en marketing digital está aquí para ayudarte a llevar tu negocio al siguiente nivel. Ya sea que estés buscando mejorar tu presencia en línea, aumentar tus ventas o mejorar la participación de tu audiencia, estamos aquí para convertir tus objetivos de marketing en realidad.<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        Nos enorgullece ofrecer soluciones personalizadas que se adapten perfectamente a las necesidades y objetivos únicos de tu negocio. Trabajamos en estrecha colaboración contigo para entender tu marca, tu mercado objetivo y tus metas comerciales, y desarrollamos una estrategia de marketing digital que te ayude a alcanzar el éxito.<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        Desde la optimización de motores de búsqueda hasta la publicidad en redes sociales y más allá, nos esforzamos por ofrecer una estrategia de marketing integral que te ayude a destacarte en el competitivo panorama digital. Utilizamos las últimas tecnologías y mejores prácticas de marketing digital para garantizar que tu mensaje llegue a las personas adecuadas en el momento adecuado.<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        En Developer Ideas, estamos comprometidos con tu éxito en el mundo del marketing digital. Ya sea que estés buscando aumentar la conciencia de tu marca, generar clientes potenciales o aumentar las conversiones, estamos aquí para ayudarte a alcanzar tus metas de marketing. ¡Contáctanos hoy mismo para empezar tu viaje hacia un marketing digital exitoso y lucrativo!<br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : servicio === 'consultoria-digital' ? (
                        <div style={{width: '100%', height: 'auto'}}>
                            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <div style={{width: '49%', height: 'auto'}}>
                                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                        <img className='' src={image_consultoria_digital} style={{width: '90%', height: '90%', borderRadius: 8 / proporcional}}/>                                            
                                    </div>
                                </div>
                                <div style={{width: '49%', height: '100%'}}>
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 20 / proporcional,
                                                textAlign: '', color: '#212121'}}>
                                            Ofrecemos consultoría digital.
                                        </p>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                                textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                            ¡Bienvenido a Developer Ideas! Somos tu socio confiable en el mundo digital, especializados en ofrecer servicios de consultoría digital y soluciones tecnológicas innovadoras.<br/>
                                        </p>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                                textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                            En un mundo cada vez más complejo y digitalizado, entender cómo aprovechar al máximo la tecnología es fundamental para el éxito de cualquier negocio. En Developer Ideas, entendemos la importancia de tener una estrategia digital sólida y efectiva que te<br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                <div style={{width: '98%', height: 'auto', marginLeft: '2%'}}>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        permita alcanzar tus objetivos comerciales.<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        Nuestro equipo de expertos en consultoría digital está aquí para ayudarte a navegar por el mundo digital y aprovechar al máximo las oportunidades que ofrece. Ya sea que estés buscando mejorar tu presencia en línea, optimizar tus procesos comerciales o implementar nuevas tecnologías, estamos aquí para ayudarte a convertir tus objetivos digitales en realidad.<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        Nos enorgullece ofrecer soluciones personalizadas que se adapten perfectamente a las necesidades y objetivos únicos de tu negocio. Trabajamos en estrecha colaboración contigo para entender tu negocio, tu mercado objetivo y tus desafíos, y desarrollamos una estrategia de consultoría digital que te ayude a alcanzar el éxito.<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        Desde la auditoría de tu presencia en línea hasta la creación de una estrategia digital integral, nos esforzamos por ofrecer recomendaciones claras y prácticas que te ayuden a alcanzar tus metas comerciales. Utilizamos las últimas tecnologías y mejores prácticas en consultoría digital para garantizar que estés bien posicionado para competir en el mercado digital actual.<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        En Developer Ideas, estamos comprometidos con tu éxito en el mundo de la consultoría digital. Ya sea que estés buscando aumentar tus ventas, mejorar la eficiencia de tus operaciones o expandir tu presencia en línea, estamos aquí para ayudarte a alcanzar tus metas digitales. ¡Contáctanos hoy mismo para empezar tu viaje hacia una consultoría digital exitosa y lucrativa!<br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )  : servicio === 'soporte-tecnico' ? (
                        <div style={{width: '100%', height: 'auto'}}>
                            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <div style={{width: '49%', height: 'auto'}}>
                                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                        <img className='' src={image_soporte_tecnico} style={{width: '90%', height: '90%', borderRadius: 8 / proporcional}}/>                                            
                                    </div>
                                </div>
                                <div style={{width: '49%', height: '100%'}}>
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 20 / proporcional,
                                                textAlign: '', color: '#212121'}}>
                                            Ofrecemos soporte técnico.
                                        </p>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                                textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                            ¡Bienvenido a Developer Idea! Somos tu socio confiable en el mundo digital, especializados en ofrecer servicios de soporte técnico y soluciones tecnológicas para garantizar el funcionamiento sin problemas de tu negocio.<br/>
                                        </p>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                                textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                            En un mundo cada vez más dependiente de la tecnología, es crucial contar con un equipo confiable de expertos en soporte técnico que esté siempre disponible para resolver cualquier problema que surja. En<br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                <div style={{width: '98%', height: 'auto', marginLeft: '2%'}}>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        Developer Idea, comprendemos la importancia de mantener tu infraestructura tecnológica en óptimas condiciones para garantizar la continuidad del negocio.<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        Nuestro equipo de soporte técnico altamente calificado está aquí para brindarte el apoyo que necesitas para mantener tu negocio en funcionamiento. Ya sea que enfrentes problemas con hardware, software, redes o seguridad, estamos aquí para ofrecerte soluciones rápidas y efectivas que minimicen el tiempo de inactividad y maximicen la productividad.<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        Nos enorgullece ofrecer un enfoque centrado en el cliente en todo lo que hacemos. Trabajamos en estrecha colaboración contigo para comprender tus necesidades específicas y desarrollar soluciones personalizadas que se adapten<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        perfectamente a tu negocio. Ya sea que necesites soporte técnico en sitio, remoto o por teléfono, estamos aquí para brindarte la ayuda que necesitas cuando la necesitas.<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        En Developer Idea, estamos comprometidos con tu éxito y estamos aquí para ayudarte a superar cualquier desafío tecnológico que se te presente. ¡Contáctanos hoy mismo para empezar a disfrutar de un soporte técnico de primer nivel que te permita llevar tu negocio al siguiente nivel!<br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )  : servicio === 'servicios-nube' ? (
                        <div style={{width: '100%', height: 'auto'}}>
                            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <div style={{width: '49%', height: 'auto'}}>
                                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                        <img className='' src={image_cloud} style={{width: '90%', height: '90%', borderRadius: 8 / proporcional}}/>                                            
                                    </div>
                                </div>
                                <div style={{width: '49%', height: '100%'}}>
                                    <div style={{width: '100%', height: 'auto'}}>
                                        <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 800, fontFamily: 'Montserrat', marginBottom: 20 / proporcional,
                                                textAlign: '', color: '#212121'}}>
                                            Ofrecemos servicios en la nube <br/>(Cloud service).
                                        </p>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                                textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                            ¡Bienvenido a Developer Ideas! Somos líderes en soluciones tecnológicas basadas en la nube, ofreciendo una amplia gama de servicios diseñados para potenciar tu negocio en el entorno digital.<br/>
                                        </p>
                                        <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                                textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                            En un mundo cada vez más conectado y dinámico, la tecnología en la nube se ha convertido en un pilar fundamental para empresas de todos los tamaños y sectores. <br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                <div style={{width: '98%', height: 'auto', marginLeft: '2%'}}>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        En Developer Ideas, entendemos la importancia de aprovechar al máximo el potencial de la nube para impulsar la innovación, mejorar la eficiencia y aumentar la escalabilidad de tu negocio.<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        Nuestros servicios en la nube están diseñados para proporcionarte la flexibilidad y la agilidad que necesitas para alcanzar tus objetivos comerciales. Desde el almacenamiento y la copia de seguridad hasta la infraestructura como servicio (IaaS) y el software como servicio (SaaS), ofrecemos soluciones completas que se adaptan a tus necesidades específicas y te permiten crecer sin límites.<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        Nos enorgullece ofrecer un enfoque centrado en el cliente en<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        todo lo que hacemos. Trabajamos en todo lo que hacemos. Trabajamos en estrecha colaboración contigo para entender tus desafíos y metas comerciales, y desarrollamos soluciones personalizadas que maximizan el valor de la nube para tu negocio. Ya sea que estés buscando migrar a la nube, optimizar tus operaciones existentes o implementar nuevas soluciones en la nube, estamos aquí para ayudarte en cada paso del camino.<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        Desde la consultoría inicial hasta la implementación y el soporte continuo, nos esforzamos por ofrecer un servicio excepcional en cada interacción. Nuestro objetivo es ofrecerte la tranquilidad y la seguridad que necesitas para poder concentrarte en lo que mejor sabes hacer: hacer crecer tu negocio.<br/>
                                    </p>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, fontWeight: 500, fontFamily: 'Montserrat', marginBottom: 10 / proporcional,
                                            textAlign: '', color: 'rgba(39, 39, 39, 0.8)'}}>
                                        En Developer Ideas, estamos comprometidos con tu éxito en el mundo de la nube. Ya sea que estés buscando mejorar la eficiencia, reducir los costos o aumentar la innovación, estamos aquí para ayudarte a aprovechar al máximo el poder de la nube. ¡Contáctanos hoy mismo para empezar a disfrutar de los beneficios de nuestros servicios en la nube y llevar tu negocio al siguiente nivel!<br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : null
                }
            </div>            
        </div>
    )
}