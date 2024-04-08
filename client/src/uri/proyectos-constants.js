import { constantes } from "./constantes"

export const proyectosConstants = (id = 1, search = '', reset = false) => {
    return {
        url: `${constantes().url_principal[0].url}`,
        get_proyectos: {
            path: `proyectos/search/${search}/tipo/${id}`,
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