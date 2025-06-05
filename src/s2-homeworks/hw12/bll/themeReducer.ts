const initState: InitThemeStateType = {
    themeId: 1,
}

type InitThemeStateType = {
    themeId: number
}

export const themeReducer = (state: InitThemeStateType = initState, action: ChangeThemeIdType): InitThemeStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID' : {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

type ChangeThemeIdType = {
    type: 'SET_THEME_ID'
    id: number
}

export const changeThemeId = (id: number): ChangeThemeIdType => ({type: 'SET_THEME_ID', id})// fix any
