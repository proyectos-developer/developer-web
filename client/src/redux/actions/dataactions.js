export const datatypes = {
    SET_OPEN_SCREEN_SEARCH: 'SET_OPEN_SCREEN_SEARCH'
}

export const set_open_screen_search = open_screen_search => {
    return {
        open_screen_search,
        type: datatypes.SET_OPEN_SCREEN_SEARCH
    }
}