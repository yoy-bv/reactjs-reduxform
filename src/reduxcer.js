import {ADD_CLICK_REQUEST, LOGIN_REQUEST} from './actions'

const initialState = {
    user: {
        email: '',
        password: ''
    },
    arr : ['Lincoln', 'Jon', 'Harry', 'Maria'],
}
export const ccred =  (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_CLICK_REQUEST:
            return {
                ...state, arr: [...state.arr, action.payload.name]
            }
        case LOGIN_REQUEST:
            return {
                user: {
                    name: action.payload.email,
                    password: action.payload.password
                }
            }
        default:
            return state
    }
}
