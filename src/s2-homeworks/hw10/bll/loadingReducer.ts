const initState: InitStateType = {
    isLoading: false
}

export type InitStateType = {
    isLoading: boolean
}

export const loadingReducer = (state: InitStateType = initState, action: LoadingActionType): InitStateType => {
    switch (action.type) {
        case 'CHANGE_LOADING' : {
            return {...state, isLoading: action.isLoading};
        }
        default:
            return state
    }
}

export type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
