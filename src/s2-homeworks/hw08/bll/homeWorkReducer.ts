import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const sorted = [...state].sort((a, b) => {
                if (action.payload === 'up') {
                    return a.name.localeCompare(b.name); // Сортировка по возрастанию
                } else {
                    return b.name.localeCompare(a.name); // Сортировка по убыванию
                }
            });
            return sorted;
        }
        case 'check': {
            return state.filter(user => user.age >= action.payload);
        }
        default:
            return state
    }
}