import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'


const Context = React.createContext({})

let loginStore = null

try {
    loginStore = JSON.parse(localStorage.getItem('login'))
} catch (err) {

}

export default function AuthProvider({ children }) {

    let [login, setLogin] = useState(loginStore)

    function loginAction(data) {
        if (data) {
            if (data.token) {
                addToken(data.token)
            }
            localStorage.setItem('login', JSON.stringify(data))
            setLogin(data)
        }
    }


    function logout() {
        localStorage.removeItem('login')
        setLogin(null)
        return false;
    }



    return <Context.Provider value={{ login, loginAction, logout }}>{children}</Context.Provider>
}

export function useAuth() {
    // return useContext(Context)

    let user = useSelector(state => state.user);

    return user;
}

export function addToken(data) {
    localStorage.setItem('token', JSON.stringify(data))
}

export function getToken() {
    let token = JSON.parse(localStorage.getItem('token'))
    return token.accessToken
}