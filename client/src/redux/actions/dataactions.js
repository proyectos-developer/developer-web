export const datatypes = {
    SET_OPEN_SCREEN_SEARCH: 'SET_OPEN_SCREEN_SEARCH',
    SET_OPEN_MENU_PRINCIPAL: 'SET_OPEN_MENU_PRINCIPAL'
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