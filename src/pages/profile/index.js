import React from 'react'
import Menu from './components/Menu'
import Course from './components/Course'
import Project from './components/Project'
import Payment from './components/Payment'
import Coin from './components/Coin'
import Info from './components/Info'
import { Redirect, Route, Switch } from 'react-router-dom'

export default function Profile() {

    let login = true;


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
                    <div className="name">trần nghĩa</div>
                    <p className="des">Thành viên của team CFD1-OFFLINE</p>
                </div>
                <div className="container">
                    <div className="tab">
                        <Menu />
                        <div className="tab-content">
                            <Switch>
                                <Route path="/thong-tin-ca-nhan/khoa-hoc"><Course /></Route>
                                <Route path="/thong-tin-ca-nhan/du-an"><Project /></Route>
                                <Route path="/thong-tin-ca-nhan/lich-su-thanh-toan"><Payment /></Route>
                                <Route path="/thong-tin-ca-nhan/coin"><Coin /></Route>
                                <Route><Info /></Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
