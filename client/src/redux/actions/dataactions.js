export const datatypes = {
    SET_AUTHENTICATED:'SET_AUTHENTICATED',
    SET_OPEN_SCREEN_SEARCH: 'SET_OPEN_SCREEN_SEARCH',
    SET_OPEN_MENU_PRINCIPAL: 'SET_OPEN_MENU_PRINCIPAL',
    SET_MESSAGGE_SUSCRIPCION: 'SET_MESSAGGE_SUSCRIPCION',
    SET_OPCIONES_COTIZACIONES: 'SET_OPCIONES_COTIZACIONES',
    SET_COTIZACION_DOMHOST: 'SET_COTIZACION_DOMHOST',
    SET_COTIZACION_WEB: 'SET_COTIZACION_WEB',
    SET_COTIZACION_APP: 'SET_COTIZACION_APP',
    SET_COTIZACION_MARKETING: 'SET_COTIZACION_MARKETING'
}

export const set_open_screen_search = open_screen_search => {
    return {
        open_screen_search,
        type: datatypes.SET_OPEN_SCREEN_SEARCH
    }
}

export const set_open_menu_principal = open_menu_principal => {
    return {
        open_menu_principal,
        type: datatypes.SET_OPEN_MENU_PRINCIPAL
    }
}

export const set_authenticated = authenticated => {
    return {
        authenticated,
        type: datatypes.SET_AUTHENTICATED
    }
}

export const set_message_suscripcion = message_suscripcion => {
    return {
        message_suscripcion,
        type: datatypes.SET_MESSAGGE_SUSCRIPCION
    }
}

export const set_opciones_cotizaciones = opciones_cotizaciones => {
    return {
        opciones_cotizaciones,
        type: datatypes.SET_OPCIONES_COTIZACIONES
    }
}

export const set_cotizacion_domhost = cotizacion_domhost => {
    return {
        cotizacion_domhost,
        type: datatypes.SET_COTIZACION_DOMHOST
    }
}

export const set_cotizacion_web = cotizacion_web => {
    return {
        cotizacion_web,
        type: datatypes.SET_COTIZACION_WEB
    }
}

export const set_cotizacion_app = cotizacion_app => {
    return {
        cotizacion_app,
        type: datatypes.SET_COTIZACION_APP
    }
}

export const set_cotizacion_marketing = cotizacion_marketing => {
    return {
        cotizacion_marketing,
        type: datatypes.SET_COTIZACION_MARKETING
    }
}