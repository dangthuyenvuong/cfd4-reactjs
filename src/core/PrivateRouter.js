import React, { useContext, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { Context } from '../App'
import { useAuth } from './hook/useAuth'

export default function PrivateRouter(props) {
    let auth = useAuth()
    let popupContext = useContext(Context)
    useEffect(() => {
        if (!auth.login) {
            popupContext.openPopupLogin();
        }
    }, [auth.login])

    if (auth.login) return <Route {...props} />


    return <div style={{ height: 500, display: 'flex' }}>
        <div style={{ margin: 'auto' }}>
            Bạn chưa đăng nhập để vào trang này
        </div>
    </div>;
}
