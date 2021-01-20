import React from 'react'
import Menu from './components/Menu'
import Course from './components/Course'
import Project from './components/Project'
import Payment from './components/Payment'
import Coin from './components/Coin'
import Info from './components/Info'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import { useAuth } from '../../core/hook/useAuth'


// FunctionComponent
export default function Profile() {

    let login = true;

    let { path } = useRouteMatch()
    let auth = useAuth()


    if (!login) return <Redirect to="/" />


    return (
        <main className="profile" id="main">
            <section>
                <div className="top-info">
                    <div className="avatar">
                        {/* <span class="text">H</span> */}
                        <img src="/img/avatar-lg.png" alt="" />
                        <div className="camera" />
                    </div>
                    <div className="name">{auth.login.name}</div>
                    <p className="des">Thành viên của team CFD1-OFFLINE</p>
                </div>
                <div className="container">
                    <div className="tab">
                        <Menu />
                        <div className="tab-content">
                            <Switch>
                                <Route path={`${path}/khoa-hoc`}><Course /></Route>
                                <Route path={`${path}/du-an`}><Project /></Route>
                                <Route path={`${path}/lich-su-thanh-toan`}><Payment /></Route>
                                <Route path={`${path}/coin`}><Coin /></Route>
                                <Route><Info /></Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}


// ClassComponent
class Profile2 extends React.Component {

}