import { constantes } from "./constantes"

export const correoConstants = (data = {}, reset = false) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        send_mensaje_web: {
            path: `correo/mensaje/web`,
            stateType: 'send_mensaje_web',
            reset: reset,
            data: data
        }, 
        send_cotizacion_web: {
            path: 'correo/cotizacion',
            stateType: 'send_cotizacion_web',
            reset: reset,
            data: data
        }
    }
}