
type InitStatePropsType = {
    themeId: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeIdPropsType): InitStatePropsType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id};
        default:
            return state
    }
}


type ChangeThemeIdPropsType = {
    type: 'SET_THEME_ID'
    id: number
}
export const changeThemeId = (id: number): ChangeThemeIdPropsType => ({ type: 'SET_THEME_ID', id }) // fix any
