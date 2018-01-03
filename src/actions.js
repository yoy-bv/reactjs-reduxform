export const ADD_CLICK_REQUEST = 'ADD_CLICK_REQUEST'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'

export const addclickrequest = (name) => {
    return {
        type: ADD_CLICK_REQUEST,
        payload: {name}
    }
}
export const loginrequest = (email, password) => {
    console.log('ccccccccccccccccc');
    console.log(email);
    return {
        type: LOGIN_REQUEST,
        payload: {email, password}
    }
}
