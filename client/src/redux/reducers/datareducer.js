import { datatypes } from "../actions/dataactions";

const initialState = {
    open_screen_search: false,
    open_menu_principal: false,
    authenticated: false,
    message_suscripcion: {}
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
    }
    return state
}

export default datareducer