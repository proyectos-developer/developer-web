import { constantes } from "./constantes";

export const cotizacionConstants = (data = {}, reset = false, id = 0, nro_cotizacion) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        get_nro_cotizaciones: {
            path: `nrocotizaciones`,
            stateType: 'get_nro_cotizaciones',
            data: data
        },
        get_cotizacion: {
            path: `cotizacion/${id}/${nro_cotizacion}`,
            stateType: 'get_cotizacion',
            reset: reset
        },
        send_correo_cotizacion: {
            path: `correo/cotizacion`,
            stateType: 'send_correo_cotizacion',
            reset: reset,
            data: data
        },
    }
}