import React, { useContext } from 'react'
import {
    BrowserRouter, useHistory,
} from 'react-router-dom'
import Loading from './Loading';




import store from '../redux/store'
import { Provider } from 'react-redux'

export const Context = React.createContext({});

let $ = window.$

function AppProvider({ children, value }) {

    let history = useHistory();
    function delayLink(e) {
        e.preventDefault();
        let payloading = document.querySelector('.pageLoading');
        let div = payloading.querySelector('.loading')

        let href = e.currentTarget?.href?.replace(window.location.origin, '');
        let scale = Math.sqrt(Math.pow(window.outerHeight, 2) + Math.pow(window.outerWidth, 2)) / 100 * 2
        div.style.transform = `translate(-50%, -50%) scale(${scale})`
        div.style.left = `${e.clientX}px`
        div.style.top = `${e.clientY}px`
        setTimeout(() => {
            history.push(href || '/')
            $('.overlay_nav').trigger('click')
        }, 300)
        setTimeout(() => {
            div.style.transform = `translate(-50%, -50%) scale(${0})`
        }, 600)
    }

    return (
        <Provider store={store} >
            <Context.Provider value={{ ...value, delayLink }}>
                <Loading />
                {children}
            </Context.Provider>
        </Provider>

    )
}

export default (props) => {
    return <BrowserRouter>
        <AppProvider {...props} />
    </BrowserRouter>
}


export function useDelayLink() {
    return useContext(Context).delayLink
}

export function useAppContext() {
    return useContext(Context);
}