import { constantes } from "./constantes"

export const proyectosConstants = (id = 1, search = '', order_by = 0, order = 0, begin = 0, amount = 0, reset = false) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        get_proyectos: {
            path: `proyectos/search/${search}/tipo/${id}/order_by/${order_by}/${order}/${begin}/${amount}`,
            stateType: 'get_proyectos',
            reset: reset
        }, 
        get_proyecto: {
            path: `proyecto/${id}`,
            stateType: 'get_proyecto',
            reset: reset
        }
    }
}