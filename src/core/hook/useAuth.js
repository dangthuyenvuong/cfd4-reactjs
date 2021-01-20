import React, { useContext, useState } from 'react'


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
            localStorage.setItem('login', JSON.stringify(data))
            setLogin(data)
        }
    }


    function logout() {
        localStorage.removeItem('login')
        setLogin(null)
    }

    return <Context.Provider value={{ login, loginAction, logout }}>{children}</Context.Provider>
}

export function useAuth() {
    return useContext(Context)
}
