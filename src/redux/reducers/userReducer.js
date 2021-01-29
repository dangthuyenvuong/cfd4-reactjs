import { USER } from "../actions/type";
let loginStore = null

try {
    loginStore = JSON.parse(localStorage.getItem('login'))
} catch (err) {

}


let initState = {
    login: loginStore
}


export function addToken(data) {
    localStorage.setItem('token', JSON.stringify(data))
}

export function getToken() {
    let token = JSON.parse(localStorage.getItem('token'))
    return token.accessToken
}



export default function userReducer(state = initState, action) {
    switch (action.type) {
        case USER.LOGIN:
            localStorage.setItem('login', JSON.stringify(action.payload))
            addToken(action.payload.token)
            return {
                ...state,
                login: action.payload
            }
        default:
            return state
    }
}