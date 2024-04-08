import { datatypes } from "../actions/dataactions";

const initialState = {
    open_screen_search: false,
    open_menu_principal: false
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
    }
    return state
}

export default datareducer