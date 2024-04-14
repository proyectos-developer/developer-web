import { datatypes } from "../actions/dataactions";

const initialState = {
    open_screen_search: false,
    open_menu_principal: false,
    authenticated: false,
    message_suscripcion: {},
    opciones_cotizaciones: {},
    cotizacion_domhost: [],
    cotizacion_web: [],
    cotizacion_app: [],
    cotizacion_marketing: [],
    cotizacion_software: [],
    cotizacion_cloud: []
}

const datareducer = (state = initialState, action) => {
    if (action.type === datatypes.SET_OPEN_SCREEN_SEARCH){
        const open_screen_search = action.open_screen_search
        return {
            ... state,
            open_screen_search
        }
    }else  if (action.type === datatypes.SET_OPEN_MENU_PRINCIPAL){
        const open_menu_principal = action.open_menu_principal
        return {
            ... state,
            open_menu_principal
        }
    }else  if (action.type === datatypes.SET_AUTHENTICATED){
        const authenticated = action.authenticated
        return {
            ... state,
            authenticated
        }
    }else  if (action.type === datatypes.SET_MESSAGGE_SUSCRIPCION){
        const message_suscripcion = action.message_suscripcion
        return {
            ... state,
            message_suscripcion
        }
    }else  if (action.type === datatypes.SET_OPCIONES_COTIZACIONES){
        const opciones_cotizaciones = action.opciones_cotizaciones
        return {
            ... state,
            opciones_cotizaciones
        }
    }else  if (action.type === datatypes.SET_COTIZACION_DOMHOST){
        const cotizacion_domhost = action.cotizacion_domhost
        return {
            ... state,
            cotizacion_domhost
        }
    }else  if (action.type === datatypes.SET_COTIZACION_WEB){
        const cotizacion_web = action.cotizacion_web
        return {
            ... state,
            cotizacion_web
        }
    }else  if (action.type === datatypes.SET_COTIZACION_APP){
        const cotizacion_app = action.cotizacion_app
        return {
            ... state,
            cotizacion_app
        }
    }else  if (action.type === datatypes.SET_COTIZACION_MARKETING){
        const cotizacion_marketing = action.cotizacion_marketing
        return {
            ... state,
            cotizacion_marketing
        }
    }else  if (action.type === datatypes.SET_COTIZACION_SOFTWARE){
        const cotizacion_software = action.cotizacion_software
        return {
            ... state,
            cotizacion_software
        }
    }else  if (action.type === datatypes.SET_COTIZACION_CLOUD){
        const cotizacion_cloud = action.cotizacion_cloud
        return {
            ... state,
            cotizacion_cloud
        }
    }
    return state
}

export default datareducer