import { datatypes } from "../actions/dataactions";

const initialState = {
    open_screen_search: false
}

const datareducer = (state = initialState, action) => {
    if (action.type === datatypes.SET_OPEN_SCREEN_SEARCH){
        const open_screen_search = action.open_screen_search
        return {
            ... state,
            open_screen_search
        }
    }
    return state
}

export default datareducer