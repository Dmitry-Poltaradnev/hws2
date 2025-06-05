const initState: InitStateType = {
    loading: {
        isLoading: false
    }
}

export type InitStateType = {
    loading: LoadingType
}

type LoadingType = {
    isLoading: boolean,
}

export const loadingReducer = (state: InitStateType = initState, action: LoadingActionType): InitStateType => {
    // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING' : {
            return {...state, loading: {...state.loading, isLoading: action.isLoading}};
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
